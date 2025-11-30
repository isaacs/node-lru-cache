if (typeof performance === 'undefined') {
  Object.assign(global, {
    performance: (await import('perf_hooks')).performance,
  })
}

import t from 'tap'

// verify that a large number of ttlAutopurge timeouts won't
// result in a resource exhaustion problem due to timers being
// created.

const clock = t.clock
clock.advance(1)

let timeouts = 0
const origST = global.setTimeout
const newST = function (
  this: any,
  ...args: Parameters<typeof setTimeout>
) {
  ++timeouts
  return origST.apply(this, args)
}
let clears = 0
const origCT = global.clearTimeout
const newCT = function (
  this: any,
  ...args: Parameters<typeof clearTimeout>
) {
  ++clears
  return origCT.apply(this, args)
}

//@ts-ignore
global.setTimeout = newST
//@ts-ignore
global.clearTimeout = newCT

const { LRUCache: LRU } = await import('../dist/esm/index.js')

t.test('a cache that overwrites a hot key many times', async t => {
  const cache = new LRU<string, number>({
    ttl: 10,
    ttlAutopurge: true,
  })

  const N = 10 //_000
  for (let i = 0; i < N; i++) {
    cache.set('hot-key', i)
  }
  t.equal(timeouts, N)
  t.equal(clears, N - 1)

  timeouts = 0
  clears = 0
  cache.set('hot-key', 99, { ttl: 0 })
  const clearsAfterSetTTL0 = clears
  const timeoutsAfterSetTTL0 = timeouts

  t.equal(timeoutsAfterSetTTL0, 0)
  t.equal(clearsAfterSetTTL0, 1)

  timeouts = 0
  clears = 0
  cache.set('hot-key', 100)
  const clearsAfterSetTTLDef = clears
  const timeoutsAfterSetTTLDef = timeouts
  t.equal(clearsAfterSetTTLDef, 0)
  t.equal(timeoutsAfterSetTTLDef, 1)

  timeouts = 0
  clears = 0
  cache.delete('hot-key')
  const clearsAfterDelete = clears
  const timeoutsAfterDelete = timeouts
  t.equal(clearsAfterDelete, 1)
  t.equal(timeoutsAfterDelete, 0)
})

t.test('evicting an item means no need for autopurge', async t => {
  const cache = new LRU<string, number>({
    ttl: 10,
    max: 5,
    ttlAutopurge: true,
  })

  timeouts = 0
  clears = 0
  cache.set('a', 1)
  const clearsAfterSet = clears
  const timeoutsAfterSet = timeouts
  t.equal(clearsAfterSet, 0)
  t.equal(timeoutsAfterSet, 1)

  timeouts = 0
  clears = 0
  cache.set('b', 1, { ttl: 0 })
  cache.set('c', 1, { ttl: 0 })
  cache.set('d', 1, { ttl: 0 })
  cache.set('e', 1, { ttl: 0 })
  cache.set('f', 1, { ttl: 0 })

  const clearsAfterEvict = clears
  const timeoutsAfterEvict = timeouts
  t.equal(clearsAfterEvict, 1)
  t.equal(timeoutsAfterEvict, 0)
})

t.test('clearing list clears autopurge timers', async t => {
  const cache = new LRU<string, number>({
    ttl: 10,
    max: 5,
    ttlAutopurge: true,
  })

  timeouts = 0
  clears = 0
  cache.set('a', 1)
  cache.set('b', 1)
  cache.set('c', 1)
  cache.set('d', 1)
  const clearsAfterSet = clears
  const timeoutsAfterSet = timeouts
  t.equal(clearsAfterSet, 0)
  t.equal(timeoutsAfterSet, 4)

  timeouts = 0
  clears = 0
  cache.clear()

  const clearsAfterClear = clears
  const timeoutsAfterClear = timeouts
  t.equal(clearsAfterClear, 4)
  t.equal(timeoutsAfterClear, 0)
})
