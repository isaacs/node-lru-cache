// a doubly-linked list of indexes and their prev/next
// basically a lru cache, but only for index numbers
// if we did not support delete(), we could do this with
// an AddressQueue that automatically shifted as it filled.

const AddressStack = require('./address-stack.js')

const SIZE = 0
const HEAD = 1
const TAIL = 2

class LRUAddressList {
  constructor ({max}) {
    this.max = max
    const bits = max < 1 ? null
      : max < Math.pow(2, 8) ? 8
      : max < Math.pow(2, 16) ? 16
      : max < Math.pow(2, 32) ? 32
      : null
    if (!bits) {
      throw new TypeError('invalid max: ' + max)
    }
    const UintArray = bits === 8 ? Uint8Array
      : bits === 16 ? Uint16Array
      : Uint32Array
    const bytes = bits >> 3
    const lists = 2
    const ab = new ArrayBuffer(max * lists * bytes)
    this.prev = new Array(max).fill(0) //new UintArray(ab, 0, max)
    this.next = new Array(max).fill(0) // new UintArray(ab, max, max)
    this.free = new AddressStack({max})
    this.size = 0
    this.head = 0
    this.tail = 0
    this.evicted = null
  }

  newIndex () {
    return this.isFull() ? this.evict()
      : !this.free.isEmpty() ? this.free.pop()
      : this.size ++
  }

  isFull () {
    this.size === this.prev.length && this.free.isEmpty()
  }

  moveToTail (i) {
    if (this.size === 0) {
      this.head = this.tail = i
    } else if (i !== this.tail) {
      if (i !== this.head) {
        this.next[this.prev[i]] = this.prev[i]
      } else {
        this.head = this.next[i]
      }
      this.prev[this.next[i]] = this.next[i]
    }
    this.tail = i
  }

  evict () {
    const head = this.evicted = this.head
    this.head = this.next[head]
    return head
  }

  clear () {
    this.free.clear()
    this.size = 0
    this.head = 0
    this.tail = 0
  }

  delete (i) {
    if (this.size !== 0) {
      const head = this.head
      const tail = this.tail
      if (i !== head && i !== tail) {
        // in the middle somewhere
        this.next[this.prev[i]] = this.next[i]
        this.prev[this.next[i]] = this.prev[i]
        this.free.push(i)
      } else if (i === head && i === tail) {
        // only item, simpler to just reset, no reads
        this.clear()
      } else if (i === head) {
        // head, but not the tail
        this.head = this.next[head]
        this.free.push(i)
      } else if (i === tail) {
        this.tail = this.prev[tail]
        this.free.push(i)
      }
    }
  }
}

module.exports = LRUAddressList
