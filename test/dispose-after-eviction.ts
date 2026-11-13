import t from 'tap'
import { LRUCache } from '../dist/esm/node/index.js'

for (const mode of ['call', 'default', 'override'] as const) {
  const suppressed = mode !== 'override'
  const options = mode === 'default' ? {} : { noDisposeOnSet: suppressed }

  for (const bound of ['count', 'size'] as const) {
    t.test('eviction after-hooks: ' + mode + ', ' + bound, t => {
      const before: unknown[][] = []
      const after: unknown[][] = []
      const cache = new LRUCache<string, number>({
        ...(bound === 'count' ?
          { max: 1 }
        : { maxSize: 1, sizeCalculation: () => 1 }),
        noDisposeOnSet: mode !== 'call',
        dispose: (...event) => before.push(event),
        disposeAfter: (...event) => {
          after.push(event)
          if (event[2] === 'evict') {
            t.equal(cache.has(event[1]), false, 'evicted key is gone')
            t.equal(cache.peek('b'), 2, 'replacement is accessible')
          }
        },
      })
      cache.set('a', 1)
      cache.set('b', 2, options)
      const expected: unknown[][] = [[1, 'a', 'evict']]
      t.same(before, expected)
      t.same(after, expected, 'eviction cleanup runs before set returns')

      cache.set('b', 3, options)
      if (!suppressed) expected.push([2, 'b', 'set'])
      t.same(before, expected, 'replacement suppression is preserved')
      t.same(after, expected, 'no eviction callback is deferred')

      cache.clear()
      expected.push([3, 'b', 'delete'])
      t.same(before, expected, 'deletion still disposes the stored value')
      t.same(after, expected, 'each removed value is disposed once')
      cache.clear()
      t.same(after, expected, 'empty clear adds no callbacks')
      t.end()
    })
  }

  t.test('size-growth eviction after-hooks: ' + mode, t => {
    const before: unknown[][] = []
    const after: unknown[][] = []
    const cache = new LRUCache<string, number>({
      maxSize: 3,
      sizeCalculation: value => value,
      noDisposeOnSet: mode !== 'call',
      dispose: (...event) => before.push(event),
      disposeAfter: (...event) => after.push(event),
    })
    cache.set('a', 1)
    cache.set('b', 2)
    cache.set('b', 3, options)
    const expected = [
      ...(!suppressed ? [[2, 'b', 'set']] : []),
      [1, 'a', 'evict'],
    ]
    t.same(before, expected)
    t.same(after, expected, 'growth evictions clean up immediately')
    t.equal(cache.calculatedSize, 3)
    t.same([...cache], [['b', 3]])
    cache.clear()
    t.same(after, [...expected, [3, 'b', 'delete']])
    t.end()
  })
}

t.test('eviction with only disposeAfter configured', t => {
  const after: unknown[][] = []
  const cache = new LRUCache<string, number>({
    max: 1,
    noDisposeOnSet: true,
    disposeAfter: (...event) => after.push(event),
  })
  cache.set('a', 1)
  cache.set('b', 2)
  t.same(after, [[1, 'a', 'evict']])
  cache.clear()
  t.same(after, [
    [1, 'a', 'evict'],
    [2, 'b', 'delete'],
  ])
  t.end()
})
