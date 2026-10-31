import t from 'tap'
import { channel, tracingChannel } from 'node:diagnostics_channel'
import { LRUCache } from '../dist/esm/node/index.js'

const methods = [
  'set',
  'get',
  'has',
  'peek',
  'memo',
  'fetch',
  'forceFetch',
] as const

t.test('reusing options does not reuse generated status', t => {
  let now = 1
  const cache = new LRUCache<string, number>({
    max: 10,
    ttl: 1,
    ttlResolution: 0,
    perf: { now: () => now },
  })
  cache.set('one', 1)
  cache.set('two', 2)
  const metrics = channel('lru-cache:metrics')
  const messages: unknown[] = []
  const listener = (message: unknown) => {
    if ((message as LRUCache.Status<string, number>).op === 'get') {
      messages.push(message)
    }
  }
  metrics.subscribe(listener)
  t.teardown(() => metrics.unsubscribe(listener))
  now = 3
  const options = Object.create({ allowStale: true })
  t.equal(cache.get('one', options), 1)
  t.equal(cache.get('two', options), 2)
  t.same(Object.keys(options), [])
  t.not(messages[0], messages[1])
  t.match(messages, [{ key: 'one' }, { key: 'two' }])
  t.end()
})

for (const subscribed of [false, true]) {
  t.test(`frozen options, diagnostics ${subscribed}`, async t => {
    const metrics = channel('lru-cache:metrics')
    const tracing = tracingChannel('lru-cache')
    const messages: unknown[] = []
    const listener = (message: unknown) => messages.push(message)
    const handlers = { start: listener }
    if (subscribed) {
      metrics.subscribe(listener)
      tracing.subscribe(handlers)
      t.teardown(() => {
        metrics.unsubscribe(listener)
        tracing.unsubscribe(handlers)
      })
    }

    for (const method of methods) {
      for (const explicitStatus of [false, true]) {
        await t.test(`${method}, status ${explicitStatus}`, async t => {
          const cache = new LRUCache<string, number>({
            max: 10,
            memoMethod: () => 2,
            fetchMethod: async () => 3,
          })
          cache.set('key', 1)
          messages.length = 0
          const status: LRUCache.Status<string, number> = {}
          const options = Object.freeze(
            Object.defineProperty(
              explicitStatus ? { status } : {},
              'forceRefresh',
              { value: true },
            ),
          )
          const result =
            method === 'set' ?
              cache.set('key', 4, options)
            : await cache[method]('key', options)
          const expected =
            method === 'set' ? cache
            : method === 'has' ? true
            : method === 'memo' ? 2
            : method === 'fetch' || method === 'forceFetch' ? 3
            : 1
          t.equal(result, expected)
          t.equal(Object.hasOwn(options, 'status'), explicitStatus)
          if (explicitStatus) {
            t.equal(options.status, status)
            t.equal(status.op, method === 'forceFetch' ? 'fetch' : method)
            t.equal(status.key, 'key')
          }
          if (subscribed) {
            t.ok(messages.length)
            if (explicitStatus) t.ok(messages.includes(status))
          }
        })
      }
    }
  })
}
