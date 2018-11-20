// hacky way to test that it still works when Symbol is not there
global._nodeLRUCacheForceNoSymbol = true
require('./basic.js')
