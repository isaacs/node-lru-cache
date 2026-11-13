import t from 'tap'
import { LRUCache } from '../dist/esm/node/index.js'

type Value = number | boolean | string | { resource: string }
type Event = [Value, string, LRUCache.DisposeReason]

const values: Value[] = [0, false, '', NaN, { resource: 'open' }]
const modes = ['dispose', 'after', 'both'] as const
const removals = ['delete last', 'delete with peer', 'clear'] as const

for (const mode of modes) {
  for (const removal of removals) {
    for (const value of values) {
      t.test(`${mode}: ${removal}, previous ${String(value)}`, async t => {
        const disposed: Event[] = []
        const after: Event[] = []
        let finish!: (value: Value) => void
        let signal!: AbortSignal
        const cache = new LRUCache<string, Value>({
          max: 2,
          noDisposeOnSet: true,
          dispose:
            mode === 'after' ? undefined : (
              (v, k, r) => disposed.push([v, k, r])
            ),
          disposeAfter:
            mode === 'dispose' ? undefined : (
              (v, k, r) => after.push([v, k, r])
            ),
          fetchMethod: (_key, _previous, options) => {
            signal = options.signal
            return new Promise(resolve => (finish = resolve))
          },
        })
        cache.set('key', value)
        if (removal === 'delete with peer') cache.set('peer', 'retained')
        const work = cache
          .fetch('key', { forceRefresh: true })
          .catch(e => e)
        if (removal === 'clear') cache.clear()
        else t.equal(cache.delete('key'), true)
        const expected: Event[] = [[value, 'key', 'delete']]
        t.strictSame(disposed, mode === 'after' ? [] : expected)
        t.strictSame(after, mode === 'dispose' ? [] : expected)
        t.equal(signal.aborted, true)
        t.equal(cache.size, removal === 'delete with peer' ? 1 : 0)
        t.equal(cache.peek('key'), undefined)
        if (removal === 'delete with peer') {
          t.equal(cache.peek('peer'), 'retained')
        }
        // A late provider result must neither restore the entry nor dispose
        // the previous value a second time.
        finish('late')
        t.type(await work, Error)
        t.equal(cache.peek('key'), undefined)
        t.strictSame(disposed, mode === 'after' ? [] : expected)
        t.strictSame(after, mode === 'dispose' ? [] : expected)
      })
    }
  }
}

for (const removal of removals) {
  t.test(
    `${removal}: a pending miss has no user value to dispose`,
    async t => {
      const disposed: Event[] = []
      const after: Event[] = []
      let finish!: (value: Value) => void
      const cache = new LRUCache<string, Value>({
        max: 2,
        dispose: (v, k, r) => disposed.push([v, k, r]),
        disposeAfter: (v, k, r) => after.push([v, k, r]),
        fetchMethod: () => new Promise(resolve => (finish = resolve)),
      })
      if (removal === 'delete with peer') cache.set('peer', 'retained')
      const work = cache.fetch('key').catch(e => e)
      if (removal === 'clear') cache.clear()
      else cache.delete('key')
      t.strictSame(disposed, [])
      t.strictSame(after, [])
      finish('late')
      t.type(await work, Error)
      t.strictSame(disposed, [])
      t.strictSame(after, [])
    },
  )
}

for (const policy of ['delete', 'keep', 'stale'] as const) {
  t.test(`rejected refresh: ${policy}`, async t => {
    const disposed: Event[] = []
    const after: Event[] = []
    let reject!: (error: Error) => void
    const cache = new LRUCache<string, Value>({
      max: 2,
      dispose: (v, k, r) => disposed.push([v, k, r]),
      disposeAfter: (v, k, r) => after.push([v, k, r]),
      fetchMethod: () => new Promise((_resolve, rej) => (reject = rej)),
    })
    cache.set('key', 0).set('peer', 'retained')
    const work = cache
      .fetch('key', {
        forceRefresh: true,
        noDeleteOnFetchRejection: policy === 'keep',
        allowStaleOnFetchRejection: policy === 'stale',
      })
      .catch(e => e)
    const error = new Error('provider failed')
    reject(error)
    t.equal(await work, policy === 'stale' ? 0 : error)
    t.equal(cache.peek('key'), policy === 'delete' ? undefined : 0)
    const expected: Event[] =
      policy === 'delete' ? [[0, 'key', 'fetch']] : []
    t.strictSame(disposed, expected)
    t.strictSame(after, expected)
    t.equal(cache.peek('peer'), 'retained')
  })
}

t.test(
  'expiry of a refreshing value disposes it with the expiry reason',
  async t => {
    const disposed: Event[] = []
    const after: Event[] = []
    let finish!: (value: Value) => void
    let now = 1
    const cache = new LRUCache<string, Value>({
      max: 1,
      ttl: 1,
      ttlResolution: 0,
      perf: { now: () => now },
      dispose: (v, k, r) => disposed.push([v, k, r]),
      disposeAfter: (v, k, r) => after.push([v, k, r]),
      fetchMethod: () => new Promise(resolve => (finish = resolve)),
    })
    cache.set('key', false)
    const work = cache.fetch('key', { forceRefresh: true }).catch(e => e)
    now = 3
    t.equal(cache.purgeStale(), true)
    t.strictSame(disposed, [[false, 'key', 'expire']])
    t.strictSame(after, [[false, 'key', 'expire']])
    finish('late')
    t.type(await work, Error)
    t.equal(cache.size, 0)
  },
)
