import t from 'tap'
import { LRUCache } from '../dist/esm/index.js'
const c = new LRUCache({ max: 2 })
t.type(c, LRUCache)
c.set(1, 1)
c.set(2, 2)
c.set(3, 3)
t.equal(c.get(1), undefined)
t.equal(c.get(2), 2)
t.equal(c.get(3), 3)
