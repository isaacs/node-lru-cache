/**
 * this provides the default Perf object source, either the
 * `performance` global, or the `Date` constructor.
 *
 * it can be passed in via configuration to override it
 * for a single LRU object.
 */
export type Perf = { now: () => number }
export const defaultPerf: Perf =
  (
    typeof performance === 'object' &&
    performance &&
    typeof performance.now === 'function'
  ) ?
    /* c8 ignore start - this gets covered, but c8 gets confused */
    performance
  : /* c8 ignore stop */
    Date
