import { LRUCache } from 'lru-cache'
import t from 'tap'

// If the autopurge timer fires before the entry is stale (timer drift,
// coarse clocks), it must be re-armed instead of dropped. Use a perf
// clock that only moves when the test says so, so this does not depend
// on platform timer timing.
t.test(
  'autopurge timer re-arms when the entry is not stale yet',
  async t => {
    let now = 1000
    const cache = new LRUCache<string, number>({
      max: 10,
      ttl: 10,
      ttlAutopurge: true,
      ttlResolution: 0,
      perf: { now: () => now },
    })
    cache.set('a', 1)
    // timer fires after ~11ms of real time, but the clock has not moved
    await new Promise(r => setTimeout(r, 50))
    t.equal(cache.size, 1, 'not purged while not stale')
    now += 1000
    await new Promise(r => setTimeout(r, 50))
    t.equal(cache.size, 0, 'purged by the re-armed timer once stale')
  },
)
