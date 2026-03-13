/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/ttl.ts > TAP > tests using Date.now() > set item pre-stale > dump with stale values 1`] = `
Array [
  Array [
    1,
    Object {
      "start": 3316,
      "ttl": 10,
      "value": 1,
    },
  ],
  Array [
    2,
    Object {
      "start": 3305,
      "ttl": 10,
      "value": 2,
    },
  ],
]
`

exports[`test/ttl.ts > TAP > tests using Date.now() > ttl on set, not on cache > status updates 1`] = `
Array [
  Object {
    "now": 2259,
    "remainingTTL": 10,
    "set": "add",
    "start": 2259,
    "ttl": 10,
  },
  Object {
    "get": "hit",
    "now": 2259,
    "remainingTTL": 10,
    "start": 2259,
    "ttl": 10,
  },
  Object {
    "get": "hit",
    "now": 2264,
    "remainingTTL": 5,
    "start": 2259,
    "ttl": 10,
  },
  Object {
    "get": "hit",
    "now": 2269,
    "remainingTTL": 0,
    "start": 2259,
    "ttl": 10,
  },
  Object {
    "has": "stale",
    "now": 2270,
    "remainingTTL": -1,
    "start": 2259,
    "ttl": 10,
  },
  Object {
    "get": "stale",
    "now": 2270,
    "remainingTTL": -1,
    "start": 2259,
    "ttl": 10,
  },
  Object {
    "now": 2270,
    "remainingTTL": 100,
    "set": "add",
    "start": 2270,
    "ttl": 100,
  },
  Object {
    "has": "hit",
    "now": 2320,
    "remainingTTL": 50,
    "start": 2270,
    "ttl": 100,
  },
  Object {
    "get": "hit",
    "now": 2320,
    "remainingTTL": 50,
    "start": 2270,
    "ttl": 100,
  },
  Object {
    "has": "stale",
    "now": 2371,
    "remainingTTL": -1,
    "start": 2270,
    "ttl": 100,
  },
  Object {
    "get": "stale",
    "now": 2371,
    "remainingTTL": -1,
    "start": 2270,
    "ttl": 100,
  },
  Object {
    "now": 2371,
    "remainingTTL": 10,
    "set": "add",
    "start": 2371,
    "ttl": 10,
  },
  Object {
    "now": 2371,
    "remainingTTL": 10,
    "set": "add",
    "start": 2371,
    "ttl": 10,
  },
  Object {
    "now": 2371,
    "remainingTTL": 10,
    "set": "add",
    "start": 2371,
    "ttl": 10,
  },
  Object {
    "now": 2371,
    "remainingTTL": 10,
    "set": "add",
    "start": 2371,
    "ttl": 10,
  },
  Object {
    "now": 2371,
    "remainingTTL": 10,
    "set": "add",
    "start": 2371,
    "ttl": 10,
  },
  Object {
    "now": 2371,
    "remainingTTL": 10,
    "set": "add",
    "start": 2371,
    "ttl": 10,
  },
  Object {
    "now": 2371,
    "remainingTTL": 10,
    "set": "add",
    "start": 2371,
    "ttl": 10,
  },
  Object {
    "now": 2371,
    "remainingTTL": 10,
    "set": "add",
    "start": 2371,
    "ttl": 10,
  },
  Object {
    "now": 2371,
    "remainingTTL": 10,
    "set": "add",
    "start": 2371,
    "ttl": 10,
  },
  Object {
    "has": "stale",
    "now": 2382,
    "remainingTTL": -1,
    "start": 2371,
    "ttl": 10,
  },
  Object {
    "get": "stale",
    "now": 2382,
    "remainingTTL": -1,
    "start": 2371,
    "ttl": 10,
  },
]
`

exports[`test/ttl.ts > TAP > tests using Date.now() > ttl tests defaults > status updates 1`] = `
Array [
  Object {
    "now": 1812,
    "remainingTTL": 10,
    "set": "add",
    "start": 1812,
    "ttl": 10,
  },
  Object {
    "get": "hit",
    "now": 1812,
    "remainingTTL": 10,
    "start": 1812,
    "ttl": 10,
  },
  Object {
    "get": "hit",
    "now": 1817,
    "remainingTTL": 5,
    "start": 1812,
    "ttl": 10,
  },
  Object {
    "get": "hit",
    "now": 1822,
    "remainingTTL": 0,
    "start": 1812,
    "ttl": 10,
  },
  Object {
    "has": "stale",
    "now": 1824,
    "remainingTTL": -2,
    "start": 1812,
    "ttl": 10,
  },
  Object {
    "get": "stale",
    "now": 1824,
    "remainingTTL": -2,
    "start": 1812,
    "ttl": 10,
  },
  Object {
    "has": "hit",
    "now": 1874,
    "remainingTTL": 50,
    "start": 1824,
    "ttl": 100,
  },
  Object {
    "get": "hit",
    "now": 1874,
    "remainingTTL": 50,
    "start": 1824,
    "ttl": 100,
  },
  Object {
    "get": "stale",
    "now": 1925,
    "remainingTTL": -1,
    "start": 1824,
    "ttl": 100,
  },
  Object {
    "now": 1925,
    "remainingTTL": 10,
    "set": "add",
    "start": 1925,
    "ttl": 10,
  },
  Object {
    "now": 1925,
    "remainingTTL": 10,
    "set": "add",
    "start": 1925,
    "ttl": 10,
  },
  Object {
    "now": 1925,
    "remainingTTL": 10,
    "set": "add",
    "start": 1925,
    "ttl": 10,
  },
  Object {
    "now": 1925,
    "remainingTTL": 10,
    "set": "add",
    "start": 1925,
    "ttl": 10,
  },
  Object {
    "now": 1925,
    "remainingTTL": 10,
    "set": "add",
    "start": 1925,
    "ttl": 10,
  },
  Object {
    "now": 1925,
    "remainingTTL": 10,
    "set": "add",
    "start": 1925,
    "ttl": 10,
  },
  Object {
    "now": 1925,
    "remainingTTL": 10,
    "set": "add",
    "start": 1925,
    "ttl": 10,
  },
  Object {
    "now": 1925,
    "remainingTTL": 10,
    "set": "add",
    "start": 1925,
    "ttl": 10,
  },
  Object {
    "now": 1925,
    "remainingTTL": 10,
    "set": "add",
    "start": 1925,
    "ttl": 10,
  },
  Object {
    "has": "stale",
    "now": 1936,
    "remainingTTL": -1,
    "start": 1925,
    "ttl": 10,
  },
  Object {
    "get": "stale",
    "now": 1936,
    "remainingTTL": -1,
    "start": 1925,
    "ttl": 10,
  },
  Object {
    "get": "hit",
  },
  Object {
    "get": "hit",
  },
]
`

exports[`test/ttl.ts > TAP > tests using Date.now() > ttl tests with ttlResolution=100 > status updates 1`] = `
Array [
  Object {
    "now": 2136,
    "remainingTTL": 10,
    "set": "add",
    "start": 2136,
    "ttl": 10,
  },
  Object {
    "get": "hit",
    "now": 2136,
    "remainingTTL": 10,
    "start": 2136,
    "ttl": 10,
  },
  Object {
    "get": "hit",
    "now": 2136,
    "remainingTTL": 10,
    "start": 2136,
    "ttl": 10,
  },
  Object {
    "get": "hit",
    "now": 2136,
    "remainingTTL": 10,
    "start": 2136,
    "ttl": 10,
  },
  Object {
    "has": "hit",
    "now": 2136,
    "remainingTTL": 10,
    "start": 2136,
    "ttl": 10,
  },
  Object {
    "get": "hit",
    "now": 2136,
    "remainingTTL": 10,
    "start": 2136,
    "ttl": 10,
  },
  Object {
    "has": "stale",
    "now": 2247,
    "remainingTTL": -101,
    "start": 2136,
    "ttl": 10,
  },
  Object {
    "get": "stale",
    "now": 2247,
    "remainingTTL": -101,
    "start": 2136,
    "ttl": 10,
  },
]
`

exports[`test/ttl.ts > TAP > tests using Date.now() > ttlAutopurge > status updates 1`] = `
Array [
  Object {
    "now": 2247,
    "remainingTTL": 10,
    "set": "add",
    "start": 2247,
    "ttl": 10,
  },
  Object {
    "now": 2247,
    "remainingTTL": 10,
    "set": "add",
    "start": 2247,
    "ttl": 10,
  },
  Object {
    "now": 2247,
    "oldValue": 2,
    "remainingTTL": 11,
    "set": "replace",
    "start": 2247,
    "ttl": 11,
  },
]
`

exports[`test/ttl.ts > TAP > tests with perf_hooks.performance.now() > set item pre-stale > dump with stale values 1`] = `
Array [
  Array [
    1,
    Object {
      "start": 1506,
      "ttl": 10,
      "value": 1,
    },
  ],
  Array [
    2,
    Object {
      "start": 1495,
      "ttl": 10,
      "value": 2,
    },
  ],
]
`

exports[`test/ttl.ts > TAP > tests with perf_hooks.performance.now() > ttl on set, not on cache > status updates 1`] = `
Array [
  Object {
    "now": 449,
    "remainingTTL": 10,
    "set": "add",
    "start": 449,
    "ttl": 10,
  },
  Object {
    "get": "hit",
    "now": 449,
    "remainingTTL": 10,
    "start": 449,
    "ttl": 10,
  },
  Object {
    "get": "hit",
    "now": 454,
    "remainingTTL": 5,
    "start": 449,
    "ttl": 10,
  },
  Object {
    "get": "hit",
    "now": 459,
    "remainingTTL": 0,
    "start": 449,
    "ttl": 10,
  },
  Object {
    "has": "stale",
    "now": 460,
    "remainingTTL": -1,
    "start": 449,
    "ttl": 10,
  },
  Object {
    "get": "stale",
    "now": 460,
    "remainingTTL": -1,
    "start": 449,
    "ttl": 10,
  },
  Object {
    "now": 460,
    "remainingTTL": 100,
    "set": "add",
    "start": 460,
    "ttl": 100,
  },
  Object {
    "has": "hit",
    "now": 510,
    "remainingTTL": 50,
    "start": 460,
    "ttl": 100,
  },
  Object {
    "get": "hit",
    "now": 510,
    "remainingTTL": 50,
    "start": 460,
    "ttl": 100,
  },
  Object {
    "has": "stale",
    "now": 561,
    "remainingTTL": -1,
    "start": 460,
    "ttl": 100,
  },
  Object {
    "get": "stale",
    "now": 561,
    "remainingTTL": -1,
    "start": 460,
    "ttl": 100,
  },
  Object {
    "now": 561,
    "remainingTTL": 10,
    "set": "add",
    "start": 561,
    "ttl": 10,
  },
  Object {
    "now": 561,
    "remainingTTL": 10,
    "set": "add",
    "start": 561,
    "ttl": 10,
  },
  Object {
    "now": 561,
    "remainingTTL": 10,
    "set": "add",
    "start": 561,
    "ttl": 10,
  },
  Object {
    "now": 561,
    "remainingTTL": 10,
    "set": "add",
    "start": 561,
    "ttl": 10,
  },
  Object {
    "now": 561,
    "remainingTTL": 10,
    "set": "add",
    "start": 561,
    "ttl": 10,
  },
  Object {
    "now": 561,
    "remainingTTL": 10,
    "set": "add",
    "start": 561,
    "ttl": 10,
  },
  Object {
    "now": 561,
    "remainingTTL": 10,
    "set": "add",
    "start": 561,
    "ttl": 10,
  },
  Object {
    "now": 561,
    "remainingTTL": 10,
    "set": "add",
    "start": 561,
    "ttl": 10,
  },
  Object {
    "now": 561,
    "remainingTTL": 10,
    "set": "add",
    "start": 561,
    "ttl": 10,
  },
  Object {
    "has": "stale",
    "now": 572,
    "remainingTTL": -1,
    "start": 561,
    "ttl": 10,
  },
  Object {
    "get": "stale",
    "now": 572,
    "remainingTTL": -1,
    "start": 561,
    "ttl": 10,
  },
]
`

exports[`test/ttl.ts > TAP > tests with perf_hooks.performance.now() > ttl tests defaults > status updates 1`] = `
Array [
  Object {
    "now": 2,
    "remainingTTL": 10,
    "set": "add",
    "start": 2,
    "ttl": 10,
  },
  Object {
    "get": "hit",
    "now": 2,
    "remainingTTL": 10,
    "start": 2,
    "ttl": 10,
  },
  Object {
    "get": "hit",
    "now": 7,
    "remainingTTL": 5,
    "start": 2,
    "ttl": 10,
  },
  Object {
    "get": "hit",
    "now": 12,
    "remainingTTL": 0,
    "start": 2,
    "ttl": 10,
  },
  Object {
    "has": "stale",
    "now": 14,
    "remainingTTL": -2,
    "start": 2,
    "ttl": 10,
  },
  Object {
    "get": "stale",
    "now": 14,
    "remainingTTL": -2,
    "start": 2,
    "ttl": 10,
  },
  Object {
    "has": "hit",
    "now": 64,
    "remainingTTL": 50,
    "start": 14,
    "ttl": 100,
  },
  Object {
    "get": "hit",
    "now": 64,
    "remainingTTL": 50,
    "start": 14,
    "ttl": 100,
  },
  Object {
    "get": "stale",
    "now": 115,
    "remainingTTL": -1,
    "start": 14,
    "ttl": 100,
  },
  Object {
    "now": 115,
    "remainingTTL": 10,
    "set": "add",
    "start": 115,
    "ttl": 10,
  },
  Object {
    "now": 115,
    "remainingTTL": 10,
    "set": "add",
    "start": 115,
    "ttl": 10,
  },
  Object {
    "now": 115,
    "remainingTTL": 10,
    "set": "add",
    "start": 115,
    "ttl": 10,
  },
  Object {
    "now": 115,
    "remainingTTL": 10,
    "set": "add",
    "start": 115,
    "ttl": 10,
  },
  Object {
    "now": 115,
    "remainingTTL": 10,
    "set": "add",
    "start": 115,
    "ttl": 10,
  },
  Object {
    "now": 115,
    "remainingTTL": 10,
    "set": "add",
    "start": 115,
    "ttl": 10,
  },
  Object {
    "now": 115,
    "remainingTTL": 10,
    "set": "add",
    "start": 115,
    "ttl": 10,
  },
  Object {
    "now": 115,
    "remainingTTL": 10,
    "set": "add",
    "start": 115,
    "ttl": 10,
  },
  Object {
    "now": 115,
    "remainingTTL": 10,
    "set": "add",
    "start": 115,
    "ttl": 10,
  },
  Object {
    "has": "stale",
    "now": 126,
    "remainingTTL": -1,
    "start": 115,
    "ttl": 10,
  },
  Object {
    "get": "stale",
    "now": 126,
    "remainingTTL": -1,
    "start": 115,
    "ttl": 10,
  },
  Object {
    "get": "hit",
  },
  Object {
    "get": "hit",
  },
]
`

exports[`test/ttl.ts > TAP > tests with perf_hooks.performance.now() > ttl tests with ttlResolution=100 > status updates 1`] = `
Array [
  Object {
    "now": 326,
    "remainingTTL": 10,
    "set": "add",
    "start": 326,
    "ttl": 10,
  },
  Object {
    "get": "hit",
    "now": 326,
    "remainingTTL": 10,
    "start": 326,
    "ttl": 10,
  },
  Object {
    "get": "hit",
    "now": 326,
    "remainingTTL": 10,
    "start": 326,
    "ttl": 10,
  },
  Object {
    "get": "hit",
    "now": 326,
    "remainingTTL": 10,
    "start": 326,
    "ttl": 10,
  },
  Object {
    "has": "hit",
    "now": 326,
    "remainingTTL": 10,
    "start": 326,
    "ttl": 10,
  },
  Object {
    "get": "hit",
    "now": 326,
    "remainingTTL": 10,
    "start": 326,
    "ttl": 10,
  },
  Object {
    "has": "stale",
    "now": 437,
    "remainingTTL": -101,
    "start": 326,
    "ttl": 10,
  },
  Object {
    "get": "stale",
    "now": 437,
    "remainingTTL": -101,
    "start": 326,
    "ttl": 10,
  },
]
`

exports[`test/ttl.ts > TAP > tests with perf_hooks.performance.now() > ttlAutopurge > status updates 1`] = `
Array [
  Object {
    "now": 437,
    "remainingTTL": 10,
    "set": "add",
    "start": 437,
    "ttl": 10,
  },
  Object {
    "now": 437,
    "remainingTTL": 10,
    "set": "add",
    "start": 437,
    "ttl": 10,
  },
  Object {
    "now": 437,
    "oldValue": 2,
    "remainingTTL": 11,
    "set": "replace",
    "start": 437,
    "ttl": 11,
  },
]
`
