/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/ttl.ts TAP tests using Date.now() set item pre-stale > dump with stale values 1`] = `
Array [
  Array [
    1,
    Object {
      "start": 3021,
      "ttl": 10,
      "value": 1,
    },
  ],
  Array [
    2,
    Object {
      "start": 3010,
      "ttl": 10,
      "value": 2,
    },
  ],
]
`

exports[`test/ttl.ts TAP tests using Date.now() ttl on set, not on cache > status updates 1`] = `
Array [
  Object {
    "now": 1964,
    "remainingTTL": 10,
    "set": "add",
    "start": 1964,
    "ttl": 10,
  },
  Object {
    "get": "hit",
    "now": 1964,
    "remainingTTL": 10,
    "start": 1964,
    "ttl": 10,
  },
  Object {
    "get": "hit",
    "now": 1969,
    "remainingTTL": 15,
    "start": 1964,
    "ttl": 10,
  },
  Object {
    "get": "hit",
    "now": 1974,
    "remainingTTL": 20,
    "start": 1964,
    "ttl": 10,
  },
  Object {
    "has": "stale",
    "now": 1975,
    "remainingTTL": 21,
    "start": 1964,
    "ttl": 10,
  },
  Object {
    "get": "stale",
    "now": 1975,
    "remainingTTL": 21,
    "start": 1964,
    "ttl": 10,
  },
  Object {
    "now": 1975,
    "remainingTTL": 100,
    "set": "add",
    "start": 1975,
    "ttl": 100,
  },
  Object {
    "has": "hit",
    "now": 2025,
    "remainingTTL": 150,
    "start": 1975,
    "ttl": 100,
  },
  Object {
    "get": "hit",
    "now": 2025,
    "remainingTTL": 150,
    "start": 1975,
    "ttl": 100,
  },
  Object {
    "has": "stale",
    "now": 2076,
    "remainingTTL": 201,
    "start": 1975,
    "ttl": 100,
  },
  Object {
    "get": "stale",
    "now": 2076,
    "remainingTTL": 201,
    "start": 1975,
    "ttl": 100,
  },
  Object {
    "now": 2076,
    "remainingTTL": 10,
    "set": "add",
    "start": 2076,
    "ttl": 10,
  },
  Object {
    "now": 2076,
    "remainingTTL": 10,
    "set": "add",
    "start": 2076,
    "ttl": 10,
  },
  Object {
    "now": 2076,
    "remainingTTL": 10,
    "set": "add",
    "start": 2076,
    "ttl": 10,
  },
  Object {
    "now": 2076,
    "remainingTTL": 10,
    "set": "add",
    "start": 2076,
    "ttl": 10,
  },
  Object {
    "now": 2076,
    "remainingTTL": 10,
    "set": "add",
    "start": 2076,
    "ttl": 10,
  },
  Object {
    "now": 2076,
    "remainingTTL": 10,
    "set": "add",
    "start": 2076,
    "ttl": 10,
  },
  Object {
    "now": 2076,
    "remainingTTL": 10,
    "set": "add",
    "start": 2076,
    "ttl": 10,
  },
  Object {
    "now": 2076,
    "remainingTTL": 10,
    "set": "add",
    "start": 2076,
    "ttl": 10,
  },
  Object {
    "now": 2076,
    "remainingTTL": 10,
    "set": "add",
    "start": 2076,
    "ttl": 10,
  },
  Object {
    "has": "stale",
    "now": 2087,
    "remainingTTL": 21,
    "start": 2076,
    "ttl": 10,
  },
  Object {
    "get": "stale",
    "now": 2087,
    "remainingTTL": 21,
    "start": 2076,
    "ttl": 10,
  },
]
`

exports[`test/ttl.ts TAP tests using Date.now() ttl tests defaults > status updates 1`] = `
Array [
  Object {
    "now": 1517,
    "remainingTTL": 10,
    "set": "add",
    "start": 1517,
    "ttl": 10,
  },
  Object {
    "get": "hit",
    "now": 1517,
    "remainingTTL": 10,
    "start": 1517,
    "ttl": 10,
  },
  Object {
    "get": "hit",
    "now": 1522,
    "remainingTTL": 15,
    "start": 1517,
    "ttl": 10,
  },
  Object {
    "get": "hit",
    "now": 1527,
    "remainingTTL": 20,
    "start": 1517,
    "ttl": 10,
  },
  Object {
    "has": "stale",
    "now": 1529,
    "remainingTTL": 22,
    "start": 1517,
    "ttl": 10,
  },
  Object {
    "get": "stale",
    "now": 1529,
    "remainingTTL": 22,
    "start": 1517,
    "ttl": 10,
  },
  Object {
    "has": "hit",
    "now": 1579,
    "remainingTTL": 150,
    "start": 1529,
    "ttl": 100,
  },
  Object {
    "get": "hit",
    "now": 1579,
    "remainingTTL": 150,
    "start": 1529,
    "ttl": 100,
  },
  Object {
    "get": "stale",
    "now": 1630,
    "remainingTTL": 201,
    "start": 1529,
    "ttl": 100,
  },
  Object {
    "now": 1630,
    "remainingTTL": 10,
    "set": "add",
    "start": 1630,
    "ttl": 10,
  },
  Object {
    "now": 1630,
    "remainingTTL": 10,
    "set": "add",
    "start": 1630,
    "ttl": 10,
  },
  Object {
    "now": 1630,
    "remainingTTL": 10,
    "set": "add",
    "start": 1630,
    "ttl": 10,
  },
  Object {
    "now": 1630,
    "remainingTTL": 10,
    "set": "add",
    "start": 1630,
    "ttl": 10,
  },
  Object {
    "now": 1630,
    "remainingTTL": 10,
    "set": "add",
    "start": 1630,
    "ttl": 10,
  },
  Object {
    "now": 1630,
    "remainingTTL": 10,
    "set": "add",
    "start": 1630,
    "ttl": 10,
  },
  Object {
    "now": 1630,
    "remainingTTL": 10,
    "set": "add",
    "start": 1630,
    "ttl": 10,
  },
  Object {
    "now": 1630,
    "remainingTTL": 10,
    "set": "add",
    "start": 1630,
    "ttl": 10,
  },
  Object {
    "now": 1630,
    "remainingTTL": 10,
    "set": "add",
    "start": 1630,
    "ttl": 10,
  },
  Object {
    "has": "stale",
    "now": 1641,
    "remainingTTL": 21,
    "start": 1630,
    "ttl": 10,
  },
  Object {
    "get": "stale",
    "now": 1641,
    "remainingTTL": 21,
    "start": 1630,
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

exports[`test/ttl.ts TAP tests using Date.now() ttl tests with ttlResolution=100 > status updates 1`] = `
Array [
  Object {
    "now": 1841,
    "remainingTTL": 10,
    "set": "add",
    "start": 1841,
    "ttl": 10,
  },
  Object {
    "get": "hit",
    "now": 1841,
    "remainingTTL": 10,
    "start": 1841,
    "ttl": 10,
  },
  Object {
    "get": "hit",
    "now": 1841,
    "remainingTTL": 10,
    "start": 1841,
    "ttl": 10,
  },
  Object {
    "get": "hit",
    "now": 1841,
    "remainingTTL": 10,
    "start": 1841,
    "ttl": 10,
  },
  Object {
    "has": "hit",
    "now": 1841,
    "remainingTTL": 10,
    "start": 1841,
    "ttl": 10,
  },
  Object {
    "get": "hit",
    "now": 1841,
    "remainingTTL": 10,
    "start": 1841,
    "ttl": 10,
  },
  Object {
    "has": "stale",
    "now": 1952,
    "remainingTTL": 121,
    "start": 1841,
    "ttl": 10,
  },
  Object {
    "get": "stale",
    "now": 1952,
    "remainingTTL": 121,
    "start": 1841,
    "ttl": 10,
  },
]
`

exports[`test/ttl.ts TAP tests using Date.now() ttlAutopurge > status updates 1`] = `
Array [
  Object {
    "now": 1952,
    "remainingTTL": 10,
    "set": "add",
    "start": 1952,
    "ttl": 10,
  },
  Object {
    "now": 1952,
    "remainingTTL": 10,
    "set": "add",
    "start": 1952,
    "ttl": 10,
  },
  Object {
    "now": 1952,
    "oldValue": 2,
    "remainingTTL": 11,
    "set": "replace",
    "start": 1952,
    "ttl": 11,
  },
]
`

exports[`test/ttl.ts TAP tests with perf_hooks.performance.now() set item pre-stale > dump with stale values 1`] = `
Array [
  Array [
    1,
    Object {
      "start": 1505,
      "ttl": 10,
      "value": 1,
    },
  ],
  Array [
    2,
    Object {
      "start": 1494,
      "ttl": 10,
      "value": 2,
    },
  ],
]
`

exports[`test/ttl.ts TAP tests with perf_hooks.performance.now() ttl on set, not on cache > status updates 1`] = `
Array [
  Object {
    "now": 448,
    "remainingTTL": 10,
    "set": "add",
    "start": 448,
    "ttl": 10,
  },
  Object {
    "get": "hit",
    "now": 448,
    "remainingTTL": 10,
    "start": 448,
    "ttl": 10,
  },
  Object {
    "get": "hit",
    "now": 453,
    "remainingTTL": 15,
    "start": 448,
    "ttl": 10,
  },
  Object {
    "get": "hit",
    "now": 458,
    "remainingTTL": 20,
    "start": 448,
    "ttl": 10,
  },
  Object {
    "has": "stale",
    "now": 459,
    "remainingTTL": 21,
    "start": 448,
    "ttl": 10,
  },
  Object {
    "get": "stale",
    "now": 459,
    "remainingTTL": 21,
    "start": 448,
    "ttl": 10,
  },
  Object {
    "now": 459,
    "remainingTTL": 100,
    "set": "add",
    "start": 459,
    "ttl": 100,
  },
  Object {
    "has": "hit",
    "now": 509,
    "remainingTTL": 150,
    "start": 459,
    "ttl": 100,
  },
  Object {
    "get": "hit",
    "now": 509,
    "remainingTTL": 150,
    "start": 459,
    "ttl": 100,
  },
  Object {
    "has": "stale",
    "now": 560,
    "remainingTTL": 201,
    "start": 459,
    "ttl": 100,
  },
  Object {
    "get": "stale",
    "now": 560,
    "remainingTTL": 201,
    "start": 459,
    "ttl": 100,
  },
  Object {
    "now": 560,
    "remainingTTL": 10,
    "set": "add",
    "start": 560,
    "ttl": 10,
  },
  Object {
    "now": 560,
    "remainingTTL": 10,
    "set": "add",
    "start": 560,
    "ttl": 10,
  },
  Object {
    "now": 560,
    "remainingTTL": 10,
    "set": "add",
    "start": 560,
    "ttl": 10,
  },
  Object {
    "now": 560,
    "remainingTTL": 10,
    "set": "add",
    "start": 560,
    "ttl": 10,
  },
  Object {
    "now": 560,
    "remainingTTL": 10,
    "set": "add",
    "start": 560,
    "ttl": 10,
  },
  Object {
    "now": 560,
    "remainingTTL": 10,
    "set": "add",
    "start": 560,
    "ttl": 10,
  },
  Object {
    "now": 560,
    "remainingTTL": 10,
    "set": "add",
    "start": 560,
    "ttl": 10,
  },
  Object {
    "now": 560,
    "remainingTTL": 10,
    "set": "add",
    "start": 560,
    "ttl": 10,
  },
  Object {
    "now": 560,
    "remainingTTL": 10,
    "set": "add",
    "start": 560,
    "ttl": 10,
  },
  Object {
    "has": "stale",
    "now": 571,
    "remainingTTL": 21,
    "start": 560,
    "ttl": 10,
  },
  Object {
    "get": "stale",
    "now": 571,
    "remainingTTL": 21,
    "start": 560,
    "ttl": 10,
  },
]
`

exports[`test/ttl.ts TAP tests with perf_hooks.performance.now() ttl tests defaults > status updates 1`] = `
Array [
  Object {
    "now": 1,
    "remainingTTL": 10,
    "set": "add",
    "start": 1,
    "ttl": 10,
  },
  Object {
    "get": "hit",
    "now": 1,
    "remainingTTL": 10,
    "start": 1,
    "ttl": 10,
  },
  Object {
    "get": "hit",
    "now": 6,
    "remainingTTL": 15,
    "start": 1,
    "ttl": 10,
  },
  Object {
    "get": "hit",
    "now": 11,
    "remainingTTL": 20,
    "start": 1,
    "ttl": 10,
  },
  Object {
    "has": "stale",
    "now": 13,
    "remainingTTL": 22,
    "start": 1,
    "ttl": 10,
  },
  Object {
    "get": "stale",
    "now": 13,
    "remainingTTL": 22,
    "start": 1,
    "ttl": 10,
  },
  Object {
    "has": "hit",
    "now": 63,
    "remainingTTL": 150,
    "start": 13,
    "ttl": 100,
  },
  Object {
    "get": "hit",
    "now": 63,
    "remainingTTL": 150,
    "start": 13,
    "ttl": 100,
  },
  Object {
    "get": "stale",
    "now": 114,
    "remainingTTL": 201,
    "start": 13,
    "ttl": 100,
  },
  Object {
    "now": 114,
    "remainingTTL": 10,
    "set": "add",
    "start": 114,
    "ttl": 10,
  },
  Object {
    "now": 114,
    "remainingTTL": 10,
    "set": "add",
    "start": 114,
    "ttl": 10,
  },
  Object {
    "now": 114,
    "remainingTTL": 10,
    "set": "add",
    "start": 114,
    "ttl": 10,
  },
  Object {
    "now": 114,
    "remainingTTL": 10,
    "set": "add",
    "start": 114,
    "ttl": 10,
  },
  Object {
    "now": 114,
    "remainingTTL": 10,
    "set": "add",
    "start": 114,
    "ttl": 10,
  },
  Object {
    "now": 114,
    "remainingTTL": 10,
    "set": "add",
    "start": 114,
    "ttl": 10,
  },
  Object {
    "now": 114,
    "remainingTTL": 10,
    "set": "add",
    "start": 114,
    "ttl": 10,
  },
  Object {
    "now": 114,
    "remainingTTL": 10,
    "set": "add",
    "start": 114,
    "ttl": 10,
  },
  Object {
    "now": 114,
    "remainingTTL": 10,
    "set": "add",
    "start": 114,
    "ttl": 10,
  },
  Object {
    "has": "stale",
    "now": 125,
    "remainingTTL": 21,
    "start": 114,
    "ttl": 10,
  },
  Object {
    "get": "stale",
    "now": 125,
    "remainingTTL": 21,
    "start": 114,
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

exports[`test/ttl.ts TAP tests with perf_hooks.performance.now() ttl tests with ttlResolution=100 > status updates 1`] = `
Array [
  Object {
    "now": 325,
    "remainingTTL": 10,
    "set": "add",
    "start": 325,
    "ttl": 10,
  },
  Object {
    "get": "hit",
    "now": 325,
    "remainingTTL": 10,
    "start": 325,
    "ttl": 10,
  },
  Object {
    "get": "hit",
    "now": 325,
    "remainingTTL": 10,
    "start": 325,
    "ttl": 10,
  },
  Object {
    "get": "hit",
    "now": 325,
    "remainingTTL": 10,
    "start": 325,
    "ttl": 10,
  },
  Object {
    "has": "hit",
    "now": 325,
    "remainingTTL": 10,
    "start": 325,
    "ttl": 10,
  },
  Object {
    "get": "hit",
    "now": 325,
    "remainingTTL": 10,
    "start": 325,
    "ttl": 10,
  },
  Object {
    "has": "stale",
    "now": 436,
    "remainingTTL": 121,
    "start": 325,
    "ttl": 10,
  },
  Object {
    "get": "stale",
    "now": 436,
    "remainingTTL": 121,
    "start": 325,
    "ttl": 10,
  },
]
`

exports[`test/ttl.ts TAP tests with perf_hooks.performance.now() ttlAutopurge > status updates 1`] = `
Array [
  Object {
    "now": 436,
    "remainingTTL": 10,
    "set": "add",
    "start": 436,
    "ttl": 10,
  },
  Object {
    "now": 436,
    "remainingTTL": 10,
    "set": "add",
    "start": 436,
    "ttl": 10,
  },
  Object {
    "now": 436,
    "oldValue": 2,
    "remainingTTL": 11,
    "set": "replace",
    "start": 436,
    "ttl": 11,
  },
]
`
