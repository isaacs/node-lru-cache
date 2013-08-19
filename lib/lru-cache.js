;(function () { // closure for web browsers

if (typeof module === 'object' && module.exports) {
  module.exports = LRUCache
} else {
  // just set the global for non-node platforms.
  this.LRUCache = LRUCache
}

function naiveLength () { return 1 }

function LRUCache (options) {
  if (!(this instanceof LRUCache))
    return new LRUCache(options)

  if (typeof options === 'number') {
    this._max = options
    options = { max: this._max }
  }

  if (!options) options = {}

  this._max = options.max

  this._options = options

  this._lengthCalculator = options.length

  if (typeof this._lengthCalculator !== "function") {
    this._lengthCalculator = naiveLength
  }

  if (!this._max || !(typeof this._max === "number") || this._max <= 0 ) {
    // a little bit silly.  maybe this should throw?
    this._max = Infinity
  }

  this._allowStale = options.stale || false

  this._maxAge = options.maxAge || null

  this._dispose = options.dispose

  this._cache = Object.create(null) // hash of items by key
  this._lruList = Object.create(null) // list of items in order of use recency
  this._mru = 0 // most recently used
  this._lru = 0 // least recently used
  this._length = 0 // number of items in the list
  this._itemCount = 0
}


// resize the cache when the max changes.
Object.defineProperty(LRUCache.prototype, "max",
  { set : function (mL) {
      if (!mL || !(typeof mL === "number") || mL <= 0 ) mL = Infinity
      this._max = mL
      // if it gets above double max, trim right away.
      // otherwise, do it whenever it's convenient.
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
        this._length = this._itemCount
        for (var key in this._cache) {
          this._cache[key].length = 1
        }
      } else {
        this._lengthCalculator = lC
        this._length = 0
        for (var key in this._cache) {
          this._cache[key].length = this._lengthCalculator(this._cache[key].value)
          this._length += this._cache[key].length
        }
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
  { get : function () { return this._itemCount }
  , enumerable : true
  })

LRUCache.prototype.forEach = function (fn, thisp) {
  thisp = thisp || this
  var i = 0;
  for (var k = this._mru - 1; k >= 0 && i < this._itemCount; k--) {
    if (this._lruList[k]) {
      i++
      var hit = this._lruList[k]
      fn.call(thisp, hit.value, hit.key, this)
    }
  }
}

LRUCache.prototype.keys = function () {
  var keys = new Array(this._itemCount)
  var i = 0
  for (var k = this._mru - 1; k >= 0 && i < this._itemCount; k--) {
    if (this._lruList[k]) {
      var hit = this._lruList[k]
      keys[i++] = hit.key
    }
  }
  return keys
}

LRUCache.prototype.values = function () {
  var values = new Array(this._itemCount)
  var i = 0
  for (var k = this._mru - 1; k >= 0 && i < this._itemCount; k--) {
    if (this._lruList[k]) {
      var hit = this._lruList[k]
      values[i++] = hit.value
    }
  }
  return values
}

LRUCache.prototype.reset = function () {
  if (this._dispose) {
    for (var k in this._cache) {
      this._dispose(k, this._cache[k].value)
    }
  }
  this._cache = {}
  this._lruList = {}
  this._lru = 0
  this._mru = 0
  this._length = 0
  this._itemCount = 0
}

// Provided for debugging/dev purposes only. No promises whatsoever that
// this API stays stable.
LRUCache.prototype.dump = function () {
  return this._cache
}

LRUCache.prototype.dumpLru = function () {
  return this._lruList
}

// dispose of the old one before overwriting
// oversized objects fall out of cache automatically.
LRUCache.prototype.set = function (key, value) {
  var k = 'lru_' + key
  var hit = this._cache[k]
  var ret = true
  if (hit) {
    if (this._dispose) this._dispose(hit.key, hit.value)
    if (this._maxAge) hit.now = Date.now()
    hit.value = value
    this.get(key)
  } else {
    var len = this._lengthCalculator(value)
    var age = this._maxAge ? Date.now() : 0
    var hit = new Entry(key, value, this._mru++, len, age)
    if (hit.length > this._max) {
      if (this._dispose) this._dispose(key, value)
      ret = false
    } else {
      this._length += hit.length
      this._lruList[hit.lu] = hit
      this._cache[k] = hit
      this._itemCount ++
      if (this._length > this._max) trim(this)
    }
  }
  return ret
}

LRUCache.prototype.has = function (key) {
  var k = 'lru_' + key
  var hit = this._cache[k]
  var ret = true
  if (!hit ||
      this._maxAge && (Date.now() - hit.now > this._maxAge)) {
    ret = false
  }
  return ret
}

LRUCache.prototype.get = function (key) {
  return get(key, true, this)
}

LRUCache.prototype.peek = function (key) {
  return get(key, false, this)
}

LRUCache.prototype.del = function (key) {
  del(this._cache['lru_' + key], this)
}

function get (key, doUse, self) {
  var k = 'lru_' + key
  var hit = self._cache[k]
  if (hit) {
    if (self._maxAge && (Date.now() - hit.now > self._maxAge)) {
      del(hit, self)
      if (!self._allowStale) hit = undefined
    } else {
      if (doUse) use(hit, self)
    }
    if (hit) hit = hit.value
  }
  return hit
}

function use (hit, self) {
  shiftLU(hit, self)
  hit.lu = self._mru ++
  self._lruList[hit.lu] = hit
}

function trim (self) {
  while (self._lru < self._mru && self._length > self._max)
    del(self._lruList[self._lru], self)
}

function shiftLU(hit, self) {
  delete self._lruList[ hit.lu ]
  while (self._lru < self._mru && !self._lruList[self._lru]) self._lru ++
}

function del(hit, self) {
  if (hit) {
    if (self._dispose) self._dispose(hit.key, hit.value)
    self._length -= hit.length
    self._itemCount --
    delete self._cache[ 'lru_' + hit.key ]
    shiftLU(hit, self)
  }
}

// classy, since V8 prefers predictable objects.
function Entry (key, value, mru, len, age) {
  this.key = key
  this.value = value
  this.lu = mru
  this.length = len
  this.now = age
}

})()
