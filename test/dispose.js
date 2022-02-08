const t = require('tap')
const LRU = require('../')

t.test('disposal', t => {
  const disposed = []
  const c = new LRU({max:5, dispose: (k,v,r) => disposed.push([k,v,r])})
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
  t.strictSame(disposed, [[5,5,'evict'], ['foo', 'asdf', 'set']])

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
  t.strictSame(disposed, [[0, 0, 'evict'], ['foo', 'asdf', 'delete']])

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
  const disposed = []
  const dispose = (v, k) => disposed.push([v, k])

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
  t.strictSame(disposed, [['new 0', 0], [4, 4]])
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
