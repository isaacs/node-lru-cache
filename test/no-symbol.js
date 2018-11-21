// hacky way to test that it still works when Symbol is not there
process.env._nodeLRUCacheForceNoSymbol = '1'
require('./basic.js')
