module.exports = LRUCache

// This will be a proper iterable 'Map' in engines that support it,
// or a fakey-fake PseudoMap in older versions.
var Map = require('pseudomap')

// A linked list to keep track of recently-used-ness
var Yallist = require('yallist')
var Node = Yallist.Node

function naiveLength () { return 1 }

// this._lruList is a yallist where the head is the youngest
// item, and the tail is the oldest.  the list contains the Hit
// objects as the entries.
// Each Hit object has a reference to its Yallist.Node.  This
// never changes.
//
// this._cache is a Map (or PseudoMap) that matches the keys to
// the Yallist.Node object.
function LRUCache (options) {
  if (!(this instanceof LRUCache))
    return new LRUCache(options)

  if (typeof options === 'number')
    options = { max: options }

  if (!options)
    options = {}

  this._max = options.max
  // Kind of weird to have a default max of Infinity, but oh well.
  if (!this._max || !(typeof this._max === "number") || this._max <= 0 )
    this._max = Infinity

  this._lengthCalculator = options.length || naiveLength
  if (typeof this._lengthCalculator !== "function")
    this._lengthCalculator = naiveLength

  this._allowStale = options.stale || false
  this._maxAge = options.maxAge || null
  this._dispose = options.dispose
  this.reset()
}

// resize the cache when the max changes.
Object.defineProperty(LRUCache.prototype, "max",
  { set : function (mL) {
      if (!mL || !(typeof mL === "number") || mL <= 0 ) mL = Infinity
      this._max = mL
      if (this._length > this._max) trim(this)
    }
  , get : function () { return this._max }
  , enumerable : true
  })

// resize the cache when the lengthCalculator changes.
Object.defineProperty(LRUCache.prototype, "lengthCalculator",
  { set : function (lC) {
      if (typeof lC !== "function") {
        this._lengthCalculator = naiveLength
        this._length = this._lruList.length
        this._lruList.forEach(function (value) {
          value.length = 1
        })
      } else {
        this._lengthCalculator = lC
        this._length = 0
        this._lruList.forEach(function (hit) {
          value.length = this._lengthCalculator(hit.value, hit.key)
          this._length += value.length
        }, this)
      }

      if (this._length > this._max) trim(this)
    }
  , get : function () { return this._lengthCalculator }
  , enumerable : true
  })

Object.defineProperty(LRUCache.prototype, "length",
  { get : function () { return this._length }
  , enumerable : true
  })

Object.defineProperty(LRUCache.prototype, "itemCount",
  { get : function () { return this._lruList.length }
  , enumerable : true
  })

LRUCache.prototype.rforEach = function (fn, thisp) {
  thisp = thisp || this
  for (var walker = this._lruList.tail; walker !== null;) {
    var prev = walker.prev
    forEachStep(this, fn, walker, thisp)
    walker = prev
  }
}

function forEachStep (self, fn, node, thisp) {
  var hit = node.value
  if (isStale(self, hit)) {
    del(self, node)
    if (!self._allowStale) {
      hit = undefined
    }
  }
  if (hit) {
    fn.call(thisp, hit.value, hit.key, self)
  }
}


LRUCache.prototype.forEach = function (fn, thisp) {
  thisp = thisp || this
  for (var walker = this._lruList.head; walker !== null;) {
    var next = walker.next
    forEachStep(this, fn, walker, thisp)
    walker = next
  }
}

LRUCache.prototype.keys = function () {
  return this._lruList.toArray().map(function (k) {
    return k.key
  }, this)
}

LRUCache.prototype.values = function () {
  return this._lruList.toArray().map(function (k) {
    return k.value
  }, this)
}

LRUCache.prototype.reset = function () {
  if (this._dispose && this._lruList && this._lruList.length) {
    this._lruList.forEach(function (hit) {
      this._dispose(hit.key, hit.value)
    }, this)
  }

  this._cache = new Map() // hash of items by key
  this._lruList = new Yallist() // list of items in order of use recency
  this._length = 0 // length of items in the list
}

LRUCache.prototype.dump = function () {
  var arr = []
  var i = 0
  var size = this._lruList.length
  return this._lruList.map(function (hit) {
    if (!isStale(this, hit)) {
      return {
        k: hit.key,
        v: hit.value,
        e: hit.now + (hit.maxAge || 0)
      }
    }
  }, this).toArray().filter(function (h) {
    return h
  })
}

LRUCache.prototype.dumpLru = function () {
  return this._lruList
}

LRUCache.prototype.set = function (key, value, maxAge) {
  maxAge = maxAge || this._maxAge

  var now = maxAge ? Date.now() : 0
  var len = this._lengthCalculator(value, key)

  if (this._cache.has(key)) {
    if (len > this._max) {
      del(this, this._cache.get(key))
      return false
    }

    var node = this._cache.get(key)
    var item = node.value

    // dispose of the old one before overwriting
    if (this._dispose)
      this._dispose(key, item.value)

    item.now = now
    item.maxAge = maxAge
    item.value = value
    this._length += (len - item.length)
    item.length = len
    this.get(key)

    if (this._length > this._max)
      trim(this)

    return true
  }

  var hit = new Entry(key, value, len, now, maxAge)

  // oversized objects fall out of cache automatically.
  if (hit.length > this._max) {
    if (this._dispose) this._dispose(key, value)
    return false
  }

  this._length += hit.length
  this._lruList.unshift(hit)
  this._cache.set(key, this._lruList.head)

  if (this._length > this._max)
    trim(this)

  return true
}

LRUCache.prototype.has = function (key) {
  if (!this._cache.has(key)) return false
  var hit = this._cache.get(key).value
  if (isStale(this, hit)) {
    return false
  }
  return true
}

LRUCache.prototype.get = function (key) {
  return get(this, key, true)
}

LRUCache.prototype.peek = function (key) {
  return get(this, key, false)
}

LRUCache.prototype.pop = function () {
  var node = this._lruList.tail
  if (!node) return null
  del(this, node)
  return node.value
}

LRUCache.prototype.del = function (key) {
  del(this, this._cache.get(key))
}

LRUCache.prototype.load = function (arr) {
  //reset the cache
  this.reset();

  var now = Date.now()
  // A previous serialized cache has the most recent items first
  for (var l = arr.length - 1; l >= 0; l--) {
    var hit = arr[l]
    var expiresAt = hit.e || 0
    if (expiresAt === 0) {
      // the item was created without expiration in a non aged cache
      this.set(hit.k, hit.v)
    } else {
      var maxAge = expiresAt - now
      // dont add already expired items
      if (maxAge > 0) {
        this.set(hit.k, hit.v, maxAge)
      }
    }
  }
}

function get (self, key, doUse) {
  var node = self._cache.get(key)
  if (node) {
    var hit = node.value
    if (isStale(self, hit)) {
      del(self, node)
      if (!self._allowStale) hit = undefined
    } else {
      if (doUse) {
        self._lruList.unshiftNode(node)
      }
    }
    if (hit) hit = hit.value
  }
  return hit
}

function isStale(self, hit) {
  if (!hit || (!hit.maxAge && !self._maxAge)) return false
  var stale = false;
  var diff = Date.now() - hit.now
  if (hit.maxAge) {
    stale = diff > hit.maxAge
  } else {
    stale = self._maxAge && (diff > self._maxAge)
  }
  return stale;
}

function trim (self) {
  if (self._length > self._max) {
    for (var walker = self._lruList.tail;
         self._length > self._max && walker !== null;) {
      // We know that we're about to delete this one, and also
      // what the next least recently used key will be, so just
      // go ahead and set it now.
      var prev = walker.prev
      del(self, walker)
      walker = prev
    }
  }
}

function del (self, node) {
  if (node) {
    var hit = node.value
    if (self._dispose) self._dispose(hit.key, hit.value)
    self._length -= hit.length
    self._cache.delete(hit.key)
    self._lruList.removeNode(node)
  }
}

// classy, since V8 prefers predictable objects.
function Entry (key, value, length, now, maxAge) {
  this.key = key
  this.value = value
  this.length = length
  this.now = now
  if (maxAge) this.maxAge = maxAge
}
