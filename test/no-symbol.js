// hacky way to test that it still works when Symbol is not there
global.NoSymbol = true
require('./basic.js')
