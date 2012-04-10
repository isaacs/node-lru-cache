;(function () { // closure for web browsers

if (module) {
  module.exports = LRUCache
} else {
  // just set the global for non-node platforms.
  ;(function () { return this })().LRUCache = LRUCache
}

function hOP (obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key)
}

function ItemTooLargeError(msg) {
  this.name = 'ItemTooLargeError';
  this.message = msg || '';
}
ItemTooLargeError.prototype = new Error();

function LRUCache (maxLength, lengthCalculator) {
  if (!(this instanceof LRUCache)) {
    return new LRUCache(maxLength, lengthCalculator)
  }
  var cache = {} // hash of items by key
    , lruList = {} // list of items in order of use recency
    , lru = 0 // least recently used
    , mru = 0 // most recently used
    , length = 0 // number of items in the list
    , itemCount = 0
    


  // resize the cache when the maxLength changes.
  Object.defineProperty(this, "maxLength",
    { set : function (mL) {
        if (!mL || !(typeof mL === "number") || mL <= 0 ) mL = Infinity
        maxLength = mL
        // if it gets above double maxLength, trim right away.
        // otherwise, do it whenever it's convenient.
        if (length > maxLength) trim()
      }
    , get : function () { return maxLength }
    , enumerable : true
    })

  this.maxLength = maxLength

  // resize the cache when the maxLength changes.
  Object.defineProperty(this, "lengthCalculator",
    { set : function (lC) {
        if (typeof lC !== 'function') {
          lengthCalculator = null;
          length = itemCount;
        } else {
          lengthCalculator = lC;
          length = 0;
          for (key in cache) {
            if (cache.hasOwnProperty(key)) {
              length += lengthCalculator(cache[key].value)  
            }
          }
        }
        
        if (length > maxLength) trim()
      }
    , get : function () { return lengthCalculator }
    , enumerable : true
    })
    
  this.lengthCalculator = lengthCalculator

  Object.defineProperty(this, "length",
    { get : function () { return length }
    , enumerable : true
    })
  
  
  Object.defineProperty(this, "itemCount",
    { get : function () { return itemCount }
    , enumerable : true
    })  

  this.reset = function () {
    cache = {}
    lruList = {}
    lru = 0
    mru = 0
    length = 0,
    itemCount = 0
  }

  // Provided for debugging/dev purposes only. No promises whatsoever that
  // this API stays stable.
  this.dump = function () {
    return cache
  }

  this.set = function (key, value) {
    if (hOP(cache, key)) {
      this.get(key)
      cache[key].value = value
      return undefined
    }

    if (typeof lengthCalculator !== 'function') {
        var hit = {key:key, value:value, lu:mru++}
        lruList[hit.lu] = cache[key] = hit
        length ++
    } else {
        var hit = {key:key, value:value, lu:mru++},
          itemLength = lengthCalculator(value)

        if (itemLength > maxLength) {
          throw new ItemTooLargeError("Trying to add an item with a length[" + itemLength +"] superior to the maxLength["+ maxLength +"]")
        }
        
        lruList[hit.lu] = cache[key] = hit
        length += itemLength
    }
    itemCount ++
    
    if (length > maxLength) trim()
  }

  this.get = function (key) {
    if (!hOP(cache, key)) return undefined
    var hit = cache[key]
    delete lruList[hit.lu]
    if (hit.lu === lru) lruWalk()
    hit.lu = mru ++
    lruList[hit.lu] = hit
    return hit.value
  }

  this.del = function (key) {
    if (!hOP(cache, key)) return undefined
    var hit = cache[key]
    delete cache[key]
    delete lruList[hit.lu]
    if (hit.lu === lru) lruWalk()

    if (typeof lengthCalculator !== 'function') {
      length --
    } else {
      length -= lengthCalculator(hit.value)
    }

    itemCount --
  }

  function lruWalk () {
    // lru has been deleted, hop up to the next hit.
    lru = Object.keys(lruList).shift()
  }

  function trim () {
    if (length <= maxLength) return undefined
    if (typeof lengthCalculator !== 'function') {
      var prune = Object.keys(lruList).slice(0, length - maxLength)
      for (var i = 0, l = (length - maxLength); i < l; i ++) {
        delete cache[ lruList[prune[i]].key ]
        delete lruList[prune[i]]
      }
        length = maxLength        
    } else {
      var prune = Object.keys(lruList)
      for (var i = 0; i < prune.length && length > maxLength; i ++) {
        length -= lengthCalculator(lruList[prune[i]].value)
        delete cache[ lruList[prune[i]].key ]
        delete lruList[prune[i]]
      }
    }
    lruWalk()
  }
}

})()
