const t = require('tap')
const fn = async (k, v) =>
  new Promise(res => setImmediate(() => res(v === undefined ? 0 : (v + 1))))

const Clock = require('clock-mock')
const clock = new Clock()
t.teardown(clock.enter())
clock.advance(1)

const LRU = require('../')
const c = new LRU({
  fetchMethod: fn,
  max: 5,
  ttl: 5,
})

t.test('asynchronous fetching', async t => {
  const v1 = await c.fetch('key')
  t.equal(v1, 0, 'first fetch, no stale data, wait for initial value')
  const v2 = await c.fetch('key')
  t.equal(v2, 0, 'got same cached value')

  clock.advance(10)

  const v3 = await c.fetch('key', { allowStale: true })
  t.equal(v3, 0, 'fetch while stale, allowStale, get stale data')
  t.equal(await c.fetch('key', { allowStale: true }), 0,
    'get stale data again while re-fetching because stale previously')
  const v4 = await c.fetch('key')
  t.equal(v4, 1, 'no allow stale, wait until fresh data available')
  const v5 = await c.fetch('key')
  t.equal(v5, 1, 'fetch while not stale, just get from cache')

  clock.advance(10)

  const v6 = await c.fetch('key', { allowStale: true })
  t.equal(v6, 1, 'fetch while stale, starts new fetch, return stale data')
  const v = c.valList[0]
  t.equal(c.isBackgroundFetch(v), true)
  t.equal(c.backgroundFetch('key', 0), v)
  await v
  const v7 = await c.fetch('key', { allowStale: true, updateAgeOnGet: true })
  t.equal(v7, 2, 'fetch completed, so get new data')

  clock.advance(100)

  const v8 = await c.fetch('key', { allowStale: true })
  const v9 = c.get('key', { allowStale: true })
  t.equal(v8, 2, 'fetch returned stale while fetching')
  t.equal(v9, 2, 'get() returned stale while fetching')

  const v10 = c.fetch('key2')
  const v11 = c.get('key2')
  t.equal(v11, undefined, 'get while fetching but not yet returned')
  t.equal(await v10, 0, 'eventually 0 is returned')
  const v12 = c.get('key2')
  t.equal(v12, 0, 'get cached value after fetch')

  const v13 = c.fetch('key3')
  c.delete('key3')
  t.equal(await v13, 0, 'returned 0 eventually')
  t.equal(c.has('key3'), false, 'but not inserted into cache')

  const v14 = c.fetch('key4')
  clock.advance(100)
  const v15 = await c.fetch('key4', { allowStale: true })
  t.equal(v15, 0, 'there was no stale data, even though we were ok with that')

  c.set('key5', 0)
  clock.advance(100)
  const v16 = await c.fetch('key5')
  t.equal(v16, 1, 'waited for new data, data in cache was stale')

  const v17 = c.fetch('key4')
  clock.advance(100)
  const v18 = c.get('key4')
  t.equal(v18, undefined, 'get while fetching, but did not want stale data')

  const v19 = c.fetch('key6')
  clock.advance(100)
  const v20 = c.get('key6', { allowStale: true })
  t.equal(v20, undefined, 'get while fetching, but no stale data to return')
})

t.test('fetchMethod must be a function', async t => {
  t.throws(() => new LRU({fetchMethod: true, max: 2}))
})

t.test('fetch without fetch method', async t => {
  const c = new LRU({ max: 3 })
  c.set(0, 0)
  c.set(1, 1)
  t.same(await Promise.all([
    c.fetch(0),
    c.fetch(1),
  ]), [0, 1])
})

t.test('fetch options, signal', async t => {
  let aborted = false
  const disposed = []
  const disposedAfter = []
  const c = new LRU({
    max: 3,
    ttl: 100,
    fetchMethod: async (k, oldVal, { signal, options }) => {
      // do something async
      await new Promise(res => setImmediate(res))
      if (signal.aborted) {
        aborted = true
        return
      }
      if (k === 2) {
        options.ttl = 25
      }
      return (oldVal || 0) + 1
    },
    dispose: (v, k, reason) => {
      disposed.push([v, k, reason])
    },
    disposeAfter: (v, k, reason) => {
      disposedAfter.push([v, k, reason])
    },
  })

  const v1 = c.fetch(2)
  c.delete(2)
  t.equal(await v1, undefined, 'no value returned, aborted by delete')
  t.equal(aborted, true)
  t.same(disposed, [], 'no disposals for aborted promises')
  t.same(disposedAfter, [], 'no disposals for aborted promises')

  aborted = false
  const v2 = c.fetch(2)
  c.set(2, 2)
  t.equal(await v2, undefined, 'no value returned, aborted by set')
  t.equal(aborted, true)
  t.same(disposed, [], 'no disposals for aborted promises')
  t.same(disposedAfter, [], 'no disposals for aborted promises')
  c.delete(2)
  disposed.length = 0
  disposedAfter.length = 0

  aborted = false
  const v3 = c.fetch(2)
  c.set(3, 3)
  c.set(4, 4)
  c.set(5, 5)
  t.equal(await v3, undefined, 'no value returned, aborted by evict')
  t.equal(aborted, true)
  t.same(disposed, [], 'no disposals for aborted promises')
  t.same(disposedAfter, [], 'no disposals for aborted promises')

  aborted = false
  const v4 = await c.fetch(6, { ttl: 1000 })
  t.equal(c.getRemainingTTL(6), 1000, 'overridden ttl in fetch() opts')
  const v5 = await c.fetch(2, { ttl: 1 })
  t.equal(c.getRemainingTTL(2), 25, 'overridden ttl in fetchMethod')
})

t.test('fetch options, signal, with polyfill', async t => {
  const {AbortController} = global
  t.teardown(() => global.AbortController = AbortController)
  global.AbortController = undefined
  const LRU = t.mock('../')
  let aborted = false
  const disposed = []
  const disposedAfter = []
  const c = new LRU({
    max: 3,
    ttl: 100,
    fetchMethod: async (k, oldVal, { signal, options }) => {
      // do something async
      await new Promise(res => setImmediate(res))
      if (signal.aborted) {
        aborted = true
        return
      }
      if (k === 2) {
        options.ttl = 25
      }
      return (oldVal || 0) + 1
    },
    dispose: (v, k, reason) => {
      disposed.push([v, k, reason])
    },
    disposeAfter: (v, k, reason) => {
      disposedAfter.push([v, k, reason])
    },
  })

  const v1 = c.fetch(2)
  c.delete(2)
  t.equal(await v1, undefined, 'no value returned, aborted by delete')
  t.equal(aborted, true)
  t.same(disposed, [], 'no disposals for aborted promises')
  t.same(disposedAfter, [], 'no disposals for aborted promises')

  aborted = false
  const v2 = c.fetch(2)
  c.set(2, 2)
  t.equal(await v2, undefined, 'no value returned, aborted by set')
  t.equal(aborted, true)
  t.same(disposed, [], 'no disposals for aborted promises')
  t.same(disposedAfter, [], 'no disposals for aborted promises')
  c.delete(2)
  disposed.length = 0
  disposedAfter.length = 0

  aborted = false
  const v3 = c.fetch(2)
  c.set(3, 3)
  c.set(4, 4)
  c.set(5, 5)
  t.equal(await v3, undefined, 'no value returned, aborted by evict')
  t.equal(aborted, true)
  t.same(disposed, [], 'no disposals for aborted promises')
  t.same(disposedAfter, [], 'no disposals for aborted promises')

  aborted = false
  const v4 = await c.fetch(6, { ttl: 1000 })
  t.equal(c.getRemainingTTL(6), 1000, 'overridden ttl in fetch() opts')
  const v5 = await c.fetch(2, { ttl: 1 })
  t.equal(c.getRemainingTTL(2), 25, 'overridden ttl in fetchMethod')
})
