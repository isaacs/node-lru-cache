import t from 'tap'
import actualDC from 'node:diagnostics_channel'

t.test('diagnostics channel fills in after import', async t => {
  let initialized: () => void = () => {}
  const ready = new Promise<void>(resolve => {
    initialized = resolve
  })
  const dc = await t.mockImport<
    typeof import('../src/diagnostics-channel-esm.mjs')
  >('../src/diagnostics-channel-esm.mjs', {
    'node:diagnostics_channel': {
      ...actualDC,
      tracingChannel: (name: string) => {
        const channel = actualDC.tracingChannel(name)
        initialized()
        return channel
      },
    },
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

  // The dynamic import can finish before or after mockImport resolves.
  // Wait for initialization itself, rather than assuming either ordering.
  t.equal(actualDC.channel('lru-cache:metrics').hasSubscribers, true)
  t.equal(tc.hasSubscribers, true)
  await ready
  t.equal(dc.metrics, actualDC.channel('lru-cache:metrics'))
  t.equal(dc.tracing.start, tc.start)
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
      get channel() {
        throw new Error('no metrics channel for you!')
      },
      get tracingChannel() {
        throw new Error('no tracingChannel for you!')
      },
      get default() {
        throw new Error('no default for you!')
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
