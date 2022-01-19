class LRUEntry {
  constructor (value) {
    this.value = value
  }
}

const asInt = n => ~~n

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
  }
  get size () {
    return this.current.size + this.old.size
  }
  set (key, value) {
    this.current.set(key, new LRUEntry(value))
    this.prune()
  }
  get (key) {
    const fromCurrent = this.current.get(key)
    if (fromCurrent) {
      return fromCurrent.value
    } else {
      const fromOld = this.old.get(key)
      if (fromOld) {
        this.current.set(key, fromOld)
        this.prune()
        return fromOld.value
      }
    }
  }
  delete (key) {
    this.old.delete(key)
    this.current.delete(key)
  }
  has (key, updateRecency) {
    if (this.current.has(key)) {
      return true
    }
    const oldHas = this.old.get(key)
    if (oldHas && updateRecency) {
      this.current.set(key, oldHas)
      this.prune()
    }
    return !!oldHas
  }
  reset () {
    this.old = new Map()
    this.current = new Map()
  }
  prune () {
    if (this.current.size >= this.max) {
      this.old = this.current
      this.current = new Map()
    }
  }
}

module.exports = LRUCache
