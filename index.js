class LRUEntry {
  constructor (value, size) {
    this.value = value
    this.size = size
  }
}

const asInt = n => ~~n
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
    this.sizeCalculation = options.length || naiveLength
  }
  get size () {
    return this.oldSize + this.currentSize
  }
  set (key, value) {
    const entry = new LRUEntry(value, this.sizeCalculation(value))
    this.currentSize += entry.size
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
    this.old = new Map()
    this.oldSize = 0
    this.current = new Map()
    this.currentSize = 0
  }
  prune () {
    if (this.currentSize >= this.max) {
      this.oldSize = this.currentSize
      this.old = this.current
      this.currentSize = 0
      this.current = new Map()
    }
  }
}

module.exports = LRUCache
