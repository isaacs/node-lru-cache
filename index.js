class LRUEntry {
  constructor (value, size) {
    this.value = value
    this.size = size
  }
}

const asInt = n => ~~n
const ifFunc = n => typeof n === 'function' ? n : null
const naiveLength = () => 1

class LRUCache {
  constructor (options) {
    if (!options || typeof options !== 'object') {
      throw new Error('invalid options object')
    }
    const maxOk = options.max === asInt(options.max) &&
      options.max > 0
    if (!maxOk) {
      throw new Error('options.max must be integer >0')
    }
    this.max = options.max
    this.old = new Map()
    this.current = new Map()
    this.oldSize = 0
    this.currentSize = 0
    this.sizeCalculation = ifFunc(options.sizeCalculation) ||
      ifFunc(options.length) ||
      naiveLength
    this.dispose = ifFunc(options.dispose)
  }
  get size () {
    return this.oldSize + this.currentSize
  }
  set (key, value) {
    const entry = new LRUEntry(value, this.sizeCalculation(value, key))
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
      return fromCurrent.value
    } else {
      const fromOld = this.old.get(key)
      if (fromOld) {
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
    if (this.current.has(key)) {
      return true
    }
    const oldHas = this.old.get(key)
    if (oldHas && updateRecency) {
      this.promote(key, oldHas)
    }
    return !!oldHas
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
