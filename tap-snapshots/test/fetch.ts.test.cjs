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
  "cache": LRUCache [
    Array [
      "key",
      0,
    ],
  ],
  "fetch": "miss",
  "fetchDispatched": true,
  "fetchResolved": true,
  "fetchUpdated": true,
  "key": "key",
  "now": 2,
  "op": "fetch",
  "remainingTTL": 5,
  "set": "add",
  "start": 2,
  "ttl": 5,
  "value": 0,
}
`

exports[`test/fetch.ts > TAP > asynchronous fetching > status 2 1`] = `
Object {
  "cache": LRUCache [
    Array [
      "key",
      0,
    ],
  ],
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
  "cache": LRUCache [],
  "fetch": "stale",
  "fetchDispatched": true,
  "key": "key",
  "op": "fetch",
  "returnedStale": true,
}
`

exports[`test/fetch.ts > TAP > asynchronous fetching > status 3.1 1`] = `
Object {
  "cache": LRUCache [],
  "fetch": "inflight",
  "key": "key",
  "op": "fetch",
  "returnedStale": true,
}
`

exports[`test/fetch.ts > TAP > asynchronous fetching > status 4 1`] = `
Object {
  "cache": LRUCache [
    Array [
      "key",
      1,
    ],
  ],
  "fetch": "inflight",
  "key": "key",
  "op": "fetch",
}
`

exports[`test/fetch.ts > TAP > asynchronous fetching > status 5 1`] = `
Object {
  "cache": LRUCache [
    Array [
      "key",
      1,
    ],
  ],
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
    "cache": LRUCache [
      Array [
        2,
        1,
      ],
      Array [
        6,
        1,
      ],
      Array [
        5,
        5,
      ],
    ],
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
    "cache": LRUCache [
      Array [
        2,
        1,
      ],
      Array [
        6,
        1,
      ],
      Array [
        5,
        5,
      ],
    ],
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
    "cache": LRUCache [
      Array [
        2,
        1,
      ],
      Array [
        6,
        1,
      ],
      Array [
        5,
        5,
      ],
    ],
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
    "cache": LRUCache [
      Array [
        2,
        1,
      ],
      Array [
        6,
        1,
      ],
      Array [
        5,
        5,
      ],
    ],
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
    "cache": LRUCache [
      Array [
        2,
        1,
      ],
      Array [
        6,
        1,
      ],
      Array [
        5,
        5,
      ],
    ],
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
    "cache": LRUCache [
      Array [
        2,
        1,
      ],
      Array [
        6,
        1,
      ],
      Array [
        5,
        5,
      ],
    ],
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
    "cache": LRUCache [
      Array [
        2,
        1,
      ],
      Array [
        6,
        1,
      ],
      Array [
        5,
        5,
      ],
    ],
    "fetch": "miss",
    "fetchDispatched": true,
    "fetchResolved": true,
    "fetchUpdated": true,
    "key": 6,
    "now": 722,
    "op": "fetch",
    "remainingTTL": 1000,
    "set": "add",
    "start": 722,
    "ttl": 1000,
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        1,
      ],
      Array [
        6,
        1,
      ],
      Array [
        5,
        5,
      ],
    ],
    "fetch": "miss",
    "fetchDispatched": true,
    "fetchResolved": true,
    "fetchUpdated": true,
    "key": 2,
    "now": 722,
    "op": "fetch",
    "remainingTTL": 25,
    "set": "add",
    "start": 722,
    "ttl": 25,
    "value": 1,
  },
]
`

exports[`test/fetch.ts > TAP > fetch without fetch method > status update 1`] = `
Object {
  "cache": LRUCache [
    Array [
      1,
      1,
    ],
    Array [
      0,
      0,
    ],
  ],
  "fetch": "get",
  "get": "hit",
  "key": 0,
  "op": "fetch",
}
`

exports[`test/fetch.ts > TAP > fetchMethod throws > status updates 1`] = `
Array [
  Object {
    "cache": LRUCache [
      Array [
        "a",
        99,
      ],
    ],
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
    "cache": LRUCache [
      Array [
        "a",
        99,
      ],
    ],
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
    "cache": LRUCache [
      Array [
        "a",
        99,
      ],
    ],
    "fetch": "stale",
    "fetchDispatched": true,
    "fetchError": Error: fetch failure,
    "fetchRejected": true,
    "key": "a",
    "op": "fetch",
    "returnedStale": true,
  },
  Object {
    "cache": LRUCache [
      Array [
        "a",
        99,
      ],
    ],
    "fetch": "inflight",
    "key": "a",
    "op": "fetch",
    "returnedStale": true,
  },
  Object {
    "cache": LRUCache [
      Array [
        "a",
        99,
      ],
    ],
    "fetch": "inflight",
    "key": "a",
    "op": "fetch",
    "returnedStale": true,
  },
  Object {
    "cache": LRUCache [
      Array [
        "a",
        99,
      ],
    ],
    "get": "miss",
    "key": "a",
    "op": "get",
  },
  Object {
    "cache": LRUCache [
      Array [
        "a",
        99,
      ],
    ],
    "fetch": "stale",
    "fetchDispatched": true,
    "fetchError": Error: fetch failure,
    "fetchRejected": true,
    "key": "b",
    "op": "fetch",
    "returnedStale": true,
  },
  Object {
    "cache": LRUCache [
      Array [
        "a",
        99,
      ],
    ],
    "fetch": "inflight",
    "key": "b",
    "op": "fetch",
    "returnedStale": true,
  },
  Object {
    "cache": LRUCache [
      Array [
        "a",
        99,
      ],
    ],
    "fetch": "inflight",
    "key": "b",
    "op": "fetch",
    "returnedStale": true,
  },
  Object {
    "cache": LRUCache [
      Array [
        "a",
        99,
      ],
    ],
    "get": "miss",
    "key": "b",
    "op": "get",
  },
  Object {
    "cache": LRUCache [
      Array [
        "a",
        99,
      ],
    ],
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
    "cache": LRUCache [
      Array [
        "a",
        99,
      ],
    ],
    "key": "a",
    "now": 782,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 782,
    "ttl": 10,
    "value": 99,
  },
  Object {
    "cache": LRUCache [
      Array [
        "a",
        99,
      ],
    ],
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
    "cache": LRUCache [
      Array [
        "a",
        99,
      ],
    ],
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
    "cache": LRUCache [
      Array [
        1,
        1,
      ],
      Array [
        2,
        2,
      ],
    ],
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
    "set": "update",
    "start": 942,
    "ttl": 100,
    "value": 2,
  },
  Object {
    "cache": LRUCache [
      Array [
        1,
        1,
      ],
      Array [
        2,
        2,
      ],
    ],
    "fetch": "inflight",
    "key": 1,
    "op": "fetch",
  },
  Object {
    "cache": LRUCache [
      Array [
        1,
        1,
      ],
      Array [
        2,
        2,
      ],
    ],
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
    "cache": LRUCache [],
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
    "cache": LRUCache [],
    "get": "miss",
    "key": 1,
    "op": "get",
  },
]
`

exports[`test/fetch.ts > TAP > verify inflight works as expected > status updates 1`] = `
Array [
  Object {
    "cache": LRUCache [
      Array [
        1,
        Object {},
      ],
    ],
    "fetch": "inflight",
    "key": 1,
    "op": "fetch",
  },
  Object {
    "cache": LRUCache [
      Array [
        1,
        Object {},
      ],
    ],
    "fetch": "inflight",
    "key": 1,
    "op": "fetch",
  },
  Object {
    "cache": LRUCache [
      Array [
        1,
        Object {},
      ],
    ],
    "get": "fetching",
    "key": 1,
    "op": "get",
  },
]
`
