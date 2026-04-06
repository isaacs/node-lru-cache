/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/fetch.ts > TAP > asynchronous fetching > safe to stringify dump 1`] = `
[["key",{"value":1,"ttl":5,"start":12}]]
`

exports[`test/fetch.ts > TAP > asynchronous fetching > status 1 1`] = `
Object {
  "fetch": "miss",
  "fetchDispatched": true,
  "fetchResolved": true,
  "fetchUpdated": true,
  "key": "key",
  "now": 2,
  "op": "fetch",
  "remainingTTL": 5,
  "set": "replace",
  "start": 2,
  "ttl": 5,
  "value": 0,
}
`

exports[`test/fetch.ts > TAP > asynchronous fetching > status 2 1`] = `
Object {
  "fetch": "hit",
  "key": "key",
  "now": 2,
  "op": "fetch",
  "remainingTTL": 5,
  "start": 2,
  "ttl": 5,
}
`

exports[`test/fetch.ts > TAP > asynchronous fetching > status 3 1`] = `
Object {
  "fetch": "stale",
  "fetchDispatched": true,
  "key": "key",
  "op": "fetch",
  "returnedStale": true,
}
`

exports[`test/fetch.ts > TAP > asynchronous fetching > status 3.1 1`] = `
Object {
  "fetch": "inflight",
  "key": "key",
  "op": "fetch",
  "returnedStale": true,
}
`

exports[`test/fetch.ts > TAP > asynchronous fetching > status 4 1`] = `
Object {
  "fetch": "inflight",
  "key": "key",
  "op": "fetch",
}
`

exports[`test/fetch.ts > TAP > asynchronous fetching > status 5 1`] = `
Object {
  "fetch": "hit",
  "key": "key",
  "now": 12,
  "op": "fetch",
  "remainingTTL": 5,
  "start": 12,
  "ttl": 5,
}
`

exports[`test/fetch.ts > TAP > fetch options, signal > status updates 1`] = `
Array [
  Object {
    "fetch": "miss",
    "fetchAborted": true,
    "fetchDispatched": true,
    "fetchError": Error: deleted {
      "name": "Error",
    },
    "key": 2,
    "op": "fetch",
  },
  Object {
    "fetch": "miss",
    "fetchAborted": true,
    "fetchDispatched": true,
    "fetchError": Error: replaced {
      "name": "Error",
    },
    "key": 2,
    "op": "fetch",
  },
  Object {
    "fetch": "miss",
    "fetchAborted": true,
    "fetchDispatched": true,
    "fetchError": Error: evicted {
      "name": "Error",
    },
    "key": 2,
    "op": "fetch",
  },
  Object {
    "key": 3,
    "now": 722,
    "op": "set",
    "remainingTTL": 100,
    "set": "add",
    "start": 722,
    "ttl": 100,
    "value": 3,
  },
  Object {
    "key": 4,
    "now": 722,
    "op": "set",
    "remainingTTL": 100,
    "set": "add",
    "start": 722,
    "ttl": 100,
    "value": 4,
  },
  Object {
    "key": 5,
    "now": 722,
    "op": "set",
    "remainingTTL": 100,
    "set": "add",
    "start": 722,
    "ttl": 100,
    "value": 5,
  },
  Object {
    "fetch": "miss",
    "fetchDispatched": true,
    "fetchResolved": true,
    "fetchUpdated": true,
    "key": 6,
    "now": 722,
    "op": "fetch",
    "remainingTTL": 1000,
    "set": "replace",
    "start": 722,
    "ttl": 1000,
    "value": 1,
  },
  Object {
    "fetch": "miss",
    "fetchDispatched": true,
    "fetchResolved": true,
    "fetchUpdated": true,
    "key": 2,
    "now": 722,
    "op": "fetch",
    "remainingTTL": 25,
    "set": "replace",
    "start": 722,
    "ttl": 25,
    "value": 1,
  },
]
`

exports[`test/fetch.ts > TAP > fetch without fetch method > status update 1`] = `
Object {
  "fetch": "get",
  "get": "hit",
  "key": 0,
  "op": "fetch",
}
`

exports[`test/fetch.ts > TAP > fetchMethod throws > status updates 1`] = `
Array [
  Object {
    "key": "a",
    "now": 722,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 722,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "key": "b",
    "now": 722,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 722,
    "ttl": 10,
    "value": 2,
  },
  Object {
    "fetch": "stale",
    "fetchDispatched": true,
    "fetchError": Error: fetch failure,
    "fetchRejected": true,
    "key": "a",
    "op": "fetch",
    "returnedStale": true,
  },
  Object {
    "fetch": "inflight",
    "key": "a",
    "op": "fetch",
    "returnedStale": true,
  },
  Object {
    "fetch": "inflight",
    "key": "a",
    "op": "fetch",
    "returnedStale": true,
  },
  Object {
    "get": "miss",
    "key": "a",
    "op": "get",
  },
  Object {
    "fetch": "stale",
    "fetchDispatched": true,
    "fetchError": Error: fetch failure,
    "fetchRejected": true,
    "key": "b",
    "op": "fetch",
    "returnedStale": true,
  },
  Object {
    "fetch": "inflight",
    "key": "b",
    "op": "fetch",
    "returnedStale": true,
  },
  Object {
    "fetch": "inflight",
    "key": "b",
    "op": "fetch",
    "returnedStale": true,
  },
  Object {
    "get": "miss",
    "key": "b",
    "op": "get",
  },
  Object {
    "fetch": "miss",
    "fetchAborted": true,
    "fetchDispatched": true,
    "fetchError": Error: replaced {
      "name": "Error",
    },
    "key": "a",
    "op": "fetch",
  },
  Object {
    "key": "a",
    "now": 782,
    "op": "set",
    "remainingTTL": 10,
    "set": "replace",
    "start": 782,
    "ttl": 10,
    "value": 99,
  },
  Object {
    "get": "hit",
    "key": "a",
    "now": 782,
    "op": "get",
    "remainingTTL": 10,
    "start": 782,
    "ttl": 10,
    "value": 99,
  },
  Object {
    "fetch": "miss",
    "fetchDispatched": true,
    "key": "b",
    "op": "fetch",
  },
]
`

exports[`test/fetch.ts > TAP > forceRefresh > status updates 1`] = `
Array [
  Object {
    "fetch": "refresh",
    "fetchDispatched": true,
    "fetchResolved": true,
    "fetchUpdated": true,
    "forceRefresh": true,
    "key": 2,
    "now": 942,
    "oldValue": 2,
    "op": "fetch",
    "remainingTTL": 100,
    "set": "replace",
    "start": 942,
    "ttl": 100,
    "value": 2,
  },
  Object {
    "fetch": "inflight",
    "key": 1,
    "op": "fetch",
  },
  Object {
    "context": true,
    "fetch": "refresh",
    "fetchDispatched": true,
    "fetchResolved": true,
    "fetchUpdated": true,
    "forceRefresh": true,
    "key": 1,
    "now": 942,
    "oldValue": 100,
    "op": "fetch",
    "remainingTTL": 100,
    "set": "replace",
    "start": 942,
    "ttl": 100,
    "value": 1,
  },
]
`

exports[`test/fetch.ts > TAP > send a signal > status updates 1`] = `
Array [
  Object {
    "fetch": "miss",
    "fetchAborted": true,
    "fetchDispatched": true,
    "fetchError": Error: custom abort signal {
      "name": "Error",
    },
    "key": 1,
    "op": "fetch",
  },
  Object {
    "get": "miss",
    "key": 1,
    "op": "get",
  },
]
`

exports[`test/fetch.ts > TAP > verify inflight works as expected > status updates 1`] = `
Array [
  Object {
    "fetch": "inflight",
    "key": 1,
    "op": "fetch",
  },
  Object {
    "fetch": "inflight",
    "key": 1,
    "op": "fetch",
  },
  Object {
    "get": "fetching",
    "key": 1,
    "op": "get",
  },
]
`
