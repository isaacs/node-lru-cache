import t from 'tap'
import { LRUCache as LRU } from '../dist/esm/index.js'
import { LRUCache } from '../src/index.js'

t.test('disposal', t => {
  const disposed: any[] = []
  const c = new LRU({
    max: 5,
    dispose: (k, v, r) => disposed.push([k, v, r]),
  })
  for (let i = 0; i < 9; i++) {
    c.set(i, i)
  }
  t.strictSame(disposed, [
    [0, 0, 'evict'],
    [1, 1, 'evict'],
    [2, 2, 'evict'],
    [3, 3, 'evict'],
  ])
  t.equal(c.size, 5)

  c.set(9, 9)
  t.strictSame(disposed, [
    [0, 0, 'evict'],
    [1, 1, 'evict'],
    [2, 2, 'evict'],
    [3, 3, 'evict'],
    [4, 4, 'evict'],
  ])

  disposed.length = 0
  c.set('asdf', 'foo')
  c.set('asdf', 'asdf')
  t.strictSame(disposed, [
    [5, 5, 'evict'],
    ['foo', 'asdf', 'set'],
  ])

  disposed.length = 0
  for (let i = 0; i < 5; i++) {
    c.set(i, i)
  }
  t.strictSame(disposed, [
    [6, 6, 'evict'],
    [7, 7, 'evict'],
    [8, 8, 'evict'],
    [9, 9, 'evict'],
    ['asdf', 'asdf', 'evict'],
  ])

  // dispose both old and current
  disposed.length = 0
  c.set('asdf', 'foo')
  c.delete('asdf')
  t.strictSame(disposed, [
    [0, 0, 'evict'],
    ['foo', 'asdf', 'delete'],
  ])

  // delete non-existing key, no disposal
  disposed.length = 0
  c.delete('asdf')
  t.strictSame(disposed, [])

  // delete via clear()
  disposed.length = 0
  c.clear()
  t.strictSame(disposed, [
    [1, 1, 'delete'],
    [2, 2, 'delete'],
    [3, 3, 'delete'],
    [4, 4, 'delete'],
  ])

  disposed.length = 0
  c.set(3, 3)
  t.equal(c.get(3), 3)
  c.delete(3)
  t.strictSame(disposed, [[3, 3, 'delete']])

  // disposed because of being overwritten
  c.clear()
  disposed.length = 0
  for (let i = 0; i < 5; i++) {
    c.set(i, i)
  }
  c.set(2, 'two')
  t.strictSame(disposed, [[2, 2, 'set']])
  for (let i = 0; i < 5; i++) {
    t.equal(c.get(i), i === 2 ? 'two' : i)
  }
  t.strictSame(disposed, [[2, 2, 'set']])

  c.noDisposeOnSet = true
  c.clear()
  disposed.length = 0
  for (let i = 0; i < 5; i++) {
    c.set(i, i)
  }
  c.set(2, 'two')
  for (let i = 0; i < 5; i++) {
    t.equal(c.get(i), i === 2 ? 'two' : i)
  }
  t.strictSame(disposed, [])

  t.end()
})

t.test('noDisposeOnSet with delete()', t => {
  const disposed: [any, any][] = []
  const dispose = (v: any, k: any) => disposed.push([v, k])

  const c = new LRU({ max: 5, dispose, noDisposeOnSet: true })
  for (let i = 0; i < 5; i++) {
    c.set(i, i)
  }
  for (let i = 0; i < 4; i++) {
    c.set(i, `new ${i}`)
  }
  t.strictSame(disposed, [])
  c.delete(0)
  c.delete(4)
  t.strictSame(disposed, [
    ['new 0', 0],
    [4, 4],
  ])
  disposed.length = 0

  const d = new LRU({ max: 5, dispose })
  for (let i = 0; i < 5; i++) {
    d.set(i, i)
  }
  for (let i = 0; i < 4; i++) {
    d.set(i, `new ${i}`)
  }
  t.strictSame(disposed, [
    [0, 0],
    [1, 1],
    [2, 2],
    [3, 3],
  ])
  d.delete(0)
  d.delete(4)
  t.strictSame(disposed, [
    [0, 0],
    [1, 1],
    [2, 2],
    [3, 3],
    ['new 0', 0],
    [4, 4],
  ])

  t.end()
})

t.test('disposeAfter', t => {
  const c = new LRU({
    max: 5,
    disposeAfter: (v, k) => {
      if (k === 2) {
        // increment it every time it gets disposed, but only one time
        c.set(k, (v as number) + 1, { noDisposeOnSet: true })
      }
    },
  })

  for (let i = 0; i < 100; i++) {
    c.set(i, i)
  }
  t.same(
    [...c.entries()],
    [
      [99, 99],
      [98, 98],
      [2, 21],
      [97, 97],
      [96, 96],
    ]
  )
  c.delete(2)
  t.same(
    [...c.entries()],
    [
      [2, 22],
      [99, 99],
      [98, 98],
      [97, 97],
      [96, 96],
    ]
  )
  for (let i = 96; i < 100; i++) {
    c.set(i, i + 1)
  }
  t.same(
    [...c.entries()],
    [
      [99, 100],
      [98, 99],
      [97, 98],
      [96, 97],
      [2, 22],
    ]
  )
  c.clear()
  t.same([...c.entries()], [[2, 23]])

  t.end()
})

t.test('expiration reflected in dispose reason', async t => {
  t.clock.enter()
  t.clock.advance(1)
  const disposes: [number, number, LRUCache.DisposeReason][] = []
  const c = new LRUCache<number, number>({
    ttl: 100,
    max: 5,
    dispose: (v, k, r) => disposes.push([k, v, r]),
  })
  c.set(1, 1)
  c.set(2, 2, { ttl: 10 })
  c.set(3, 3)
  c.set(4, 4)
  c.set(5, 5)
  t.strictSame(disposes, [])
  c.set(6, 6)
  t.strictSame(disposes, [[1, 1, 'evict']])
  c.delete(6)
  c.delete(5)
  c.delete(4)
  // test when it's the last one, and when it's not, because we
  // delete with cache.clear() when it's the only entry.
  t.strictSame(disposes, [
    [1, 1, 'evict'],
    [6, 6, 'delete'],
    [5, 5, 'delete'],
    [4, 4, 'delete'],
  ])
  t.clock.advance(20)
  t.equal(c.get(2), undefined)
  t.strictSame(disposes, [
    [1, 1, 'evict'],
    [6, 6, 'delete'],
    [5, 5, 'delete'],
    [4, 4, 'delete'],
    [2, 2, 'expire'],
  ])
  t.clock.advance(200)
  t.equal(c.get(3), undefined)
  t.strictSame(disposes, [
    [1, 1, 'evict'],
    [6, 6, 'delete'],
    [5, 5, 'delete'],
    [4, 4, 'delete'],
    [2, 2, 'expire'],
    [3, 3, 'expire'],
  ])
})
