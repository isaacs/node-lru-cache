/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/fetch.ts TAP asynchronous fetching > safe to stringify dump 1`] = `
[["key",{"value":1,"ttl":5,"start":11}]]
`

exports[`test/fetch.ts TAP asynchronous fetching > status 1 1`] = `
Object {
  "fetch": "miss",
  "fetchDispatched": true,
  "fetchResolved": true,
  "fetchUpdated": true,
  "now": 1,
  "remainingTTL": 5,
  "set": "replace",
  "start": 1,
  "ttl": 5,
}
`

exports[`test/fetch.ts TAP asynchronous fetching > status 2 1`] = `
Object {
  "fetch": "hit",
  "now": 1,
  "remainingTTL": 5,
  "start": 1,
  "ttl": 5,
}
`

exports[`test/fetch.ts TAP asynchronous fetching > status 3 1`] = `
Object {
  "fetch": "stale",
  "fetchDispatched": true,
  "returnedStale": true,
}
`

exports[`test/fetch.ts TAP asynchronous fetching > status 3.1 1`] = `
Object {
  "fetch": "inflight",
  "returnedStale": true,
}
`

exports[`test/fetch.ts TAP asynchronous fetching > status 4 1`] = `
Object {
  "fetch": "inflight",
}
`

exports[`test/fetch.ts TAP asynchronous fetching > status 5 1`] = `
Object {
  "fetch": "hit",
  "now": 11,
  "remainingTTL": 5,
  "start": 11,
  "ttl": 5,
}
`

exports[`test/fetch.ts TAP fetch options, signal > status updates 1`] = `
Array [
  Object {
    "fetch": "miss",
    "fetchAborted": true,
    "fetchDispatched": true,
    "fetchError": Error: deleted {
      "name": "Error",
    },
  },
  Object {
    "fetch": "miss",
    "fetchAborted": true,
    "fetchDispatched": true,
    "fetchError": Error: replaced {
      "name": "Error",
    },
  },
  Object {
    "fetch": "miss",
    "fetchAborted": true,
    "fetchDispatched": true,
    "fetchError": Error: evicted {
      "name": "Error",
    },
  },
  Object {
    "now": 721,
    "remainingTTL": 100,
    "set": "add",
    "start": 721,
    "ttl": 100,
  },
  Object {
    "now": 721,
    "remainingTTL": 100,
    "set": "add",
    "start": 721,
    "ttl": 100,
  },
  Object {
    "now": 721,
    "remainingTTL": 100,
    "set": "add",
    "start": 721,
    "ttl": 100,
  },
  Object {
    "fetch": "miss",
    "fetchDispatched": true,
    "fetchResolved": true,
    "fetchUpdated": true,
    "now": 721,
    "remainingTTL": 1000,
    "set": "replace",
    "start": 721,
    "ttl": 1000,
  },
  Object {
    "fetch": "miss",
    "fetchDispatched": true,
    "fetchResolved": true,
    "fetchUpdated": true,
    "now": 721,
    "remainingTTL": 25,
    "set": "replace",
    "start": 721,
    "ttl": 25,
  },
]
`

exports[`test/fetch.ts TAP fetch without fetch method > status update 1`] = `
Object {
  "fetch": "get",
  "get": "hit",
}
`

exports[`test/fetch.ts TAP fetchMethod throws > status updates 1`] = `
Array [
  Object {
    "now": 721,
    "remainingTTL": 10,
    "set": "add",
    "start": 721,
    "ttl": 10,
  },
  Object {
    "now": 721,
    "remainingTTL": 10,
    "set": "add",
    "start": 721,
    "ttl": 10,
  },
  Object {
    "fetch": "stale",
    "fetchDispatched": true,
    "fetchError": Error: fetch failure,
    "fetchRejected": true,
    "returnedStale": true,
  },
  Object {
    "fetch": "inflight",
    "returnedStale": true,
  },
  Object {
    "fetch": "inflight",
    "returnedStale": true,
  },
  Object {
    "get": "miss",
  },
  Object {
    "fetch": "stale",
    "fetchDispatched": true,
    "fetchError": Error: fetch failure,
    "fetchRejected": true,
    "returnedStale": true,
  },
  Object {
    "fetch": "inflight",
    "returnedStale": true,
  },
  Object {
    "fetch": "inflight",
    "returnedStale": true,
  },
  Object {
    "get": "miss",
  },
  Object {
    "fetch": "miss",
    "fetchAborted": true,
    "fetchDispatched": true,
    "fetchError": Error: replaced {
      "name": "Error",
    },
  },
  Object {
    "now": 781,
    "remainingTTL": 10,
    "set": "replace",
    "start": 781,
    "ttl": 10,
  },
  Object {
    "get": "hit",
    "now": 781,
    "remainingTTL": 10,
    "start": 781,
    "ttl": 10,
  },
  Object {
    "fetch": "miss",
    "fetchDispatched": true,
  },
]
`

exports[`test/fetch.ts TAP forceRefresh > status updates 1`] = `
Array [
  Object {
    "fetch": "refresh",
    "fetchDispatched": true,
    "fetchResolved": true,
    "fetchUpdated": true,
    "now": 941,
    "oldValue": 2,
    "remainingTTL": 100,
    "set": "replace",
    "start": 941,
    "ttl": 100,
  },
  Object {
    "fetch": "inflight",
  },
  Object {
    "fetch": "refresh",
    "fetchDispatched": true,
    "fetchResolved": true,
    "fetchUpdated": true,
    "now": 941,
    "oldValue": 100,
    "remainingTTL": 100,
    "set": "replace",
    "start": 941,
    "ttl": 100,
  },
]
`

exports[`test/fetch.ts TAP send a signal > status updates 1`] = `
Array [
  Object {
    "fetch": "miss",
    "fetchAborted": true,
    "fetchDispatched": true,
    "fetchError": Error: custom abort signal {
      "name": "Error",
    },
  },
  Object {
    "get": "miss",
  },
]
`

exports[`test/fetch.ts TAP verify inflight works as expected > status updates 1`] = `
Array [
  Object {
    "fetch": "inflight",
  },
  Object {
    "fetch": "inflight",
  },
  Object {
    "get": "hit",
  },
]
`
