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

class LRUEntry {
  constructor (value, size, start, ttl) {
    if (ttl) {
      return new LRUEntryTTL(value, size, start, ttl)
    }
    this.value = value
    this.size = size
  }
}

class LRUEntryTTL extends LRUEntry {
  constructor (value, size, start, ttl) {
    super(value, size)
    this.start = start
    this.ttl = ttl
  }
  get age () {
    return now() - this.start
  }
  get stale () {
    return this.age > this.ttl
  }
}

const asInt = n => ~~n
const asPosInt = n => typeof n === 'number' && n > 0 ? asInt(n) : null
const ifFunc = n => typeof n === 'function' ? n : null

class LRUCache {
  constructor (options) {
    if (!options || typeof options !== 'object') {
      throw new Error('invalid options object')
    }
    const maxOk = options.max && (options.max === asPosInt(options.max))
    if (!maxOk) {
      throw new Error('options.max must be integer >0')
    }
    this.max = options.max
    this.ttl = asPosInt(options.ttl)
    this.allowStale = this.ttl && !!options.allowStale
    this.updateAgeOnGet = this.ttl && !!options.updateAgeOnGet
    this.old = new Map()
    this.current = new Map()
    this.oldSize = 0
    this.currentSize = 0
    this.sizeCalculation = ifFunc(options.sizeCalculation) ||
      ifFunc(options.length)
    this.dispose = ifFunc(options.dispose)
  }
  get size () {
    return this.oldSize + this.currentSize
  }
  set (key, value, ttl = this.ttl) {
    const { sizeCalculation } = this
    const n = ttl ? now() : 0
    const s = sizeCalculation ? sizeCalculation(value, key) : 1
    const entry = new LRUEntry(value, s, n, ttl)

    const replace = this.current.get(key)
    this.currentSize += entry.size - (replace ? replace.size : 0)
    const { dispose } = this
    if (dispose && replace && this.old.get(key) !== replace) {
      dispose(key, replace.value)
    }
    this.current.set(key, entry)
    this.prune()
  }
  promote (key, entry) {
    this.current.set(key, entry)
    this.currentSize += entry.size
    this.prune()
  }
  get (key) {
    const fromCurrent = this.current.get(key)
    if (fromCurrent) {
      if (this.ttl && fromCurrent.stale) {
        this.delete(key)
        return this.allowStale ? fromCurrent.value : undefined
      }
      if (this.updateAgeOnGet) {
        fromCurrent.start = now()
      }
      return fromCurrent.value
    } else {
      const fromOld = this.old.get(key)
      if (fromOld) {
        if (this.ttl && fromOld.stale) {
          this.delete(key)
          return this.allowStale ? fromOld.value : undefined
        }
        if (this.updateAgeOnGet) {
          fromOld.start = now()
        }
        this.promote(key, fromOld)
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
    if (dispose && (fromOld || fromCurrent)) {
      if (fromOld) {
        dispose(key, fromOld.value)
      }
      if (fromCurrent && fromCurrent !== fromOld) {
        dispose(key, fromCurrent.value)
      }
    }
  }
  has (key, updateRecency) {
    const fromCurrent = this.current.get(key)
    if (fromCurrent) {
      return this.ttl ? !fromCurrent.stale : true
    }
    const fromOld = this.old.get(key)
    if (fromOld && updateRecency) {
      this.promote(key, fromOld)
    }
    return !!fromOld && (this.ttl ? !fromOld.stale : true)
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
    const { current, old, dispose } = this
    this.oldSize = this.currentSize
    this.old = this.current
    this.currentSize = 0
    this.current = new Map()
    // do this *after* it's dropped from the cache
    if (dispose) {
      for (const [key, entry] of old.entries()) {
        if (current.get(key) !== entry) {
          dispose(key, entry.value)
        }
      }
    }
  }
}

module.exports = LRUCache
