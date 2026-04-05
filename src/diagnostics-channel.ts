// simple node version that imports from node builtin
// this gets compiled to a require() commonjs-style override,
// not using top level await on a conditional dynamic import
import { tracingChannel, channel } from 'node:diagnostics_channel'
export { tracingChannel, channel }
import type { TracingChannel, Channel } from 'node:diagnostics_channel'
export type { TracingChannel, Channel }
export const metrics: Channel<unknown> = channel('lru-cache:metrics')
export const tracing: TracingChannel<unknown> = tracingChannel('lru-cache')
