import { getEventListeners } from 'node:events'
import t from 'tap'
import { LRUCache } from '../dist/esm/node/index.js'

const listeners = (signal: AbortSignal) =>
  getEventListeners(signal, 'abort').length

t.test('no abort listeners left on their signal', async t => {
  const ac = new AbortController()
  const { signal } = ac
  const c = new LRUCache<number, string>({
    max: 3,
    fetchMethod: async n => {
      if (n % 3 === 2) throw new Error('fetch failed')
      return String(n)
    },
  })
  t.equal(listeners(signal), 0)

  const pending = [c.fetch(0, { signal }), c.fetch(1, { signal })]
  t.equal(listeners(signal), 2, 'listening while fetches are pending')
  t.same(await Promise.all(pending), ['0', '1'])
  t.equal(listeners(signal), 0, 'removed when the fetches resolve')

  await t.rejects(c.fetch(2, { signal }), { message: 'fetch failed' })
  t.equal(listeners(signal), 0, 'removed when a fetch rejects')

  for (let i = 3; i < 500; i++) {
    await c.fetch(i, { signal }).catch(() => {})
  }
  t.equal(listeners(signal), 0, 'no accumulation over many fetches')
  t.equal(signal.aborted, false)
})

t.test('sync fetchMethod, and fetchMethod that throws', async t => {
  const { signal } = new AbortController()
  const sync = new LRUCache<number, string>({
    max: 3,
    fetchMethod: n => String(n),
  })
  t.equal(await sync.fetch(1, { signal }), '1')
  t.equal(listeners(signal), 0)

  const throws = new LRUCache<number, string>({
    max: 3,
    fetchMethod: () => {
      throw new Error('sync throw')
    },
  })
  await t.rejects(throws.fetch(1, { signal }), { message: 'sync throw' })
  t.equal(listeners(signal), 0)
})

t.test(
  'aborting their signal mid-fetch still aborts the fetch',
  async t => {
    const reason = new Error('stop it')
    let seen: AbortSignal | undefined
    const c = new LRUCache<number, string>({
      max: 3,
      fetchMethod: (_k, _v, { signal }) => {
        seen = signal
        return new Promise((_res, rej) =>
          signal.addEventListener('abort', () => rej(signal.reason)),
        )
      },
    })
    const ac = new AbortController()
    const p = c.fetch(1, { signal: ac.signal })
    t.equal(listeners(ac.signal), 1)
    t.equal(seen?.aborted, false)
    ac.abort(reason)
    t.equal(seen?.aborted, true, 'abort passed to the fetchMethod')
    t.equal(seen?.reason, reason)
    await t.rejects(p, reason)
    t.equal(listeners(ac.signal), 0)
    t.equal(c.has(1), false)
  },
)

t.test('abort mid-fetch with allowStaleOnFetchAbort', async t => {
  let n = 0
  const c = new LRUCache<number, string>({
    max: 3,
    ttl: 10,
    allowStale: true,
    allowStaleOnFetchAbort: true,
    fetchMethod: (_k, _v, { signal }) =>
      new Promise((res, rej) => {
        const i = ++n
        const timer = setTimeout(() => res('fetched ' + i), 20)
        signal.addEventListener('abort', () => {
          clearTimeout(timer)
          rej(signal.reason)
        })
      }),
  })
  c.set(1, 'stale')
  await new Promise(r => setTimeout(r, 15))
  const ac = new AbortController()
  const p = c.fetch(1, { signal: ac.signal })
  t.equal(listeners(ac.signal), 1)
  ac.abort(new Error('stop it'))
  t.equal(await p, 'stale')
  t.equal(listeners(ac.signal), 0)
})

t.test('their signal is already aborted', async t => {
  const reason = new Error('already aborted')
  const ac = new AbortController()
  ac.abort(reason)
  const seen: boolean[] = []
  const status: LRUCache.Status<number, string> = {}
  const c = new LRUCache<number, string>({
    max: 3,
    fetchMethod: async (_k, _v, { signal }) => {
      seen.push(signal.aborted)
      return 'value'
    },
  })
  await t.rejects(c.fetch(1, { signal: ac.signal, status }), reason)
  t.same(seen, [true], 'fetchMethod is called with an aborted signal')
  t.equal(status.fetchAborted, true)
  t.equal(status.fetchError, reason)
  t.equal(c.has(1), false, 'nothing cached')
  t.equal(listeners(ac.signal), 0)

  // same as it would be if they aborted right after calling fetch()
  const ac2 = new AbortController()
  const p = c.fetch(2, { signal: ac2.signal })
  ac2.abort(reason)
  await t.rejects(p, reason)
  t.equal(c.has(2), false)

  // abort is ignored when asked to, like any other abort
  const ignore = new LRUCache<number, string>({
    max: 3,
    ignoreFetchAbort: true,
    fetchMethod: async () => 'value',
  })
  t.equal(await ignore.fetch(1, { signal: ac.signal }), 'value')
  t.equal(ignore.get(1), 'value')
})

t.test('fetched values are not kept alive by their signal', async t => {
  if (typeof gc !== 'function') {
    t.comment('run with --expose-gc')
    return
  }
  const { signal } = new AbortController()
  const c = new LRUCache<number, object>({
    max: 1,
    fetchMethod: async () => ({}),
  })
  const refs: WeakRef<object>[] = []
  for (let i = 0; i < 50; i++) {
    refs.push(new WeakRef(await c.fetch(i, { signal })))
  }
  // WeakRef targets are kept until the end of the job that made them
  await new Promise(r => setTimeout(r, 10))
  gc()
  await new Promise(r => setTimeout(r, 10))
  gc()
  // the cache holds the most recent one
  const alive = refs.filter(r => r.deref() !== undefined).length
  t.equal(alive, 1, 'only the value in the cache is still alive')
  t.equal(c.size, 1)
})
