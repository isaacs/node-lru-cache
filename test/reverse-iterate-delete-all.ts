// https://github.com/isaacs/node-lru-cache/issues/278
import t from 'tap'
import { LRUCache as LRU } from '../dist/esm/index.js'
const lru = new LRU<string, string>({
  maxSize: 2,
  sizeCalculation: () => 1,
})
lru.set('x', 'x')
lru.set('y', 'y')
for (const key of lru.rkeys()) {
  lru.delete(key)
}
t.equal(lru.size, 0)
