import t from 'tap'
import { LRUCache } from '../dist/esm/node/index.js'

const clock = t.clock
clock.advance(1)
clock.enter()

t.test('background fetch size tests', async t => {
  const res: Record<number, (n: number) => void> = {}
  const c = new LRUCache<number, number>({
    maxSize: 10,
    sizeCalculation: () => 5,
    allowStale: true,
    ttl: 10,
    // never returns on purpose
    fetchMethod: k =>
      new Promise<number>(r => {
        res[k] = r
      }),
  })
  t.equal(c.calculatedSize, 0)
  const p1 = c.fetch(1).catch(er => er)
  t.equal(c.calculatedSize, 1)
  c.set(1, 1)
  t.match(await p1, new Error('replaced'))
  t.equal(c.calculatedSize, 5)
  clock.advance(100)
  t.equal(c.getRemainingTTL(1), -90)
  // verify correct behavior of a fetch that shadows a stale value
  const p = c.fetch(1)
  t.equal(c.calculatedSize, 5)
  const p2 = c.fetch(2)
  t.equal(c.calculatedSize, 6)
  const p3 = c.fetch(3)
  t.equal(c.calculatedSize, 7)
  res[1]?.(1)
  await p
  // no change, that one had a stale value
  t.equal(c.calculatedSize, 7)
  res[2]?.(2)
  await p2
  t.equal(c.calculatedSize, 10)
  await t.rejects(p3, new Error('evicted'))
})
