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

  var dispose = options.dispose

  var cache = Object.create(null) // hash of items by key
    , lruList = Object.create(null) // list of items in order of use recency
    , mru = 0 // most recently used
    , lru = 0 // least recently used
    , length = 0 // number of items in the list
    , itemCount = 0


  // resize the cache when the max changes.
  Object.defineProperty(this, "max",
    { set : function (mL) {
        if (!mL || !(typeof mL === "number") || mL <= 0 ) mL = Infinity
        this._max = mL
        if (length > this._max) trim(this)
      }
    , get : function () { return this._max }
    , enumerable : true
    })

  // resize the cache when the lengthCalculator changes.
  Object.defineProperty(this, "lengthCalculator",
    { set : function (lC) {
        if (typeof lC !== "function") {
          this._lengthCalculator = naiveLength
          length = itemCount
          for (var key in cache) {
            cache[key].length = 1
          }
        } else {
          this._lengthCalculator = lC
          length = 0
          for (var key in cache) {
            cache[key].length = this._lengthCalculator(cache[key].value)
            length += cache[key].length
          }
        }

        if (length > this._max) trim(this)
      }
    , get : function () { return this._lengthCalculator }
    , enumerable : true
    })

  Object.defineProperty(this, "length",
    { get : function () { return length }
    , enumerable : true
    })


  Object.defineProperty(this, "itemCount",
    { get : function () { return itemCount }
    , enumerable : true
    })

  this.forEach = function (fn, thisp) {
    thisp = thisp || this
    var i = 0;
    for (var k = mru - 1; k >= 0 && i < itemCount; k--) if (lruList[k]) {
      i++
      var hit = lruList[k]
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
    for (var k = mru - 1; k >= 0 && i < itemCount; k--) if (lruList[k]) {
      var hit = lruList[k]
      keys[i++] = hit.key
    }
    return keys
  }

  this.values = function () {
    var values = new Array(itemCount)
    var i = 0
    for (var k = mru - 1; k >= 0 && i < itemCount; k--) if (lruList[k]) {
      var hit = lruList[k]
      values[i++] = hit.value
    }
    return values
  }

  this.reset = function () {
    if (dispose) {
      for (var k in cache) {
        dispose(k, cache[k].value)
      }
    }
    cache = Object.create(null)
    lruList = Object.create(null)
    lru = 0
    mru = 0
    length = 0
    itemCount = 0
  }

  // Provided for debugging/dev purposes only. No promises whatsoever that
  // this API stays stable.
  this.dump = function () {
    return cache
  }

  this.dumpLru = function () {
    return lruList
  }

  this.set = function (key, value) {
    if (hOP(cache, key)) {
      // dispose of the old one before overwriting
      if (dispose) dispose(key, cache[key].value)
      if (this._maxAge) cache[key].now = Date.now()
      cache[key].value = value
      this.get(key)
      return true
    }

    var len = this._lengthCalculator(value)
    var age = this._maxAge ? Date.now() : 0
    var hit = new Entry(key, value, mru++, len, age)

    // oversized objects fall out of cache automatically.
    if (hit.length > this._max) {
      if (dispose) dispose(key, value)
      return false
    }

    length += hit.length
    lruList[hit.lu] = cache[key] = hit
    itemCount ++

    if (length > this._max) trim(this)
    return true
  }

  this.has = function (key) {
    if (!hOP(cache, key)) return false
    var hit = cache[key]
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
    var hit = lruList[lru]
    del(this, hit)
    return hit || null
  }

  function get (self, key, doUse) {
    var hit = cache[key]
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
    hit.lu = mru ++
    lruList[hit.lu] = hit
  }

  this.del = function (key) {
    del(this, cache[key])
  }

  function trim (self) {
    while (lru < mru && length > self._max)
      del(self, lruList[lru])
  }

  function shiftLU (self, hit) {
    delete lruList[ hit.lu ]
    while (lru < mru && !lruList[lru]) lru ++
  }

  function del (self, hit) {
    if (hit) {
      if (dispose) dispose(hit.key, hit.value)
      length -= hit.length
      itemCount --
      delete cache[ hit.key ]
      shiftLU(self, hit)
    }
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
