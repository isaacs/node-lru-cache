exports = module.exports = function(cache) {
  var _cache = cache;

  this.update = function(item, value, maxAge) {
    maxAge  = maxAge || _cache.maxAge
    var now = maxAge ? Date.now() : 0
    
    // update item
    item.now    = now
    item.maxAge = maxAge
    item.value  = value
  }

  this.touch = function(item) {
    // nothing to do
  }
};