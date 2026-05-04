// this is used in CJS environments that do NOT follow the 'node' import
// condition, to avoid even trying to load node:diagnostics_channel
import {
  type Channel,
  type TracingChannel,
} from 'node:diagnostics_channel'
export type { TracingChannel, Channel }

const dummy = { hasSubscribers: false }
export const metrics = dummy as Channel<unknown>
export const tracing = dummy as TracingChannel<unknown>
