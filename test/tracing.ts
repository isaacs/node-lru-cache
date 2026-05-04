import t from 'tap'
import { tracingChannel, subscribe } from 'node:diagnostics_channel'
import type { LRUCache } from '../dist/esm/node/index.js'

const metrics: LRUCache.Status<unknown, unknown>[] = []

subscribe(
  'lru-cache:metrics',
  (message: unknown, name: string | symbol) => {
    const status = message as LRUCache.Status<unknown, unknown>
    t.equal(name, 'lru-cache:metrics')
    metrics.push(status)
  },
)
const traces = new Map<LRUCache.Status<unknown, unknown>, string[]>()

const trace = (name: string) => (message: unknown) => {
  const status = message as LRUCache.Status<unknown, unknown> & {
    error?: unknown
    result?: unknown
  }
  const ts: string[] = traces.get(status) ?? []
  ts.push(name)
  traces.set(status, ts)
}

tracingChannel('lru-cache').subscribe({
  start: trace('start'),
  asyncStart: trace('asyncStart'),
  asyncEnd: trace('asyncEnd'),
  error: trace('error'),
  end: trace('end'),
})

t.afterEach(childTest => {
  t.matchSnapshot(metrics, `${childTest.fullname} metrics`)
  t.matchSnapshot(traces, `${childTest.fullname} traces`)
  metrics.length = 0
  traces.clear()
})

import('./basic.js')
import('./dispose.js')
import('./fetch.js')
import('./lost-background-fetch.js')
import('./memo.js')
import('./reverse-iterate-delete-all.js')
import('./size-calculation.js')
import('./tracing.js')
import('./ttl.js')
import('./unbounded-warning.js')
