import t from 'tap'
import { LRUCache as LRU } from '../'

t.test('for of', t => {
  const cache = new LRU({ max: 10 })
  cache.set('a', 1)
  cache.set('b', 2)
  cache.set('c', 3)
  const size = cache.size
  let count = 0
  for (const key of cache.keys()) {
    count++
    cache.get(key)
  }

  t.equal(count, size)

  t.end()
})
