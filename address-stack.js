// a stack of up to max uints, big enough to hold addresses within max
// used to store free indexes within the lru
const top = 0
class AddressStack {
  constructor ({max}) {
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
    const ab = new ArrayBuffer(max * bytes)
    this.top = 0
    this.heap = new Array(max).fill(0) // new UintArray(ab, max, bytes)
  }
  push (n) {
    if (this.top === this.heap.length) {
      throw new RangeError('stack overflow')
    }
    this.heap[this.top++] = n
  }
  pop (n) {
    if (this.top === 0) {
      return undefined
    }
    return this.heap[--this.top]
  }
  clear () {
    this.top = 0
  }
  isEmpty () {
    return this.top === 0
  }
  isFull () {
    return this.top === this.heap.length
  }
}
module.exports = AddressStack
