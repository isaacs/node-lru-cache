import t from 'tap'
import { LRUCache as LRU } from '../dist/esm/node/index.js'

const c = new LRU<number, number>({ max: 5 })
for (let i = 0; i < 9; i++) {
  c.set(i, i)
}

const d = new LRU(c)
d.load(c.dump())

t.strictSame(d, c)

t.test('load() does not mutate dump entries (issue #421)', async t => {
  const a = new LRU<number, string>({ max: 10, ttl: 60_000 })
  a.set(1, 'one')
  const dump = a.dump()
  const originalStart = dump[0]?.[1].start
  t.type(originalStart, 'number')

  const b = new LRU<number, string>({ max: 10, ttl: 60_000 })
  b.load(dump)
  t.equal(b.get(1), 'one')
  t.equal(dump[0]?.[1].start, originalStart, 'first load leaves dump.start intact')

  const c2 = new LRU<number, string>({ max: 10, ttl: 60_000 })
  c2.load(dump)
  t.equal(c2.get(1), 'one', 'second load of same dump still works')
  t.equal(dump[0]?.[1].start, originalStart, 'second load leaves dump.start intact')
})
