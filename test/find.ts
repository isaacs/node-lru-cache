import t from 'tap'
import { LRUCache as LRU } from '../dist/esm/index.js'

const resolves: Record<
  number,
  (v: { value: number } | Promise<{ value: number }>) => void
> = {}
const c = new LRU<number, { value: number }>({
  max: 5,
  ttl: 1,
  fetchMethod: k =>
    new Promise<{ value: number }>(res => (resolves[k] = res)),
  allowStale: true,
  noDeleteOnStaleGet: true,
})

for (let i = 0; i < 9; i++) {
  c.set(i, { value: i })
}

const p = c.fetch(8, { forceRefresh: true })

t.equal(
  c.find(o => o.value === 4),
  c.get(4)
)

t.equal(
  c.find(o => o.value === 9),
  undefined
)

t.same(
  c.find(o => o.value === 8),
  { value: 8 }
)

resolves[8]?.({ value: 10 })

new Promise(setImmediate)
  .then(() => p)
  .then(() => {
    t.same(
      c.find(o => o.value === 10),
      c.get(8)
    )
  })

const p99 = c.fetch(99)
t.equal(
  c.find(o => o.value === 99),
  undefined
)
resolves[99]?.({ value: 99 })
t.equal(
  c.find(o => o.value === 99),
  undefined
)
new Promise(setImmediate)
  .then(() => p99)
  .then(() => {
    t.same(
      c.find(o => o.value === 99),
      { value: 99 }
    )
    t.equal(
      c.find(o => o.value === 99),
      c.get(99)
    )
  })
