import t from 'tap'
import { LRUCache } from '../dist/esm/node/index.js'

for (const refreshing of [false, true]) {
  for (const suppression of ['call', 'default', 'override']) {
    for (const ignoreFetchAbort of [false, true]) {
      t.test(
        'replace ' +
          (refreshing ? 'refresh' : 'miss') +
          ', suppression=' +
          suppression +
          ', ignoreAbort=' +
          ignoreFetchAbort,
        async t => {
          let finish!: (value: number) => void
          let signal!: AbortSignal
          const disposed: unknown[] = []
          const after: unknown[] = []
          const cache = new LRUCache<string, number>({
            max: 1,
            noDisposeOnSet: suppression !== 'call',
            dispose: (...event) => disposed.push(event),
            disposeAfter: (...event) => after.push(event),
            fetchMethod: (_key, _previous, options) => {
              signal = options.signal
              return new Promise<number>(resolve => {
                finish = resolve
              })
            },
          })
          if (refreshing) cache.set('key', 0)
          const pending = cache.fetch('key', {
            forceRefresh: refreshing,
            ignoreFetchAbort,
          })
          const result = pending.then(
            value => ({ value }),
            error => ({ error }),
          )
          try {
            const options =
              suppression === 'default' ?
                {}
              : { noDisposeOnSet: suppression === 'call' }
            cache.set('key', 99, options)
            t.equal(
              signal.aborted,
              true,
              'replacement cancels the provider',
            )
            t.equal(cache.get('key'), 99, 'replacement is stored')
            const expected =
              refreshing && suppression === 'override' ?
                [[0, 'key', 'set']]
              : []
            t.same(
              disposed,
              expected,
              'only disposal hooks are suppressed',
            )
            t.same(after, expected, 'after-hooks honor the same override')
            finish(10)
            if (ignoreFetchAbort) {
              t.same(
                await result,
                { value: 10 },
                'explicit abort opt-out remains',
              )
            } else {
              t.match(
                await result,
                { error: { message: 'replaced' } },
                'waiting caller rejects the obsolete fetch',
              )
            }
            t.equal(
              cache.get('key'),
              99,
              'late result cannot overwrite replacement',
            )
            t.equal(cache.size, 1, 'replacement remains the sole entry')
          } finally {
            finish(10)
            await result
          }
        },
      )
    }
  }
}

t.test('settling a fetch does not cancel its own provider', async t => {
  const signals: AbortSignal[] = []
  let value = 0
  const cache = new LRUCache<string, number>({
    max: 1,
    noDisposeOnSet: true,
    fetchMethod: async (_key, _previous, { signal }) => {
      signals.push(signal)
      return value++
    },
  })
  t.equal(await cache.fetch('key'), 0)
  t.equal(await cache.fetch('key', { forceRefresh: true }), 1)
  t.same(
    signals.map(signal => signal.aborted),
    [false, false],
    'normal completion is not a replacement',
  )
  t.equal(cache.get('key'), 1)
})
