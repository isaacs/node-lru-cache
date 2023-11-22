import t from 'tap'
import { LRUCache } from '../dist/esm/index.js'

t.test('just kv', t => {
  const c = new LRUCache<number, number>({ max: 2 })
  c.set(1, 10)
  c.set(2, 20)
  c.set(3, 30)
  t.equal(c.info(1), undefined)
  t.strictSame(c.info(2), { value: 20 })
  t.strictSame(c.info(3), { value: 30 })
  t.end()
})

t.test('other info', t => {
  const c = new LRUCache<number, number>({
    max: 2,
    ttl: 1000,
    maxSize: 10000,
  })
  c.set(1, 10, { size: 100 })
  c.set(2, 20, { size: 200 })
  c.set(3, 30, { size: 300 })
  t.equal(c.info(1), undefined)
  t.match(c.info(2), {
    value: 20,
    size: 200,
    ttl: Number,
    start: Number,
  })
  t.match(c.info(3), {
    value: 30,
    size: 300,
    ttl: Number,
    start: Number,
  })
  t.end()
})
