// TODO:
// - make sure tests all still pass
// - tsdoc comments from main's index.d.ts, and correct the links

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

const emitWarning = (
  msg: string,
  type: string,
  code: string,
  fn: ForC
) => {
  typeof process === 'object' &&
  process &&
  typeof process.emitWarning === 'function'
    ? process.emitWarning(msg, type, code, fn)
    : console.error(`[${code}] ${type}: ${msg}`)
}

const shouldWarn = (code: string) => !warned.has(code)

const TYPE = Symbol('type')
type PosInt = number & { [TYPE]: 'Positive Integer' }
type Index = number & { [TYPE]: 'LRUCache Index' }

const isPosInt = (n: any): n is PosInt =>
  n && n === Math.floor(n) && n > 0 && isFinite(n)

type UintArray = Uint8Array | Uint16Array | Uint32Array
type NumberArray = UintArray | number[]

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

class ZeroArray extends Array {
  constructor(size: number) {
    super(size)
    this.fill(0)
  }
}

type StackLike = Stack | number[]
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

type BackgroundFetch<V> = Promise<V | undefined | void> & {
  __returned: BackgroundFetch<V> | undefined
  __abortController: AbortController
  __staleWhileFetching: V | undefined
}

type DisposeTask<K, V> = Parameters<LRUCache.Disposer<K, V>>

namespace LRUCache {
  export type LRUSize = number
  export type LRUMilliseconds = number
  export type LRUCount = number
  export type DisposeReason = 'evict' | 'set' | 'delete'
  export type Disposer<K, V> = (
    value: V,
    key: K,
    reason: DisposeReason
  ) => void
  export type SizeCalculator<K, V> = (value: V, key: K) => LRUSize

  export interface FetcherOptions<K, V> {
    signal: AbortSignal
    options: FetcherFetchOptions<K, V>
    /**
     * Object provided in the {@link fetchContext} option
     */
    context: any
  }

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
    ttl?: LRUMilliseconds

    /**
     * the start time for the item, or undefined if ttls are not used.
     */
    start?: LRUMilliseconds

    /**
     * The timestamp used for TTL calculation
     */
    now?: LRUMilliseconds

    /**
     * the remaining ttl for the item, or undefined if ttls are not used.
     */
    remainingTTL?: LRUMilliseconds

    /**
     * The calculated size for the item, if sizes are used.
     */
    entrySize?: LRUSize

    /**
     * The total calculated size of the cache, if sizes are used.
     */
    totalCalculatedSize?: LRUSize

    /**
     * A flag indicating that the item was not stored, due to exceeding the
     * {@link maxEntrySize}
     */
    maxEntrySizeExceeded?: true

    /**
     * The old value, specified in the case of `set:'update'` or
     * `set:'replace'`
     */
    oldValue?: V

    /**
     * The results of a {@link has} operation
     *
     * - hit: the item was found in the cache
     * - stale: the item was found in the cache, but is stale
     * - miss: the item was not found in the cache
     */
    has?: 'hit' | 'stale' | 'miss'

    /**
     * The status of a {@link fetch} operation.
     * Note that this can change as the underlying fetch() moves through
     * various states.
     *
     * - inflight: there is another fetch() for this key which is in process
     * - get: there is no fetchMethod, so {@link get} was called.
     * - miss: the item is not in cache, and will be fetched.
     * - hit: the item is in the cache, and was resolved immediately.
     * - stale: the item is in the cache, but stale.
     * - refresh: the item is in the cache, and not stale, but
     *   {@link forceRefresh} was specified.
     */
    fetch?: 'get' | 'inflight' | 'miss' | 'hit' | 'stale' | 'refresh'

    /**
     * The {@link fetchMethod} was called
     */
    fetchDispatched?: true

    /**
     * The cached value was updated after a successful call to fetchMethod
     */
    fetchUpdated?: true

    /**
     * The reason for a fetch() rejection.  Either the error raised by the
     * {@link fetchMethod}, or the reason for an AbortSignal.
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
     * The status of a {@link get} operation.
     *
     * - fetching: The item is currently being fetched.  If a previous value is
     *   present and allowed, that will be returned.
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

  export type FetcherFetchOptions<K, V> = Pick<
    LRUOptionsBase<K, V>,
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
  > & {
    status?: Status<V>
    size?: LRUSize
  }

  export type FetchOptions<K, V> = FetcherFetchOptions<K, V> & {
    forceRefresh?: boolean
    fetchContext?: any
    signal?: AbortSignal
    status?: Status<V>
  }

  export type HasOptions<K, V> = Pick<
    LRUOptionsBase<K, V>,
    'updateAgeOnHas'
  > & { status?: Status<V> }

  export type GetOptions<K, V> = Pick<
    LRUOptionsBase<K, V>,
    'allowStale' | 'updateAgeOnGet' | 'noDeleteOnStaleGet'
  > & { status?: Status<V> }

  export type PeekOptions<K, V> = Pick<
    LRUOptionsBase<K, V>,
    'allowStale'
  >

  export type SetOptions<K, V> = Pick<
    LRUOptionsBase<K, V>,
    'sizeCalculation' | 'ttl' | 'noDisposeOnSet' | 'noUpdateTTL'
  > & {
    size?: LRUSize
    start?: LRUMilliseconds
    status?: Status<V>
  }

  export type Fetcher<K, V> = (
    key: K,
    staleValue: V | undefined,
    options: FetcherOptions<K, V>
  ) => Promise<V | void | undefined> | V | void | undefined

  // all options that may be provided to the constructor, with their types
  export interface LRUOptionsBase<K, V> {
    max?: LRUCount
    ttl?: LRUMilliseconds
    ttlResolution?: LRUMilliseconds
    ttlAutopurge?: boolean
    updateAgeOnGet?: boolean
    updateAgeOnHas?: boolean
    allowStale?: boolean
    dispose?: Disposer<K, V>
    disposeAfter?: Disposer<K, V>
    noDisposeOnSet?: boolean
    noUpdateTTL?: boolean
    maxSize?: LRUSize
    maxEntrySize?: LRUSize
    sizeCalculation?: SizeCalculator<K, V>
    fetchMethod?: Fetcher<K, V>
    fetchContext?: any
    noDeleteOnFetchRejection?: boolean
    noDeleteOnStaleGet?: boolean
    allowStaleOnFetchRejection?: boolean
    allowStaleOnFetchAbort?: boolean
    ignoreFetchAbort?: boolean
  }

  export interface LRUOptionsMaxLimit<K, V>
    extends LRUOptionsBase<K, V> {
    max: LRUCount
  }
  export interface LRUOptionsTTLLimit<K, V>
    extends LRUOptionsBase<K, V> {
    ttl: LRUMilliseconds
  }
  export interface LRUOptionsSizeLimit<K, V>
    extends LRUOptionsBase<K, V> {
    maxSize: LRUSize
  }
  // valid safe option combinations for the constructor
  export type LRUOptions<K, V> =
    | LRUOptionsMaxLimit<K, V>
    | LRUOptionsSizeLimit<K, V>
    | (LRUOptionsTTLLimit<K, V> & { ttlAutopurge: boolean })

  export interface Entry<V> {
    value: V
    ttl?: LRUMilliseconds
    size?: LRUSize
    start?: LRUMilliseconds
  }
}

class LRUCache<K extends {}, V extends {}> {
  // properties coming in from the options
  // of these, only max really *needs* to be protected,
  // the rest can be modified, as they just set defaults
  // for various methods.
  #max: LRUCache.LRUCount
  ttl: LRUCache.LRUMilliseconds
  ttlResolution: LRUCache.LRUMilliseconds
  ttlAutopurge: boolean
  updateAgeOnGet: boolean
  updateAgeOnHas: boolean
  allowStale: boolean
  dispose?: LRUCache.Disposer<K, V>
  disposeAfter?: LRUCache.Disposer<K, V>
  noDisposeOnSet: boolean
  noUpdateTTL: boolean
  maxSize: LRUCache.LRUSize
  maxEntrySize: LRUCache.LRUSize
  sizeCalculation?: LRUCache.SizeCalculator<K, V>
  fetchMethod?: LRUCache.Fetcher<K, V>
  fetchContext?: any
  noDeleteOnFetchRejection: boolean
  noDeleteOnStaleGet: boolean
  allowStaleOnFetchRejection: boolean
  allowStaleOnFetchAbort: boolean
  ignoreFetchAbort: boolean

  // computed properties
  #size: LRUCache.LRUCount
  #calculatedSize: LRUCache.LRUSize
  #keyMap: Map<K, Index>
  #keyList: (K | undefined)[]
  #valList: (V | BackgroundFetch<V> | undefined)[]
  #next: NumberArray
  #prev: NumberArray
  #head: Index
  #tail: Index
  #free: StackLike
  #initialFill: Index
  #disposed?: DisposeTask<K, V>[]
  #sizes?: ZeroArray
  #starts?: ZeroArray
  #ttls?: ZeroArray

  /**
   * Do not call this method unless you need to inspect the
   * inner workings of the cache.  If anything returned by this
   * object is modified in any way, strange breakage may occur.
   *
   * These fields are private for a reason!
   *
   * @internal
   */
  static unsafeExposeInternals<K extends {}, V extends {}>(
    c: LRUCache<K, V>
  ) {
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
      initialFill: c.#initialFill,
      // methods
      isBackgroundFetch: (p: any) => c.#isBackgroundFetch(p),
      backgroundFetch: (
        k: K,
        index: number | undefined,
        options: LRUCache.FetchOptions<K, V>,
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

  get max(): LRUCache.LRUCount {
    return this.#max
  }
  get calculatedSize(): LRUCache.LRUSize {
    return this.#calculatedSize
  }
  get size(): LRUCache.LRUCount {
    return this.#size
  }

  constructor(options: LRUCache.LRUOptions<K, V> | LRUCache<K, V>) {
    const {
      max = 0,
      ttl,
      ttlResolution = 1,
      ttlAutopurge,
      updateAgeOnGet,
      updateAgeOnHas,
      allowStale,
      dispose,
      disposeAfter,
      noDisposeOnSet,
      noUpdateTTL,
      maxSize = 0,
      maxEntrySize = 0,
      sizeCalculation,
      fetchMethod,
      fetchContext,
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
    this.maxSize = maxSize
    this.maxEntrySize = maxEntrySize || this.maxSize
    this.sizeCalculation = sizeCalculation
    if (this.sizeCalculation) {
      if (!this.maxSize && !this.maxEntrySize) {
        throw new TypeError(
          'cannot set sizeCalculation without setting maxSize or maxEntrySize'
        )
      }
      if (typeof this.sizeCalculation !== 'function') {
        throw new TypeError('sizeCalculation set to non-function')
      }
    }

    if (
      fetchMethod !== undefined &&
      typeof fetchMethod !== 'function'
    ) {
      throw new TypeError(
        'fetchMethod must be a function if specified'
      )
    }
    this.fetchMethod = fetchMethod

    if (!this.fetchMethod && fetchContext !== undefined) {
      throw new TypeError(
        'cannot set fetchContext without fetchMethod'
      )
    }
    this.fetchContext = fetchContext

    this.#keyMap = new Map()
    this.#keyList = new Array(max).fill(undefined)
    this.#valList = new Array(max).fill(undefined)
    this.#next = new UintArray(max)
    this.#prev = new UintArray(max)
    this.#head = 0 as Index
    this.#tail = 0 as Index
    this.#free = Stack.create(max)
    this.#initialFill = 1 as Index
    this.#size = 0
    this.#calculatedSize = 0

    if (typeof dispose === 'function') {
      this.dispose = dispose
    }
    if (typeof disposeAfter === 'function') {
      this.disposeAfter = disposeAfter
      this.#disposed = []
    } else {
      this.disposeAfter = undefined
      this.#disposed = undefined
    }
    this.noDisposeOnSet = !!noDisposeOnSet
    this.noUpdateTTL = !!noUpdateTTL
    this.noDeleteOnFetchRejection = !!noDeleteOnFetchRejection
    this.allowStaleOnFetchRejection = !!allowStaleOnFetchRejection
    this.allowStaleOnFetchAbort = !!allowStaleOnFetchAbort
    this.ignoreFetchAbort = !!ignoreFetchAbort

    // NB: maxEntrySize is set to maxSize if it's set
    if (this.maxEntrySize !== 0) {
      if (this.maxSize !== 0) {
        if (!isPosInt(this.maxSize)) {
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
    if (this.#max === 0 && this.ttl === 0 && this.maxSize === 0) {
      throw new TypeError(
        'At least one of max, maxSize, or ttl is required'
      )
    }
    if (!this.ttlAutopurge && !this.#max && !this.maxSize) {
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
            this.delete(this.#keyList[index] as K)
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
      if (status && ttls[index]) {
        const ttl = ttls[index]
        const start = starts[index]
        status.ttl = ttl
        status.start = start
        status.now = cachedNow || getNow()
        status.remainingTTL = status.now + ttl - start
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
      return ttls[index] === 0 || starts[index] === 0
        ? Infinity
        : starts[index] + ttls[index] - (cachedNow || getNow())
    }

    this.#isStale = index => {
      return (
        ttls[index] !== 0 &&
        starts[index] !== 0 &&
        (cachedNow || getNow()) - starts[index] > ttls[index]
      )
    }
  }

  // conditionally set private methods related to TTL
  #updateItemAge: (index: Index) => void = () => {}
  #statusTTL: (
    status: LRUCache.Status<V> | undefined,
    index: Index
  ) => void = () => {}
  #setItemTTL: (
    index: Index,
    ttl: LRUCache.LRUMilliseconds,
    start?: LRUCache.LRUMilliseconds
  ) => void = () => {}
  #isStale: (index: Index) => boolean = () => false

  #initializeSizeTracking() {
    const sizes = new ZeroArray(this.#max)
    this.#calculatedSize = 0
    this.#sizes = sizes
    this.#removeItemSize = index => {
      this.#calculatedSize -= sizes[index]
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
      size: LRUCache.LRUSize,
      status?: LRUCache.Status<V>
    ) => {
      sizes[index] = size
      if (this.maxSize) {
        const maxSize = this.maxSize - sizes[index]
        while (this.#calculatedSize > maxSize) {
          this.#evict(true)
        }
      }
      this.#calculatedSize += sizes[index]
      if (status) {
        status.entrySize = size
        status.totalCalculatedSize = this.#calculatedSize
      }
    }
  }
  // TODO: privatize
  #removeItemSize: (index: Index) => void = () => {}
  #addItemSize: (
    index: Index,
    size: LRUCache.LRUSize,
    status?: LRUCache.Status<V>
  ) => void = () => {}
  #requireSize: (
    k: K,
    v: V | BackgroundFetch<V>,
    size?: LRUCache.LRUSize,
    sizeCalculation?: LRUCache.SizeCalculator<K, V>
  ) => LRUCache.LRUSize = (
    _k: K,
    _v: V | BackgroundFetch<V>,
    size?: LRUCache.LRUSize,
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
    if (this.size) {
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
    if (this.size) {
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

  *entries() {
    for (const i of this.#indexes()) {
      if (
        this.#valList[i] !== undefined &&
        this.#keyList[i] !== undefined &&
        !this.#isBackgroundFetch(this.#valList[i])
      ) {
        yield [this.#keyList[i], this.#valList[i]]
      }
    }
  }
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

  *values() {
    for (const i of this.#indexes()) {
      const v = this.#valList[i]
      if (
        v !== undefined &&
        !this.#isBackgroundFetch(this.#valList[i])
      ) {
        yield this.#valList[i]
      }
    }
  }
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

  [Symbol.iterator]() {
    return this.entries()
  }

  find(
    fn: (v: V, k: K, self: LRUCache<K, V>) => boolean,
    getOptions: LRUCache.GetOptions<K, V> = {}
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

  forEach(
    fn: (v: V, k: K, self: LRUCache<K, V>) => any,
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

  rforEach(
    fn: (v: V, k: K, self: LRUCache<K, V>) => any,
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

  purgeStale() {
    let deleted = false
    for (const i of this.#rindexes({ allowStale: true })) {
      if (this.#isStale(i)) {
        this.delete(this.#keyList[i] as K)
        deleted = true
      }
    }
    return deleted
  }

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
        const age = perf.now() - this.#starts[i]
        entry.start = Math.floor(Date.now() - age)
      }
      if (this.#sizes) {
        entry.size = this.#sizes[i]
      }
      arr.unshift([key, entry])
    }
    return arr
  }

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

  set(
    k: K,
    v: V | BackgroundFetch<V>,
    {
      ttl = this.ttl,
      start,
      noDisposeOnSet = this.noDisposeOnSet,
      size = 0,
      sizeCalculation = this.sizeCalculation,
      noUpdateTTL = this.noUpdateTTL,
      status,
    }: LRUCache.SetOptions<K, V> = {}
  ) {
    size = this.#requireSize(k, v, size, sizeCalculation)
    // if the item doesn't fit, don't do anything
    // NB: maxEntrySize set to maxSize by default
    if (this.maxEntrySize && size > this.maxEntrySize) {
      if (status) {
        status.set = 'miss'
        status.maxEntrySizeExceeded = true
      }
      // have to delete, in case a background fetch is there already.
      // in non-async cases, this is a no-op
      this.delete(k)
      return this
    }
    let index = this.size === 0 ? undefined : this.#keyMap.get(k)
    if (index === undefined) {
      // addition
      index = this.#newIndex()
      this.#keyList[index] = k
      this.#valList[index] = v
      this.#keyMap.set(k, index)
      this.#next[this.#tail] = index
      this.#prev[index] = this.#tail
      this.#tail = index
      this.#size++
      this.#addItemSize(index, size, status)
      if (status) {
        status.set = 'add'
      }
      noUpdateTTL = false
    } else {
      // update
      this.#moveToTail(index)
      const oldVal = this.#valList[index] as V | BackgroundFetch<V>
      if (v !== oldVal) {
        if (this.#isBackgroundFetch(oldVal)) {
          oldVal.__abortController.abort(new Error('replaced'))
        } else {
          if (!noDisposeOnSet) {
            this.dispose?.(oldVal, k, 'set')
            if (this.disposeAfter) {
              this.#disposed?.push([oldVal, k, 'set'])
            }
          }
        }
        this.#removeItemSize(index)
        this.#valList[index] = v
        this.#addItemSize(index, size, status)
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
    }
    if (ttl !== 0 && this.ttl === 0 && !this.#ttls) {
      this.#initializeTTLTracking()
    }
    if (!noUpdateTTL) {
      this.#setItemTTL(index, ttl, start)
    }
    this.#statusTTL(status, index)
    if (this.disposeAfter && this.#disposed) {
      const dt = this.#disposed
      let task: DisposeTask<K, V> | undefined
      while ((task = dt?.shift())) {
        this.disposeAfter(...task)
      }
    }
    return this
  }

  #newIndex(): Index {
    if (this.#size === 0) {
      return this.#tail
    }
    if (this.#free.length !== 0) {
      return this.#free.pop() as Index
    }
    if (this.#size === this.#max && this.#max !== 0) {
      return this.#evict(false)
    }
    // initial fill, just keep writing down the list
    const i = this.#initialFill
    this.#initialFill = ((this.#initialFill as number) + 1) as Index
    return i
  }

  pop() {
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
      if (this.disposeAfter && this.#disposed) {
        const dt = this.#disposed
        let task: DisposeTask<K, V> | undefined
        while ((task = dt?.shift())) {
          this.disposeAfter(...task)
        }
      }
    }
  }

  #evict(free: boolean) {
    const head = this.#head
    const k = this.#keyList[head] as K
    const v = this.#valList[head] as V
    if (this.#isBackgroundFetch(v)) {
      v.__abortController.abort(new Error('evicted'))
    } else {
      this.dispose?.(v, k, 'evict')
      if (this.disposeAfter) {
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
      this.#initialFill = 1 as Index
      this.#free.length = 0
    } else {
      this.#head = this.#next[head] as Index
    }
    this.#keyMap.delete(k)
    this.#size--
    return head
  }

  has(
    k: K,
    {
      updateAgeOnHas = this.updateAgeOnHas,
      status,
    }: LRUCache.HasOptions<K, V> = {}
  ) {
    const index = this.#keyMap.get(k)
    if (index !== undefined) {
      if (!this.#isStale(index)) {
        if (updateAgeOnHas) {
          this.#updateItemAge(index)
        }
        if (status) status.has = 'hit'
        this.#statusTTL(status, index)
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

  // like get(), but without any LRU updating or TTL expiration
  peek(k: K, { allowStale = this.allowStale } = {}) {
    const index = this.#keyMap.get(k)
    if (
      index !== undefined &&
      (allowStale || !this.#isStale(index))
    ) {
      const v = this.#valList[index]
      // either stale and allowed, or forcing a refresh of non-stale value
      return this.#isBackgroundFetch(v) ? v.__staleWhileFetching : v
    }
  }

  #backgroundFetch(
    k: K,
    index: Index | undefined,
    options: LRUCache.FetchOptions<K, V>,
    context: any
  ): BackgroundFetch<V> {
    const v = index === undefined ? undefined : this.#valList[index]
    if (this.#isBackgroundFetch(v)) {
      return v
    }
    const ac = new AbortController()
    if (options.signal) {
      const { signal } = options
      signal.addEventListener('abort', () => ac.abort(signal.reason))
    }
    const fetchOpts = {
      signal: ac.signal,
      options,
      context,
    }
    const cb = (
      v: V | void | undefined,
      updateCache = false
    ): V | undefined | void => {
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
            this.delete(k)
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
          this.delete(k)
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
      res: (v: V | void | undefined) => void,
      rej: (e: any) => void
    ) => {
      const fmp = this.fetchMethod?.(k, v, fetchOpts)
      if (fmp && fmp instanceof Promise) {
        fmp.then(v => res(v), rej)
      }
      // ignored, we go until we finish, regardless.
      // defer check until we are actually aborting,
      // so fetchMethod can override.
      ac.signal.addEventListener('abort', () => {
        if (
          !options.ignoreFetchAbort ||
          options.allowStaleOnFetchAbort
        ) {
          res()
          // when it eventually resolves, update the cache.
          if (options.allowStaleOnFetchAbort) {
            res = v => cb(v, true)
          }
        }
      })
    }
    if (options.status) options.status.fetchDispatched = true
    const p = new Promise(pcall).then(cb, eb)
    const bf = Object.assign(p, {
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
    return (
      !!p &&
      typeof p === 'object' &&
      typeof p.then === 'function' &&
      Object.prototype.hasOwnProperty.call(
        p,
        '__staleWhileFetching'
      ) &&
      Object.prototype.hasOwnProperty.call(p, '__returned') &&
      (p.__returned === p || p.__returned === undefined) &&
      p.__abortController instanceof AbortController
    )
  }

  // this takes the union of get() and set() opts, because it does both
  async fetch(
    k: K,
    {
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
      fetchContext = this.fetchContext,
      forceRefresh = false,
      status,
      signal,
    }: LRUCache.FetchOptions<K, V> = {}
  ) {
    if (!this.fetchMethod) {
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
      const p = this.#backgroundFetch(k, index, options, fetchContext)
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
        this.#statusTTL(status, index)
        return v
      }

      // ok, it is stale or a forced refresh, and not already fetching.
      // refresh the cache.
      const p = this.#backgroundFetch(k, index, options, fetchContext)
      const hasStale = p.__staleWhileFetching !== undefined
      const staleVal = hasStale && allowStale
      if (status) {
        status.fetch = isStale ? 'stale' : 'refresh'
        if (staleVal && isStale) status.returnedStale = true
      }
      return staleVal ? p.__staleWhileFetching : (p.__returned = p)
    }
  }

  get(
    k: K,
    {
      allowStale = this.allowStale,
      updateAgeOnGet = this.updateAgeOnGet,
      noDeleteOnStaleGet = this.noDeleteOnStaleGet,
      status,
    }: LRUCache.GetOptions<K, V> = {}
  ) {
    const index = this.#keyMap.get(k)
    if (index !== undefined) {
      const value = this.#valList[index]
      const fetching = this.#isBackgroundFetch(value)
      this.#statusTTL(status, index)
      if (this.#isStale(index)) {
        if (status) status.get = 'stale'
        // delete only if not an in-flight background fetch
        if (!fetching) {
          if (!noDeleteOnStaleGet) {
            this.delete(k)
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

  delete(k: K) {
    let deleted = false
    if (this.#size !== 0) {
      const index = this.#keyMap.get(k)
      if (index !== undefined) {
        deleted = true
        if (this.#size === 1) {
          this.clear()
        } else {
          this.#removeItemSize(index)
          const v = this.#valList[index]
          if (this.#isBackgroundFetch(v)) {
            v.__abortController.abort(new Error('deleted'))
          } else {
            this.dispose?.(v as V, k, 'delete')
            if (this.disposeAfter) {
              this.#disposed?.push([v as V, k, 'delete'])
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
            this.#next[this.#prev[index]] = this.#next[index]
            this.#prev[this.#next[index]] = this.#prev[index]
          }
          this.#size--
          this.#free.push(index)
        }
      }
    }
    if (this.disposeAfter && this.#disposed) {
      const dt = this.#disposed
      let task: DisposeTask<K, V> | undefined
      while ((task = dt?.shift())) {
        this.disposeAfter(...task)
      }
    }
    return deleted
  }

  clear() {
    for (const index of this.#rindexes({ allowStale: true })) {
      const v = this.#valList[index]
      if (this.#isBackgroundFetch(v)) {
        v.__abortController.abort(new Error('deleted'))
      } else {
        const k = this.#keyList[index]
        this.dispose?.(v as V, k as K, 'delete')
        if (this.disposeAfter) {
          this.#disposed?.push([v as V, k as K, 'delete'])
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
    this.#initialFill = 1 as Index
    this.#free.length = 0
    this.#calculatedSize = 0
    this.#size = 0
    if (this.disposeAfter && this.#disposed) {
      const dt = this.#disposed
      let task: DisposeTask<K, V> | undefined
      while ((task = dt?.shift())) {
        this.disposeAfter(...task)
      }
    }
  }
}

export default LRUCache
