if (typeof performance === 'undefined') {
  global.performance = require('perf_hooks').performance
}
import t from 'tap'
import { LRUCache } from '../dist/esm/index.js'
import { expose } from './fixtures/expose.js'

t.test('ttl timer refresh', async t => {
  // @ts-ignore
  global.performance = {
    now: () => 5,
  }
  const { LRUCache: LRU } = t.mockRequire('../', {})
  const c = new LRU({ max: 5, ttl: 10, ttlResolution: 0 })
  const e = expose(c, LRU)

  c.set('a', 1)

  const status: LRUCache.Status<any> = {}
  c.get('a', { status })
  t.equal(status.now, 5)

  // New timer mock
  // @ts-ignore
  global.performance = {
    now: () => 10,
  }

  c.get('a', { status })
  t.equal(status.now, 5, 'still using the old ttl timer')

  e.refreshTTLTimerReference()
  c.get('a', { status })
  t.equal(status.now, 10, 'using the new ttl timer')
})
