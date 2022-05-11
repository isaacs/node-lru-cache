import t from 'tap'
import LRU from '../'

const cache = new LRU({ max: 5 })
for (let i = 0; i < 5; i++) {
  cache.set(i, i)
}
cache.get(2)
const popped = []
let p
do {
  p = cache.pop()
  popped.push(p)
} while (p !== undefined)
t.same(popped, [0, 1, 3, 4, 2, undefined])
