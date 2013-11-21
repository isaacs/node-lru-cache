;(function () { // closure for web browsers

if (typeof module === 'object' && module.exports) {
  module.exports = LRUCache
} else {
  // just set the global for non-node platforms.
  this.LRUCache = LRUCache
}

function hOP (obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key)
}

function naiveLength () { return 1 }

function LRUCache (options) {
  if (!(this instanceof LRUCache)) {
    return new LRUCache(options)
  }

  if (typeof options === 'number') {
    options = { max: options }
  }

  if (!options) options = {}

  this._max = options.max

  this._lengthCalculator = options.length || naiveLength

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
  var itemCount = 0


  // resize the cache when the max changes.
  Object.defineProperty(this, "max",
    { set : function (mL) {
        if (!mL || !(typeof mL === "number") || mL <= 0 ) mL = Infinity
        this._max = mL
        if (this._length > this._max) trim(this)
      }
    , get : function () { return this._max }
    , enumerable : true
    })

  // resize the cache when the lengthCalculator changes.
  Object.defineProperty(this, "lengthCalculator",
    { set : function (lC) {
        if (typeof lC !== "function") {
          this._lengthCalculator = naiveLength
          this._length = itemCount
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

  Object.defineProperty(this, "length",
    { get : function () { return this._length }
    , enumerable : true
    })


  Object.defineProperty(this, "itemCount",
    { get : function () { return itemCount }
    , enumerable : true
    })

  this.forEach = function (fn, thisp) {
    thisp = thisp || this
    var i = 0;
    for (var k = this._mru - 1; k >= 0 && i < itemCount; k--) if (this._lruList[k]) {
      i++
      var hit = this._lruList[k]
      if (this._maxAge && (Date.now() - hit.now > this._maxAge)) {
        del(this, hit)
        if (!this._allowStale) hit = undefined
      }
      if (hit) {
        fn.call(thisp, hit.value, hit.key, this)
      }
    }
  }

  this.keys = function () {
    var keys = new Array(itemCount)
    var i = 0
    for (var k = this._mru - 1; k >= 0 && i < itemCount; k--) if (this._lruList[k]) {
      var hit = this._lruList[k]
      keys[i++] = hit.key
    }
    return keys
  }

  this.values = function () {
    var values = new Array(itemCount)
    var i = 0
    for (var k = this._mru - 1; k >= 0 && i < itemCount; k--) if (this._lruList[k]) {
      var hit = this._lruList[k]
      values[i++] = hit.value
    }
    return values
  }

  this.reset = function () {
    if (this._dispose) {
      for (var k in this._cache) {
        this._dispose(k, this._cache[k].value)
      }
    }
    this._cache = Object.create(null)
    this._lruList = Object.create(null)
    this._lru = 0
    this._mru = 0
    this._length = 0
    itemCount = 0
  }

  // Provided for debugging/dev purposes only. No promises whatsoever that
  // this API stays stable.
  this.dump = function () {
    return this._cache
  }

  this.dumpLru = function () {
    return this._lruList
  }

  this.set = function (key, value) {
    if (hOP(this._cache, key)) {
      // dispose of the old one before overwriting
      if (this._dispose) this._dispose(key, this._cache[key].value)
      if (this._maxAge) this._cache[key].now = Date.now()
      this._cache[key].value = value
      this.get(key)
      return true
    }

    var len = this._lengthCalculator(value)
    var age = this._maxAge ? Date.now() : 0
    var hit = new Entry(key, value, this._mru++, len, age)

    // oversized objects fall out of cache automatically.
    if (hit.length > this._max) {
      if (this._dispose) this._dispose(key, value)
      return false
    }

    this._length += hit.length
    this._lruList[hit.lu] = this._cache[key] = hit
    itemCount ++

    if (this._length > this._max) trim(this)
    return true
  }

  this.has = function (key) {
    if (!hOP(this._cache, key)) return false
    var hit = this._cache[key]
    if (this._maxAge && (Date.now() - hit.now > this._maxAge)) {
      return false
    }
    return true
  }

  this.get = function (key) {
    return get(this, key, true)
  }

  this.peek = function (key) {
    return get(this, key, false)
  }

  this.pop = function () {
    var hit = this._lruList[this._lru]
    del(this, hit)
    return hit || null
  }

  function get (self, key, doUse) {
    var hit = self._cache[key]
    if (hit) {
      if (self._maxAge && (Date.now() - hit.now > self._maxAge)) {
        del(self, hit)
        if (!self._allowStale) hit = undefined
      } else {
        if (doUse) use(self, hit)
      }
      if (hit) hit = hit.value
    }
    return hit
  }

  function use (self, hit) {
    shiftLU(self, hit)
    hit.lu = self._mru ++
    self._lruList[hit.lu] = hit
  }

  this.del = function (key) {
    del(this, this._cache[key])
  }

  function trim (self) {
    while (self._lru < self._mru && self._length > self._max)
      del(self, self._lruList[self._lru])
  }

  function shiftLU (self, hit) {
    delete self._lruList[ hit.lu ]
    while (self._lru < self._mru && !self._lruList[self._lru]) self._lru ++
  }

  function del (self, hit) {
    if (hit) {
      if (self._dispose) self._dispose(hit.key, hit.value)
      self._length -= hit.length
      itemCount --
      delete self._cache[ hit.key ]
      shiftLU(self, hit)
    }
  }
}

// classy, since V8 prefers predictable objects.
function Entry (key, value, lu, len, age) {
  this.key = key
  this.value = value
  this.lu = lu
  this.length = len
  this.now = age
}

})()
