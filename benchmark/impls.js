const { readFileSync } = require('fs')
const impls = readFileSync(__dirname + '/impls.txt', 'utf8')
  .trim()
  .split('\n')
for (const impl of impls) {
  if (impl.startsWith('lru-cache_')) {
    const req = require(impl)
    const LRUCache = req.LRUCache || req
    exports[impl] = max => new LRUCache({ max })
  } else if (impl.startsWith('mnemonist_')) {
    MnemonistLRUMap = require(impl + '/lru-map-with-delete')
    MnemonistLRUCache = require(impl + '/lru-cache-with-delete')
    exports[impl + '_obj'] = max => new MnemonistLRUCache(max)
    exports[impl + '_map'] = max => new MnemonistLRUMap(max)
  } else if (impl.startsWith('hashlru_')) {
    exports[impl] = require(impl)
  } else if (impl.startsWith('lru-fast_')) {
    const { LRUCache } = require(impl)
    exports[impl] = max => new LRUCache(max)
  } else {
    throw new Error(
      'found an impl i dont know how to create: ' + impl
    )
  }
}

exports['just a Map'] = _ => new Map()

exports['just a null obj'] = _ => {
  const data = Object.create(null)
  return { set: (k, v) => (data[k] = v), get: k => data[k] }
}

exports['just a {}'] = _ => {
  const data = {}
  return { set: (k, v) => (data[k] = v), get: k => data[k] }
}
