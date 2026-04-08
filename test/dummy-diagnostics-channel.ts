import t from 'tap'
import actualDC from 'node:diagnostics_channel'

t.test('diagnostics channel loads polyfills then fills in', async t => {
  const dc = await t.mockImport<
    typeof import('../src/diagnostics-channel-esm.mjs')
  >('../src/diagnostics-channel-esm.mjs', {
    'node:diagnostics_channel': actualDC,
  })
  actualDC.subscribe('lru-cache:metrics', () => {})
  const tc = actualDC.tracingChannel('lru-cache')
  tc.subscribe({
    start: () => {},
    asyncStart: () => {},
    asyncEnd: () => {},
    error: () => {},
    end: () => {},
  })

  // verify that the dummies were only used until being loaded
  t.equal(dc.metrics.hasSubscribers, false)
  t.equal(dc.tracing.hasSubscribers, false)
  t.equal(actualDC.channel('lru-cache:metrics').hasSubscribers, true)
  t.equal(tc.hasSubscribers, true)
  await new Promise<void>(res => setTimeout(res))
  t.equal(dc.metrics.hasSubscribers, true)
  t.equal(dc.tracing.hasSubscribers, true)
  t.equal(actualDC.channel('lru-cache:metrics').hasSubscribers, true)
  t.equal(tc.hasSubscribers, true)
})

t.test('dummy dc that just says no subs', async t => {
  const dc = await t.mockImport<
    typeof import('../src/diagnostics-channel-esm.mjs')
  >('../src/diagnostics-channel-esm.mjs', {
    'node:diagnostics_channel': {
      get default() {
        throw new Error('no diagnostics channel for you!')
      },
    },
  })
  t.equal(dc.metrics.hasSubscribers, false)
  t.equal(dc.tracing.hasSubscribers, false)
  // these still have subs from previous test though
  t.equal(actualDC.channel('lru-cache:metrics').hasSubscribers, true)
  t.equal(actualDC.tracingChannel('lru-cache').hasSubscribers, true)
  await new Promise<void>(res => setTimeout(res))
  // still dummies
  t.equal(dc.metrics.hasSubscribers, false)
  t.equal(dc.tracing.hasSubscribers, false)
})
