/**
 * @module LRUCache
 */

// module-private names and types
type Perf = { now: () => number }
const perf: Perf =
  typeof performance === 'object' &&
  performance &&
  typeof performance.now === 'function'
    ? performance
    : Date

const warned = new Set<string>()

// either a function or a class
type ForC = ((...a: any[]) => any) | { new (...a: any[]): any }

/* c8 ignore start */
const PROCESS = (
  typeof process === 'object' && !!process ? process : {}
) as { [k: string]: any }
/* c8 ignore start */

const emitWarning = (
  msg: string,
  type: string,
  code: string,
  fn: ForC
) => {
  typeof PROCESS.emitWarning === 'function'
    ? PROCESS.emitWarning(msg, type, code, fn)
    : console.error(`[${code}] ${type}: ${msg}`)
}

let AC = globalThis.AbortController
let AS = globalThis.AbortSignal

/* c8 ignore start */
if (typeof AC === 'undefined') {
  //@ts-ignore
  AS = class AbortSignal {
    onabort?: (...a: any[]) => any
    _onabort: ((...a: any[]) => any)[] = []
    reason?: any
    aborted: boolean = false
    addEventListener(_: string, fn: (...a: any[]) => any) {
      this._onabort.push(fn)
    }
  }
  //@ts-ignore
  AC = class AbortController {
    constructor() {
      warnACPolyfill()
    }
    signal = new AS()
    abort(reason: any) {
      if (this.signal.aborted) return
      //@ts-ignore
      this.signal.reason = reason
      //@ts-ignore
      this.signal.aborted = true
      //@ts-ignore
      for (const fn of this.signal._onabort) {
        fn(reason)
      }
      this.signal.onabort?.(reason)
    }
  }
  let printACPolyfillWarning =
    PROCESS.env?.LRU_CACHE_IGNORE_AC_WARNING !== '1'
  const warnACPolyfill = () => {
    if (!printACPolyfillWarning) return
    printACPolyfillWarning = false
    emitWarning(
      'AbortController is not defined. If using lru-cache in ' +
        'node 14, load an AbortController polyfill from the ' +
        '`node-abort-controller` package. A minimal polyfill is ' +
        'provided for use by LRUCache.fetch(), but it should not be ' +
        'relied upon in other contexts (eg, passing it to other APIs that ' +
        'use AbortController/AbortSignal might have undesirable effects). ' +
        'You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.',
      'NO_ABORT_CONTROLLER',
      'ENOTSUP',
      warnACPolyfill
    )
  }
}
/* c8 ignore stop */

const shouldWarn = (code: string) => !warned.has(code)

const TYPE = Symbol('type')
export type PosInt = number & { [TYPE]: 'Positive Integer' }
export type Index = number & { [TYPE]: 'LRUCache Index' }

const isPosInt = (n: any): n is PosInt =>
  n && n === Math.floor(n) && n > 0 && isFinite(n)

export type UintArray = Uint8Array | Uint16Array | Uint32Array
export type NumberArray = UintArray | number[]

/* c8 ignore start */
// This is a little bit ridiculous, tbh.
// The maximum array length is 2^32-1 or thereabouts on most JS impls.
// And well before that point, you're caching the entire world, I mean,
// that's ~32GB of just integers for the next/prev links, plus whatever
// else to hold that many keys and values.  Just filling the memory with
// zeroes at init time is brutal when you get that big.
// But why not be complete?
// Maybe in the future, these limits will have expanded.
const getUintArray = (max: number) =>
  !isPosInt(max)
    ? null
    : max <= Math.pow(2, 8)
    ? Uint8Array
    : max <= Math.pow(2, 16)
    ? Uint16Array
    : max <= Math.pow(2, 32)
    ? Uint32Array
    : max <= Number.MAX_SAFE_INTEGER
    ? ZeroArray
    : null
/* c8 ignore stop */

class ZeroArray extends Array<number> {
  constructor(size: number) {
    super(size)
    this.fill(0)
  }
}
export type { ZeroArray }
export type { Stack }

export type StackLike = Stack | Index[]
class Stack {
  heap: NumberArray
  length: number
  // private constructor
  static #constructing: boolean = false
  static create(max: number): StackLike {
    const HeapCls = getUintArray(max)
    if (!HeapCls) return []
    Stack.#constructing = true
    const s = new Stack(max, HeapCls)
    Stack.#constructing = false
    return s
  }
  constructor(
    max: number,
    HeapCls: { new (n: number): NumberArray }
  ) {
    /* c8 ignore start */
    if (!Stack.#constructing) {
      throw new TypeError('instantiate Stack using Stack.create(n)')
    }
    /* c8 ignore stop */
    this.heap = new HeapCls(max)
    this.length = 0
  }
  push(n: Index) {
    this.heap[this.length++] = n
  }
  pop(): Index {
    return this.heap[--this.length] as Index
  }
}

/**
 * Promise representing an in-progress {@link LRUCache#fetch} call
 */
export type BackgroundFetch<V> = Promise<V | undefined> & {
  __returned: BackgroundFetch<V> | undefined
  __abortController: AbortController
  __staleWhileFetching: V | undefined
}

export type DisposeTask<K, V> = [
  value: V,
  key: K,
  reason: LRUCache.DisposeReason
]

export namespace LRUCache {
  /**
   * An integer greater than 0, reflecting the calculated size of items
   */
  export type Size = number

  /**
   * Integer greater than 0, representing some number of milliseconds, or the
   * time at which a TTL started counting from.
   */
  export type Milliseconds = number

  /**
   * An integer greater than 0, reflecting a number of items
   */
  export type Count = number

  /**
   * The reason why an item was removed from the cache, passed
   * to the {@link Disposer} methods.
   *
   * - `evict`: The item was evicted because it is the least recently used,
   *   and the cache is full.
   * - `set`: A new value was set, overwriting the old value being disposed.
   * - `delete`: The item was explicitly deleted, either by calling
   *   {@link LRUCache#delete}, {@link LRUCache#clear}, or
   *   {@link LRUCache#set} with an undefined value.
   * - `expire`: The item was removed due to exceeding its TTL.
   * - `fetch`: A {@link OptionsBase#fetchMethod} operation returned
   *   `undefined` or was aborted, causing the item to be deleted.
   */
  export type DisposeReason =
    | 'evict'
    | 'set'
    | 'delete'
    | 'expire'
    | 'fetch'
  /**
   * A method called upon item removal, passed as the
   * {@link OptionsBase.dispose} and/or
   * {@link OptionsBase.disposeAfter} options.
   */
  export type Disposer<K, V> = (
    value: V,
    key: K,
    reason: DisposeReason
  ) => void

  /**
   * The reason why an item was added to the cache, passed
   * to the {@link Inserter} methods.
   *
   * - `add`: the item was not found in the cache, and was added
   * - `update`: the item was in the cache, with the same value provided
   * - `replace`: the item was in the cache, and replaced
   */
  export type InsertReason = 'add' | 'update' | 'replace'

  /**
   * A method called upon item insertion, passed as the
   * {@link OptionsBase.insert}
   */
  export type Inserter<K, V> = (
    value: V,
    key: K,
    reason: InsertReason
  ) => void

  /**
   * A function that returns the effective calculated size
   * of an entry in the cache.
   */
  export type SizeCalculator<K, V> = (value: V, key: K) => Size

  /**
   * Options provided to the
   * {@link OptionsBase.fetchMethod} function.
   */
  export interface FetcherOptions<K, V, FC = unknown> {
    signal: AbortSignal
    options: FetcherFetchOptions<K, V, FC>
    /**
     * Object provided in the {@link FetchOptions.context} option to
     * {@link LRUCache#fetch}
     */
    context: FC
  }

  /**
   * Occasionally, it may be useful to track the internal behavior of the
   * cache, particularly for logging, debugging, or for behavior within the
   * `fetchMethod`. To do this, you can pass a `status` object to the
   * {@link LRUCache#fetch}, {@link LRUCache#get}, {@link LRUCache#set},
   * {@link LRUCache#memo}, and {@link LRUCache#has} methods.
   *
   * The `status` option should be a plain JavaScript object. The following
   * fields will be set on it appropriately, depending on the situation.
   */
  export interface Status<V> {
    /**
     * The status of a set() operation.
     *
     * - add: the item was not found in the cache, and was added
     * - update: the item was in the cache, with the same value provided
     * - replace: the item was in the cache, and replaced
     * - miss: the item was not added to the cache for some reason
     */
    set?: 'add' | 'update' | 'replace' | 'miss'

    /**
     * the ttl stored for the item, or undefined if ttls are not used.
     */
    ttl?: Milliseconds

    /**
     * the start time for the item, or undefined if ttls are not used.
     */
    start?: Milliseconds

    /**
     * The timestamp used for TTL calculation
     */
    now?: Milliseconds

    /**
     * the remaining ttl for the item, or undefined if ttls are not used.
     */
    remainingTTL?: Milliseconds

    /**
     * The calculated size for the item, if sizes are used.
     */
    entrySize?: Size

    /**
     * The total calculated size of the cache, if sizes are used.
     */
    totalCalculatedSize?: Size

    /**
     * A flag indicating that the item was not stored, due to exceeding the
     * {@link OptionsBase.maxEntrySize}
     */
    maxEntrySizeExceeded?: true

    /**
     * The old value, specified in the case of `set:'update'` or
     * `set:'replace'`
     */
    oldValue?: V

    /**
     * The results of a {@link LRUCache#has} operation
     *
     * - hit: the item was found in the cache
     * - stale: the item was found in the cache, but is stale
     * - miss: the item was not found in the cache
     */
    has?: 'hit' | 'stale' | 'miss'

    /**
     * The status of a {@link LRUCache#fetch} operation.
     * Note that this can change as the underlying fetch() moves through
     * various states.
     *
     * - inflight: there is another fetch() for this key which is in process
     * - get: there is no {@link OptionsBase.fetchMethod}, so
     *   {@link LRUCache#get} was called.
     * - miss: the item is not in cache, and will be fetched.
     * - hit: the item is in the cache, and was resolved immediately.
     * - stale: the item is in the cache, but stale.
     * - refresh: the item is in the cache, and not stale, but
     *   {@link FetchOptions.forceRefresh} was specified.
     */
    fetch?: 'get' | 'inflight' | 'miss' | 'hit' | 'stale' | 'refresh'

    /**
     * The {@link OptionsBase.fetchMethod} was called
     */
    fetchDispatched?: true

    /**
     * The cached value was updated after a successful call to
     * {@link OptionsBase.fetchMethod}
     */
    fetchUpdated?: true

    /**
     * The reason for a fetch() rejection.  Either the error raised by the
     * {@link OptionsBase.fetchMethod}, or the reason for an
     * AbortSignal.
     */
    fetchError?: Error

    /**
     * The fetch received an abort signal
     */
    fetchAborted?: true

    /**
     * The abort signal received was ignored, and the fetch was allowed to
     * continue.
     */
    fetchAbortIgnored?: true

    /**
     * The fetchMethod promise resolved successfully
     */
    fetchResolved?: true

    /**
     * The fetchMethod promise was rejected
     */
    fetchRejected?: true

    /**
     * The status of a {@link LRUCache#get} operation.
     *
     * - fetching: The item is currently being fetched.  If a previous value
     *   is present and allowed, that will be returned.
     * - stale: The item is in the cache, and is stale.
     * - hit: the item is in the cache
     * - miss: the item is not in the cache
     */
    get?: 'stale' | 'hit' | 'miss'

    /**
     * A fetch or get operation returned a stale value.
     */
    returnedStale?: true
  }

  /**
   * options which override the options set in the LRUCache constructor
   * when calling {@link LRUCache#fetch}.
   *
   * This is the union of {@link GetOptions} and {@link SetOptions}, plus
   * {@link OptionsBase.noDeleteOnFetchRejection},
   * {@link OptionsBase.allowStaleOnFetchRejection},
   * {@link FetchOptions.forceRefresh}, and
   * {@link FetcherOptions.context}
   *
   * Any of these may be modified in the {@link OptionsBase.fetchMethod}
   * function, but the {@link GetOptions} fields will of course have no
   * effect, as the {@link LRUCache#get} call already happened by the time
   * the fetchMethod is called.
   */
  export interface FetcherFetchOptions<K, V, FC = unknown>
    extends Pick<
      OptionsBase<K, V, FC>,
      | 'allowStale'
      | 'updateAgeOnGet'
      | 'noDeleteOnStaleGet'
      | 'sizeCalculation'
      | 'ttl'
      | 'noDisposeOnSet'
      | 'noUpdateTTL'
      | 'noDeleteOnFetchRejection'
      | 'allowStaleOnFetchRejection'
      | 'ignoreFetchAbort'
      | 'allowStaleOnFetchAbort'
    > {
    status?: Status<V>
    size?: Size
  }

  /**
   * Options that may be passed to the {@link LRUCache#fetch} method.
   */
  export interface FetchOptions<K, V, FC>
    extends FetcherFetchOptions<K, V, FC> {
    /**
     * Set to true to force a re-load of the existing data, even if it
     * is not yet stale.
     */
    forceRefresh?: boolean
    /**
     * Context provided to the {@link OptionsBase.fetchMethod} as
     * the {@link FetcherOptions.context} param.
     *
     * If the FC type is specified as unknown (the default),
     * undefined or void, then this is optional.  Otherwise, it will
     * be required.
     */
    context?: FC
    signal?: AbortSignal
    status?: Status<V>
  }
  /**
   * Options provided to {@link LRUCache#fetch} when the FC type is something
   * other than `unknown`, `undefined`, or `void`
   */
  export interface FetchOptionsWithContext<K, V, FC>
    extends FetchOptions<K, V, FC> {
    context: FC
  }
  /**
   * Options provided to {@link LRUCache#fetch} when the FC type is
   * `undefined` or `void`
   */
  export interface FetchOptionsNoContext<K, V>
    extends FetchOptions<K, V, undefined> {
    context?: undefined
  }

  export interface MemoOptions<K, V, FC = unknown>
    extends Pick<
      OptionsBase<K, V, FC>,
      | 'allowStale'
      | 'updateAgeOnGet'
      | 'noDeleteOnStaleGet'
      | 'sizeCalculation'
      | 'ttl'
      | 'noDisposeOnSet'
      | 'noUpdateTTL'
      | 'noDeleteOnFetchRejection'
      | 'allowStaleOnFetchRejection'
      | 'ignoreFetchAbort'
      | 'allowStaleOnFetchAbort'
    > {
    /**
     * Set to true to force a re-load of the existing data, even if it
     * is not yet stale.
     */
    forceRefresh?: boolean
    /**
     * Context provided to the {@link OptionsBase.memoMethod} as
     * the {@link MemoizerOptions.context} param.
     *
     * If the FC type is specified as unknown (the default),
     * undefined or void, then this is optional.  Otherwise, it will
     * be required.
     */
    context?: FC
    status?: Status<V>
  }
  /**
   * Options provided to {@link LRUCache#memo} when the FC type is something
   * other than `unknown`, `undefined`, or `void`
   */
  export interface MemoOptionsWithContext<K, V, FC>
    extends MemoOptions<K, V, FC> {
    context: FC
  }
  /**
   * Options provided to {@link LRUCache#memo} when the FC type is
   * `undefined` or `void`
   */
  export interface MemoOptionsNoContext<K, V>
    extends MemoOptions<K, V, undefined> {
    context?: undefined
  }

  /**
   * Options provided to the
   * {@link OptionsBase.memoMethod} function.
   */
  export interface MemoizerOptions<K, V, FC = unknown> {
    options: MemoizerMemoOptions<K, V, FC>
    /**
     * Object provided in the {@link MemoOptions.context} option to
     * {@link LRUCache#memo}
     */
    context: FC
  }

  /**
   * options which override the options set in the LRUCache constructor
   * when calling {@link LRUCache#memo}.
   *
   * This is the union of {@link GetOptions} and {@link SetOptions}, plus
   * {@link MemoOptions.forceRefresh}, and
   * {@link MemoOptions.context}
   *
   * Any of these may be modified in the {@link OptionsBase.memoMethod}
   * function, but the {@link GetOptions} fields will of course have no
   * effect, as the {@link LRUCache#get} call already happened by the time
   * the memoMethod is called.
   */
  export interface MemoizerMemoOptions<K, V, FC = unknown>
    extends Pick<
      OptionsBase<K, V, FC>,
      | 'allowStale'
      | 'updateAgeOnGet'
      | 'noDeleteOnStaleGet'
      | 'sizeCalculation'
      | 'ttl'
      | 'noDisposeOnSet'
      | 'noUpdateTTL'
    > {
    status?: Status<V>
    size?: Size
    start?: Milliseconds
  }

  /**
   * Options that may be passed to the {@link LRUCache#has} method.
   */
  export interface HasOptions<K, V, FC>
    extends Pick<OptionsBase<K, V, FC>, 'updateAgeOnHas'> {
    status?: Status<V>
  }

  /**
   * Options that may be passed to the {@link LRUCache#get} method.
   */
  export interface GetOptions<K, V, FC>
    extends Pick<
      OptionsBase<K, V, FC>,
      'allowStale' | 'updateAgeOnGet' | 'noDeleteOnStaleGet'
    > {
    status?: Status<V>
  }

  /**
   * Options that may be passed to the {@link LRUCache#peek} method.
   */
  export interface PeekOptions<K, V, FC>
    extends Pick<OptionsBase<K, V, FC>, 'allowStale'> {}

  /**
   * Options that may be passed to the {@link LRUCache#set} method.
   */
  export interface SetOptions<K, V, FC>
    extends Pick<
      OptionsBase<K, V, FC>,
      'sizeCalculation' | 'ttl' | 'noDisposeOnSet' | 'noUpdateTTL'
    > {
    /**
     * If size tracking is enabled, then setting an explicit size
     * in the {@link LRUCache#set} call will prevent calling the
     * {@link OptionsBase.sizeCalculation} function.
     */
    size?: Size
    /**
     * If TTL tracking is enabled, then setting an explicit start
     * time in the {@link LRUCache#set} call will override the
     * default time from `performance.now()` or `Date.now()`.
     *
     * Note that it must be a valid value for whichever time-tracking
     * method is in use.
     */
    start?: Milliseconds
    status?: Status<V>
  }

  /**
   * The type signature for the {@link OptionsBase.fetchMethod} option.
   */
  export type Fetcher<K, V, FC = unknown> = (
    key: K,
    staleValue: V | undefined,
    options: FetcherOptions<K, V, FC>
  ) => Promise<V | undefined | void> | V | undefined | void

  /**
   * the type signature for the {@link OptionsBase.memoMethod} option.
   */
  export type Memoizer<K, V, FC = unknown> = (
    key: K,
    staleValue: V | undefined,
    options: MemoizerOptions<K, V, FC>
  ) => V

  /**
   * Options which may be passed to the {@link LRUCache} constructor.
   *
   * Most of these may be overridden in the various options that use
   * them.
   *
   * Despite all being technically optional, the constructor requires that
   * a cache is at minimum limited by one or more of {@link OptionsBase.max},
   * {@link OptionsBase.ttl}, or {@link OptionsBase.maxSize}.
   *
   * If {@link OptionsBase.ttl} is used alone, then it is strongly advised
   * (and in fact required by the type definitions here) that the cache
   * also set {@link OptionsBase.ttlAutopurge}, to prevent potentially
   * unbounded storage.
   *
   * All options are also available on the {@link LRUCache} instance, making
   * it safe to pass an LRUCache instance as the options argumemnt to
   * make another empty cache of the same type.
   *
   * Some options are marked as read-only, because changing them after
   * instantiation is not safe. Changing any of the other options will of
   * course only have an effect on subsequent method calls.
   */
  export interface OptionsBase<K, V, FC> {
    /**
     * The maximum number of items to store in the cache before evicting
     * old entries. This is read-only on the {@link LRUCache} instance,
     * and may not be overridden.
     *
     * If set, then storage space will be pre-allocated at construction
     * time, and the cache will perform significantly faster.
     *
     * Note that significantly fewer items may be stored, if
     * {@link OptionsBase.maxSize} and/or {@link OptionsBase.ttl} are also
     * set.
     *
     * **It is strongly recommended to set a `max` to prevent unbounded growth
     * of the cache.**
     */
    max?: Count

    /**
     * Max time in milliseconds for items to live in cache before they are
     * considered stale.  Note that stale items are NOT preemptively removed by
     * default, and MAY live in the cache, contributing to its LRU max, long
     * after they have expired, unless {@link OptionsBase.ttlAutopurge} is
     * set.
     *
     * If set to `0` (the default value), then that means "do not track
     * TTL", not "expire immediately".
     *
     * Also, as this cache is optimized for LRU/MRU operations, some of
     * the staleness/TTL checks will reduce performance, as they will incur
     * overhead by deleting items.
     *
     * This is not primarily a TTL cache, and does not make strong TTL
     * guarantees. There is no pre-emptive pruning of expired items, but you
     * _may_ set a TTL on the cache, and it will treat expired items as missing
     * when they are fetched, and delete them.
     *
     * Optional, but must be a non-negative integer in ms if specified.
     *
     * This may be overridden by passing an options object to `cache.set()`.
     *
     * At least one of `max`, `maxSize`, or `TTL` is required. This must be a
     * positive integer if set.
     *
     * Even if ttl tracking is enabled, **it is strongly recommended to set a
     * `max` to prevent unbounded growth of the cache.**
     *
     * If ttl tracking is enabled, and `max` and `maxSize` are not set,
     * and `ttlAutopurge` is not set, then a warning will be emitted
     * cautioning about the potential for unbounded memory consumption.
     * (The TypeScript definitions will also discourage this.)
     */
    ttl?: Milliseconds

    /**
     * Minimum amount of time in ms in which to check for staleness.
     * Defaults to 1, which means that the current time is checked
     * at most once per millisecond.
     *
     * Set to 0 to check the current time every time staleness is tested.
     * (This reduces performance, and is theoretically unnecessary.)
     *
     * Setting this to a higher value will improve performance somewhat
     * while using ttl tracking, albeit at the expense of keeping stale
     * items around a bit longer than their TTLs would indicate.
     *
     * @default 1
     */
    ttlResolution?: Milliseconds

    /**
     * Preemptively remove stale items from the cache.
     *
     * Note that this may *significantly* degrade performance, especially if
     * the cache is storing a large number of items. It is almost always best
     * to just leave the stale items in the cache, and let them fall out as new
     * items are added.
     *
     * Note that this means that {@link OptionsBase.allowStale} is a bit
     * pointless, as stale items will be deleted almost as soon as they
     * expire.
     *
     * Use with caution!
     */
    ttlAutopurge?: boolean

    /**
     * When using time-expiring entries with `ttl`, setting this to `true` will
     * make each item's age reset to 0 whenever it is retrieved from cache with
     * {@link LRUCache#get}, causing it to not expire. (It can still fall out
     * of cache based on recency of use, of course.)
     *
     * Has no effect if {@link OptionsBase.ttl} is not set.
     *
     * This may be overridden by passing an options object to `cache.get()`.
     */
    updateAgeOnGet?: boolean

    /**
     * When using time-expiring entries with `ttl`, setting this to `true` will
     * make each item's age reset to 0 whenever its presence in the cache is
     * checked with {@link LRUCache#has}, causing it to not expire. (It can
     * still fall out of cache based on recency of use, of course.)
     *
     * Has no effect if {@link OptionsBase.ttl} is not set.
     */
    updateAgeOnHas?: boolean

    /**
     * Allow {@link LRUCache#get} and {@link LRUCache#fetch} calls to return
     * stale data, if available.
     *
     * By default, if you set `ttl`, stale items will only be deleted from the
     * cache when you `get(key)`. That is, it's not preemptively pruning items,
     * unless {@link OptionsBase.ttlAutopurge} is set.
     *
     * If you set `allowStale:true`, it'll return the stale value *as well as*
     * deleting it. If you don't set this, then it'll return `undefined` when
     * you try to get a stale entry.
     *
     * Note that when a stale entry is fetched, _even if it is returned due to
     * `allowStale` being set_, it is removed from the cache immediately. You
     * can suppress this behavior by setting
     * {@link OptionsBase.noDeleteOnStaleGet}, either in the constructor, or in
     * the options provided to {@link LRUCache#get}.
     *
     * This may be overridden by passing an options object to `cache.get()`.
     * The `cache.has()` method will always return `false` for stale items.
     *
     * Only relevant if a ttl is set.
     */
    allowStale?: boolean

    /**
     * Function that is called on items when they are dropped from the
     * cache, as `dispose(value, key, reason)`.
     *
     * This can be handy if you want to close file descriptors or do
     * other cleanup tasks when items are no longer stored in the cache.
     *
     * **NOTE**: It is called _before_ the item has been fully removed
     * from the cache, so if you want to put it right back in, you need
     * to wait until the next tick. If you try to add it back in during
     * the `dispose()` function call, it will break things in subtle and
     * weird ways.
     *
     * Unlike several other options, this may _not_ be overridden by
     * passing an option to `set()`, for performance reasons.
     *
     * The `reason` will be one of the following strings, corresponding
     * to the reason for the item's deletion:
     *
     * - `evict` Item was evicted to make space for a new addition
     * - `set` Item was overwritten by a new value
     * - `expire` Item expired its TTL
     * - `fetch` Item was deleted due to a failed or aborted fetch, or a
     *   fetchMethod returning `undefined.
     * - `delete` Item was removed by explicit `cache.delete(key)`,
     *   `cache.clear()`, or `cache.set(key, undefined)`.
     */
    dispose?: Disposer<K, V>

    /**
     * Function that is called when new items are inserted into the cache,
     * as `onInsert(value, key, reason)`.
     *
     * This can be useful if you need to perform actions when an item is
     * added, such as logging or tracking insertions.
     *
     * Unlike some other options, this may _not_ be overridden by passing
     * an option to `set()`, for performance and consistency reasons.
     */
    onInsert?: Inserter<K, V>

    /**
     * The same as {@link OptionsBase.dispose}, but called *after* the entry
     * is completely removed and the cache is once again in a clean state.
     *
     * It is safe to add an item right back into the cache at this point.
     * However, note that it is *very* easy to inadvertently create infinite
     * recursion this way.
     */
    disposeAfter?: Disposer<K, V>

    /**
     * Set to true to suppress calling the
     * {@link OptionsBase.dispose} function if the entry key is
     * still accessible within the cache.
     *
     * This may be overridden by passing an options object to
     * {@link LRUCache#set}.
     *
     * Only relevant if `dispose` or `disposeAfter` are set.
     */
    noDisposeOnSet?: boolean

    /**
     * Boolean flag to tell the cache to not update the TTL when setting a new
     * value for an existing key (ie, when updating a value rather than
     * inserting a new value).  Note that the TTL value is _always_ set (if
     * provided) when adding a new entry into the cache.
     *
     * Has no effect if a {@link OptionsBase.ttl} is not set.
     *
     * May be passed as an option to {@link LRUCache#set}.
     */
    noUpdateTTL?: boolean

    /**
     * Set to a positive integer to track the sizes of items added to the
     * cache, and automatically evict items in order to stay below this size.
     * Note that this may result in fewer than `max` items being stored.
     *
     * Attempting to add an item to the cache whose calculated size is greater
     * that this amount will be a no-op. The item will not be cached, and no
     * other items will be evicted.
     *
     * Optional, must be a positive integer if provided.
     *
     * Sets `maxEntrySize` to the same value, unless a different value is
     * provided for `maxEntrySize`.
     *
     * At least one of `max`, `maxSize`, or `TTL` is required. This must be a
     * positive integer if set.
     *
     * Even if size tracking is enabled, **it is strongly recommended to set a
     * `max` to prevent unbounded growth of the cache.**
     *
     * Note also that size tracking can negatively impact performance,
     * though for most cases, only minimally.
     */
    maxSize?: Size

    /**
     * The maximum allowed size for any single item in the cache.
     *
     * If a larger item is passed to {@link LRUCache#set} or returned by a
     * {@link OptionsBase.fetchMethod} or {@link OptionsBase.memoMethod}, then
     * it will not be stored in the cache.
     *
     * Attempting to add an item whose calculated size is greater than
     * this amount will not cache the item or evict any old items, but
     * WILL delete an existing value if one is already present.
     *
     * Optional, must be a positive integer if provided. Defaults to
     * the value of `maxSize` if provided.
     */
    maxEntrySize?: Size

    /**
     * A function that returns a number indicating the item's size.
     *
     * Requires {@link OptionsBase.maxSize} to be set.
     *
     * If not provided, and {@link OptionsBase.maxSize} or
     * {@link OptionsBase.maxEntrySize} are set, then all
     * {@link LRUCache#set} calls **must** provide an explicit
     * {@link SetOptions.size} or sizeCalculation param.
     */
    sizeCalculation?: SizeCalculator<K, V>

    /**
     * Method that provides the implementation for {@link LRUCache#fetch}
     *
     * ```ts
     * fetchMethod(key, staleValue, { signal, options, context })
     * ```
     *
     * If `fetchMethod` is not provided, then `cache.fetch(key)` is equivalent
     * to `Promise.resolve(cache.get(key))`.
     *
     * If at any time, `signal.aborted` is set to `true`, or if the
     * `signal.onabort` method is called, or if it emits an `'abort'` event
     * which you can listen to with `addEventListener`, then that means that
     * the fetch should be abandoned. This may be passed along to async
     * functions aware of AbortController/AbortSignal behavior.
     *
     * The `fetchMethod` should **only** return `undefined` or a Promise
     * resolving to `undefined` if the AbortController signaled an `abort`
     * event. In all other cases, it should return or resolve to a value
     * suitable for adding to the cache.
     *
     * The `options` object is a union of the options that may be provided to
     * `set()` and `get()`. If they are modified, then that will result in
     * modifying the settings to `cache.set()` when the value is resolved, and
     * in the case of
     * {@link OptionsBase.noDeleteOnFetchRejection} and
     * {@link OptionsBase.allowStaleOnFetchRejection}, the handling of
     * `fetchMethod` failures.
     *
     * For example, a DNS cache may update the TTL based on the value returned
     * from a remote DNS server by changing `options.ttl` in the `fetchMethod`.
     */
    fetchMethod?: Fetcher<K, V, FC>

    /**
     * Method that provides the implementation for {@link LRUCache#memo}
     */
    memoMethod?: Memoizer<K, V, FC>

    /**
     * Set to true to suppress the deletion of stale data when a
     * {@link OptionsBase.fetchMethod} returns a rejected promise.
     */
    noDeleteOnFetchRejection?: boolean

    /**
     * Do not delete stale items when they are retrieved with
     * {@link LRUCache#get}.
     *
     * Note that the `get` return value will still be `undefined`
     * unless {@link OptionsBase.allowStale} is true.
     *
     * When using time-expiring entries with `ttl`, by default stale
     * items will be removed from the cache when the key is accessed
     * with `cache.get()`.
     *
     * Setting this option will cause stale items to remain in the cache, until
     * they are explicitly deleted with `cache.delete(key)`, or retrieved with
     * `noDeleteOnStaleGet` set to `false`.
     *
     * This may be overridden by passing an options object to `cache.get()`.
     *
     * Only relevant if a ttl is used.
     */
    noDeleteOnStaleGet?: boolean

    /**
     * Set to true to allow returning stale data when a
     * {@link OptionsBase.fetchMethod} throws an error or returns a rejected
     * promise.
     *
     * This differs from using {@link OptionsBase.allowStale} in that stale
     * data will ONLY be returned in the case that the {@link LRUCache#fetch}
     * fails, not any other times.
     *
     * If a `fetchMethod` fails, and there is no stale value available, the
     * `fetch()` will resolve to `undefined`. Ie, all `fetchMethod` errors are
     * suppressed.
     *
     * Implies `noDeleteOnFetchRejection`.
     *
     * This may be set in calls to `fetch()`, or defaulted on the constructor,
     * or overridden by modifying the options object in the `fetchMethod`.
     */
    allowStaleOnFetchRejection?: boolean

    /**
     * Set to true to return a stale value from the cache when the
     * `AbortSignal` passed to the {@link OptionsBase.fetchMethod} dispatches
     * an `'abort'` event, whether user-triggered, or due to internal cache
     * behavior.
     *
     * Unless {@link OptionsBase.ignoreFetchAbort} is also set, the underlying
     * {@link OptionsBase.fetchMethod} will still be considered canceled, and
     * any value it returns will be ignored and not cached.
     *
     * Caveat: since fetches are aborted when a new value is explicitly
     * set in the cache, this can lead to fetch returning a stale value,
     * since that was the fallback value _at the moment the `fetch()` was
     * initiated_, even though the new updated value is now present in
     * the cache.
     *
     * For example:
     *
     * ```ts
     * const cache = new LRUCache<string, any>({
     *   ttl: 100,
     *   fetchMethod: async (url, oldValue, { signal }) =>  {
     *     const res = await fetch(url, { signal })
     *     return await res.json()
     *   }
     * })
     * cache.set('https://example.com/', { some: 'data' })
     * // 100ms go by...
     * const result = cache.fetch('https://example.com/')
     * cache.set('https://example.com/', { other: 'thing' })
     * console.log(await result) // { some: 'data' }
     * console.log(cache.get('https://example.com/')) // { other: 'thing' }
     * ```
     */
    allowStaleOnFetchAbort?: boolean

    /**
     * Set to true to ignore the `abort` event emitted by the `AbortSignal`
     * object passed to {@link OptionsBase.fetchMethod}, and still cache the
     * resulting resolution value, as long as it is not `undefined`.
     *
     * When used on its own, this means aborted {@link LRUCache#fetch} calls
     * are not immediately resolved or rejected when they are aborted, and
     * instead take the full time to await.
     *
     * When used with {@link OptionsBase.allowStaleOnFetchAbort}, aborted
     * {@link LRUCache#fetch} calls will resolve immediately to their stale
     * cached value or `undefined`, and will continue to process and eventually
     * update the cache when they resolve, as long as the resulting value is
     * not `undefined`, thus supporting a "return stale on timeout while
     * refreshing" mechanism by passing `AbortSignal.timeout(n)` as the signal.
     *
     * For example:
     *
     * ```ts
     * const c = new LRUCache({
     *   ttl: 100,
     *   ignoreFetchAbort: true,
     *   allowStaleOnFetchAbort: true,
     *   fetchMethod: async (key, oldValue, { signal }) => {
     *     // note: do NOT pass the signal to fetch()!
     *     // let's say this fetch can take a long time.
     *     const res = await fetch(`https://slow-backend-server/${key}`)
     *     return await res.json()
     *   },
     * })
     *
     * // this will return the stale value after 100ms, while still
     * // updating in the background for next time.
     * const val = await c.fetch('key', { signal: AbortSignal.timeout(100) })
     * ```
     *
     * **Note**: regardless of this setting, an `abort` event _is still
     * emitted on the `AbortSignal` object_, so may result in invalid results
     * when passed to other underlying APIs that use AbortSignals.
     *
     * This may be overridden in the {@link OptionsBase.fetchMethod} or the
     * call to {@link LRUCache#fetch}.
     */
    ignoreFetchAbort?: boolean
  }

  export interface OptionsMaxLimit<K, V, FC>
    extends OptionsBase<K, V, FC> {
    max: Count
  }
  export interface OptionsTTLLimit<K, V, FC>
    extends OptionsBase<K, V, FC> {
    ttl: Milliseconds
    ttlAutopurge: boolean
  }
  export interface OptionsSizeLimit<K, V, FC>
    extends OptionsBase<K, V, FC> {
    maxSize: Size
  }

  /**
   * The valid safe options for the {@link LRUCache} constructor
   */
  export type Options<K, V, FC> =
    | OptionsMaxLimit<K, V, FC>
    | OptionsSizeLimit<K, V, FC>
    | OptionsTTLLimit<K, V, FC>

  /**
   * Entry objects used by {@link LRUCache#load} and {@link LRUCache#dump},
   * and returned by {@link LRUCache#info}.
   */
  export interface Entry<V> {
    value: V
    ttl?: Milliseconds
    size?: Size
    start?: Milliseconds
  }
}

/**
 * Default export, the thing you're using this module to get.
 *
 * The `K` and `V` types define the key and value types, respectively. The
 * optional `FC` type defines the type of the `context` object passed to
 * `cache.fetch()` and `cache.memo()`.
 *
 * Keys and values **must not** be `null` or `undefined`.
 *
 * All properties from the options object (with the exception of `max`,
 * `maxSize`, `fetchMethod`, `memoMethod`, `dispose` and `disposeAfter`) are
 * added as normal public members. (The listed options are read-only getters.)
 *
 * Changing any of these will alter the defaults for subsequent method calls.
 */
export class LRUCache<K extends {}, V extends {}, FC = unknown> {
  // options that cannot be changed without disaster
  readonly #max: LRUCache.Count
  readonly #maxSize: LRUCache.Size
  readonly #dispose?: LRUCache.Disposer<K, V>
  readonly #onInsert?: LRUCache.Inserter<K, V>
  readonly #disposeAfter?: LRUCache.Disposer<K, V>
  readonly #fetchMethod?: LRUCache.Fetcher<K, V, FC>
  readonly #memoMethod?: LRUCache.Memoizer<K, V, FC>

  /**
   * {@link LRUCache.OptionsBase.ttl}
   */
  ttl: LRUCache.Milliseconds

  /**
   * {@link LRUCache.OptionsBase.ttlResolution}
   */
  ttlResolution: LRUCache.Milliseconds
  /**
   * {@link LRUCache.OptionsBase.ttlAutopurge}
   */
  ttlAutopurge: boolean
  /**
   * {@link LRUCache.OptionsBase.updateAgeOnGet}
   */
  updateAgeOnGet: boolean
  /**
   * {@link LRUCache.OptionsBase.updateAgeOnHas}
   */
  updateAgeOnHas: boolean
  /**
   * {@link LRUCache.OptionsBase.allowStale}
   */
  allowStale: boolean

  /**
   * {@link LRUCache.OptionsBase.noDisposeOnSet}
   */
  noDisposeOnSet: boolean
  /**
   * {@link LRUCache.OptionsBase.noUpdateTTL}
   */
  noUpdateTTL: boolean
  /**
   * {@link LRUCache.OptionsBase.maxEntrySize}
   */
  maxEntrySize: LRUCache.Size
  /**
   * {@link LRUCache.OptionsBase.sizeCalculation}
   */
  sizeCalculation?: LRUCache.SizeCalculator<K, V>
  /**
   * {@link LRUCache.OptionsBase.noDeleteOnFetchRejection}
   */
  noDeleteOnFetchRejection: boolean
  /**
   * {@link LRUCache.OptionsBase.noDeleteOnStaleGet}
   */
  noDeleteOnStaleGet: boolean
  /**
   * {@link LRUCache.OptionsBase.allowStaleOnFetchAbort}
   */
  allowStaleOnFetchAbort: boolean
  /**
   * {@link LRUCache.OptionsBase.allowStaleOnFetchRejection}
   */
  allowStaleOnFetchRejection: boolean
  /**
   * {@link LRUCache.OptionsBase.ignoreFetchAbort}
   */
  ignoreFetchAbort: boolean

  // computed properties
  #size: LRUCache.Count
  #calculatedSize: LRUCache.Size
  #keyMap: Map<K, Index>
  #keyList: (K | undefined)[]
  #valList: (V | BackgroundFetch<V> | undefined)[]
  #next: NumberArray
  #prev: NumberArray
  #head: Index
  #tail: Index
  #free: StackLike
  #disposed?: DisposeTask<K, V>[]
  #sizes?: ZeroArray
  #starts?: ZeroArray
  #ttls?: ZeroArray

  #hasDispose: boolean
  #hasFetchMethod: boolean
  #hasDisposeAfter: boolean
  #hasOnInsert: boolean

  /**
   * Do not call this method unless you need to inspect the
   * inner workings of the cache.  If anything returned by this
   * object is modified in any way, strange breakage may occur.
   *
   * These fields are private for a reason!
   *
   * @internal
   */
  static unsafeExposeInternals<
    K extends {},
    V extends {},
    FC extends unknown = unknown
  >(c: LRUCache<K, V, FC>) {
    return {
      // properties
      starts: c.#starts,
      ttls: c.#ttls,
      sizes: c.#sizes,
      keyMap: c.#keyMap as Map<K, number>,
      keyList: c.#keyList,
      valList: c.#valList,
      next: c.#next,
      prev: c.#prev,
      get head() {
        return c.#head
      },
      get tail() {
        return c.#tail
      },
      free: c.#free,
      // methods
      isBackgroundFetch: (p: any) => c.#isBackgroundFetch(p),
      backgroundFetch: (
        k: K,
        index: number | undefined,
        options: LRUCache.FetchOptions<K, V, FC>,
        context: any
      ): BackgroundFetch<V> =>
        c.#backgroundFetch(
          k,
          index as Index | undefined,
          options,
          context
        ),
      moveToTail: (index: number): void =>
        c.#moveToTail(index as Index),
      indexes: (options?: { allowStale: boolean }) =>
        c.#indexes(options),
      rindexes: (options?: { allowStale: boolean }) =>
        c.#rindexes(options),
      isStale: (index: number | undefined) =>
        c.#isStale(index as Index),
    }
  }

  // Protected read-only members

  /**
   * {@link LRUCache.OptionsBase.max} (read-only)
   */
  get max(): LRUCache.Count {
    return this.#max
  }
  /**
   * {@link LRUCache.OptionsBase.maxSize} (read-only)
   */
  get maxSize(): LRUCache.Count {
    return this.#maxSize
  }
  /**
   * The total computed size of items in the cache (read-only)
   */
  get calculatedSize(): LRUCache.Size {
    return this.#calculatedSize
  }
  /**
   * The number of items stored in the cache (read-only)
   */
  get size(): LRUCache.Count {
    return this.#size
  }
  /**
   * {@link LRUCache.OptionsBase.fetchMethod} (read-only)
   */
  get fetchMethod(): LRUCache.Fetcher<K, V, FC> | undefined {
    return this.#fetchMethod
  }
  get memoMethod(): LRUCache.Memoizer<K, V, FC> | undefined {
    return this.#memoMethod
  }
  /**
   * {@link LRUCache.OptionsBase.dispose} (read-only)
   */
  get dispose() {
    return this.#dispose
  }
  /**
   * {@link LRUCache.OptionsBase.onInsert} (read-only)
   */
  get onInsert() {
    return this.#onInsert
  }
  /**
   * {@link LRUCache.OptionsBase.disposeAfter} (read-only)
   */
  get disposeAfter() {
    return this.#disposeAfter
  }

  constructor(
    options: LRUCache.Options<K, V, FC> | LRUCache<K, V, FC>
  ) {
    const {
      max = 0,
      ttl,
      ttlResolution = 1,
      ttlAutopurge,
      updateAgeOnGet,
      updateAgeOnHas,
      allowStale,
      dispose,
      onInsert,
      disposeAfter,
      noDisposeOnSet,
      noUpdateTTL,
      maxSize = 0,
      maxEntrySize = 0,
      sizeCalculation,
      fetchMethod,
      memoMethod,
      noDeleteOnFetchRejection,
      noDeleteOnStaleGet,
      allowStaleOnFetchRejection,
      allowStaleOnFetchAbort,
      ignoreFetchAbort,
    } = options

    if (max !== 0 && !isPosInt(max)) {
      throw new TypeError('max option must be a nonnegative integer')
    }

    const UintArray = max ? getUintArray(max) : Array
    if (!UintArray) {
      throw new Error('invalid max value: ' + max)
    }

    this.#max = max
    this.#maxSize = maxSize
    this.maxEntrySize = maxEntrySize || this.#maxSize
    this.sizeCalculation = sizeCalculation
    if (this.sizeCalculation) {
      if (!this.#maxSize && !this.maxEntrySize) {
        throw new TypeError(
          'cannot set sizeCalculation without setting maxSize or maxEntrySize'
        )
      }
      if (typeof this.sizeCalculation !== 'function') {
        throw new TypeError('sizeCalculation set to non-function')
      }
    }

    if (
      memoMethod !== undefined &&
      typeof memoMethod !== 'function'
    ) {
      throw new TypeError('memoMethod must be a function if defined')
    }
    this.#memoMethod = memoMethod

    if (
      fetchMethod !== undefined &&
      typeof fetchMethod !== 'function'
    ) {
      throw new TypeError(
        'fetchMethod must be a function if specified'
      )
    }
    this.#fetchMethod = fetchMethod
    this.#hasFetchMethod = !!fetchMethod

    this.#keyMap = new Map()
    this.#keyList = new Array(max).fill(undefined)
    this.#valList = new Array(max).fill(undefined)
    this.#next = new UintArray(max)
    this.#prev = new UintArray(max)
    this.#head = 0 as Index
    this.#tail = 0 as Index
    this.#free = Stack.create(max)
    this.#size = 0
    this.#calculatedSize = 0

    if (typeof dispose === 'function') {
      this.#dispose = dispose
    }
    if (typeof onInsert === 'function') {
      this.#onInsert = onInsert
    }
    if (typeof disposeAfter === 'function') {
      this.#disposeAfter = disposeAfter
      this.#disposed = []
    } else {
      this.#disposeAfter = undefined
      this.#disposed = undefined
    }
    this.#hasDispose = !!this.#dispose
    this.#hasOnInsert = !!this.#onInsert
    this.#hasDisposeAfter = !!this.#disposeAfter

    this.noDisposeOnSet = !!noDisposeOnSet
    this.noUpdateTTL = !!noUpdateTTL
    this.noDeleteOnFetchRejection = !!noDeleteOnFetchRejection
    this.allowStaleOnFetchRejection = !!allowStaleOnFetchRejection
    this.allowStaleOnFetchAbort = !!allowStaleOnFetchAbort
    this.ignoreFetchAbort = !!ignoreFetchAbort

    // NB: maxEntrySize is set to maxSize if it's set
    if (this.maxEntrySize !== 0) {
      if (this.#maxSize !== 0) {
        if (!isPosInt(this.#maxSize)) {
          throw new TypeError(
            'maxSize must be a positive integer if specified'
          )
        }
      }
      if (!isPosInt(this.maxEntrySize)) {
        throw new TypeError(
          'maxEntrySize must be a positive integer if specified'
        )
      }
      this.#initializeSizeTracking()
    }

    this.allowStale = !!allowStale
    this.noDeleteOnStaleGet = !!noDeleteOnStaleGet
    this.updateAgeOnGet = !!updateAgeOnGet
    this.updateAgeOnHas = !!updateAgeOnHas
    this.ttlResolution =
      isPosInt(ttlResolution) || ttlResolution === 0
        ? ttlResolution
        : 1
    this.ttlAutopurge = !!ttlAutopurge
    this.ttl = ttl || 0
    if (this.ttl) {
      if (!isPosInt(this.ttl)) {
        throw new TypeError(
          'ttl must be a positive integer if specified'
        )
      }
      this.#initializeTTLTracking()
    }

    // do not allow completely unbounded caches
    if (this.#max === 0 && this.ttl === 0 && this.#maxSize === 0) {
      throw new TypeError(
        'At least one of max, maxSize, or ttl is required'
      )
    }
    if (!this.ttlAutopurge && !this.#max && !this.#maxSize) {
      const code = 'LRU_CACHE_UNBOUNDED'
      if (shouldWarn(code)) {
        warned.add(code)
        const msg =
          'TTL caching without ttlAutopurge, max, or maxSize can ' +
          'result in unbounded memory consumption.'
        emitWarning(msg, 'UnboundedCacheWarning', code, LRUCache)
      }
    }
  }

  /**
   * Return the number of ms left in the item's TTL. If item is not in cache,
   * returns `0`. Returns `Infinity` if item is in cache without a defined TTL.
   */
  getRemainingTTL(key: K) {
    return this.#keyMap.has(key) ? Infinity : 0
  }

  #initializeTTLTracking() {
    const ttls = new ZeroArray(this.#max)
    const starts = new ZeroArray(this.#max)
    this.#ttls = ttls
    this.#starts = starts

    this.#setItemTTL = (index, ttl, start = perf.now()) => {
      starts[index] = ttl !== 0 ? start : 0
      ttls[index] = ttl
      if (ttl !== 0 && this.ttlAutopurge) {
        const t = setTimeout(() => {
          if (this.#isStale(index)) {
            this.#delete(this.#keyList[index] as K, 'expire')
          }
        }, ttl + 1)
        // unref() not supported on all platforms
        /* c8 ignore start */
        if (t.unref) {
          t.unref()
        }
        /* c8 ignore stop */
      }
    }

    this.#updateItemAge = index => {
      starts[index] = ttls[index] !== 0 ? perf.now() : 0
    }

    this.#statusTTL = (status, index) => {
      if (ttls[index]) {
        const ttl = ttls[index]
        const start = starts[index]
        /* c8 ignore next */
        if (!ttl || !start) return
        status.ttl = ttl
        status.start = start
        status.now = cachedNow || getNow()
        const age = status.now - start
        status.remainingTTL = ttl - age
      }
    }

    // debounce calls to perf.now() to 1s so we're not hitting
    // that costly call repeatedly.
    let cachedNow = 0
    const getNow = () => {
      const n = perf.now()
      if (this.ttlResolution > 0) {
        cachedNow = n
        const t = setTimeout(
          () => (cachedNow = 0),
          this.ttlResolution
        )
        // not available on all platforms
        /* c8 ignore start */
        if (t.unref) {
          t.unref()
        }
        /* c8 ignore stop */
      }
      return n
    }

    this.getRemainingTTL = key => {
      const index = this.#keyMap.get(key)
      if (index === undefined) {
        return 0
      }
      const ttl = ttls[index]
      const start = starts[index]
      if (!ttl || !start) {
        return Infinity
      }
      const age = (cachedNow || getNow()) - start
      return ttl - age
    }

    this.#isStale = index => {
      const s = starts[index]
      const t = ttls[index]
      return !!t && !!s && (cachedNow || getNow()) - s > t
    }
  }

  // conditionally set private methods related to TTL
  #updateItemAge: (index: Index) => void = () => {}
  #statusTTL: (status: LRUCache.Status<V>, index: Index) => void =
    () => {}
  #setItemTTL: (
    index: Index,
    ttl: LRUCache.Milliseconds,
    start?: LRUCache.Milliseconds
    // ignore because we never call this if we're not already in TTL mode
    /* c8 ignore start */
  ) => void = () => {}
  /* c8 ignore stop */

  #isStale: (index: Index) => boolean = () => false

  #initializeSizeTracking() {
    const sizes = new ZeroArray(this.#max)
    this.#calculatedSize = 0
    this.#sizes = sizes
    this.#removeItemSize = index => {
      this.#calculatedSize -= sizes[index] as number
      sizes[index] = 0
    }
    this.#requireSize = (k, v, size, sizeCalculation) => {
      // provisionally accept background fetches.
      // actual value size will be checked when they return.
      if (this.#isBackgroundFetch(v)) {
        return 0
      }
      if (!isPosInt(size)) {
        if (sizeCalculation) {
          if (typeof sizeCalculation !== 'function') {
            throw new TypeError('sizeCalculation must be a function')
          }
          size = sizeCalculation(v, k)
          if (!isPosInt(size)) {
            throw new TypeError(
              'sizeCalculation return invalid (expect positive integer)'
            )
          }
        } else {
          throw new TypeError(
            'invalid size value (must be positive integer). ' +
              'When maxSize or maxEntrySize is used, sizeCalculation ' +
              'or size must be set.'
          )
        }
      }
      return size
    }
    this.#addItemSize = (
      index: Index,
      size: LRUCache.Size,
      status?: LRUCache.Status<V>
    ) => {
      sizes[index] = size
      if (this.#maxSize) {
        const maxSize = this.#maxSize - (sizes[index] as number)
        while (this.#calculatedSize > maxSize) {
          this.#evict(true)
        }
      }
      this.#calculatedSize += sizes[index] as number
      if (status) {
        status.entrySize = size
        status.totalCalculatedSize = this.#calculatedSize
      }
    }
  }

  #removeItemSize: (index: Index) => void = _i => {}
  #addItemSize: (
    index: Index,
    size: LRUCache.Size,
    status?: LRUCache.Status<V>
  ) => void = (_i, _s, _st) => {}
  #requireSize: (
    k: K,
    v: V | BackgroundFetch<V>,
    size?: LRUCache.Size,
    sizeCalculation?: LRUCache.SizeCalculator<K, V>
  ) => LRUCache.Size = (
    _k: K,
    _v: V | BackgroundFetch<V>,
    size?: LRUCache.Size,
    sizeCalculation?: LRUCache.SizeCalculator<K, V>
  ) => {
    if (size || sizeCalculation) {
      throw new TypeError(
        'cannot set size without setting maxSize or maxEntrySize on cache'
      )
    }
    return 0
  };

  *#indexes({ allowStale = this.allowStale } = {}) {
    if (this.#size) {
      for (let i = this.#tail; true; ) {
        if (!this.#isValidIndex(i)) {
          break
        }
        if (allowStale || !this.#isStale(i)) {
          yield i
        }
        if (i === this.#head) {
          break
        } else {
          i = this.#prev[i] as Index
        }
      }
    }
  }

  *#rindexes({ allowStale = this.allowStale } = {}) {
    if (this.#size) {
      for (let i = this.#head; true; ) {
        if (!this.#isValidIndex(i)) {
          break
        }
        if (allowStale || !this.#isStale(i)) {
          yield i
        }
        if (i === this.#tail) {
          break
        } else {
          i = this.#next[i] as Index
        }
      }
    }
  }

  #isValidIndex(index: Index) {
    return (
      index !== undefined &&
      this.#keyMap.get(this.#keyList[index] as K) === index
    )
  }

  /**
   * Return a generator yielding `[key, value]` pairs,
   * in order from most recently used to least recently used.
   */
  *entries() {
    for (const i of this.#indexes()) {
      if (
        this.#valList[i] !== undefined &&
        this.#keyList[i] !== undefined &&
        !this.#isBackgroundFetch(this.#valList[i])
      ) {
        yield [this.#keyList[i], this.#valList[i]] as [K, V]
      }
    }
  }

  /**
   * Inverse order version of {@link LRUCache.entries}
   *
   * Return a generator yielding `[key, value]` pairs,
   * in order from least recently used to most recently used.
   */
  *rentries() {
    for (const i of this.#rindexes()) {
      if (
        this.#valList[i] !== undefined &&
        this.#keyList[i] !== undefined &&
        !this.#isBackgroundFetch(this.#valList[i])
      ) {
        yield [this.#keyList[i], this.#valList[i]]
      }
    }
  }

  /**
   * Return a generator yielding the keys in the cache,
   * in order from most recently used to least recently used.
   */
  *keys() {
    for (const i of this.#indexes()) {
      const k = this.#keyList[i]
      if (
        k !== undefined &&
        !this.#isBackgroundFetch(this.#valList[i])
      ) {
        yield k
      }
    }
  }

  /**
   * Inverse order version of {@link LRUCache.keys}
   *
   * Return a generator yielding the keys in the cache,
   * in order from least recently used to most recently used.
   */
  *rkeys() {
    for (const i of this.#rindexes()) {
      const k = this.#keyList[i]
      if (
        k !== undefined &&
        !this.#isBackgroundFetch(this.#valList[i])
      ) {
        yield k
      }
    }
  }

  /**
   * Return a generator yielding the values in the cache,
   * in order from most recently used to least recently used.
   */
  *values() {
    for (const i of this.#indexes()) {
      const v = this.#valList[i]
      if (
        v !== undefined &&
        !this.#isBackgroundFetch(this.#valList[i])
      ) {
        yield this.#valList[i] as V
      }
    }
  }

  /**
   * Inverse order version of {@link LRUCache.values}
   *
   * Return a generator yielding the values in the cache,
   * in order from least recently used to most recently used.
   */
  *rvalues() {
    for (const i of this.#rindexes()) {
      const v = this.#valList[i]
      if (
        v !== undefined &&
        !this.#isBackgroundFetch(this.#valList[i])
      ) {
        yield this.#valList[i]
      }
    }
  }

  /**
   * Iterating over the cache itself yields the same results as
   * {@link LRUCache.entries}
   */
  [Symbol.iterator]() {
    return this.entries()
  }

  /**
   * A String value that is used in the creation of the default string
   * description of an object. Called by the built-in method
   * `Object.prototype.toString`.
   */
  [Symbol.toStringTag] = 'LRUCache'

  /**
   * Find a value for which the supplied fn method returns a truthy value,
   * similar to `Array.find()`. fn is called as `fn(value, key, cache)`.
   */
  find(
    fn: (v: V, k: K, self: LRUCache<K, V, FC>) => boolean,
    getOptions: LRUCache.GetOptions<K, V, FC> = {}
  ) {
    for (const i of this.#indexes()) {
      const v = this.#valList[i]
      const value = this.#isBackgroundFetch(v)
        ? v.__staleWhileFetching
        : v
      if (value === undefined) continue
      if (fn(value, this.#keyList[i] as K, this)) {
        return this.get(this.#keyList[i] as K, getOptions)
      }
    }
  }

  /**
   * Call the supplied function on each item in the cache, in order from most
   * recently used to least recently used.
   *
   * `fn` is called as `fn(value, key, cache)`.
   *
   * If `thisp` is provided, function will be called in the `this`-context of
   * the provided object, or the cache if no `thisp` object is provided.
   *
   * Does not update age or recenty of use, or iterate over stale values.
   */
  forEach(
    fn: (v: V, k: K, self: LRUCache<K, V, FC>) => any,
    thisp: any = this
  ) {
    for (const i of this.#indexes()) {
      const v = this.#valList[i]
      const value = this.#isBackgroundFetch(v)
        ? v.__staleWhileFetching
        : v
      if (value === undefined) continue
      fn.call(thisp, value, this.#keyList[i] as K, this)
    }
  }

  /**
   * The same as {@link LRUCache.forEach} but items are iterated over in
   * reverse order.  (ie, less recently used items are iterated over first.)
   */
  rforEach(
    fn: (v: V, k: K, self: LRUCache<K, V, FC>) => any,
    thisp: any = this
  ) {
    for (const i of this.#rindexes()) {
      const v = this.#valList[i]
      const value = this.#isBackgroundFetch(v)
        ? v.__staleWhileFetching
        : v
      if (value === undefined) continue
      fn.call(thisp, value, this.#keyList[i] as K, this)
    }
  }

  /**
   * Delete any stale entries. Returns true if anything was removed,
   * false otherwise.
   */
  purgeStale() {
    let deleted = false
    for (const i of this.#rindexes({ allowStale: true })) {
      if (this.#isStale(i)) {
        this.#delete(this.#keyList[i] as K, 'expire')
        deleted = true
      }
    }
    return deleted
  }

  /**
   * Get the extended info about a given entry, to get its value, size, and
   * TTL info simultaneously. Returns `undefined` if the key is not present.
   *
   * Unlike {@link LRUCache#dump}, which is designed to be portable and survive
   * serialization, the `start` value is always the current timestamp, and the
   * `ttl` is a calculated remaining time to live (negative if expired).
   *
   * Always returns stale values, if their info is found in the cache, so be
   * sure to check for expirations (ie, a negative {@link LRUCache.Entry#ttl})
   * if relevant.
   */
  info(key: K): LRUCache.Entry<V> | undefined {
    const i = this.#keyMap.get(key)
    if (i === undefined) return undefined
    const v = this.#valList[i]
    const value: V | undefined = this.#isBackgroundFetch(v)
      ? v.__staleWhileFetching
      : v
    if (value === undefined) return undefined
    const entry: LRUCache.Entry<V> = { value }
    if (this.#ttls && this.#starts) {
      const ttl = this.#ttls[i]
      const start = this.#starts[i]
      if (ttl && start) {
        const remain = ttl - (perf.now() - start)
        entry.ttl = remain
        entry.start = Date.now()
      }
    }
    if (this.#sizes) {
      entry.size = this.#sizes[i]
    }
    return entry
  }

  /**
   * Return an array of [key, {@link LRUCache.Entry}] tuples which can be
   * passed to {@link LRUCache#load}.
   *
   * The `start` fields are calculated relative to a portable `Date.now()`
   * timestamp, even if `performance.now()` is available.
   *
   * Stale entries are always included in the `dump`, even if
   * {@link LRUCache.OptionsBase.allowStale} is false.
   *
   * Note: this returns an actual array, not a generator, so it can be more
   * easily passed around.
   */
  dump() {
    const arr: [K, LRUCache.Entry<V>][] = []
    for (const i of this.#indexes({ allowStale: true })) {
      const key = this.#keyList[i]
      const v = this.#valList[i]
      const value: V | undefined = this.#isBackgroundFetch(v)
        ? v.__staleWhileFetching
        : v
      if (value === undefined || key === undefined) continue
      const entry: LRUCache.Entry<V> = { value }
      if (this.#ttls && this.#starts) {
        entry.ttl = this.#ttls[i]
        // always dump the start relative to a portable timestamp
        // it's ok for this to be a bit slow, it's a rare operation.
        const age = perf.now() - (this.#starts[i] as number)
        entry.start = Math.floor(Date.now() - age)
      }
      if (this.#sizes) {
        entry.size = this.#sizes[i]
      }
      arr.unshift([key, entry])
    }
    return arr
  }

  /**
   * Reset the cache and load in the items in entries in the order listed.
   *
   * The shape of the resulting cache may be different if the same options are
   * not used in both caches.
   *
   * The `start` fields are assumed to be calculated relative to a portable
   * `Date.now()` timestamp, even if `performance.now()` is available.
   */
  load(arr: [K, LRUCache.Entry<V>][]) {
    this.clear()
    for (const [key, entry] of arr) {
      if (entry.start) {
        // entry.start is a portable timestamp, but we may be using
        // node's performance.now(), so calculate the offset, so that
        // we get the intended remaining TTL, no matter how long it's
        // been on ice.
        //
        // it's ok for this to be a bit slow, it's a rare operation.
        const age = Date.now() - entry.start
        entry.start = perf.now() - age
      }
      this.set(key, entry.value, entry)
    }
  }

  /**
   * Add a value to the cache.
   *
   * Note: if `undefined` is specified as a value, this is an alias for
   * {@link LRUCache#delete}
   *
   * Fields on the {@link LRUCache.SetOptions} options param will override
   * their corresponding values in the constructor options for the scope
   * of this single `set()` operation.
   *
   * If `start` is provided, then that will set the effective start
   * time for the TTL calculation. Note that this must be a previous
   * value of `performance.now()` if supported, or a previous value of
   * `Date.now()` if not.
   *
   * Options object may also include `size`, which will prevent
   * calling the `sizeCalculation` function and just use the specified
   * number if it is a positive integer, and `noDisposeOnSet` which
   * will prevent calling a `dispose` function in the case of
   * overwrites.
   *
   * If the `size` (or return value of `sizeCalculation`) for a given
   * entry is greater than `maxEntrySize`, then the item will not be
   * added to the cache.
   *
   * Will update the recency of the entry.
   *
   * If the value is `undefined`, then this is an alias for
   * `cache.delete(key)`. `undefined` is never stored in the cache.
   */
  set(
    k: K,
    v: V | BackgroundFetch<V> | undefined,
    setOptions: LRUCache.SetOptions<K, V, FC> = {}
  ) {
    if (v === undefined) {
      this.delete(k)
      return this
    }
    const {
      ttl = this.ttl,
      start,
      noDisposeOnSet = this.noDisposeOnSet,
      sizeCalculation = this.sizeCalculation,
      status,
    } = setOptions
    let { noUpdateTTL = this.noUpdateTTL } = setOptions

    const size = this.#requireSize(
      k,
      v,
      setOptions.size || 0,
      sizeCalculation
    )
    // if the item doesn't fit, don't do anything
    // NB: maxEntrySize set to maxSize by default
    if (this.maxEntrySize && size > this.maxEntrySize) {
      if (status) {
        status.set = 'miss'
        status.maxEntrySizeExceeded = true
      }
      // have to delete, in case something is there already.
      this.#delete(k, 'set')
      return this
    }
    let index = this.#size === 0 ? undefined : this.#keyMap.get(k)
    if (index === undefined) {
      // addition
      index = (
        this.#size === 0
          ? this.#tail
          : this.#free.length !== 0
          ? this.#free.pop()
          : this.#size === this.#max
          ? this.#evict(false)
          : this.#size
      ) as Index
      this.#keyList[index] = k
      this.#valList[index] = v
      this.#keyMap.set(k, index)
      this.#next[this.#tail] = index
      this.#prev[index] = this.#tail
      this.#tail = index
      this.#size++
      this.#addItemSize(index, size, status)
      if (status) status.set = 'add'
      noUpdateTTL = false
      if (this.#hasOnInsert) {
        this.#onInsert?.(v as V, k, 'add')
      }
    } else {
      // update
      this.#moveToTail(index)
      const oldVal = this.#valList[index] as V | BackgroundFetch<V>
      if (v !== oldVal) {
        if (this.#hasFetchMethod && this.#isBackgroundFetch(oldVal)) {
          oldVal.__abortController.abort(new Error('replaced'))
          const { __staleWhileFetching: s } = oldVal
          if (s !== undefined && !noDisposeOnSet) {
            if (this.#hasDispose) {
              this.#dispose?.(s as V, k, 'set')
            }
            if (this.#hasDisposeAfter) {
              this.#disposed?.push([s as V, k, 'set'])
            }
          }
        } else if (!noDisposeOnSet) {
          if (this.#hasDispose) {
            this.#dispose?.(oldVal as V, k, 'set')
          }
          if (this.#hasDisposeAfter) {
            this.#disposed?.push([oldVal as V, k, 'set'])
          }
        }
        this.#removeItemSize(index)
        this.#addItemSize(index, size, status)
        this.#valList[index] = v
        if (status) {
          status.set = 'replace'
          const oldValue =
            oldVal && this.#isBackgroundFetch(oldVal)
              ? oldVal.__staleWhileFetching
              : oldVal
          if (oldValue !== undefined) status.oldValue = oldValue
        }
      } else if (status) {
        status.set = 'update'
      }

      if (this.#hasOnInsert) {
        this.onInsert?.(v as V, k, v === oldVal ? 'update' : 'replace');
      }
    }
    if (ttl !== 0 && !this.#ttls) {
      this.#initializeTTLTracking()
    }
    if (this.#ttls) {
      if (!noUpdateTTL) {
        this.#setItemTTL(index, ttl, start)
      }
      if (status) this.#statusTTL(status, index)
    }
    if (!noDisposeOnSet && this.#hasDisposeAfter && this.#disposed) {
      const dt = this.#disposed
      let task: DisposeTask<K, V> | undefined
      while ((task = dt?.shift())) {
        this.#disposeAfter?.(...task)
      }
    }
    return this
  }

  /**
   * Evict the least recently used item, returning its value or
   * `undefined` if cache is empty.
   */
  pop(): V | undefined {
    try {
      while (this.#size) {
        const val = this.#valList[this.#head]
        this.#evict(true)
        if (this.#isBackgroundFetch(val)) {
          if (val.__staleWhileFetching) {
            return val.__staleWhileFetching
          }
        } else if (val !== undefined) {
          return val
        }
      }
    } finally {
      if (this.#hasDisposeAfter && this.#disposed) {
        const dt = this.#disposed
        let task: DisposeTask<K, V> | undefined
        while ((task = dt?.shift())) {
          this.#disposeAfter?.(...task)
        }
      }
    }
  }

  #evict(free: boolean) {
    const head = this.#head
    const k = this.#keyList[head] as K
    const v = this.#valList[head] as V
    if (this.#hasFetchMethod && this.#isBackgroundFetch(v)) {
      v.__abortController.abort(new Error('evicted'))
    } else if (this.#hasDispose || this.#hasDisposeAfter) {
      if (this.#hasDispose) {
        this.#dispose?.(v, k, 'evict')
      }
      if (this.#hasDisposeAfter) {
        this.#disposed?.push([v, k, 'evict'])
      }
    }
    this.#removeItemSize(head)
    // if we aren't about to use the index, then null these out
    if (free) {
      this.#keyList[head] = undefined
      this.#valList[head] = undefined
      this.#free.push(head)
    }
    if (this.#size === 1) {
      this.#head = this.#tail = 0 as Index
      this.#free.length = 0
    } else {
      this.#head = this.#next[head] as Index
    }
    this.#keyMap.delete(k)
    this.#size--
    return head
  }

  /**
   * Check if a key is in the cache, without updating the recency of use.
   * Will return false if the item is stale, even though it is technically
   * in the cache.
   *
   * Check if a key is in the cache, without updating the recency of
   * use. Age is updated if {@link LRUCache.OptionsBase.updateAgeOnHas} is set
   * to `true` in either the options or the constructor.
   *
   * Will return `false` if the item is stale, even though it is technically in
   * the cache. The difference can be determined (if it matters) by using a
   * `status` argument, and inspecting the `has` field.
   *
   * Will not update item age unless
   * {@link LRUCache.OptionsBase.updateAgeOnHas} is set.
   */
  has(k: K, hasOptions: LRUCache.HasOptions<K, V, FC> = {}) {
    const { updateAgeOnHas = this.updateAgeOnHas, status } =
      hasOptions
    const index = this.#keyMap.get(k)
    if (index !== undefined) {
      const v = this.#valList[index]
      if (
        this.#isBackgroundFetch(v) &&
        v.__staleWhileFetching === undefined
      ) {
        return false
      }
      if (!this.#isStale(index)) {
        if (updateAgeOnHas) {
          this.#updateItemAge(index)
        }
        if (status) {
          status.has = 'hit'
          this.#statusTTL(status, index)
        }
        return true
      } else if (status) {
        status.has = 'stale'
        this.#statusTTL(status, index)
      }
    } else if (status) {
      status.has = 'miss'
    }
    return false
  }

  /**
   * Like {@link LRUCache#get} but doesn't update recency or delete stale
   * items.
   *
   * Returns `undefined` if the item is stale, unless
   * {@link LRUCache.OptionsBase.allowStale} is set.
   */
  peek(k: K, peekOptions: LRUCache.PeekOptions<K, V, FC> = {}) {
    const { allowStale = this.allowStale } = peekOptions
    const index = this.#keyMap.get(k)
    if (
      index === undefined ||
      (!allowStale && this.#isStale(index))
    ) {
      return
    }
    const v = this.#valList[index]
    // either stale and allowed, or forcing a refresh of non-stale value
    return this.#isBackgroundFetch(v) ? v.__staleWhileFetching : v
  }

  #backgroundFetch(
    k: K,
    index: Index | undefined,
    options: LRUCache.FetchOptions<K, V, FC>,
    context: any
  ): BackgroundFetch<V> {
    const v = index === undefined ? undefined : this.#valList[index]
    if (this.#isBackgroundFetch(v)) {
      return v
    }

    const ac = new AC()
    const { signal } = options
    // when/if our AC signals, then stop listening to theirs.
    signal?.addEventListener('abort', () => ac.abort(signal.reason), {
      signal: ac.signal,
    })

    const fetchOpts = {
      signal: ac.signal,
      options,
      context,
    }

    const cb = (
      v: V | undefined,
      updateCache = false
    ): V | undefined => {
      const { aborted } = ac.signal
      const ignoreAbort = options.ignoreFetchAbort && v !== undefined
      if (options.status) {
        if (aborted && !updateCache) {
          options.status.fetchAborted = true
          options.status.fetchError = ac.signal.reason
          if (ignoreAbort) options.status.fetchAbortIgnored = true
        } else {
          options.status.fetchResolved = true
        }
      }
      if (aborted && !ignoreAbort && !updateCache) {
        return fetchFail(ac.signal.reason)
      }
      // either we didn't abort, and are still here, or we did, and ignored
      const bf = p as BackgroundFetch<V>
      if (this.#valList[index as Index] === p) {
        if (v === undefined) {
          if (bf.__staleWhileFetching) {
            this.#valList[index as Index] = bf.__staleWhileFetching
          } else {
            this.#delete(k, 'fetch')
          }
        } else {
          if (options.status) options.status.fetchUpdated = true
          this.set(k, v, fetchOpts.options)
        }
      }
      return v
    }

    const eb = (er: any) => {
      if (options.status) {
        options.status.fetchRejected = true
        options.status.fetchError = er
      }
      return fetchFail(er)
    }

    const fetchFail = (er: any): V | undefined => {
      const { aborted } = ac.signal
      const allowStaleAborted =
        aborted && options.allowStaleOnFetchAbort
      const allowStale =
        allowStaleAborted || options.allowStaleOnFetchRejection
      const noDelete = allowStale || options.noDeleteOnFetchRejection
      const bf = p as BackgroundFetch<V>
      if (this.#valList[index as Index] === p) {
        // if we allow stale on fetch rejections, then we need to ensure that
        // the stale value is not removed from the cache when the fetch fails.
        const del = !noDelete || bf.__staleWhileFetching === undefined
        if (del) {
          this.#delete(k, 'fetch')
        } else if (!allowStaleAborted) {
          // still replace the *promise* with the stale value,
          // since we are done with the promise at this point.
          // leave it untouched if we're still waiting for an
          // aborted background fetch that hasn't yet returned.
          this.#valList[index as Index] = bf.__staleWhileFetching
        }
      }
      if (allowStale) {
        if (options.status && bf.__staleWhileFetching !== undefined) {
          options.status.returnedStale = true
        }
        return bf.__staleWhileFetching
      } else if (bf.__returned === bf) {
        throw er
      }
    }

    const pcall = (
      res: (v: V | undefined) => void,
      rej: (e: any) => void
    ) => {
      const fmp = this.#fetchMethod?.(k, v, fetchOpts)
      if (fmp && fmp instanceof Promise) {
        fmp.then(v => res(v === undefined ? undefined : v), rej)
      }
      // ignored, we go until we finish, regardless.
      // defer check until we are actually aborting,
      // so fetchMethod can override.
      ac.signal.addEventListener('abort', () => {
        if (
          !options.ignoreFetchAbort ||
          options.allowStaleOnFetchAbort
        ) {
          res(undefined)
          // when it eventually resolves, update the cache.
          if (options.allowStaleOnFetchAbort) {
            res = v => cb(v, true)
          }
        }
      })
    }

    if (options.status) options.status.fetchDispatched = true
    const p = new Promise(pcall).then(cb, eb)
    const bf: BackgroundFetch<V> = Object.assign(p, {
      __abortController: ac,
      __staleWhileFetching: v,
      __returned: undefined,
    })

    if (index === undefined) {
      // internal, don't expose status.
      this.set(k, bf, { ...fetchOpts.options, status: undefined })
      index = this.#keyMap.get(k)
    } else {
      this.#valList[index] = bf
    }
    return bf
  }

  #isBackgroundFetch(p: any): p is BackgroundFetch<V> {
    if (!this.#hasFetchMethod) return false
    const b = p as BackgroundFetch<V>
    return (
      !!b &&
      b instanceof Promise &&
      b.hasOwnProperty('__staleWhileFetching') &&
      b.__abortController instanceof AC
    )
  }

  /**
   * Make an asynchronous cached fetch using the
   * {@link LRUCache.OptionsBase.fetchMethod} function.
   *
   * If the value is in the cache and not stale, then the returned
   * Promise resolves to the value.
   *
   * If not in the cache, or beyond its TTL staleness, then
   * `fetchMethod(key, staleValue, { options, signal, context })` is
   * called, and the value returned will be added to the cache once
   * resolved.
   *
   * If called with `allowStale`, and an asynchronous fetch is
   * currently in progress to reload a stale value, then the former
   * stale value will be returned.
   *
   * If called with `forceRefresh`, then the cached item will be
   * re-fetched, even if it is not stale. However, if `allowStale` is also
   * set, then the old value will still be returned. This is useful
   * in cases where you want to force a reload of a cached value. If
   * a background fetch is already in progress, then `forceRefresh`
   * has no effect.
   *
   * If multiple fetches for the same key are issued, then they will all be
   * coalesced into a single call to fetchMethod.
   *
   * Note that this means that handling options such as
   * {@link LRUCache.OptionsBase.allowStaleOnFetchAbort},
   * {@link LRUCache.FetchOptions.signal},
   * and {@link LRUCache.OptionsBase.allowStaleOnFetchRejection} will be
   * determined by the FIRST fetch() call for a given key.
   *
   * This is a known (fixable) shortcoming which will be addresed on when
   * someone complains about it, as the fix would involve added complexity and
   * may not be worth the costs for this edge case.
   *
   * If {@link LRUCache.OptionsBase.fetchMethod} is not specified, then this is
   * effectively an alias for `Promise.resolve(cache.get(key))`.
   *
   * When the fetch method resolves to a value, if the fetch has not
   * been aborted due to deletion, eviction, or being overwritten,
   * then it is added to the cache using the options provided.
   *
   * If the key is evicted or deleted before the `fetchMethod`
   * resolves, then the AbortSignal passed to the `fetchMethod` will
   * receive an `abort` event, and the promise returned by `fetch()`
   * will reject with the reason for the abort.
   *
   * If a `signal` is passed to the `fetch()` call, then aborting the
   * signal will abort the fetch and cause the `fetch()` promise to
   * reject with the reason provided.
   *
   * **Setting `context`**
   *
   * If an `FC` type is set to a type other than `unknown`, `void`, or
   * `undefined` in the {@link LRUCache} constructor, then all
   * calls to `cache.fetch()` _must_ provide a `context` option. If
   * set to `undefined` or `void`, then calls to fetch _must not_
   * provide a `context` option.
   *
   * The `context` param allows you to provide arbitrary data that
   * might be relevant in the course of fetching the data. It is only
   * relevant for the course of a single `fetch()` operation, and
   * discarded afterwards.
   *
   * **Note: `fetch()` calls are inflight-unique**
   *
   * If you call `fetch()` multiple times with the same key value,
   * then every call after the first will resolve on the same
   * promise<sup>1</sup>,
   * _even if they have different settings that would otherwise change
   * the behavior of the fetch_, such as `noDeleteOnFetchRejection`
   * or `ignoreFetchAbort`.
   *
   * In most cases, this is not a problem (in fact, only fetching
   * something once is what you probably want, if you're caching in
   * the first place). If you are changing the fetch() options
   * dramatically between runs, there's a good chance that you might
   * be trying to fit divergent semantics into a single object, and
   * would be better off with multiple cache instances.
   *
   * **1**: Ie, they're not the "same Promise", but they resolve at
   * the same time, because they're both waiting on the same
   * underlying fetchMethod response.
   */

  fetch(
    k: K,
    fetchOptions: unknown extends FC
      ? LRUCache.FetchOptions<K, V, FC>
      : FC extends undefined | void
      ? LRUCache.FetchOptionsNoContext<K, V>
      : LRUCache.FetchOptionsWithContext<K, V, FC>
  ): Promise<undefined | V>

  // this overload not allowed if context is required
  fetch(
    k: unknown extends FC
      ? K
      : FC extends undefined | void
      ? K
      : never,
    fetchOptions?: unknown extends FC
      ? LRUCache.FetchOptions<K, V, FC>
      : FC extends undefined | void
      ? LRUCache.FetchOptionsNoContext<K, V>
      : never
  ): Promise<undefined | V>

  async fetch(
    k: K,
    fetchOptions: LRUCache.FetchOptions<K, V, FC> = {}
  ): Promise<undefined | V> {
    const {
      // get options
      allowStale = this.allowStale,
      updateAgeOnGet = this.updateAgeOnGet,
      noDeleteOnStaleGet = this.noDeleteOnStaleGet,
      // set options
      ttl = this.ttl,
      noDisposeOnSet = this.noDisposeOnSet,
      size = 0,
      sizeCalculation = this.sizeCalculation,
      noUpdateTTL = this.noUpdateTTL,
      // fetch exclusive options
      noDeleteOnFetchRejection = this.noDeleteOnFetchRejection,
      allowStaleOnFetchRejection = this.allowStaleOnFetchRejection,
      ignoreFetchAbort = this.ignoreFetchAbort,
      allowStaleOnFetchAbort = this.allowStaleOnFetchAbort,
      context,
      forceRefresh = false,
      status,
      signal,
    } = fetchOptions

    if (!this.#hasFetchMethod) {
      if (status) status.fetch = 'get'
      return this.get(k, {
        allowStale,
        updateAgeOnGet,
        noDeleteOnStaleGet,
        status,
      })
    }

    const options = {
      allowStale,
      updateAgeOnGet,
      noDeleteOnStaleGet,
      ttl,
      noDisposeOnSet,
      size,
      sizeCalculation,
      noUpdateTTL,
      noDeleteOnFetchRejection,
      allowStaleOnFetchRejection,
      allowStaleOnFetchAbort,
      ignoreFetchAbort,
      status,
      signal,
    }

    let index = this.#keyMap.get(k)
    if (index === undefined) {
      if (status) status.fetch = 'miss'
      const p = this.#backgroundFetch(k, index, options, context)
      return (p.__returned = p)
    } else {
      // in cache, maybe already fetching
      const v = this.#valList[index]
      if (this.#isBackgroundFetch(v)) {
        const stale =
          allowStale && v.__staleWhileFetching !== undefined
        if (status) {
          status.fetch = 'inflight'
          if (stale) status.returnedStale = true
        }
        return stale ? v.__staleWhileFetching : (v.__returned = v)
      }

      // if we force a refresh, that means do NOT serve the cached value,
      // unless we are already in the process of refreshing the cache.
      const isStale = this.#isStale(index)
      if (!forceRefresh && !isStale) {
        if (status) status.fetch = 'hit'
        this.#moveToTail(index)
        if (updateAgeOnGet) {
          this.#updateItemAge(index)
        }
        if (status) this.#statusTTL(status, index)
        return v
      }

      // ok, it is stale or a forced refresh, and not already fetching.
      // refresh the cache.
      const p = this.#backgroundFetch(k, index, options, context)
      const hasStale = p.__staleWhileFetching !== undefined
      const staleVal = hasStale && allowStale
      if (status) {
        status.fetch = isStale ? 'stale' : 'refresh'
        if (staleVal && isStale) status.returnedStale = true
      }
      return staleVal ? p.__staleWhileFetching : (p.__returned = p)
    }
  }

  /**
   * In some cases, `cache.fetch()` may resolve to `undefined`, either because
   * a {@link LRUCache.OptionsBase#fetchMethod} was not provided (turning
   * `cache.fetch(k)` into just an async wrapper around `cache.get(k)`) or
   * because `ignoreFetchAbort` was specified (either to the constructor or
   * in the {@link LRUCache.FetchOptions}). Also, the
   * {@link LRUCache.OptionsBase.fetchMethod} may return `undefined` or `void`, making
   * the test even more complicated.
   *
   * Because inferring the cases where `undefined` might be returned are so
   * cumbersome, but testing for `undefined` can also be annoying, this method
   * can be used, which will reject if `this.fetch()` resolves to undefined.
   */
  forceFetch(
    k: K,
    fetchOptions: unknown extends FC
      ? LRUCache.FetchOptions<K, V, FC>
      : FC extends undefined | void
      ? LRUCache.FetchOptionsNoContext<K, V>
      : LRUCache.FetchOptionsWithContext<K, V, FC>
  ): Promise<V>
  // this overload not allowed if context is required
  forceFetch(
    k: unknown extends FC
      ? K
      : FC extends undefined | void
      ? K
      : never,
    fetchOptions?: unknown extends FC
      ? LRUCache.FetchOptions<K, V, FC>
      : FC extends undefined | void
      ? LRUCache.FetchOptionsNoContext<K, V>
      : never
  ): Promise<V>
  async forceFetch(
    k: K,
    fetchOptions: LRUCache.FetchOptions<K, V, FC> = {}
  ): Promise<V> {
    const v = await this.fetch(
      k,
      fetchOptions as unknown extends FC
        ? LRUCache.FetchOptions<K, V, FC>
        : FC extends undefined | void
        ? LRUCache.FetchOptionsNoContext<K, V>
        : LRUCache.FetchOptionsWithContext<K, V, FC>
    )
    if (v === undefined) throw new Error('fetch() returned undefined')
    return v
  }

  /**
   * If the key is found in the cache, then this is equivalent to
   * {@link LRUCache#get}. If not, in the cache, then calculate the value using
   * the {@link LRUCache.OptionsBase.memoMethod}, and add it to the cache.
   *
   * If an `FC` type is set to a type other than `unknown`, `void`, or
   * `undefined` in the LRUCache constructor, then all calls to `cache.memo()`
   * _must_ provide a `context` option. If set to `undefined` or `void`, then
   * calls to memo _must not_ provide a `context` option.
   *
   * The `context` param allows you to provide arbitrary data that might be
   * relevant in the course of fetching the data. It is only relevant for the
   * course of a single `memo()` operation, and discarded afterwards.
   */
  memo(
    k: K,
    memoOptions: unknown extends FC
      ? LRUCache.MemoOptions<K, V, FC>
      : FC extends undefined | void
      ? LRUCache.MemoOptionsNoContext<K, V>
      : LRUCache.MemoOptionsWithContext<K, V, FC>
  ): V
  // this overload not allowed if context is required
  memo(
    k: unknown extends FC
      ? K
      : FC extends undefined | void
      ? K
      : never,
    memoOptions?: unknown extends FC
      ? LRUCache.MemoOptions<K, V, FC>
      : FC extends undefined | void
      ? LRUCache.MemoOptionsNoContext<K, V>
      : never
  ): V
  memo(k: K, memoOptions: LRUCache.MemoOptions<K, V, FC> = {}) {
    const memoMethod = this.#memoMethod
    if (!memoMethod) {
      throw new Error('no memoMethod provided to constructor')
    }
    const { context, forceRefresh, ...options } = memoOptions
    const v = this.get(k, options)
    if (!forceRefresh && v !== undefined) return v
    const vv = memoMethod(k, v, {
      options,
      context,
    } as LRUCache.MemoizerOptions<K, V, FC>)
    this.set(k, vv, options)
    return vv
  }

  /**
   * Return a value from the cache. Will update the recency of the cache
   * entry found.
   *
   * If the key is not found, get() will return `undefined`.
   */
  get(k: K, getOptions: LRUCache.GetOptions<K, V, FC> = {}) {
    const {
      allowStale = this.allowStale,
      updateAgeOnGet = this.updateAgeOnGet,
      noDeleteOnStaleGet = this.noDeleteOnStaleGet,
      status,
    } = getOptions
    const index = this.#keyMap.get(k)
    if (index !== undefined) {
      const value = this.#valList[index]
      const fetching = this.#isBackgroundFetch(value)
      if (status) this.#statusTTL(status, index)
      if (this.#isStale(index)) {
        if (status) status.get = 'stale'
        // delete only if not an in-flight background fetch
        if (!fetching) {
          if (!noDeleteOnStaleGet) {
            this.#delete(k, 'expire')
          }
          if (status && allowStale) status.returnedStale = true
          return allowStale ? value : undefined
        } else {
          if (
            status &&
            allowStale &&
            value.__staleWhileFetching !== undefined
          ) {
            status.returnedStale = true
          }
          return allowStale ? value.__staleWhileFetching : undefined
        }
      } else {
        if (status) status.get = 'hit'
        // if we're currently fetching it, we don't actually have it yet
        // it's not stale, which means this isn't a staleWhileRefetching.
        // If it's not stale, and fetching, AND has a __staleWhileFetching
        // value, then that means the user fetched with {forceRefresh:true},
        // so it's safe to return that value.
        if (fetching) {
          return value.__staleWhileFetching
        }
        this.#moveToTail(index)
        if (updateAgeOnGet) {
          this.#updateItemAge(index)
        }
        return value
      }
    } else if (status) {
      status.get = 'miss'
    }
  }

  #connect(p: Index, n: Index) {
    this.#prev[n] = p
    this.#next[p] = n
  }

  #moveToTail(index: Index): void {
    // if tail already, nothing to do
    // if head, move head to next[index]
    // else
    //   move next[prev[index]] to next[index] (head has no prev)
    //   move prev[next[index]] to prev[index]
    // prev[index] = tail
    // next[tail] = index
    // tail = index
    if (index !== this.#tail) {
      if (index === this.#head) {
        this.#head = this.#next[index] as Index
      } else {
        this.#connect(
          this.#prev[index] as Index,
          this.#next[index] as Index
        )
      }
      this.#connect(this.#tail, index)
      this.#tail = index
    }
  }

  /**
   * Deletes a key out of the cache.
   *
   * Returns true if the key was deleted, false otherwise.
   */
  delete(k: K) {
    return this.#delete(k, 'delete')
  }

  #delete(k: K, reason: LRUCache.DisposeReason) {
    let deleted = false
    if (this.#size !== 0) {
      const index = this.#keyMap.get(k)
      if (index !== undefined) {
        deleted = true
        if (this.#size === 1) {
          this.#clear(reason)
        } else {
          this.#removeItemSize(index)
          const v = this.#valList[index]
          if (this.#isBackgroundFetch(v)) {
            v.__abortController.abort(new Error('deleted'))
          } else if (this.#hasDispose || this.#hasDisposeAfter) {
            if (this.#hasDispose) {
              this.#dispose?.(v as V, k, reason)
            }
            if (this.#hasDisposeAfter) {
              this.#disposed?.push([v as V, k, reason])
            }
          }
          this.#keyMap.delete(k)
          this.#keyList[index] = undefined
          this.#valList[index] = undefined
          if (index === this.#tail) {
            this.#tail = this.#prev[index] as Index
          } else if (index === this.#head) {
            this.#head = this.#next[index] as Index
          } else {
            const pi = this.#prev[index] as number
            this.#next[pi] = this.#next[index] as number
            const ni = this.#next[index] as number
            this.#prev[ni] = this.#prev[index] as number
          }
          this.#size--
          this.#free.push(index)
        }
      }
    }
    if (this.#hasDisposeAfter && this.#disposed?.length) {
      const dt = this.#disposed
      let task: DisposeTask<K, V> | undefined
      while ((task = dt?.shift())) {
        this.#disposeAfter?.(...task)
      }
    }
    return deleted
  }

  /**
   * Clear the cache entirely, throwing away all values.
   */
  clear() {
    return this.#clear('delete')
  }
  #clear(reason: LRUCache.DisposeReason) {
    for (const index of this.#rindexes({ allowStale: true })) {
      const v = this.#valList[index]
      if (this.#isBackgroundFetch(v)) {
        v.__abortController.abort(new Error('deleted'))
      } else {
        const k = this.#keyList[index]
        if (this.#hasDispose) {
          this.#dispose?.(v as V, k as K, reason)
        }
        if (this.#hasDisposeAfter) {
          this.#disposed?.push([v as V, k as K, reason])
        }
      }
    }

    this.#keyMap.clear()
    this.#valList.fill(undefined)
    this.#keyList.fill(undefined)
    if (this.#ttls && this.#starts) {
      this.#ttls.fill(0)
      this.#starts.fill(0)
    }
    if (this.#sizes) {
      this.#sizes.fill(0)
    }
    this.#head = 0 as Index
    this.#tail = 0 as Index
    this.#free.length = 0
    this.#calculatedSize = 0
    this.#size = 0
    if (this.#hasDisposeAfter && this.#disposed) {
      const dt = this.#disposed
      let task: DisposeTask<K, V> | undefined
      while ((task = dt?.shift())) {
        this.#disposeAfter?.(...task)
      }
    }
  }
}
