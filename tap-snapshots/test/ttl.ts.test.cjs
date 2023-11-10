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
      "start": 3022,
      "ttl": 10,
      "value": 1,
    },
  ],
  Array [
    2,
    Object {
      "start": 3011,
      "ttl": 10,
      "value": 2,
    },
  ],
]
`

exports[`test/ttl.ts > TAP > tests using Date.now() > ttl on set, not on cache > status updates 1`] = `
Array [
  Object {
    "now": 1965,
    "remainingTTL": 10,
    "set": "add",
    "start": 1965,
    "ttl": 10,
  },
  Object {
    "get": "hit",
    "now": 1965,
    "remainingTTL": 10,
    "start": 1965,
    "ttl": 10,
  },
  Object {
    "get": "hit",
    "now": 1970,
    "remainingTTL": 5,
    "start": 1965,
    "ttl": 10,
  },
  Object {
    "get": "hit",
    "now": 1975,
    "remainingTTL": 0,
    "start": 1965,
    "ttl": 10,
  },
  Object {
    "has": "stale",
    "now": 1976,
    "remainingTTL": -1,
    "start": 1965,
    "ttl": 10,
  },
  Object {
    "get": "stale",
    "now": 1976,
    "remainingTTL": -1,
    "start": 1965,
    "ttl": 10,
  },
  Object {
    "now": 1976,
    "remainingTTL": 100,
    "set": "add",
    "start": 1976,
    "ttl": 100,
  },
  Object {
    "has": "hit",
    "now": 2026,
    "remainingTTL": 50,
    "start": 1976,
    "ttl": 100,
  },
  Object {
    "get": "hit",
    "now": 2026,
    "remainingTTL": 50,
    "start": 1976,
    "ttl": 100,
  },
  Object {
    "has": "stale",
    "now": 2077,
    "remainingTTL": -1,
    "start": 1976,
    "ttl": 100,
  },
  Object {
    "get": "stale",
    "now": 2077,
    "remainingTTL": -1,
    "start": 1976,
    "ttl": 100,
  },
  Object {
    "now": 2077,
    "remainingTTL": 10,
    "set": "add",
    "start": 2077,
    "ttl": 10,
  },
  Object {
    "now": 2077,
    "remainingTTL": 10,
    "set": "add",
    "start": 2077,
    "ttl": 10,
  },
  Object {
    "now": 2077,
    "remainingTTL": 10,
    "set": "add",
    "start": 2077,
    "ttl": 10,
  },
  Object {
    "now": 2077,
    "remainingTTL": 10,
    "set": "add",
    "start": 2077,
    "ttl": 10,
  },
  Object {
    "now": 2077,
    "remainingTTL": 10,
    "set": "add",
    "start": 2077,
    "ttl": 10,
  },
  Object {
    "now": 2077,
    "remainingTTL": 10,
    "set": "add",
    "start": 2077,
    "ttl": 10,
  },
  Object {
    "now": 2077,
    "remainingTTL": 10,
    "set": "add",
    "start": 2077,
    "ttl": 10,
  },
  Object {
    "now": 2077,
    "remainingTTL": 10,
    "set": "add",
    "start": 2077,
    "ttl": 10,
  },
  Object {
    "now": 2077,
    "remainingTTL": 10,
    "set": "add",
    "start": 2077,
    "ttl": 10,
  },
  Object {
    "has": "stale",
    "now": 2088,
    "remainingTTL": -1,
    "start": 2077,
    "ttl": 10,
  },
  Object {
    "get": "stale",
    "now": 2088,
    "remainingTTL": -1,
    "start": 2077,
    "ttl": 10,
  },
]
`

exports[`test/ttl.ts > TAP > tests using Date.now() > ttl tests defaults > status updates 1`] = `
Array [
  Object {
    "now": 1518,
    "remainingTTL": 10,
    "set": "add",
    "start": 1518,
    "ttl": 10,
  },
  Object {
    "get": "hit",
    "now": 1518,
    "remainingTTL": 10,
    "start": 1518,
    "ttl": 10,
  },
  Object {
    "get": "hit",
    "now": 1523,
    "remainingTTL": 5,
    "start": 1518,
    "ttl": 10,
  },
  Object {
    "get": "hit",
    "now": 1528,
    "remainingTTL": 0,
    "start": 1518,
    "ttl": 10,
  },
  Object {
    "has": "stale",
    "now": 1530,
    "remainingTTL": -2,
    "start": 1518,
    "ttl": 10,
  },
  Object {
    "get": "stale",
    "now": 1530,
    "remainingTTL": -2,
    "start": 1518,
    "ttl": 10,
  },
  Object {
    "has": "hit",
    "now": 1580,
    "remainingTTL": 50,
    "start": 1530,
    "ttl": 100,
  },
  Object {
    "get": "hit",
    "now": 1580,
    "remainingTTL": 50,
    "start": 1530,
    "ttl": 100,
  },
  Object {
    "get": "stale",
    "now": 1631,
    "remainingTTL": -1,
    "start": 1530,
    "ttl": 100,
  },
  Object {
    "now": 1631,
    "remainingTTL": 10,
    "set": "add",
    "start": 1631,
    "ttl": 10,
  },
  Object {
    "now": 1631,
    "remainingTTL": 10,
    "set": "add",
    "start": 1631,
    "ttl": 10,
  },
  Object {
    "now": 1631,
    "remainingTTL": 10,
    "set": "add",
    "start": 1631,
    "ttl": 10,
  },
  Object {
    "now": 1631,
    "remainingTTL": 10,
    "set": "add",
    "start": 1631,
    "ttl": 10,
  },
  Object {
    "now": 1631,
    "remainingTTL": 10,
    "set": "add",
    "start": 1631,
    "ttl": 10,
  },
  Object {
    "now": 1631,
    "remainingTTL": 10,
    "set": "add",
    "start": 1631,
    "ttl": 10,
  },
  Object {
    "now": 1631,
    "remainingTTL": 10,
    "set": "add",
    "start": 1631,
    "ttl": 10,
  },
  Object {
    "now": 1631,
    "remainingTTL": 10,
    "set": "add",
    "start": 1631,
    "ttl": 10,
  },
  Object {
    "now": 1631,
    "remainingTTL": 10,
    "set": "add",
    "start": 1631,
    "ttl": 10,
  },
  Object {
    "has": "stale",
    "now": 1642,
    "remainingTTL": -1,
    "start": 1631,
    "ttl": 10,
  },
  Object {
    "get": "stale",
    "now": 1642,
    "remainingTTL": -1,
    "start": 1631,
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
    "now": 1842,
    "remainingTTL": 10,
    "set": "add",
    "start": 1842,
    "ttl": 10,
  },
  Object {
    "get": "hit",
    "now": 1842,
    "remainingTTL": 10,
    "start": 1842,
    "ttl": 10,
  },
  Object {
    "get": "hit",
    "now": 1842,
    "remainingTTL": 10,
    "start": 1842,
    "ttl": 10,
  },
  Object {
    "get": "hit",
    "now": 1842,
    "remainingTTL": 10,
    "start": 1842,
    "ttl": 10,
  },
  Object {
    "has": "hit",
    "now": 1842,
    "remainingTTL": 10,
    "start": 1842,
    "ttl": 10,
  },
  Object {
    "get": "hit",
    "now": 1842,
    "remainingTTL": 10,
    "start": 1842,
    "ttl": 10,
  },
  Object {
    "has": "stale",
    "now": 1953,
    "remainingTTL": -101,
    "start": 1842,
    "ttl": 10,
  },
  Object {
    "get": "stale",
    "now": 1953,
    "remainingTTL": -101,
    "start": 1842,
    "ttl": 10,
  },
]
`

exports[`test/ttl.ts > TAP > tests using Date.now() > ttlAutopurge > status updates 1`] = `
Array [
  Object {
    "now": 1953,
    "remainingTTL": 10,
    "set": "add",
    "start": 1953,
    "ttl": 10,
  },
  Object {
    "now": 1953,
    "remainingTTL": 10,
    "set": "add",
    "start": 1953,
    "ttl": 10,
  },
  Object {
    "now": 1953,
    "oldValue": 2,
    "remainingTTL": 11,
    "set": "replace",
    "start": 1953,
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
