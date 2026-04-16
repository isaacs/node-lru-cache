// This is used in ESM environments that do NOT follow the 'node' or 'browser'
// import conditions. So, `node:diagnostics_channel` MAY be present.
// Note that this is overridden in 'browser' conditional branch, because the
// dynamic import can confound bundlers and cause CSP violations in browsers.
import {
  type Channel,
  type TracingChannel,
} from 'node:diagnostics_channel'
export type { TracingChannel, Channel }

/**
 * no-op polyfills for non-node environments. tries to load the actual
 * diagnostics_channel module on platforms that support it, but fails
 * gracefully if not found. This means that the first tick of metrics
 * and tracing will be missed, but that probably doesn't matter much.
 */

// conditionally import from diagnostic_channel, fall back to dummyfill
// all we actually have to mock is the hasSubscribers, since we always check
/* v8 ignore next */
const dummy = { hasSubscribers: false }
export let metrics = dummy as Channel<unknown>
export let tracing = dummy as TracingChannel<unknown>
import('node:diagnostics_channel')
  .then(dc => {
    metrics = dc.channel('lru-cache:metrics')
    tracing = dc.tracingChannel('lru-cache')
  })
  .catch(() => {})
