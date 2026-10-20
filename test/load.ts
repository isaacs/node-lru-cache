import t from 'tap'
import { LRUCache as LRU } from '../dist/esm/node/index.js'

const c = new LRU<number, number>({ max: 5 })
for (let i = 0; i < 9; i++) {
  c.set(i, i)
}

const d = new LRU(c)
d.load(c.dump())

t.strictSame(d, c)

t.test('loading TTL entries does not mutate the reusable dump', t => {
  const source = new LRU<string, string>({ max: 5, ttl: 60_000 })
  source.set('key', 'value')
  const entries = source.dump()
  const snapshot = structuredClone(entries)
  const first = new LRU<string, string>({ max: 5 })
  const second = new LRU<string, string>({ max: 5 })

  first.load(entries)
  t.strictSame(
    entries,
    snapshot,
    'preserves portable timestamps in the input',
  )
  second.load(entries)
  t.equal(first.get('key'), 'value')
  t.equal(second.get('key'), 'value')
  t.ok(second.getRemainingTTL('key') > 0)
  t.end()
})
