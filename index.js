const safe = n => n >= Number.MIN_SAFE_INTEGER && n <= Number.MAX_SAFE_INTEGER
const isInt = n => safe(n) && n === Math.floor(n)
const isPosInt = n => n > 0 && isInt(n)
const asInt = n => safe(n) ? Math.floor(n) : null
const asPosInt = (n, f = null) => n > 0 && asInt(n) || f
const ifFunc = n => typeof n === 'function' ? n : null

// not a global until after the supported versions
// use Date.now() if not in a Node env or not available
const tryRequire = mod => {
  try {
    return require(mod)
  } catch (e)
  /* istanbul ignore next - no easy way to make require() throw */
  { return {} }
}

const { performance = Date } = tryRequire('perf_hooks')
const { now } = performance

const newEntry = (value, size, start, ttl) =>
  ttl ? new LRUEntryTTL(value, size, start, ttl)
  : new LRUEntryNoTTL(value, size)

class LRUEntry {
  constructor (value, size, start, ttl, isSuper = false) {
    this.value = value
    this.size = size
  }
  toObject () {
    const { value, size, ttl, start, stale } = this
    return { value, size, ttl, start, stale }
  }
}

class LRUEntryNoTTL extends LRUEntry {
  constructor (value, size) {
    super(value, size)
    this.stale = false
    this.ttl = 0
    this.start = 0
  }
}

class LRUEntryTTL extends LRUEntry {
  constructor (value, size, start, ttl) {
    super(value, size)
    this.start = start
    this.ttl = ttl
  }

  get stale () {
    return now() - this.start > this.ttl
  }
}

const optsWarned = new Set()
const { hasOwnProperty } = Object
const has = (o, k) => hasOwnProperty.call(o, k)
const deprOpt = (opt, msg, options) => {
  if (process.noDeprecation || !has(options, opt) || optsWarned.has(opt)) {
    return
  }
  optsWarned.add(opt)
  const code = `LRU_CACHE_${opt}`
  process.emitWarning(msg, 'DeprecationWarning', code, LRUCache)
}

class LRUCache {
  constructor (options) {
    if (!options || typeof options !== 'object') {
      throw new Error('invalid options object')
    }
    if (!isPosInt(options.max)) {
      throw new Error('options.max must be integer >0')
    }
    deprOpt('stale', 'please use options.allowStale instead', options)
    deprOpt('maxAge', 'please use options.ttl instead', options)
    deprOpt('length', 'please use options.sizeCalculation instead', options)
    this.max = options.max
    this.ttl = asPosInt(options.ttl) || asPosInt(options.maxAge)
    this.allowStale = !!options.allowStale || !!options.stale
    this.updateRecencyOnGet = options.updateRecencyOnGet !== false
    this.updateAgeOnGet = !!options.updateAgeOnGet
    this.updateAgeOnHas = !!options.updateAgeOnHas
    this.updateRecencyOnHas = !!options.updateRecencyOnHas
    this.sizeCalculation = ifFunc(options.sizeCalculation) ||
      has(options, 'length') && ifFunc(options.length)
    this.old = new Map()
    this.current = new Map()
    this.oldSize = 0
    this.currentSize = 0
    this.dispose = ifFunc(options.dispose)
    this.noDisposeOnSet = !!options.noDisposeOnSet
  }

  get size () {
    return this.oldSize + this.currentSize
  }
  get length () {
    if (!optsWarned.has('length_property')) {
      optsWarned.add('length_property')
      const code = 'LRU_CACHE_length_getter'
      const msg = 'please use cache.size instead'
      const { prototype } = LRUCache
      const { get } = Object.getOwnPropertyDescriptor(prototype, 'length')
      process.emitWarning(msg, 'DeprecationWarning', code, get)
    }
    return this.size
  }

  get itemCount () {
    return this.old.size + this.current.size
  }

  // walk over old first, so we can show in the order added
  *rawIterate () {
    for (const [key, entry] of this.old.entries()) {
      if (entry.stale || this.current.has(key)) {
        continue
      }
      yield [key, entry]
    }
    for (const [key, entry] of this.current.entries()) {
      if (entry.stale) {
        continue
      }
      yield [key, entry]
    }
  }

  // print old first, so we can show them in the order added
  *keys () {
    for (const [key, entry] of this.rawIterate()) {
      yield key
    }
  }

  *values () {
    for (const [key, entry] of this.rawIterate()) {
      yield entry.value
    }
  }

  *entries () {
    for (const [key, entry] of this.rawIterate()) {
      yield [key, entry.value]
    }
  }

  // returns a list of [key,entry] items, in the order they should be
  // inserted to rebuild the lru cache in its former state
  dump () {
    const arr = []
    for (const [key, entry] of this.rawIterate()) {
      arr.push([key, entry.toObject()])
    }
    return arr
  }

  find (fn, getOptions = {}) {
    for (const [key, entry] of this.rawIterate()) {
      if (fn(entry.value, key, this)) {
        return this.get(key, getOptions)
      }
    }
  }

  load (list) {
    this.reset()
    for (const [key, entry] of list) {
      this.set(key, entry.value, entry)
    }
  }

  set (key, value, {
    ttl = this.ttl,
    sizeCalculation = this.sizeCalculation,
    size = null,
  } = {}) {
    const { dispose } = this
    ttl = asPosInt(ttl, 0)
    const start = ttl ? now() : 0
    const s = isPosInt(size) ? size
      : sizeCalculation ? asPosInt(sizeCalculation(value, key), 1)
      : 1
    const entry = newEntry(value, s, start, ttl)
    const replace = this.current.get(key)
    this.currentSize += entry.size - (replace ? replace.size : 0)
    const fromOld = this.old.get(key)
    if (dispose && !this.noDisposeOnSet) {
      if (replace && fromOld !== replace) {
        dispose(replace.value, key, replace.toObject())
      } else if (fromOld && fromOld.value !== entry.value) {
        dispose(fromOld.value, key, fromOld.toObject())
      }
    }
    this.current.set(key, entry)
    this.prune()
  }

  promote (key, entry) {
    this.current.set(key, entry)
    this.currentSize += entry.size
    this.prune()
  }

  get (key, {
    updateAgeOnGet = this.updateAgeOnGet,
    updateRecencyOnGet = this.updateRecencyOnGet,
    allowStale = this.allowStale,
  } = {}) {
    const fromCurrent = this.current.get(key)
    if (fromCurrent) {
      if (fromCurrent.stale) {
        this.delete(key)
        return allowStale ? fromCurrent.value : undefined
      }
      if (updateAgeOnGet && fromCurrent.ttl) {
        fromCurrent.start = now()
      }
      return fromCurrent.value
    } else {
      const fromOld = this.old.get(key)
      if (fromOld) {
        if (fromOld.stale) {
          this.delete(key)
          return allowStale ? fromOld.value : undefined
        }
        if (updateAgeOnGet && fromOld.ttl) {
          fromOld.start = now()
        }
        if (updateRecencyOnGet !== false) {
          this.promote(key, fromOld)
        }
        return fromOld.value
      }
    }
  }

  delete (key) {
    const { dispose } = this
    const fromOld = this.old.get(key)
    if (fromOld) {
      this.old.delete(key)
      this.oldSize -= fromOld.size
    }
    const fromCurrent = this.current.get(key)
    if (fromCurrent) {
      this.current.delete(key)
      this.currentSize -= fromCurrent.size
    }
    if (dispose) {
      // if we have a current value, we will have already disposed
      // the old when it was overridden, or NOT disposed it, because
      // noDisposeOnSet=true
      if (fromCurrent) {
        dispose(fromCurrent.value, key, fromCurrent.toObject())
      } else if (fromOld) {
        dispose(fromOld.value, key, fromOld.toObject())
      }
    }
  }

  has (key, {
    updateRecencyOnHas = this.updateRecencyOnHas,
    updateAgeOnHas = this.updateAgeOnHas,
  } = {}) {
    const fromCurrent = this.current.get(key)
    if (fromCurrent) {
      if (fromCurrent.stale) {
        return false
      }
      if (updateAgeOnHas && fromCurrent.ttl) {
        fromCurrent.start = now()
      }
      return true
    }
    const fromOld = this.old.get(key)
    if (fromOld) {
      if (fromOld.stale) {
        return false
      }
      if (updateAgeOnHas && fromOld.ttl) {
        fromOld.start = now()
      }
      if (updateRecencyOnHas) {
        this.promote(key, fromOld)
      }
      return true
    }
    return false
  }

  reset () {
    this.swap()
    this.swap()
  }

  prune () {
    if (this.currentSize >= this.max) {
      this.swap()
    }
  }

  swap () {
    const { current, old, dispose, noDisposeOnSet } = this
    this.oldSize = this.currentSize
    this.old = this.current
    this.currentSize = 0
    this.current = new Map()
    // do this *after* it's dropped from the cache
    if (dispose) {
      for (const [key, entry] of old.entries()) {
        const fromCurrent = current.get(key)
        // if we have it in the current, then either we disposed it
        // when we overrode it, or we're doing noDisposeOnSet
        if (!fromCurrent) {
          dispose(entry.value, key, entry.toObject())
        }
      }
    }
  }
}

module.exports = LRUCache
