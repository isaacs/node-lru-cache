import t from 'tap'
import { LRUCache } from '../dist/esm/node/index.js'

// setTimeout delays over 2^31-1 ms overflow, and node fires them after
// 1ms. The autopurge timer would then find that the item is not stale yet,
// and set another timer for the (still huge) remaining time, and so on.
const clock = t.clock
const maxDelay = 2 ** 31 - 1
const day = 24 * 60 * 60 * 1000

const delays: number[] = []
const { setTimeout, clearTimeout } = global
t.teardown(() =>
  // @ts-ignore
  Object.assign(global, { setTimeout, clearTimeout }),
)
// @ts-ignore
global.setTimeout = (fn: () => void, ms: number) => {
  delays.push(ms)
  return clock.setTimeout(fn, ms)
}
//@ts-ignore
global.clearTimeout = clock.clearTimeout.bind(clock)

// have to advance it 1 so we don't start with 0
clock.advance(1)

t.test('ttl over 2^31-1 is capped, and set again for what remains', t => {
  const ttl = 30 * day
  const c = new LRUCache<string, number>({
    ttl,
    ttlAutopurge: true,
    ttlResolution: 0,
    perf: clock,
  })
  delays.length = 0
  c.set('a', 1)
  t.same(delays, [maxDelay], 'delay capped at 2^31-1')

  // fires at the cap, but the item isn't stale, so wait for the rest
  clock.advance(maxDelay)
  t.equal(c.size, 1, 'not purged before the ttl')
  t.equal(delays.length, 2, 'one more timer for the remaining time')
  t.ok(delays.every(d => d <= maxDelay))
  t.ok(delays[1]! <= ttl - maxDelay + 1, 'only waits for what remains')

  clock.advance(ttl - maxDelay - 100)
  t.equal(c.size, 1, 'still not stale')
  clock.advance(102)
  t.equal(c.size, 0, 'purged just after the ttl')
  t.equal(c.has('a'), false)
  t.ok(delays.every(d => d <= maxDelay))
  t.equal(delays.length, 2, 'timers are not set in a loop')
  t.end()
})

t.test('ttl of exactly 2^31-1 is capped', t => {
  const c = new LRUCache<string, number>({
    ttl: maxDelay,
    ttlAutopurge: true,
    ttlResolution: 0,
    perf: clock,
  })
  delays.length = 0
  c.set('a', 1)
  t.same(delays, [maxDelay])
  // the timer fires exactly at the ttl, when the item is not stale yet
  clock.advance(maxDelay)
  t.equal(c.size, 1)
  clock.advance(2)
  t.equal(c.size, 0, 'purged 1ms later')
  t.ok(delays.every(d => d <= maxDelay))
  t.equal(delays.length, 2)
  t.end()
})

t.test('ttl that fits is not changed', t => {
  const c = new LRUCache<string, number>({
    ttl: day,
    ttlAutopurge: true,
    ttlResolution: 0,
    perf: clock,
  })
  delays.length = 0
  c.set('a', 1)
  t.same(delays, [day + 1])
  clock.advance(day + 1)
  t.equal(c.size, 0)
  t.end()
})
