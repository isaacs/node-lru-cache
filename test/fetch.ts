if (typeof performance === 'undefined') {
  global.performance = require('perf_hooks').performance
}
import t from 'tap'
import { BackgroundFetch, LRUCache } from '../dist/esm/index.js'
import { expose } from './fixtures/expose.js'

t.teardown(() => {})

const fn: LRUCache.Fetcher<any, any> = async (_, v) =>
  new Promise(res =>
    queueMicrotask(() => res(v === undefined ? 0 : v + 1))
  )

const clock = t.clock
clock.enter()
clock.advance(1)

let LRU = LRUCache

const c = new LRU<string, number>({
  fetchMethod: fn,
  max: 5,
  ttl: 5,
})

const getStatusObj = (): LRUCache.Status<number> => ({})

t.test('asynchronous fetching', async t => {
  const s1 = getStatusObj()
  const v1 = await c.fetch('key', { status: s1 })
  t.equal(v1, 0, 'first fetch, no stale data, wait for initial value')
  t.matchSnapshot(s1, 'status 1')
  const s2 = getStatusObj()
  const v2 = await c.fetch('key', { status: s2 })
  t.equal(v2, 0, 'got same cached value')
  t.matchSnapshot(s2, 'status 2')

  clock.advance(10)

  const s3 = getStatusObj()
  const v3 = await c.fetch('key', { allowStale: true, status: s3 })
  t.equal(v3, 0, 'fetch while stale, allowStale, get stale data')
  t.matchSnapshot(s3, 'status 3')
  const s31 = getStatusObj()
  t.equal(
    await c.fetch('key', { allowStale: true, status: s31 }),
    0,
    'get stale data again while re-fetching because stale previously'
  )
  t.matchSnapshot(s31, 'status 3.1')
  const s4 = getStatusObj()
  const v4 = await c.fetch('key', { status: s4 })
  t.equal(v4, 1, 'no allow stale, wait until fresh data available')
  t.matchSnapshot(s4, 'status 4')
  const s5 = getStatusObj()
  const v5 = await c.fetch('key', { status: s5 })
  t.equal(v5, 1, 'fetch while not stale, just get from cache')
  t.matchSnapshot(s5, 'status 5')

  clock.advance(10)

  const v6 = await c.fetch('key', { allowStale: true })
  t.equal(
    v6,
    1,
    'fetch while stale, starts new fetch, return stale data'
  )
  const e = expose(c)
  const v = e.valList[0]

  // should not have any promises or cycles in the dump
  const dump = c.dump()
  for (const [_, entry] of dump) {
    t.type(entry.value, 'number')
  }
  t.matchSnapshot(JSON.stringify(dump), 'safe to stringify dump')

  t.equal(e.isBackgroundFetch(v), true)
  t.equal(e.backgroundFetch('key', 0, {}, undefined), v)
  await v
  const v7 = await c.fetch('key', {
    allowStale: true,
    updateAgeOnGet: true,
  })
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
  await t.rejects(v13, 'rejects, because it was deleted')
  t.equal(c.has('key3'), false, 'not inserted into cache')

  c.fetch('key4')
  clock.advance(100)
  const v15 = await c.fetch('key4', { allowStale: true })
  t.equal(
    v15,
    0,
    'there was no stale data, even though we were ok with that'
  )

  c.set('key5', 0)
  clock.advance(100)
  const v16 = await c.fetch('key5')
  t.equal(v16, 1, 'waited for new data, data in cache was stale')

  c.fetch('key4')
  await Promise.resolve().then(() => {})
  clock.advance(100)
  const v18 = c.get('key4')
  t.equal(
    v18,
    undefined,
    'get while fetching, but did not want stale data'
  )

  const p6 = c.fetch('key6')
  await Promise.resolve().then(() => {})
  clock.advance(100)
  const v20 = c.get('key6', { allowStale: true })
  t.equal(
    v20,
    undefined,
    'get while fetching, but no stale data to return'
  )
  t.equal(await p6, 0)
  clock.advance(100)
  const p7 = c.fetch('key6')
  const status: LRUCache.Status<number> = {}
  const v21 = c.get('key6', { allowStale: true, status })
  t.equal(v21, 0, 'allowStale, got stale data while fetching')
  t.equal(
    status.returnedStale,
    true,
    'status reflects stale data returned'
  )
  clock.advance(100)
  t.equal(await p7, 1, 'eventually updated')
})

t.test('fetchMethod must be a function', async t => {
  // @ts-expect-error
  t.throws(() => new LRU({ fetchMethod: true, max: 2 }))
})

t.test('fetch without fetch method', async t => {
  const c = new LRU({ max: 3 })
  c.set(0, 0)
  c.set(1, 1)
  const status: LRUCache.Status<number> = {}
  t.same(
    await Promise.all([c.fetch(0, { status }), c.fetch(1)]),
    [0, 1]
  )
  t.matchSnapshot(status, 'status update')
})

t.test('fetch options, signal', async t => {
  const statuses: LRUCache.Status<number>[] = []
  const s = (): LRUCache.Status<number> => {
    const status: LRUCache.Status<number> = {}
    statuses.push(status)
    return status
  }

  let aborted = false
  const disposed: any[] = []
  const disposedAfter: any[] = []
  const c = new LRU<any, any>({
    max: 3,
    ttl: 100,
    fetchMethod: async (k, oldVal, { signal, options }) => {
      t.ok(options.status, 'received status object')
      // do something async
      await new Promise<void>(res => queueMicrotask(res))
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

  const v1 = c.fetch(2, { status: s() })
  const testp1 = t.rejects(v1, 'aborted by clearing the cache')
  c.delete(2)
  await testp1
  await new Promise<void>(res => queueMicrotask(res))
  t.equal(aborted, true)
  t.same(disposed, [], 'no disposals for aborted promises')
  t.same(disposedAfter, [], 'no disposals for aborted promises')

  aborted = false
  const v2 = c.fetch(2, { status: s() })
  const testp2 = t.rejects(v2, 'rejected, replaced')
  c.set(2, 2)
  await testp2
  await new Promise<void>(res => queueMicrotask(res))
  t.equal(aborted, true)
  t.same(disposed, [], 'no disposals for aborted promises')
  t.same(disposedAfter, [], 'no disposals for aborted promises')
  c.delete(2)
  disposed.length = 0
  disposedAfter.length = 0

  aborted = false
  const v3 = c.fetch(2, { status: s() })
  const testp3 = t.rejects(v3, 'rejected, aborted by evict')
  c.set(3, 3, { status: s() })
  c.set(4, 4, { status: s() })
  c.set(5, 5, { status: s() })
  await testp3
  await new Promise<void>(res => queueMicrotask(res))
  t.equal(aborted, true)
  t.same(disposed, [], 'no disposals for aborted promises')
  t.same(disposedAfter, [], 'no disposals for aborted promises')

  aborted = false
  await c.fetch(6, { ttl: 1000, status: s() })
  t.equal(
    c.getRemainingTTL(6),
    1000,
    'overridden ttl in fetch() opts'
  )
  await c.fetch(2, { ttl: 1, status: s() })
  t.equal(c.getRemainingTTL(2), 25, 'overridden ttl in fetchMethod')
  t.matchSnapshot(statuses, 'status updates')
})

t.test('fetchMethod throws', async t => {
  const statuses: LRUCache.Status<number>[] = []
  const s = (): LRUCache.Status<number> => {
    const status: LRUCache.Status<number> = {}
    statuses.push(status)
    return status
  }

  // make sure that even if there's no one to sit around and wait for it,
  // the background fetch throwing doesn't blow anything up.
  const cache = new LRU<string, number>({
    max: 10,
    ttl: 10,
    allowStale: true,
    fetchMethod: async () => {
      throw new Error('fetch failure')
    },
  })
  // seed the cache, and make the values stale.
  // this simulates the case where the fetch() DID work,
  // and replaced the promise with the resolution, but
  // then they got stale.
  cache.set('a', 1, { status: s() })
  cache.set('b', 2, { status: s() })
  clock.advance(20)
  await Promise.resolve().then(() => {})
  const a = await Promise.all([
    cache.fetch('a', { status: s() }),
    cache.fetch('a', { status: s() }),
    cache.fetch('a', { status: s() }),
  ])
  t.strictSame(a, [1, 1, 1])
  // clock advances, promise rejects
  clock.advance(20)
  await Promise.resolve().then(() => {})
  t.equal(
    cache.get('a', { status: s() }),
    undefined,
    'removed from cache'
  )
  const b = await Promise.all([
    cache.fetch('b', { status: s() }),
    cache.fetch('b', { status: s() }),
    cache.fetch('b', { status: s() }),
  ])
  t.strictSame(b, [2, 2, 2])
  clock.advance(20)
  await Promise.resolve().then(() => {})
  t.equal(
    cache.get('b', { status: s() }),
    undefined,
    'removed from cache'
  )
  const ap = cache.fetch('a', { status: s() })
  const testap = t.rejects(ap, 'aborted by replace')
  cache.set('a', 99, { status: s() })
  await testap
  t.equal(
    cache.get('a', { status: s() }),
    99,
    'did not delete new value'
  )
  t.rejects(cache.fetch('b', { status: s() }), {
    message: 'fetch failure',
  })
  t.matchSnapshot(statuses, 'status updates')
})

t.test(
  'fetchMethod throws, noDeleteOnFetchRejection option',
  async t => {
    // make sure that even if there's no one to sit around and wait for it,
    // the background fetch throwing doesn't blow anything up.
    let fetchFail = true
    const cache = new LRU<string, number>({
      max: 10,
      ttl: 10,
      allowStale: true,
      noDeleteOnFetchRejection: true,
      fetchMethod: async () => {
        if (fetchFail) {
          throw new Error('fetch failure')
        } else {
          return 1
        }
      },
    })

    // seed the cache, and make the values stale.
    // this simulates the case where the fetch() DID work,
    // and replaced the promise with the resolution, but
    // then they got stale.
    cache.set('a', 1)
    cache.set('b', 2)
    clock.advance(20)
    await Promise.resolve().then(() => {})
    const a = await Promise.all([
      cache.fetch('a'),
      cache.fetch('a'),
      cache.fetch('a'),
    ])
    t.strictSame(a, [1, 1, 1])
    // clock advances, promise rejects
    clock.advance(20)
    await Promise.resolve().then(() => {})
    const e = expose(cache)
    t.equal(e.keyMap.get('a'), 0)
    t.equal(e.valList[0], 1, 'promise replaced with stale value')
    const b = await Promise.all([
      cache.fetch('b'),
      cache.fetch('b'),
      cache.fetch('b'),
    ])
    t.strictSame(b, [2, 2, 2])
    clock.advance(20)
    await Promise.resolve().then(() => {})
    t.equal(e.keyMap.get('b'), 1)
    t.equal(e.valList[1], 2, 'promise replaced with stale value')
    cache.delete('a')
    cache.delete('b')

    // even though we don't noDeleteOnFetchRejection,
    // if there's no stale, we still remove the *promise*.
    const ap = cache.fetch('a')
    const testap = t.rejects(ap, 'aborted by replace')
    cache.set('a', 99)
    await testap
    t.equal(cache.get('a'), 99, 'did not delete, was replaced')
    await t.rejects(cache.fetch('b'), { message: 'fetch failure' })
    t.equal(e.keyMap.get('b'), undefined, 'not in cache')
    t.equal(e.valList[1], undefined, 'not in cache')
  }
)

t.test('fetch context', async t => {
  const cache = new LRU<string, [string, any], string>({
    max: 10,
    ttl: 10,
    allowStale: true,
    noDeleteOnFetchRejection: true,
    fetchMethod: async (k, _, { context, options }) => {
      //@ts-expect-error
      t.equal(options.context, undefined)
      t.equal(context, expectContext)
      return [k, context]
    },
  })

  let expectContext = 'overridden'
  t.strictSame(await cache.fetch('y', { context: 'overridden' }), [
    'y',
    'overridden',
  ])
  expectContext = 'first context'
  t.strictSame(await cache.fetch('x', { context: 'first context' }), [
    'x',
    'first context',
  ])
  // if still in cache, doesn't call fetchMethod again
  t.strictSame(await cache.fetch('x', { context: 'ignored' }), [
    'x',
    'first context',
  ])
})

t.test('forceRefresh', async t => {
  const statuses: LRUCache.Status<number>[] = []
  const s = (): LRUCache.Status<number> => {
    const status: LRUCache.Status<number> = {}
    statuses.push(status)
    return status
  }

  const cache = new LRU<number, number>({
    max: 10,
    allowStale: true,
    ttl: 100,
    fetchMethod: async (k, _, { options }) => {
      t.equal(
        //@ts-expect-error
        options.forceRefresh,
        undefined,
        'do not expose forceRefresh'
      )
      return new Promise<number>(res => queueMicrotask(() => res(k)))
    },
  })

  // put in some values that don't match what fetchMethod returns
  cache.set(1, 100)
  cache.set(2, 200)
  t.equal(await cache.fetch(1), 100)
  // still there, because we're allowing stale, and it's not stale
  const status: LRUCache.Status<number> = {}
  t.equal(
    await cache.fetch(2, {
      forceRefresh: true,
      allowStale: false,
      status,
    }),
    2
  )
  t.equal(status.fetch, 'refresh', 'status reflects forced refresh')
  t.equal(await cache.fetch(1, { forceRefresh: true }), 100)
  clock.advance(100)
  t.equal(
    await cache.fetch(2, { forceRefresh: true, status: s() }),
    2
  )
  t.equal(cache.peek(1), 100)
  // if we don't allow stale though, then that means that we wait
  // for the background fetch to complete, so we get the updated value.
  t.equal(await cache.fetch(1, { allowStale: false, status: s() }), 1)

  cache.set(1, 100)
  t.equal(await cache.fetch(1, { allowStale: false }), 100)
  t.equal(
    await cache.fetch(1, {
      forceRefresh: true,
      allowStale: false,
      status: s(),
    }),
    1
  )

  t.matchSnapshot(statuses, 'status updates')
})

t.test('allowStaleOnFetchRejection', async t => {
  let fetchFail = false
  const c = new LRU<number, number>({
    ttl: 10,
    max: 10,
    allowStaleOnFetchRejection: true,
    fetchMethod: async k => {
      if (fetchFail) throw new Error('fetch rejection')
      return k
    },
  })
  t.equal(await c.fetch(1), 1)
  clock.advance(11)
  fetchFail = true
  const status: LRUCache.Status<number> = {}
  t.equal(await c.fetch(1, { status }), 1)
  t.equal(
    status.returnedStale,
    true,
    'status reflects returned stale value'
  )
  t.equal(await c.fetch(1), 1)
  // if we override it, no go
  await t.rejects(c.fetch(1, { allowStaleOnFetchRejection: false }))
  // that also deletes from the cache
  t.equal(c.get(1), undefined)
})

t.test(
  'placeholder promise is not removed when resolving',
  async t => {
    const resolves: Record<number, (v: number) => void> = {}
    const c = new LRU<number, number>({
      maxSize: 10,
      sizeCalculation(v) {
        return v
      },
      fetchMethod: k => {
        return new Promise(resolve => (resolves[k] = resolve))
      },
    })
    const p3 = c.fetch(3)
    const p4 = c.fetch(4)
    const p5 = c.fetch(5)

    resolves[4]?.(4)
    await p4

    t.match([...c], [[4, 4]])
    resolves[5]?.(5)
    await p5
    t.match(
      [...c],
      [
        [5, 5],
        [4, 4],
      ]
    )

    resolves[3]?.(3)
    await p3
    t.same(
      [...c],
      [
        [3, 3],
        [5, 5],
      ]
    )

    t.equal(c.size, 2)
    t.equal([...c].length, 2)
  }
)

t.test('send a signal', async t => {
  const statuses: LRUCache.Status<number>[] = []
  const s = (): LRUCache.Status<number> => {
    const status: LRUCache.Status<number> = {}
    statuses.push(status)
    return status
  }

  let aborted: Error | undefined = undefined
  let resolved: boolean = false
  const c = new LRU<number, number>({
    max: 10,
    fetchMethod: async (k, _, { signal, options }) => {
      t.ok(options.status, 'has a status object')
      signal.addEventListener('abort', () => {
        aborted = signal.reason
      })
      return new Promise(res =>
        setTimeout(() => {
          resolved = true
          res(k)
        }, 100)
      )
    },
  })
  const ac = new AbortController()
  const p = c.fetch(1, { signal: ac.signal, status: s() })
  const er = new Error('custom abort signal')
  const testp = t.rejects(p, er)
  ac.abort(er)
  await testp
  t.equal(
    resolved,
    false,
    'should have aborted before fetchMethod resolved'
  )
  t.equal(aborted, er)
  t.equal(ac.signal.reason, er)
  t.equal(c.get(1, { status: s() }), undefined)
  t.matchSnapshot(statuses, 'status updates')
})

t.test('verify inflight works as expected', async t => {
  const statuses: LRUCache.Status<number>[] = []
  const s = (): LRUCache.Status<number> => {
    const status: LRUCache.Status<number> = {}
    statuses.push(status)
    return status
  }
  let called = 0
  const c = new LRUCache({
    max: 5,
    fetchMethod: async () => {
      called++
      await new Promise<void>(res => queueMicrotask(res))
      return {}
    },
  })
  const e = expose(c)
  c.fetch(1)
  const promises: Promise<any>[] = [
    c.fetch(1, { status: s() }),
    c.fetch(1),
    c.fetch(1, { status: s() }),
    c.fetch(1),
  ]
  t.match(e.valList, [Promise, null, null, null, null])
  t.equal(
    e.isBackgroundFetch(e.valList[0]),
    true,
    'is background fetch'
  )
  t.equal(c.get(1, { status: s() }), undefined, 'get while fetching')
  const a = await Promise.all(promises)
  for (let i = 1; i < a.length; i++) {
    t.equal(a[i], a[0], `index ${i} equal to first returned value`)
  }
  t.equal(called, 1, 'called one time')
  t.matchSnapshot(statuses, 'status updates')
})

t.test('abort, but then keep on fetching anyway', async t => {
  let aborted: Error | undefined = undefined
  let resolved: boolean = false
  let returnUndefined: boolean = false
  const cache = new LRU<number, number>({
    max: 10,
    ignoreFetchAbort: true,
    fetchMethod: async (k, _, { signal, options }) => {
      t.equal(options.ignoreFetchAbort, true, 'aborts ignored')
      signal.addEventListener('abort', () => {
        aborted = signal.reason
      })
      return new Promise(res =>
        setTimeout(() => {
          resolved = true
          if (returnUndefined) res()
          else res(k)
        }, 100)
      )
    },
  })
  const ac = new AbortController()
  const status: LRUCache.Status<number> = {}
  const p = cache.fetch(1, { signal: ac.signal, status })
  const er = new Error('ignored abort signal')
  ac.abort(er)
  clock.advance(100)
  t.equal(await p, 1)
  t.equal(
    status.fetchAbortIgnored,
    true,
    'status reflects ignored abort'
  )
  t.equal(status.fetchError, er)
  t.equal(status.fetchUpdated, true)

  t.equal(resolved, true, 'aborted, but resolved anyway')
  t.equal(aborted, er)
  t.equal(ac.signal.reason, er)
  t.equal(cache.get(1), 1)

  const p2 = cache.forceFetch(2)
  t.equal(cache.get(2), undefined)
  cache.delete(2)
  t.equal(cache.get(2), undefined)
  clock.advance(100)
  t.equal(await p2, 2)
  t.equal(cache.get(2), undefined)

  // if aborted for cause, we don't save the fetched value
  const p3 = cache.fetch(3)
  t.equal(cache.get(3), undefined)
  cache.set(3, 33)
  t.equal(cache.get(3), 33)
  clock.advance(100)
  t.equal(await p3, 3)
  t.equal(cache.get(3), 33)

  const e = expose(cache)
  returnUndefined = true
  const before = e.valList.slice()
  const p4 = cache.fetch(4)
  clock.advance(100)
  t.equal(await p4, undefined)
  const p5 = cache.forceFetch(4)
  clock.advance(100)
  await t.rejects(p5, { message: 'fetch() returned undefined' })
  t.same(e.valList, before, 'did not update values with undefined')
})

t.test('allowStaleOnFetchAbort', async t => {
  const c = new LRUCache<number, number, undefined>({
    ttl: 10,
    max: 10,
    allowStaleOnFetchAbort: true,
    fetchMethod: async (k, _, { signal }) => {
      return new Promise(res => {
        const t = setTimeout(() => res(k), 100)
        signal.addEventListener('abort', () => {
          clearTimeout(t)
          res()
        })
      })
    },
  })
  c.set(1, 10)
  clock.advance(100)
  const ac = new AbortController()
  const p = c.fetch(1, { signal: ac.signal })
  ac.abort(new Error('gimme the stale value'))
  t.equal(await p, 10)
  t.equal(
    c.get(1, { allowStale: true, noDeleteOnStaleGet: true }),
    10
  )
  const p2 = c.fetch(1)
  c.set(1, 100)
  t.equal(await p2, 10)
  t.equal(c.get(1), 100)
})

t.test('background update on timeout, return stale', async t => {
  let returnUndefined = false
  const c = new LRUCache<number, number, void>({
    ttl: 10,
    max: 10,
    ignoreFetchAbort: true,
    allowStaleOnFetchAbort: true,
    fetchMethod: async k => {
      return new Promise(res => {
        setTimeout(() => {
          res(returnUndefined ? undefined : k)
        }, 100)
      })
    },
  })
  const e = expose(c)
  c.set(1, 10)
  clock.advance(100)
  const ac = new AbortController()
  const p = c.fetch(1, { signal: ac.signal })
  await new Promise<void>(res => queueMicrotask(res))
  t.match(e.valList[0], { __staleWhileFetching: 10 })
  ac.abort(new Error('gimme the stale value'))
  t.equal(await p, 10)
  t.equal(c.get(1, { allowStale: true }), 10)
  clock.advance(200)
  await new Promise<void>(res => queueMicrotask(res)).then(() => {})
  t.equal(e.valList[0], 1, 'got updated value later')

  c.set(1, 99)
  clock.advance(100)
  returnUndefined = true
  const ac2 = new AbortController()
  const p2 = c.fetch(1, { signal: ac2.signal })
  await new Promise<void>(res => queueMicrotask(res))
  t.match(e.valList[0], { __staleWhileFetching: 99 })
  ac2.abort(new Error('gimme stale 99'))
  t.equal(await p2, 99)
  t.match(e.valList[0], { __staleWhileFetching: 99 })
  t.equal(c.get(1, { allowStale: true }), 99)
  t.match(e.valList[0], { __staleWhileFetching: 99 })
  clock.advance(200)
  await new Promise<void>(res => queueMicrotask(res))
  t.equal(e.valList[0], 99)
})

t.test('fetch context required if set in ctor type', async t => {
  const c = new LRUCache<string, string, { a: number }>({
    max: 5,
    fetchMethod: async (k, _, { context }) => {
      if (k === 'y') t.equal(context, undefined)
      else if (k === 'z') t.same(context, { x: 1 })
      else t.same(context, { a: 1 })
      return k
    },
  })
  c.fetch('x', { context: { a: 1 } })
  //@ts-expect-error
  c.fetch('y')
  //@ts-expect-error
  c.fetch('z', { context: { x: 1 } })

  const c2 = new LRUCache<string, string, void>({
    max: 5,
    fetchMethod: async (k, _, { context }) => {
      if (k === 'y') t.equal(context, undefined)
      else if (k === 'z') t.same(context, { x: 1 })
      else t.same(context, { a: 1 })
      return k
    },
  })
  //@ts-expect-error
  c2.fetch('x', { context: { a: 1 } })
  c2.fetch('y')
  c2.fetch('y', { allowStale: true })
  //@ts-expect-error
  c2.fetch('z', { context: { x: 1 } })

  t.end()
})

t.test('has false for pending fetch without stale val', async t => {
  const c = new LRUCache<number, number>({
    max: 10,
    fetchMethod: async (key: number) =>
      new Promise<number>(r => setTimeout(() => r(key), 10)),
  })
  const e = expose(c)
  {
    const p = c.fetch(1)
    const index = e.keyMap.get(1) as number
    t.not(index, undefined)
    const bf = e.valList[index] as BackgroundFetch<number>
    t.type(bf, Promise, 'pending fetch')
    t.equal(bf.hasOwnProperty('__staleWhileFetching'), true)
    t.equal(c.has(1), false)
    clock.advance(10)
    const res = await p
    t.equal(res, 1)
    t.equal(c.has(1), true)
  }

  {
    // background fetch that DOES have a __staleWhileFetching value
    const p = c.fetch(1, { forceRefresh: true })
    const index = e.keyMap.get(1) as number
    t.not(index, undefined)
    const bf = e.valList[index] as BackgroundFetch<number>
    t.type(bf, Promise, 'pending fetch')
    t.equal(bf.__staleWhileFetching, 1)
    t.equal(c.has(1), true)
    clock.advance(10)
    const res = await p
    t.equal(res, 1)
    t.equal(c.has(1), true)
  }
})

t.test('properly dispose when using fetch', async t => {
  const disposes: [number, number, string][] = []
  const disposeAfters: [number, number, string][] = []
  let i = 0
  const c = new LRUCache<number, number>({
    max: 3,
    ttl: 10,
    dispose: (key, val, reason) => disposes.push([key, val, reason]),
    disposeAfter: (key, val, reason) =>
      disposeAfters.push([key, val, reason]),
    fetchMethod: async () => Promise.resolve(i++),
  })
  t.equal(await c.fetch(1), 0)
  clock.advance(20)
  t.equal(await c.fetch(1), 1)
  t.strictSame(disposes, [[0, 1, 'set']])
  t.strictSame(disposeAfters, [[0, 1, 'set']])
})
