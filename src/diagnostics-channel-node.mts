// simple node version that imports from node builtin
import { tracingChannel, channel } from 'node:diagnostics_channel'
import type { TracingChannel, Channel } from 'node:diagnostics_channel'
export type { TracingChannel, Channel }
export const metrics: Channel<unknown> = channel('lru-cache:metrics')
export const tracing: TracingChannel<unknown> = tracingChannel('lru-cache')
