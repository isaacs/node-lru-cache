const AddressList = require('./address-list.js')

// idea: use an object keymap until the first non-string/symbol write
// then switch modes.

const MODES = new Set(['map', 'object', 'auto'])
const objKey = k => k === '__proto__' ? '$string$' + k : k

class LRUCache {
  constructor ({max, mode = 'auto'}) {
    this.list = new AddressList({max})
    if (!MODES.has(mode)) {
      throw new TypeError('invalid mode, must be one of ' + [...MODES])
    }
    this.mode = mode
    this.map = mode === 'map' ? new Map() : {}
    this.keys = new Array(max).fill(null)
    this.values = new Array(max).fill(null)
  }

  setKeyIndex (k, i) {
    switch (this.mode) {
      case 'object': this.map[objKey(k)] = i; break
      case 'map': this.map.set(k, i); break
      default: {
        const t = typeof k
        if (t === 'symbol' || t === 'string' && k.length < 1024) {
          this.map[objKey(k)] = i
        } else {
          // switch
          this.map = new Map(Object.entries(this.map))
          this.map.set(k, i)
          this.mode = 'map'
        }
      }
    }
  }
  getKeyIndex (k) {
    switch (this.mode) {
      case 'map': return this.map.get(k)
      default: return this.map[objKey(k)]
    }
  }
  deleteKeyIndex (k) {
    switch (this.mode) {
      case 'map': this.map.delete(k); break
      default: delete this.map[objKey(k)]; break
    }
  }

  set (k, v) {
    // const i = this.map[k]
    const i = this.getKeyIndex(k)
    if (i !== undefined) {
      // update
      this.list.moveToTail(i)
      this.values[i] = v
    } else {
      const newI = this.list.newIndex()
      if (this.list.evicted !== null) {
        const evKey = this.keys[this.list.evicted]
        // delete this.map[evKey]
        this.deleteKeyIndex(evKey)
      }
      this.keys[newI] = k
      this.values[newI] = v
      // this.map[k] = newI
      this.setKeyIndex(k, newI)
    }
  }

  get (k) {
    // const i = this.map[k]
    const i = this.getKeyIndex(k)
    if (i !== undefined) {
      this.list.moveToTail(i)
    }
    return this.values[i]
  }
}

module.exports = LRUCache
