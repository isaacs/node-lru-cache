const perf = typeof performance === 'object' && performance &&
  typeof performance.now === 'function' ? performance : Date

class ZeroArray extends Array {
  constructor (size) {
    super(size)
    this.fill(0)
  }
}

class Stack {
  constructor (max) {
    const UintArray = max <= Math.pow(2, 8) ? Uint8Array
      : max <= Math.pow(2, 16) ? Uint16Array
      : max <= Math.pow(2, 32) ? Uint32Array
      : Array
    this.heap = new UintArray(max)
    this.length = 0
  }
  push (n) {
    this.heap[this.length++] = n
  }
  pop () {
    return this.heap[--this.length]
  }
}

class LRUCache {
  constructor ({
    max,
    ttl,
    updateAgeOnGet,
    allowStale,
    dispose,
    noDisposeOnSet,
    maxSize,
    sizeCalculation,
  }) {
    const UintArray = max <= Math.pow(2, 8) ? Uint8Array
      : max <= Math.pow(2, 16) ? Uint16Array
      : max <= Math.pow(2, 32) ? Uint32Array
      : ZeroArray
    this.max = max
    this.maxSize = maxSize || 0
    this.sizeCalculation = sizeCalculation
    if (!sizeCalculation && maxSize) {
      throw new Error('cannot set sizeCalculation without setting maxSize')
    }
    this.keyMap = new Map()
    this.keyList = new Array(max).fill(null)
    this.valList = new Array(max).fill(null)
    this.next = new UintArray(max)
    this.prev = new UintArray(max)
    this.head = 0
    this.tail = 0
    this.free = new Stack(max)
    this.size = 0

    if (typeof dispose === 'function') {
      this.dispose = dispose
    }
    this.noDisposeOnSet = !!noDisposeOnSet

    if (this.maxSize) {
      this.initializeSizeTracking()
    }

    this.allowStale = !!allowStale
    this.updateAgeOnGet = !!updateAgeOnGet
    this.ttl = ttl || 0
    if (ttl) {
      this.initializeTTLTracking()
    }
  }

  initializeTTLTracking () {
    this.ttls = new ZeroArray(this.max)
    this.starts = new ZeroArray(this.max)
    this.setItemTTL = (index, ttl) => {
      this.starts[index] = ttl !== 0 ? perf.now() : 0
      this.ttls[index] = ttl
    }
    this.updateItemAge = (index) => {
      this.starts[index] = this.ttls[index] !== 0 ? perf.now() : 0
    }
    this.isStale = (index) => {
      return this.ttls[index] !== 0 && this.starts[index] !== 0 &&
        (perf.now() - this.starts[index] > this.ttls[index])
    }
  }
  updateItemAge (index) {}
  setItemTTL (index, ttl) {}
  isStale (index) { return false }

  initializeSizeTracking () {
    this.calculatedSize = 0
    this.sizes = new ZeroArray(this.max)
    this.removeItemSize = index => this.calculatedSize -= this.sizes[index]
    this.addItemSize = (index, v, k, size, sizeCalculation) => {
      this.sizes[index] = size || sizeCalculation(v, k)
      while (this.calculatedSize > this.maxSize) {
        this.evict()
      }
    }
    this.delete = k => {
      if (this.size !== 0) {
        const index = this.keyMap.get(k)
        if (index !== undefined) {
          this.calculatedSize -= this.sizes[index]
        }
      }
      return LRUCache.prototype.delete.call(this, k)
    }
    this.clear = () => {
      this.calculatedSize = 0
      return LRUCache.prototype.clear.call(this)
    }
  }
  removeItemSize (index) {}
  addItemSize (index, v, k, size, sizeCalculation) {}

  *indexes () {
    if (this.size) {
      for (let i = this.tail; true; i = this.prev[i]) {
        if (!this.isStale(i)) {
          yield i
        }
        if (i === this.head) {
          break
        }
      }
    }
  }
  *entries () {
    for (const i of this.indexes()) {
      yield [this.keyList[i], this.valList[i]]
    }
  }
  *keys () {
    for (const i of this.indexes()) {
      yield this.keyList[i]
    }
  }
  *values () {
    for (const i of this.indexes()) {
      yield this.valList[i]
    }
  }
  [Symbol.iterator] () {
    return this.entries()
  }
  find (fn, getOptions = {}) {
    for (const i of this.indexes()) {
      if (fn(this.valList[i], this.keyList[i], this)) {
        return this.get(this.keyList[i], getOptions)
      }
    }
  }
  forEach (fn) {
    for (const i of this.indexes()) {
      fn(this.valList[i], this.keyList[i])
    }
  }

  dispose (v, k) {}

  set (k, v, {
    ttl = this.ttl,
    noDisposeOnSet = this.noDisposeOnSet,
    size = 0,
    sizeCalculation = this.sizeCalculation,
  } = {}) {
    let index = this.size === 0 ? undefined : this.keyMap.get(k)
    if (index === undefined) {
      // addition
      index = this.newIndex()
      this.keyList[index] = k
      this.valList[index] = v
      this.keyMap.set(k, index)
      this.next[this.tail] = index
      this.prev[index] = this.tail
      this.tail = index
      this.size ++
    } else {
      // update
      const oldVal = this.valList[index]
      if (v !== oldVal) {
        if (!noDisposeOnSet) {
          this.dispose(oldVal, k)
        }
        this.removeItemSize(index)
        this.valList[index] = v
      }
      this.moveToTail(index)
    }
    if (ttl !== 0 && this.ttl === 0 && !this.ttls) {
      this.initializeTTLTracking()
    }
    this.setItemTTL(index, ttl)
    this.addItemSize(index, v, k, size, sizeCalculation)
  }

  newIndex () {
    if (this.size === 0) {
      return this.tail
    }
    if (this.size === this.max) {
      return this.evict()
    }
    if (this.free.length !== 0) {
      return this.free.pop()
    }
    // initial fill, just keep writing down the list
    return this.tail + 1
  }

  evict () {
    const head = this.head
    const k = this.keyList[head]
    this.dispose(this.valList[head], k)
    this.removeItemSize(head)
    this.head = this.next[head]
    this.keyMap.delete(k)
    this.size --
    return head
  }

  has (k) {
    return this.keyMap.has(k) && !this.isStale(this.keyMap.get(k))
  }

  // like get(), but without any LRU updating or TTL expiration
  peek (k, { allowStale = this.allowStale } = {}) {
    const index = this.keyMap.get(k)
    if (index !== undefined && (allowStale || !this.isStale(index))) {
      return this.valList[index]
    }
  }

  get (k, {
    allowStale = this.allowStale,
    updateAgeOnGet = this.updateAgeOnGet,
  } = {}) {
    const index = this.keyMap.get(k)
    if (index !== undefined) {
      if (this.isStale(index)) {
        const value = allowStale ? this.valList[index] : undefined
        this.delete(k)
        return value
      } else {
        this.moveToTail(index)
        if (updateAgeOnGet) {
          this.updateItemAge(index)
        }
        return this.valList[index]
      }
    }
  }

  connect (p, n) {
    this.prev[n] = p
    this.next[p] = n
  }

  moveToTail (index) {
    // if tail already, nothing to do
    // if head, move head to next[index]
    // else
    //   move next[prev[index]] to next[index] (head has no prev)
    //   move prev[next[index]] to prev[index]
    // prev[index] = tail
    // next[tail] = index
    // tail = index
    if (index !== this.tail) {
      if (index === this.head) {
        this.head = this.next[index]
      } else {
        this.connect(this.prev[index], this.next[index])
      }
      this.connect(this.tail, index)
      this.tail = index
    }
  }

  delete (k) {
    if (this.size !== 0) {
      const index = this.keyMap.get(k)
      if (index !== undefined) {
        this.dispose(this.valList[index], k)
        this.removeItemSize(index)
        if (this.size === 1) {
          this.clear()
        } else {
          this.keyMap.delete(k)
          this.keyList[index] = null
          this.valList[index] = null
          if (index === this.tail) {
            this.tail = this.prev[index]
          } else if (index === this.head) {
            this.head = this.next[index]
          } else {
            this.next[this.prev[index]] = this.next[index]
            this.prev[this.next[index]] = this.prev[index]
          }
          this.size --
        }
        this.free.push(index)
      }
    }
  }

  clear () {
    this.keyMap.clear()
    this.valList.fill(null)
    this.keyList.fill(null)
    this.head = 0
    this.tail = 0
    this.free.length = 0
    this.size = 0
  }
}

module.exports = LRUCache
