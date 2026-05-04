// this is used in ESM environments that follow the 'browser' import
// condition, to avoid even trying to load node:diagnostics_channel
import {
  type Channel,
  type TracingChannel,
} from 'node:diagnostics_channel'
export type { TracingChannel, Channel }

const dummy = { hasSubscribers: false }
export const metrics = dummy as Channel<unknown>
export const tracing = dummy as TracingChannel<unknown>
