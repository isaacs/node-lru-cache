/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/deprecations.ts TAP does not do deprecation warning without process object > warnings sent to console.error 1`] = `
Array [
  Array [
    "The stale option is deprecated. Please use options.allowStale instead.",
    "DeprecationWarning",
    "LRU_CACHE_OPTION_stale",
    Function LRUCache(classLRUCache),
  ],
  Array [
    "The maxAge option is deprecated. Please use options.ttl instead.",
    "DeprecationWarning",
    "LRU_CACHE_OPTION_maxAge",
    Function LRUCache(classLRUCache),
  ],
  Array [
    "The length option is deprecated. Please use options.sizeCalculation instead.",
    "DeprecationWarning",
    "LRU_CACHE_OPTION_length",
    Function LRUCache(classLRUCache),
  ],
  Array [
    "The reset method is deprecated. Please use cache.clear() instead.",
    "DeprecationWarning",
    "LRU_CACHE_METHOD_reset",
    Function get reset(),
  ],
  Array [
    "The length property is deprecated. Please use cache.size instead.",
    "DeprecationWarning",
    "LRU_CACHE_PROPERTY_length",
    Function get length(),
  ],
  Array [
    "The prune method is deprecated. Please use cache.purgeStale() instead.",
    "DeprecationWarning",
    "LRU_CACHE_METHOD_prune",
    Function get prune(),
  ],
  Array [
    "The del method is deprecated. Please use cache.delete() instead.",
    "DeprecationWarning",
    "LRU_CACHE_METHOD_del",
    Function get del(),
  ],
]
`

exports[`test/deprecations.ts TAP warns exactly once for a given deprecation > must match snapshot 1`] = `
Array [
  Array [
    "The stale option is deprecated. Please use options.allowStale instead.",
    "DeprecationWarning",
    "LRU_CACHE_OPTION_stale",
    Function LRUCache(classLRUCache),
  ],
  Array [
    "The maxAge option is deprecated. Please use options.ttl instead.",
    "DeprecationWarning",
    "LRU_CACHE_OPTION_maxAge",
    Function LRUCache(classLRUCache),
  ],
  Array [
    "The length option is deprecated. Please use options.sizeCalculation instead.",
    "DeprecationWarning",
    "LRU_CACHE_OPTION_length",
    Function LRUCache(classLRUCache),
  ],
  Array [
    "The reset method is deprecated. Please use cache.clear() instead.",
    "DeprecationWarning",
    "LRU_CACHE_METHOD_reset",
    Function get reset(),
  ],
  Array [
    "The length property is deprecated. Please use cache.size instead.",
    "DeprecationWarning",
    "LRU_CACHE_PROPERTY_length",
    Function get length(),
  ],
  Array [
    "The prune method is deprecated. Please use cache.purgeStale() instead.",
    "DeprecationWarning",
    "LRU_CACHE_METHOD_prune",
    Function get prune(),
  ],
  Array [
    "The del method is deprecated. Please use cache.delete() instead.",
    "DeprecationWarning",
    "LRU_CACHE_METHOD_del",
    Function get del(),
  ],
  Array [
    "TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.",
    "UnboundedCacheWarning",
    "LRU_CACHE_UNBOUNDED",
    Function LRUCache(classLRUCache),
  ],
]
`
