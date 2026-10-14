/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/tracing.ts > TAP > asynchronous fetching > safe to stringify dump 1`] = `
[["key",{"value":1,"ttl":5,"start":262}]]
`

exports[`test/tracing.ts > TAP > asynchronous fetching > status 1 1`] = `
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
  "now": 252,
  "op": "fetch",
  "remainingTTL": 5,
  "result": 0,
  "set": "add",
  "start": 252,
  "trace": true,
  "ttl": 5,
  "value": 0,
}
`

exports[`test/tracing.ts > TAP > asynchronous fetching > status 2 1`] = `
Object {
  "cache": LRUCache [
    Array [
      "key",
      0,
    ],
  ],
  "fetch": "hit",
  "key": "key",
  "now": 252,
  "op": "fetch",
  "remainingTTL": 5,
  "result": 0,
  "start": 252,
  "trace": true,
  "ttl": 5,
}
`

exports[`test/tracing.ts > TAP > asynchronous fetching > status 3 1`] = `
Object {
  "cache": LRUCache [],
  "fetch": "stale",
  "fetchDispatched": true,
  "key": "key",
  "op": "fetch",
  "result": 0,
  "returnedStale": true,
  "trace": true,
}
`

exports[`test/tracing.ts > TAP > asynchronous fetching > status 3.1 1`] = `
Object {
  "cache": LRUCache [],
  "fetch": "inflight",
  "key": "key",
  "op": "fetch",
  "result": 0,
  "returnedStale": true,
  "trace": true,
}
`

exports[`test/tracing.ts > TAP > asynchronous fetching > status 4 1`] = `
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
  "result": 1,
  "trace": true,
}
`

exports[`test/tracing.ts > TAP > asynchronous fetching > status 5 1`] = `
Object {
  "cache": LRUCache [
    Array [
      "key",
      1,
    ],
  ],
  "fetch": "hit",
  "key": "key",
  "now": 262,
  "op": "fetch",
  "remainingTTL": 5,
  "result": 1,
  "start": 262,
  "trace": true,
  "ttl": 5,
}
`

exports[`test/tracing.ts > TAP > basic operation > must match snapshot 1`] = `
Generator [
  Array [
    4,
    4,
  ],
  Array [
    3,
    3,
  ],
  Array [
    2,
    2,
  ],
  Array [
    1,
    1,
  ],
  Array [
    0,
    0,
  ],
]
`

exports[`test/tracing.ts > TAP > basic operation > must match snapshot 2`] = `
Generator [
  Array [
    9,
    9,
  ],
  Array [
    8,
    8,
  ],
  Array [
    7,
    7,
  ],
  Array [
    6,
    6,
  ],
  Array [
    5,
    5,
  ],
  Array [
    4,
    4,
  ],
  Array [
    3,
    3,
  ],
  Array [
    2,
    2,
  ],
  Array [
    1,
    1,
  ],
  Array [
    0,
    0,
  ],
]
`

exports[`test/tracing.ts > TAP > basic operation > must match snapshot 3`] = `
Generator [
  Array [
    4,
    4,
  ],
  Array [
    3,
    3,
  ],
  Array [
    2,
    2,
  ],
  Array [
    1,
    1,
  ],
  Array [
    0,
    0,
  ],
  Array [
    9,
    9,
  ],
  Array [
    8,
    8,
  ],
  Array [
    7,
    7,
  ],
  Array [
    6,
    6,
  ],
  Array [
    5,
    5,
  ],
]
`

exports[`test/tracing.ts > TAP > basic operation > must match snapshot 4`] = `
Generator [
  Array [
    14,
    14,
  ],
  Array [
    13,
    13,
  ],
  Array [
    12,
    12,
  ],
  Array [
    11,
    11,
  ],
  Array [
    10,
    10,
  ],
  Array [
    9,
    9,
  ],
  Array [
    8,
    8,
  ],
  Array [
    7,
    7,
  ],
  Array [
    6,
    6,
  ],
  Array [
    5,
    5,
  ],
]
`

exports[`test/tracing.ts > TAP > basic operation > must match snapshot 5`] = `
Generator [
  Array [
    19,
    19,
  ],
  Array [
    18,
    18,
  ],
  Array [
    17,
    17,
  ],
  Array [
    16,
    16,
  ],
  Array [
    15,
    15,
  ],
  Array [
    14,
    14,
  ],
  Array [
    13,
    13,
  ],
  Array [
    12,
    12,
  ],
  Array [
    11,
    11,
  ],
  Array [
    10,
    10,
  ],
]
`

exports[`test/tracing.ts > TAP > basic operation > must match snapshot 6`] = `
Generator [
  Array [
    19,
    19,
  ],
  Array [
    18,
    18,
  ],
  Array [
    17,
    17,
  ],
  Array [
    16,
    16,
  ],
  Array [
    15,
    15,
  ],
  Array [
    14,
    14,
  ],
  Array [
    13,
    13,
  ],
  Array [
    12,
    12,
  ],
  Array [
    11,
    11,
  ],
  Array [
    10,
    10,
  ],
]
`

exports[`test/tracing.ts > TAP > basic operation > status tracking 1`] = `
Array [
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 0,
    "op": "set",
    "set": "add",
    "value": 0,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 1,
    "op": "set",
    "set": "add",
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 2,
    "op": "set",
    "set": "add",
    "value": 2,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 3,
    "op": "set",
    "set": "add",
    "value": 3,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 4,
    "op": "set",
    "set": "add",
    "value": 4,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "get": "hit",
    "key": 0,
    "op": "get",
    "value": 0,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "get": "hit",
    "key": 1,
    "op": "get",
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "get": "hit",
    "key": 2,
    "op": "get",
    "value": 2,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "get": "hit",
    "key": 3,
    "op": "get",
    "value": 3,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "get": "hit",
    "key": 4,
    "op": "get",
    "value": 4,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 5,
    "op": "set",
    "set": "add",
    "value": 5,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 6,
    "op": "set",
    "set": "add",
    "value": 6,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 7,
    "op": "set",
    "set": "add",
    "value": 7,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 8,
    "op": "set",
    "set": "add",
    "value": 8,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 9,
    "op": "set",
    "set": "add",
    "value": 9,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 5,
    "op": "set",
    "set": "update",
    "value": 5,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 6,
    "op": "set",
    "set": "update",
    "value": 6,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 7,
    "op": "set",
    "set": "update",
    "value": 7,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 8,
    "op": "set",
    "set": "update",
    "value": 8,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 9,
    "op": "set",
    "set": "update",
    "value": 9,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "get": "hit",
    "key": 0,
    "op": "get",
    "value": 0,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "get": "hit",
    "key": 1,
    "op": "get",
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "get": "hit",
    "key": 2,
    "op": "get",
    "value": 2,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "get": "hit",
    "key": 3,
    "op": "get",
    "value": 3,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "get": "hit",
    "key": 4,
    "op": "get",
    "value": 4,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "get": "hit",
    "key": 5,
    "op": "get",
    "value": 5,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "get": "hit",
    "key": 6,
    "op": "get",
    "value": 6,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "get": "hit",
    "key": 7,
    "op": "get",
    "value": 7,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "get": "hit",
    "key": 8,
    "op": "get",
    "value": 8,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "get": "hit",
    "key": 9,
    "op": "get",
    "value": 9,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 10,
    "op": "set",
    "set": "add",
    "value": 10,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 11,
    "op": "set",
    "set": "add",
    "value": 11,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 12,
    "op": "set",
    "set": "add",
    "value": 12,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 13,
    "op": "set",
    "set": "add",
    "value": 13,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 14,
    "op": "set",
    "set": "add",
    "value": 14,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 15,
    "op": "set",
    "set": "add",
    "value": 15,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 16,
    "op": "set",
    "set": "add",
    "value": 16,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 17,
    "op": "set",
    "set": "add",
    "value": 17,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 18,
    "op": "set",
    "set": "add",
    "value": 18,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 19,
    "op": "set",
    "set": "add",
    "value": 19,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "get": "miss",
    "key": 0,
    "op": "get",
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "get": "miss",
    "key": 1,
    "op": "get",
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "get": "miss",
    "key": 2,
    "op": "get",
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "get": "miss",
    "key": 3,
    "op": "get",
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "get": "miss",
    "key": 4,
    "op": "get",
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "get": "miss",
    "key": 5,
    "op": "get",
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "get": "miss",
    "key": 6,
    "op": "get",
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "get": "miss",
    "key": 7,
    "op": "get",
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "get": "miss",
    "key": 8,
    "op": "get",
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "get": "miss",
    "key": 9,
    "op": "get",
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 10,
    "op": "set",
    "set": "add",
    "value": 10,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 0,
    "op": "set",
    "set": "add",
    "value": 0,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 1,
    "op": "set",
    "set": "add",
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 2,
    "op": "set",
    "set": "add",
    "value": 2,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 3,
    "op": "set",
    "set": "add",
    "value": 3,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 4,
    "op": "set",
    "set": "add",
    "value": 4,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 5,
    "op": "set",
    "set": "add",
    "value": 5,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 6,
    "op": "set",
    "set": "add",
    "value": 6,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 7,
    "op": "set",
    "set": "add",
    "value": 7,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 8,
    "op": "set",
    "set": "add",
    "value": 8,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 9,
    "op": "set",
    "set": "add",
    "value": 9,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "has": "hit",
    "key": 0,
    "op": "has",
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": true,
    "op": "set",
    "set": "add",
    "value": "true",
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "has": "hit",
    "key": true,
    "op": "has",
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "get": "hit",
    "key": true,
    "op": "get",
    "value": "true",
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "has": "miss",
    "key": true,
    "op": "has",
  },
]
`

exports[`test/tracing.ts > TAP > fetch options, signal > status updates 1`] = `
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
    "error": Error: deleted {
      "name": "Error",
    },
    "fetch": "miss",
    "fetchAborted": true,
    "fetchDispatched": true,
    "fetchError": Error: deleted {
      "name": "Error",
    },
    "key": 2,
    "op": "fetch",
    "trace": true,
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
    "error": Error: replaced {
      "name": "Error",
    },
    "fetch": "miss",
    "fetchAborted": true,
    "fetchDispatched": true,
    "fetchError": Error: replaced {
      "name": "Error",
    },
    "key": 2,
    "op": "fetch",
    "trace": true,
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
    "error": Error: evicted {
      "name": "Error",
    },
    "fetch": "miss",
    "fetchAborted": true,
    "fetchDispatched": true,
    "fetchError": Error: evicted {
      "name": "Error",
    },
    "key": 2,
    "op": "fetch",
    "trace": true,
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
    "now": 972,
    "op": "set",
    "remainingTTL": 100,
    "set": "add",
    "start": 972,
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
    "now": 972,
    "op": "set",
    "remainingTTL": 100,
    "set": "add",
    "start": 972,
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
    "now": 972,
    "op": "set",
    "remainingTTL": 100,
    "set": "add",
    "start": 972,
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
    "now": 972,
    "op": "fetch",
    "remainingTTL": 1000,
    "result": 1,
    "set": "add",
    "start": 972,
    "trace": true,
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
    "now": 972,
    "op": "fetch",
    "remainingTTL": 25,
    "result": 1,
    "set": "add",
    "start": 972,
    "trace": true,
    "ttl": 25,
    "value": 1,
  },
]
`

exports[`test/tracing.ts > TAP > fetch without fetch method > status update 1`] = `
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
  "result": 0,
  "trace": true,
}
`

exports[`test/tracing.ts > TAP > fetchMethod throws > status updates 1`] = `
Array [
  Object {
    "cache": LRUCache [
      Array [
        "a",
        99,
      ],
    ],
    "key": "a",
    "now": 972,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 972,
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
    "now": 972,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 972,
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
    "result": 1,
    "returnedStale": true,
    "trace": true,
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
    "result": 1,
    "returnedStale": true,
    "trace": true,
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
    "result": 1,
    "returnedStale": true,
    "trace": true,
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
    "result": 2,
    "returnedStale": true,
    "trace": true,
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
    "result": 2,
    "returnedStale": true,
    "trace": true,
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
    "result": 2,
    "returnedStale": true,
    "trace": true,
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
    "error": Error: replaced {
      "name": "Error",
    },
    "fetch": "miss",
    "fetchAborted": true,
    "fetchDispatched": true,
    "fetchError": Error: replaced {
      "name": "Error",
    },
    "key": "a",
    "op": "fetch",
    "trace": true,
  },
  Object {
    "cache": LRUCache [
      Array [
        "a",
        99,
      ],
    ],
    "key": "a",
    "now": 1032,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 1032,
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
    "now": 1032,
    "op": "get",
    "remainingTTL": 10,
    "start": 1032,
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
    "trace": true,
  },
]
`

exports[`test/tracing.ts > TAP > forceRefresh > status updates 1`] = `
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
    "now": 1192,
    "oldValue": 2,
    "op": "fetch",
    "remainingTTL": 100,
    "result": 2,
    "set": "update",
    "start": 1192,
    "trace": true,
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
    "result": 1,
    "trace": true,
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
    "now": 1192,
    "oldValue": 100,
    "op": "fetch",
    "remainingTTL": 100,
    "result": 1,
    "set": "replace",
    "start": 1192,
    "trace": true,
    "ttl": 100,
    "value": 1,
  },
]
`

exports[`test/tracing.ts > TAP > large item falls out of cache because maxEntrySize > status updates 1`] = `
Array [
  Object {
    "cache": LRUCache [
      Array [
        3,
        3,
      ],
    ],
    "entrySize": 2,
    "key": 2,
    "op": "set",
    "set": "add",
    "totalCalculatedSize": 2,
    "value": 2,
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        3,
      ],
    ],
    "key": 1,
    "maxEntrySizeExceeded": true,
    "op": "set",
    "set": "miss",
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        3,
      ],
    ],
    "entrySize": 3,
    "key": 3,
    "op": "set",
    "set": "add",
    "totalCalculatedSize": 3,
    "value": 3,
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        3,
      ],
    ],
    "key": 4,
    "maxEntrySizeExceeded": true,
    "op": "set",
    "set": "miss",
    "value": 4,
  },
]
`

exports[`test/tracing.ts > TAP > large item falls out of cache, sizes are kept correct > status updates 1`] = `
Array [
  Object {
    "cache": LRUCache [
      Array [
        3,
        3,
      ],
    ],
    "entrySize": 2,
    "key": 2,
    "op": "set",
    "set": "add",
    "totalCalculatedSize": 2,
    "value": 2,
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        3,
      ],
    ],
    "key": 1,
    "maxEntrySizeExceeded": true,
    "op": "set",
    "set": "miss",
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        3,
      ],
    ],
    "entrySize": 3,
    "key": 3,
    "op": "set",
    "set": "add",
    "totalCalculatedSize": 3,
    "value": 3,
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        3,
      ],
    ],
    "key": 4,
    "maxEntrySizeExceeded": true,
    "op": "set",
    "set": "miss",
    "value": 4,
  },
]
`

exports[`test/tracing.ts > TAP > re-use key before initial fill completed > must match snapshot 1`] = `
Array [
  Object {
    "cache": LRUCache [
      Array [
        3,
        3,
      ],
      Array [
        1,
        2,
      ],
      Array [
        2,
        2,
      ],
      Array [
        0,
        0,
      ],
    ],
    "key": 0,
    "op": "set",
    "set": "add",
    "value": 0,
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        3,
      ],
      Array [
        1,
        2,
      ],
      Array [
        2,
        2,
      ],
      Array [
        0,
        0,
      ],
    ],
    "key": 1,
    "op": "set",
    "set": "add",
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        3,
      ],
      Array [
        1,
        2,
      ],
      Array [
        2,
        2,
      ],
      Array [
        0,
        0,
      ],
    ],
    "key": 2,
    "op": "set",
    "set": "add",
    "value": 2,
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        3,
      ],
      Array [
        1,
        2,
      ],
      Array [
        2,
        2,
      ],
      Array [
        0,
        0,
      ],
    ],
    "key": 1,
    "oldValue": 1,
    "op": "set",
    "set": "replace",
    "value": 2,
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        3,
      ],
      Array [
        1,
        2,
      ],
      Array [
        2,
        2,
      ],
      Array [
        0,
        0,
      ],
    ],
    "key": 3,
    "op": "set",
    "set": "add",
    "value": 3,
  },
]
`

exports[`test/tracing.ts > TAP > send a signal > status updates 1`] = `
Array [
  Object {
    "cache": LRUCache [],
    "error": Error: custom abort signal {
      "name": "Error",
    },
    "fetch": "miss",
    "fetchAborted": true,
    "fetchDispatched": true,
    "fetchError": Error: custom abort signal {
      "name": "Error",
    },
    "key": 1,
    "op": "fetch",
    "trace": true,
  },
  Object {
    "cache": LRUCache [],
    "get": "miss",
    "key": 1,
    "op": "get",
  },
]
`

exports[`test/tracing.ts > TAP > store strings, size = length > dump 1`] = `
Array [
  Array [
    "repeated",
    Object {
      "size": 10,
      "value": "jjjjjjjjjj",
    },
  ],
]
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > a fetch method that does not return a promise metrics 1`] = `
Array []
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > a fetch method that does not return a promise traces 1`] = `
Map {
  Object {
    "cache": LRUCache [
      Array [
        123,
        123,
      ],
    ],
    "fetch": "miss",
    "fetchDispatched": true,
    "fetchResolved": true,
    "fetchUpdated": true,
    "key": 123,
    "now": 2643,
    "op": "fetch",
    "remainingTTL": 10,
    "result": 123,
    "set": "add",
    "start": 2643,
    "trace": true,
    "ttl": 10,
    "value": 123,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > abort, but then keep on fetching anyway metrics 1`] = `
Array [
  Object {
    "cache": LRUCache [
      Array [
        3,
        33,
      ],
      Array [
        1,
        1,
      ],
    ],
    "get": "hit",
    "key": 1,
    "op": "get",
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        33,
      ],
      Array [
        1,
        1,
      ],
    ],
    "get": "fetching",
    "key": 2,
    "op": "get",
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        33,
      ],
      Array [
        1,
        1,
      ],
    ],
    "delete": "delete",
    "key": 2,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        33,
      ],
      Array [
        1,
        1,
      ],
    ],
    "get": "miss",
    "key": 2,
    "op": "get",
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        33,
      ],
      Array [
        1,
        1,
      ],
    ],
    "get": "miss",
    "key": 2,
    "op": "get",
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        33,
      ],
      Array [
        1,
        1,
      ],
    ],
    "get": "fetching",
    "key": 3,
    "op": "get",
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        33,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 3,
    "op": "set",
    "set": "add",
    "value": 33,
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        33,
      ],
      Array [
        1,
        1,
      ],
    ],
    "get": "hit",
    "key": 3,
    "op": "get",
    "value": 33,
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        33,
      ],
      Array [
        1,
        1,
      ],
    ],
    "get": "hit",
    "key": 3,
    "op": "get",
    "value": 33,
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        33,
      ],
      Array [
        1,
        1,
      ],
    ],
    "delete": "fetch",
    "key": 4,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        33,
      ],
      Array [
        1,
        1,
      ],
    ],
    "delete": "fetch",
    "key": 4,
    "op": "delete",
  },
]
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > abort, but then keep on fetching anyway traces 1`] = `
Map {
  Object {
    "cache": LRUCache [
      Array [
        3,
        33,
      ],
      Array [
        1,
        1,
      ],
    ],
    "context": true,
    "fetch": "miss",
    "fetchAborted": true,
    "fetchAbortIgnored": true,
    "fetchDispatched": true,
    "fetchError": Error: ignored abort signal,
    "fetchUpdated": true,
    "key": 1,
    "op": "fetch",
    "result": 1,
    "set": "add",
    "trace": true,
    "value": 1,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
  Object {
    "cache": LRUCache [
      Array [
        3,
        33,
      ],
      Array [
        1,
        1,
      ],
    ],
    "context": true,
    "fetch": "miss",
    "fetchAborted": true,
    "fetchAbortIgnored": true,
    "fetchDispatched": true,
    "fetchError": Error: deleted,
    "key": 2,
    "op": "fetch",
    "result": 2,
    "trace": true,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
  Object {
    "cache": LRUCache [
      Array [
        3,
        33,
      ],
      Array [
        1,
        1,
      ],
    ],
    "context": true,
    "fetch": "miss",
    "fetchAborted": true,
    "fetchAbortIgnored": true,
    "fetchDispatched": true,
    "fetchError": Error: replaced,
    "key": 3,
    "op": "fetch",
    "result": 3,
    "trace": true,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
  Object {
    "cache": LRUCache [
      Array [
        3,
        33,
      ],
      Array [
        1,
        1,
      ],
    ],
    "context": true,
    "fetch": "miss",
    "fetchDispatched": true,
    "fetchResolved": true,
    "key": 4,
    "op": "fetch",
    "result": undefined,
    "trace": true,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
  Object {
    "cache": LRUCache [
      Array [
        3,
        33,
      ],
      Array [
        1,
        1,
      ],
    ],
    "context": true,
    "error": Error: fetch() returned undefined {
      "name": "Error",
    },
    "fetch": "miss",
    "fetchDispatched": true,
    "fetchResolved": true,
    "key": 4,
    "op": "fetch",
    "trace": true,
  } => Array [
    "start",
    "end",
    "error",
    "asyncStart",
    "asyncEnd",
  ],
}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > aborted fetch rejects later, no stale value kept metrics 1`] = `
Array [
  Object {
    "cache": LRUCache [],
    "key": 1,
    "now": 3054,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 3054,
    "ttl": 10,
    "value": 10,
  },
  Object {
    "cache": LRUCache [],
    "delete": "fetch",
    "key": 1,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [],
    "has": "miss",
    "key": 1,
    "op": "has",
  },
]
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > aborted fetch rejects later, no stale value kept traces 1`] = `
Map {
  Object {
    "cache": LRUCache [],
    "fetch": "stale",
    "fetchAborted": true,
    "fetchDispatched": true,
    "fetchError": Error: gimme the stale value,
    "key": 1,
    "op": "fetch",
    "result": 10,
    "returnedStale": true,
    "trace": true,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > allowStaleOnFetchAbort and ignoreFetchAbort metrics 1`] = `
Array [
  Object {
    "cache": LRUCache [
      Array [
        1,
        1,
      ],
    ],
    "get": "fetching",
    "key": 1,
    "now": 2443,
    "op": "get",
    "remainingTTL": 10,
    "start": 2443,
    "ttl": 10,
  },
  Object {
    "cache": LRUCache [
      Array [
        1,
        1,
      ],
    ],
    "get": "hit",
    "key": 1,
    "now": 2643,
    "op": "get",
    "remainingTTL": 10,
    "start": 2643,
    "ttl": 10,
    "value": 1,
  },
]
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > allowStaleOnFetchAbort and ignoreFetchAbort traces 1`] = `
Map {
  Object {
    "cache": LRUCache [
      Array [
        1,
        1,
      ],
    ],
    "fetch": "miss",
    "fetchAborted": true,
    "fetchDispatched": true,
    "fetchError": Error: gimme the stale value,
    "fetchResolved": true,
    "fetchUpdated": true,
    "key": 1,
    "now": 2643,
    "op": "fetch",
    "remainingTTL": 10,
    "result": undefined,
    "set": "add",
    "start": 2643,
    "trace": true,
    "ttl": 10,
    "value": 1,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > allowStaleOnFetchAbort metrics 1`] = `
Array [
  Object {
    "cache": LRUCache [
      Array [
        1,
        100,
      ],
    ],
    "key": 1,
    "now": 1703,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 1703,
    "ttl": 10,
    "value": 10,
  },
  Object {
    "cache": LRUCache [
      Array [
        1,
        100,
      ],
    ],
    "get": "stale",
    "key": 1,
    "now": 1803,
    "op": "get",
    "remainingTTL": -90,
    "returnedStale": true,
    "start": 1703,
    "ttl": 10,
    "value": 10,
  },
  Object {
    "cache": LRUCache [
      Array [
        1,
        100,
      ],
    ],
    "key": 1,
    "now": 1803,
    "oldValue": 10,
    "op": "set",
    "remainingTTL": 10,
    "set": "replace",
    "start": 1803,
    "ttl": 10,
    "value": 100,
  },
  Object {
    "cache": LRUCache [
      Array [
        1,
        100,
      ],
    ],
    "get": "hit",
    "key": 1,
    "now": 1803,
    "op": "get",
    "remainingTTL": 10,
    "start": 1803,
    "ttl": 10,
    "value": 100,
  },
]
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > allowStaleOnFetchAbort traces 1`] = `
Map {
  Object {
    "cache": LRUCache [
      Array [
        1,
        100,
      ],
    ],
    "fetch": "stale",
    "fetchAborted": true,
    "fetchDispatched": true,
    "fetchError": Error: gimme the stale value,
    "fetchResolved": true,
    "key": 1,
    "op": "fetch",
    "result": 10,
    "returnedStale": true,
    "trace": true,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
  Object {
    "cache": LRUCache [
      Array [
        1,
        100,
      ],
    ],
    "fetch": "stale",
    "fetchAborted": true,
    "fetchDispatched": true,
    "fetchError": Error: replaced,
    "fetchResolved": true,
    "key": 1,
    "op": "fetch",
    "result": 10,
    "returnedStale": true,
    "trace": true,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > allowStaleOnFetchRejection metrics 1`] = `
Array [
  Object {
    "cache": LRUCache [],
    "delete": "fetch",
    "key": 1,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [],
    "get": "miss",
    "key": 1,
    "op": "get",
  },
]
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > allowStaleOnFetchRejection traces 1`] = `
Map {
  Object {
    "cache": LRUCache [],
    "fetch": "miss",
    "fetchDispatched": true,
    "fetchResolved": true,
    "fetchUpdated": true,
    "key": 1,
    "now": 1192,
    "op": "fetch",
    "remainingTTL": 10,
    "result": 1,
    "set": "add",
    "start": 1192,
    "trace": true,
    "ttl": 10,
    "value": 1,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
  Object {
    "cache": LRUCache [],
    "fetch": "stale",
    "fetchDispatched": true,
    "fetchError": Error: fetch rejection,
    "fetchRejected": true,
    "key": 1,
    "op": "fetch",
    "result": 1,
    "returnedStale": true,
    "trace": true,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
  Object {
    "cache": LRUCache [],
    "fetch": "stale",
    "fetchDispatched": true,
    "fetchError": Error: fetch rejection,
    "fetchRejected": true,
    "key": 1,
    "op": "fetch",
    "result": 1,
    "returnedStale": true,
    "trace": true,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
  Object {
    "cache": LRUCache [],
    "error": Error: fetch rejection {
      "name": "Error",
    },
    "fetch": "stale",
    "fetchDispatched": true,
    "fetchError": Error: fetch rejection {
      "name": "Error",
    },
    "fetchRejected": true,
    "key": 1,
    "op": "fetch",
    "trace": true,
  } => Array [
    "start",
    "end",
    "error",
    "asyncStart",
    "asyncEnd",
  ],
}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > asynchronous fetching metrics 1`] = `
Array [
  Object {
    "cache": LRUCache [
      Array [
        "key6",
        1,
      ],
    ],
    "get": "stale-fetching",
    "key": "key",
    "now": 372,
    "op": "get",
    "remainingTTL": -95,
    "returnedStale": true,
    "start": 272,
    "ttl": 5,
    "value": 2,
  },
  Object {
    "cache": LRUCache [
      Array [
        "key6",
        1,
      ],
    ],
    "get": "fetching",
    "key": "key2",
    "now": 372,
    "op": "get",
    "remainingTTL": 5,
    "start": 372,
    "ttl": 5,
  },
  Object {
    "cache": LRUCache [
      Array [
        "key6",
        1,
      ],
    ],
    "get": "hit",
    "key": "key2",
    "now": 372,
    "op": "get",
    "remainingTTL": 5,
    "start": 372,
    "ttl": 5,
    "value": 0,
  },
  Object {
    "cache": LRUCache [
      Array [
        "key6",
        1,
      ],
    ],
    "delete": "delete",
    "key": "key3",
    "op": "delete",
  },
  Object {
    "cache": LRUCache [
      Array [
        "key6",
        1,
      ],
    ],
    "has": "miss",
    "key": "key3",
    "op": "has",
  },
  Object {
    "cache": LRUCache [
      Array [
        "key6",
        1,
      ],
    ],
    "key": "key5",
    "now": 472,
    "op": "set",
    "remainingTTL": 5,
    "set": "add",
    "start": 472,
    "ttl": 5,
    "value": 0,
  },
  Object {
    "cache": LRUCache [
      Array [
        "key6",
        1,
      ],
    ],
    "get": "stale-fetching",
    "key": "key4",
    "now": 672,
    "op": "get",
    "remainingTTL": -195,
    "start": 472,
    "ttl": 5,
  },
  Object {
    "cache": LRUCache [
      Array [
        "key6",
        1,
      ],
    ],
    "get": "stale-fetching",
    "key": "key6",
    "now": 772,
    "op": "get",
    "remainingTTL": -95,
    "start": 672,
    "ttl": 5,
  },
  Object {
    "cache": LRUCache [
      Array [
        "key6",
        1,
      ],
    ],
    "get": "stale-fetching",
    "key": "key6",
    "now": 872,
    "op": "get",
    "remainingTTL": -95,
    "returnedStale": true,
    "start": 772,
    "ttl": 5,
    "value": 0,
  },
]
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > asynchronous fetching traces 1`] = `
Map {
  Object {
    "cache": LRUCache [
      Array [
        "key6",
        1,
      ],
    ],
    "fetch": "miss",
    "fetchDispatched": true,
    "fetchResolved": true,
    "fetchUpdated": true,
    "key": "key",
    "now": 252,
    "op": "fetch",
    "remainingTTL": 5,
    "result": 0,
    "set": "add",
    "start": 252,
    "trace": true,
    "ttl": 5,
    "value": 0,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
  Object {
    "cache": LRUCache [
      Array [
        "key6",
        1,
      ],
    ],
    "fetch": "hit",
    "key": "key",
    "now": 252,
    "op": "fetch",
    "remainingTTL": 5,
    "result": 0,
    "start": 252,
    "trace": true,
    "ttl": 5,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
  Object {
    "cache": LRUCache [
      Array [
        "key6",
        1,
      ],
    ],
    "fetch": "stale",
    "fetchDispatched": true,
    "fetchResolved": true,
    "fetchUpdated": true,
    "key": "key",
    "now": 262,
    "oldValue": 0,
    "op": "fetch",
    "remainingTTL": 5,
    "result": 0,
    "returnedStale": true,
    "set": "replace",
    "start": 262,
    "trace": true,
    "ttl": 5,
    "value": 1,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
  Object {
    "cache": LRUCache [
      Array [
        "key6",
        1,
      ],
    ],
    "fetch": "inflight",
    "key": "key",
    "op": "fetch",
    "result": 0,
    "returnedStale": true,
    "trace": true,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
  Object {
    "cache": LRUCache [
      Array [
        "key6",
        1,
      ],
    ],
    "fetch": "inflight",
    "key": "key",
    "op": "fetch",
    "result": 1,
    "trace": true,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
  Object {
    "cache": LRUCache [
      Array [
        "key6",
        1,
      ],
    ],
    "fetch": "hit",
    "key": "key",
    "now": 262,
    "op": "fetch",
    "remainingTTL": 5,
    "result": 1,
    "start": 262,
    "trace": true,
    "ttl": 5,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
  Object {
    "cache": LRUCache [
      Array [
        "key6",
        1,
      ],
    ],
    "fetch": "stale",
    "fetchDispatched": true,
    "fetchResolved": true,
    "fetchUpdated": true,
    "key": "key",
    "now": 272,
    "oldValue": 1,
    "op": "fetch",
    "remainingTTL": 5,
    "result": 1,
    "returnedStale": true,
    "set": "replace",
    "start": 272,
    "trace": true,
    "ttl": 5,
    "value": 2,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
  Object {
    "cache": LRUCache [
      Array [
        "key6",
        1,
      ],
    ],
    "fetch": "hit",
    "key": "key",
    "now": 272,
    "op": "fetch",
    "remainingTTL": 5,
    "result": 2,
    "start": 272,
    "trace": true,
    "ttl": 5,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
  Object {
    "cache": LRUCache [
      Array [
        "key6",
        1,
      ],
    ],
    "fetch": "stale",
    "fetchDispatched": true,
    "fetchResolved": true,
    "fetchUpdated": true,
    "key": "key",
    "now": 372,
    "oldValue": 2,
    "op": "fetch",
    "remainingTTL": 5,
    "result": 2,
    "returnedStale": true,
    "set": "replace",
    "start": 372,
    "trace": true,
    "ttl": 5,
    "value": 3,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
  Object {
    "cache": LRUCache [
      Array [
        "key6",
        1,
      ],
    ],
    "fetch": "miss",
    "fetchDispatched": true,
    "fetchResolved": true,
    "fetchUpdated": true,
    "key": "key2",
    "now": 372,
    "op": "fetch",
    "remainingTTL": 5,
    "result": 0,
    "set": "add",
    "start": 372,
    "trace": true,
    "ttl": 5,
    "value": 0,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
  Object {
    "cache": LRUCache [
      Array [
        "key6",
        1,
      ],
    ],
    "error": Error: deleted {
      "name": "Error",
    },
    "fetch": "miss",
    "fetchAborted": true,
    "fetchDispatched": true,
    "fetchError": Error: deleted {
      "name": "Error",
    },
    "key": "key3",
    "op": "fetch",
    "trace": true,
  } => Array [
    "start",
    "end",
    "error",
    "asyncStart",
    "asyncEnd",
  ],
  Object {
    "cache": LRUCache [
      Array [
        "key6",
        1,
      ],
    ],
    "fetch": "miss",
    "fetchDispatched": true,
    "fetchResolved": true,
    "fetchUpdated": true,
    "key": "key4",
    "now": 472,
    "op": "fetch",
    "remainingTTL": 5,
    "result": 0,
    "set": "add",
    "start": 472,
    "trace": true,
    "ttl": 5,
    "value": 0,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
  Object {
    "cache": LRUCache [
      Array [
        "key6",
        1,
      ],
    ],
    "fetch": "inflight",
    "key": "key4",
    "op": "fetch",
    "result": 0,
    "trace": true,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
  Object {
    "cache": LRUCache [
      Array [
        "key6",
        1,
      ],
    ],
    "fetch": "stale",
    "fetchDispatched": true,
    "fetchResolved": true,
    "fetchUpdated": true,
    "key": "key5",
    "now": 572,
    "oldValue": 0,
    "op": "fetch",
    "remainingTTL": 5,
    "result": 1,
    "set": "replace",
    "start": 572,
    "trace": true,
    "ttl": 5,
    "value": 1,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
  Object {
    "cache": LRUCache [
      Array [
        "key6",
        1,
      ],
    ],
    "fetch": "stale",
    "fetchDispatched": true,
    "fetchResolved": true,
    "fetchUpdated": true,
    "key": "key4",
    "now": 672,
    "oldValue": 0,
    "op": "fetch",
    "remainingTTL": 5,
    "result": 1,
    "set": "replace",
    "start": 672,
    "trace": true,
    "ttl": 5,
    "value": 1,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
  Object {
    "cache": LRUCache [
      Array [
        "key6",
        1,
      ],
    ],
    "fetch": "miss",
    "fetchDispatched": true,
    "fetchResolved": true,
    "fetchUpdated": true,
    "key": "key6",
    "now": 772,
    "op": "fetch",
    "remainingTTL": 5,
    "result": 0,
    "set": "add",
    "start": 772,
    "trace": true,
    "ttl": 5,
    "value": 0,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
  Object {
    "cache": LRUCache [
      Array [
        "key6",
        1,
      ],
    ],
    "fetch": "stale",
    "fetchDispatched": true,
    "fetchResolved": true,
    "fetchUpdated": true,
    "key": "key6",
    "now": 972,
    "oldValue": 0,
    "op": "fetch",
    "remainingTTL": 5,
    "result": 1,
    "set": "replace",
    "start": 972,
    "trace": true,
    "ttl": 5,
    "value": 1,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > background update on timeout, return stale metrics 1`] = `
Array [
  Object {
    "cache": LRUCache [],
    "key": 1,
    "now": 1803,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 1803,
    "ttl": 10,
    "value": 10,
  },
  Object {
    "cache": LRUCache [],
    "get": "stale-fetching",
    "key": 1,
    "now": 1903,
    "op": "get",
    "remainingTTL": -90,
    "returnedStale": true,
    "start": 1803,
    "ttl": 10,
    "value": 10,
  },
  Object {
    "cache": LRUCache [],
    "key": 1,
    "now": 2103,
    "oldValue": 1,
    "op": "set",
    "remainingTTL": 10,
    "set": "replace",
    "start": 2103,
    "ttl": 10,
    "value": 99,
  },
  Object {
    "cache": LRUCache [],
    "get": "stale-fetching",
    "key": 1,
    "now": 2203,
    "op": "get",
    "remainingTTL": -90,
    "returnedStale": true,
    "start": 2103,
    "ttl": 10,
    "value": 99,
  },
]
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > background update on timeout, return stale traces 1`] = `
Map {
  Object {
    "cache": LRUCache [],
    "fetch": "stale",
    "fetchAborted": true,
    "fetchDispatched": true,
    "fetchError": Error: gimme the stale value,
    "fetchResolved": true,
    "fetchUpdated": true,
    "key": 1,
    "now": 2103,
    "oldValue": 10,
    "op": "fetch",
    "remainingTTL": 10,
    "result": 10,
    "returnedStale": true,
    "set": "replace",
    "start": 2103,
    "trace": true,
    "ttl": 10,
    "value": 1,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
  Object {
    "cache": LRUCache [],
    "fetch": "stale",
    "fetchAborted": true,
    "fetchDispatched": true,
    "fetchError": Error: gimme stale 99,
    "fetchResolved": true,
    "key": 1,
    "op": "fetch",
    "result": 99,
    "returnedStale": true,
    "trace": true,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > bad max values metrics 1`] = `
Array []
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > bad max values traces 1`] = `
Map {}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > bad size calculation fn throws on set() metrics 1`] = `
Array []
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > bad size calculation fn throws on set() traces 1`] = `
Map {}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > bad sizeCalculation metrics 1`] = `
Array []
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > bad sizeCalculation traces 1`] = `
Map {}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > basic operation metrics 1`] = `
Array [
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 0,
    "op": "set",
    "set": "add",
    "value": 0,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 1,
    "op": "set",
    "set": "add",
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 2,
    "op": "set",
    "set": "add",
    "value": 2,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 3,
    "op": "set",
    "set": "add",
    "value": 3,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 4,
    "op": "set",
    "set": "add",
    "value": 4,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "get": "hit",
    "key": 0,
    "op": "get",
    "value": 0,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "get": "hit",
    "key": 1,
    "op": "get",
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "get": "hit",
    "key": 2,
    "op": "get",
    "value": 2,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "get": "hit",
    "key": 3,
    "op": "get",
    "value": 3,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "get": "hit",
    "key": 4,
    "op": "get",
    "value": 4,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 5,
    "op": "set",
    "set": "add",
    "value": 5,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 6,
    "op": "set",
    "set": "add",
    "value": 6,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 7,
    "op": "set",
    "set": "add",
    "value": 7,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 8,
    "op": "set",
    "set": "add",
    "value": 8,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 9,
    "op": "set",
    "set": "add",
    "value": 9,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 5,
    "op": "set",
    "set": "update",
    "value": 5,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 6,
    "op": "set",
    "set": "update",
    "value": 6,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 7,
    "op": "set",
    "set": "update",
    "value": 7,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 8,
    "op": "set",
    "set": "update",
    "value": 8,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 9,
    "op": "set",
    "set": "update",
    "value": 9,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "get": "hit",
    "key": 0,
    "op": "get",
    "value": 0,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "get": "hit",
    "key": 1,
    "op": "get",
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "get": "hit",
    "key": 2,
    "op": "get",
    "value": 2,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "get": "hit",
    "key": 3,
    "op": "get",
    "value": 3,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "get": "hit",
    "key": 4,
    "op": "get",
    "value": 4,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "get": "hit",
    "key": 5,
    "op": "get",
    "value": 5,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "get": "hit",
    "key": 6,
    "op": "get",
    "value": 6,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "get": "hit",
    "key": 7,
    "op": "get",
    "value": 7,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "get": "hit",
    "key": 8,
    "op": "get",
    "value": 8,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "get": "hit",
    "key": 9,
    "op": "get",
    "value": 9,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 10,
    "op": "set",
    "set": "add",
    "value": 10,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 11,
    "op": "set",
    "set": "add",
    "value": 11,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 12,
    "op": "set",
    "set": "add",
    "value": 12,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 13,
    "op": "set",
    "set": "add",
    "value": 13,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 14,
    "op": "set",
    "set": "add",
    "value": 14,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 15,
    "op": "set",
    "set": "add",
    "value": 15,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 16,
    "op": "set",
    "set": "add",
    "value": 16,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 17,
    "op": "set",
    "set": "add",
    "value": 17,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 18,
    "op": "set",
    "set": "add",
    "value": 18,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 19,
    "op": "set",
    "set": "add",
    "value": 19,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "get": "miss",
    "key": 0,
    "op": "get",
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "get": "miss",
    "key": 1,
    "op": "get",
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "get": "miss",
    "key": 2,
    "op": "get",
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "get": "miss",
    "key": 3,
    "op": "get",
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "get": "miss",
    "key": 4,
    "op": "get",
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "get": "miss",
    "key": 5,
    "op": "get",
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "get": "miss",
    "key": 6,
    "op": "get",
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "get": "miss",
    "key": 7,
    "op": "get",
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "get": "miss",
    "key": 8,
    "op": "get",
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "get": "miss",
    "key": 9,
    "op": "get",
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 0,
    "op": "set",
    "set": "add",
    "value": 0,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 1,
    "op": "set",
    "set": "add",
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 2,
    "op": "set",
    "set": "add",
    "value": 2,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 3,
    "op": "set",
    "set": "add",
    "value": 3,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 4,
    "op": "set",
    "set": "add",
    "value": 4,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 5,
    "op": "set",
    "set": "add",
    "value": 5,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 6,
    "op": "set",
    "set": "add",
    "value": 6,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 7,
    "op": "set",
    "set": "add",
    "value": 7,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 8,
    "op": "set",
    "set": "add",
    "value": 8,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "delete": "delete",
    "key": 19,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "delete": "delete",
    "key": 19,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 10,
    "op": "set",
    "set": "add",
    "value": 10,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 0,
    "op": "set",
    "set": "add",
    "value": 0,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 1,
    "op": "set",
    "set": "add",
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 2,
    "op": "set",
    "set": "add",
    "value": 2,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 3,
    "op": "set",
    "set": "add",
    "value": 3,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 4,
    "op": "set",
    "set": "add",
    "value": 4,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 5,
    "op": "set",
    "set": "add",
    "value": 5,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 6,
    "op": "set",
    "set": "add",
    "value": 6,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 7,
    "op": "set",
    "set": "add",
    "value": 7,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 8,
    "op": "set",
    "set": "add",
    "value": 8,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 9,
    "op": "set",
    "set": "add",
    "value": 9,
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "has": "hit",
    "key": 0,
    "op": "has",
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": true,
    "op": "set",
    "set": "add",
    "value": "true",
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "has": "hit",
    "key": true,
    "op": "has",
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "get": "hit",
    "key": true,
    "op": "get",
    "value": "true",
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "delete": "delete",
    "key": true,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": true,
    "op": "set",
    "set": "deleted",
  },
  Object {
    "cache": LRUCache [
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "has": "miss",
    "key": true,
    "op": "has",
  },
]
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > basic operation traces 1`] = `
Map {}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > delete from middle, reuses that index metrics 1`] = `
Array [
  Object {
    "cache": LRUCache [
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        1,
        1,
      ],
      Array [
        0,
        0,
      ],
    ],
    "key": 0,
    "op": "set",
    "set": "add",
    "value": 0,
  },
  Object {
    "cache": LRUCache [
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        1,
        1,
      ],
      Array [
        0,
        0,
      ],
    ],
    "key": 1,
    "op": "set",
    "set": "add",
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        1,
        1,
      ],
      Array [
        0,
        0,
      ],
    ],
    "key": 2,
    "op": "set",
    "set": "add",
    "value": 2,
  },
  Object {
    "cache": LRUCache [
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        1,
        1,
      ],
      Array [
        0,
        0,
      ],
    ],
    "key": 3,
    "op": "set",
    "set": "add",
    "value": 3,
  },
  Object {
    "cache": LRUCache [
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        1,
        1,
      ],
      Array [
        0,
        0,
      ],
    ],
    "key": 4,
    "op": "set",
    "set": "add",
    "value": 4,
  },
  Object {
    "cache": LRUCache [
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        1,
        1,
      ],
      Array [
        0,
        0,
      ],
    ],
    "delete": "delete",
    "key": 2,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        1,
        1,
      ],
      Array [
        0,
        0,
      ],
    ],
    "key": 5,
    "op": "set",
    "set": "add",
    "value": 5,
  },
]
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > delete from middle, reuses that index traces 1`] = `
Map {}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > delete while empty, or missing key, is no-op metrics 1`] = `
Array [
  Object {
    "cache": LRUCache [],
    "entrySize": 2,
    "key": 1,
    "op": "set",
    "set": "add",
    "totalCalculatedSize": 2,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "delete": "delete",
    "key": 1,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [],
    "entrySize": 2,
    "key": 1,
    "op": "set",
    "set": "add",
    "totalCalculatedSize": 2,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "key": 1,
    "op": "set",
    "set": "update",
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "key": 1,
    "op": "set",
    "set": "update",
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "delete": "delete",
    "key": 99,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [],
    "delete": "delete",
    "key": 1,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [],
    "delete": "delete",
    "key": 1,
    "op": "delete",
  },
]
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > delete while empty, or missing key, is no-op traces 1`] = `
Map {}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > disposal metrics 1`] = `
Array [
  Object {
    "cache": LRUCache [
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        "two",
      ],
      Array [
        1,
        1,
      ],
      Array [
        0,
        0,
      ],
    ],
    "key": 0,
    "op": "set",
    "set": "add",
    "value": 0,
  },
  Object {
    "cache": LRUCache [
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        "two",
      ],
      Array [
        1,
        1,
      ],
      Array [
        0,
        0,
      ],
    ],
    "key": 1,
    "op": "set",
    "set": "add",
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        "two",
      ],
      Array [
        1,
        1,
      ],
      Array [
        0,
        0,
      ],
    ],
    "key": 2,
    "op": "set",
    "set": "add",
    "value": 2,
  },
  Object {
    "cache": LRUCache [
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        "two",
      ],
      Array [
        1,
        1,
      ],
      Array [
        0,
        0,
      ],
    ],
    "key": 3,
    "op": "set",
    "set": "add",
    "value": 3,
  },
  Object {
    "cache": LRUCache [
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        "two",
      ],
      Array [
        1,
        1,
      ],
      Array [
        0,
        0,
      ],
    ],
    "key": 4,
    "op": "set",
    "set": "add",
    "value": 4,
  },
  Object {
    "cache": LRUCache [
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        "two",
      ],
      Array [
        1,
        1,
      ],
      Array [
        0,
        0,
      ],
    ],
    "key": 5,
    "op": "set",
    "set": "add",
    "value": 5,
  },
  Object {
    "cache": LRUCache [
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        "two",
      ],
      Array [
        1,
        1,
      ],
      Array [
        0,
        0,
      ],
    ],
    "key": 6,
    "op": "set",
    "set": "add",
    "value": 6,
  },
  Object {
    "cache": LRUCache [
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        "two",
      ],
      Array [
        1,
        1,
      ],
      Array [
        0,
        0,
      ],
    ],
    "key": 7,
    "op": "set",
    "set": "add",
    "value": 7,
  },
  Object {
    "cache": LRUCache [
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        "two",
      ],
      Array [
        1,
        1,
      ],
      Array [
        0,
        0,
      ],
    ],
    "key": 8,
    "op": "set",
    "set": "add",
    "value": 8,
  },
  Object {
    "cache": LRUCache [
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        "two",
      ],
      Array [
        1,
        1,
      ],
      Array [
        0,
        0,
      ],
    ],
    "key": 9,
    "op": "set",
    "set": "add",
    "value": 9,
  },
  Object {
    "cache": LRUCache [
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        "two",
      ],
      Array [
        1,
        1,
      ],
      Array [
        0,
        0,
      ],
    ],
    "key": "asdf",
    "op": "set",
    "set": "add",
    "value": "foo",
  },
  Object {
    "cache": LRUCache [
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        "two",
      ],
      Array [
        1,
        1,
      ],
      Array [
        0,
        0,
      ],
    ],
    "key": "asdf",
    "oldValue": "foo",
    "op": "set",
    "set": "replace",
    "value": "asdf",
  },
  Object {
    "cache": LRUCache [
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        "two",
      ],
      Array [
        1,
        1,
      ],
      Array [
        0,
        0,
      ],
    ],
    "key": 0,
    "op": "set",
    "set": "add",
    "value": 0,
  },
  Object {
    "cache": LRUCache [
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        "two",
      ],
      Array [
        1,
        1,
      ],
      Array [
        0,
        0,
      ],
    ],
    "key": 1,
    "op": "set",
    "set": "add",
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        "two",
      ],
      Array [
        1,
        1,
      ],
      Array [
        0,
        0,
      ],
    ],
    "key": 2,
    "op": "set",
    "set": "add",
    "value": 2,
  },
  Object {
    "cache": LRUCache [
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        "two",
      ],
      Array [
        1,
        1,
      ],
      Array [
        0,
        0,
      ],
    ],
    "key": 3,
    "op": "set",
    "set": "add",
    "value": 3,
  },
  Object {
    "cache": LRUCache [
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        "two",
      ],
      Array [
        1,
        1,
      ],
      Array [
        0,
        0,
      ],
    ],
    "key": 4,
    "op": "set",
    "set": "add",
    "value": 4,
  },
  Object {
    "cache": LRUCache [
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        "two",
      ],
      Array [
        1,
        1,
      ],
      Array [
        0,
        0,
      ],
    ],
    "key": "asdf",
    "op": "set",
    "set": "add",
    "value": "foo",
  },
  Object {
    "cache": LRUCache [
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        "two",
      ],
      Array [
        1,
        1,
      ],
      Array [
        0,
        0,
      ],
    ],
    "delete": "delete",
    "key": "asdf",
    "op": "delete",
  },
  Object {
    "cache": LRUCache [
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        "two",
      ],
      Array [
        1,
        1,
      ],
      Array [
        0,
        0,
      ],
    ],
    "delete": "delete",
    "key": "asdf",
    "op": "delete",
  },
  Object {
    "cache": LRUCache [
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        "two",
      ],
      Array [
        1,
        1,
      ],
      Array [
        0,
        0,
      ],
    ],
    "key": 3,
    "op": "set",
    "set": "add",
    "value": 3,
  },
  Object {
    "cache": LRUCache [
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        "two",
      ],
      Array [
        1,
        1,
      ],
      Array [
        0,
        0,
      ],
    ],
    "get": "hit",
    "key": 3,
    "op": "get",
    "value": 3,
  },
  Object {
    "cache": LRUCache [
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        "two",
      ],
      Array [
        1,
        1,
      ],
      Array [
        0,
        0,
      ],
    ],
    "delete": "delete",
    "key": 3,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        "two",
      ],
      Array [
        1,
        1,
      ],
      Array [
        0,
        0,
      ],
    ],
    "key": 0,
    "op": "set",
    "set": "add",
    "value": 0,
  },
  Object {
    "cache": LRUCache [
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        "two",
      ],
      Array [
        1,
        1,
      ],
      Array [
        0,
        0,
      ],
    ],
    "key": 1,
    "op": "set",
    "set": "add",
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        "two",
      ],
      Array [
        1,
        1,
      ],
      Array [
        0,
        0,
      ],
    ],
    "key": 2,
    "op": "set",
    "set": "add",
    "value": 2,
  },
  Object {
    "cache": LRUCache [
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        "two",
      ],
      Array [
        1,
        1,
      ],
      Array [
        0,
        0,
      ],
    ],
    "key": 3,
    "op": "set",
    "set": "add",
    "value": 3,
  },
  Object {
    "cache": LRUCache [
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        "two",
      ],
      Array [
        1,
        1,
      ],
      Array [
        0,
        0,
      ],
    ],
    "key": 4,
    "op": "set",
    "set": "add",
    "value": 4,
  },
  Object {
    "cache": LRUCache [
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        "two",
      ],
      Array [
        1,
        1,
      ],
      Array [
        0,
        0,
      ],
    ],
    "key": 2,
    "oldValue": 2,
    "op": "set",
    "set": "replace",
    "value": "two",
  },
  Object {
    "cache": LRUCache [
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        "two",
      ],
      Array [
        1,
        1,
      ],
      Array [
        0,
        0,
      ],
    ],
    "get": "hit",
    "key": 0,
    "op": "get",
    "value": 0,
  },
  Object {
    "cache": LRUCache [
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        "two",
      ],
      Array [
        1,
        1,
      ],
      Array [
        0,
        0,
      ],
    ],
    "get": "hit",
    "key": 1,
    "op": "get",
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        "two",
      ],
      Array [
        1,
        1,
      ],
      Array [
        0,
        0,
      ],
    ],
    "get": "hit",
    "key": 2,
    "op": "get",
    "value": "two",
  },
  Object {
    "cache": LRUCache [
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        "two",
      ],
      Array [
        1,
        1,
      ],
      Array [
        0,
        0,
      ],
    ],
    "get": "hit",
    "key": 3,
    "op": "get",
    "value": 3,
  },
  Object {
    "cache": LRUCache [
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        "two",
      ],
      Array [
        1,
        1,
      ],
      Array [
        0,
        0,
      ],
    ],
    "get": "hit",
    "key": 4,
    "op": "get",
    "value": 4,
  },
  Object {
    "cache": LRUCache [
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        "two",
      ],
      Array [
        1,
        1,
      ],
      Array [
        0,
        0,
      ],
    ],
    "key": 0,
    "op": "set",
    "set": "add",
    "value": 0,
  },
  Object {
    "cache": LRUCache [
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        "two",
      ],
      Array [
        1,
        1,
      ],
      Array [
        0,
        0,
      ],
    ],
    "key": 1,
    "op": "set",
    "set": "add",
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        "two",
      ],
      Array [
        1,
        1,
      ],
      Array [
        0,
        0,
      ],
    ],
    "key": 2,
    "op": "set",
    "set": "add",
    "value": 2,
  },
  Object {
    "cache": LRUCache [
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        "two",
      ],
      Array [
        1,
        1,
      ],
      Array [
        0,
        0,
      ],
    ],
    "key": 3,
    "op": "set",
    "set": "add",
    "value": 3,
  },
  Object {
    "cache": LRUCache [
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        "two",
      ],
      Array [
        1,
        1,
      ],
      Array [
        0,
        0,
      ],
    ],
    "key": 4,
    "op": "set",
    "set": "add",
    "value": 4,
  },
  Object {
    "cache": LRUCache [
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        "two",
      ],
      Array [
        1,
        1,
      ],
      Array [
        0,
        0,
      ],
    ],
    "key": 2,
    "oldValue": 2,
    "op": "set",
    "set": "replace",
    "value": "two",
  },
  Object {
    "cache": LRUCache [
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        "two",
      ],
      Array [
        1,
        1,
      ],
      Array [
        0,
        0,
      ],
    ],
    "get": "hit",
    "key": 0,
    "op": "get",
    "value": 0,
  },
  Object {
    "cache": LRUCache [
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        "two",
      ],
      Array [
        1,
        1,
      ],
      Array [
        0,
        0,
      ],
    ],
    "get": "hit",
    "key": 1,
    "op": "get",
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        "two",
      ],
      Array [
        1,
        1,
      ],
      Array [
        0,
        0,
      ],
    ],
    "get": "hit",
    "key": 2,
    "op": "get",
    "value": "two",
  },
  Object {
    "cache": LRUCache [
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        "two",
      ],
      Array [
        1,
        1,
      ],
      Array [
        0,
        0,
      ],
    ],
    "get": "hit",
    "key": 3,
    "op": "get",
    "value": 3,
  },
  Object {
    "cache": LRUCache [
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        "two",
      ],
      Array [
        1,
        1,
      ],
      Array [
        0,
        0,
      ],
    ],
    "get": "hit",
    "key": 4,
    "op": "get",
    "value": 4,
  },
]
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > disposal traces 1`] = `
Map {}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > dispose() stale value if fetch is evicted metrics 1`] = `
Array [
  Object {
    "cache": LRUCache [
      Array [
        4,
        40,
      ],
      Array [
        3,
        30,
      ],
      Array [
        2,
        20,
      ],
    ],
    "key": 1,
    "now": 2643,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 2643,
    "ttl": 10,
    "value": 10,
  },
  Object {
    "cache": LRUCache [
      Array [
        4,
        40,
      ],
      Array [
        3,
        30,
      ],
      Array [
        2,
        20,
      ],
    ],
    "key": 2,
    "now": 2654,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 2654,
    "ttl": 10,
    "value": 20,
  },
  Object {
    "cache": LRUCache [
      Array [
        4,
        40,
      ],
      Array [
        3,
        30,
      ],
      Array [
        2,
        20,
      ],
    ],
    "key": 3,
    "now": 2654,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 2654,
    "ttl": 10,
    "value": 30,
  },
  Object {
    "cache": LRUCache [
      Array [
        4,
        40,
      ],
      Array [
        3,
        30,
      ],
      Array [
        2,
        20,
      ],
    ],
    "key": 4,
    "now": 2654,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 2654,
    "ttl": 10,
    "value": 40,
  },
]
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > dispose() stale value if fetch is evicted traces 1`] = `
Map {
  Object {
    "cache": LRUCache [
      Array [
        4,
        40,
      ],
      Array [
        3,
        30,
      ],
      Array [
        2,
        20,
      ],
    ],
    "error": Error: evicted {
      "name": "Error",
    },
    "fetch": "stale",
    "fetchAborted": true,
    "fetchDispatched": true,
    "fetchError": Error: evicted {
      "name": "Error",
    },
    "key": 1,
    "op": "fetch",
    "trace": true,
  } => Array [
    "start",
    "end",
    "error",
    "asyncStart",
    "asyncEnd",
  ],
}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > disposeAfter metrics 1`] = `
Array [
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 0,
    "op": "set",
    "set": "add",
    "value": 0,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 1,
    "op": "set",
    "set": "add",
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 2,
    "op": "set",
    "set": "add",
    "value": 2,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 3,
    "op": "set",
    "set": "add",
    "value": 3,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 4,
    "op": "set",
    "set": "add",
    "value": 4,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 5,
    "op": "set",
    "set": "add",
    "value": 5,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 6,
    "op": "set",
    "set": "add",
    "value": 6,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 2,
    "op": "set",
    "set": "add",
    "value": 3,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 7,
    "op": "set",
    "set": "add",
    "value": 7,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 8,
    "op": "set",
    "set": "add",
    "value": 8,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 9,
    "op": "set",
    "set": "add",
    "value": 9,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 10,
    "op": "set",
    "set": "add",
    "value": 10,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 11,
    "op": "set",
    "set": "add",
    "value": 11,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 2,
    "op": "set",
    "set": "add",
    "value": 4,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 12,
    "op": "set",
    "set": "add",
    "value": 12,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 13,
    "op": "set",
    "set": "add",
    "value": 13,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 14,
    "op": "set",
    "set": "add",
    "value": 14,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 15,
    "op": "set",
    "set": "add",
    "value": 15,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 16,
    "op": "set",
    "set": "add",
    "value": 16,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 2,
    "op": "set",
    "set": "add",
    "value": 5,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 17,
    "op": "set",
    "set": "add",
    "value": 17,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 18,
    "op": "set",
    "set": "add",
    "value": 18,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 19,
    "op": "set",
    "set": "add",
    "value": 19,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 20,
    "op": "set",
    "set": "add",
    "value": 20,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 21,
    "op": "set",
    "set": "add",
    "value": 21,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 2,
    "op": "set",
    "set": "add",
    "value": 6,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 22,
    "op": "set",
    "set": "add",
    "value": 22,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 23,
    "op": "set",
    "set": "add",
    "value": 23,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 24,
    "op": "set",
    "set": "add",
    "value": 24,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 25,
    "op": "set",
    "set": "add",
    "value": 25,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 26,
    "op": "set",
    "set": "add",
    "value": 26,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 2,
    "op": "set",
    "set": "add",
    "value": 7,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 27,
    "op": "set",
    "set": "add",
    "value": 27,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 28,
    "op": "set",
    "set": "add",
    "value": 28,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 29,
    "op": "set",
    "set": "add",
    "value": 29,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 30,
    "op": "set",
    "set": "add",
    "value": 30,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 31,
    "op": "set",
    "set": "add",
    "value": 31,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 2,
    "op": "set",
    "set": "add",
    "value": 8,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 32,
    "op": "set",
    "set": "add",
    "value": 32,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 33,
    "op": "set",
    "set": "add",
    "value": 33,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 34,
    "op": "set",
    "set": "add",
    "value": 34,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 35,
    "op": "set",
    "set": "add",
    "value": 35,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 36,
    "op": "set",
    "set": "add",
    "value": 36,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 2,
    "op": "set",
    "set": "add",
    "value": 9,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 37,
    "op": "set",
    "set": "add",
    "value": 37,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 38,
    "op": "set",
    "set": "add",
    "value": 38,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 39,
    "op": "set",
    "set": "add",
    "value": 39,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 40,
    "op": "set",
    "set": "add",
    "value": 40,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 41,
    "op": "set",
    "set": "add",
    "value": 41,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 2,
    "op": "set",
    "set": "add",
    "value": 10,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 42,
    "op": "set",
    "set": "add",
    "value": 42,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 43,
    "op": "set",
    "set": "add",
    "value": 43,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 44,
    "op": "set",
    "set": "add",
    "value": 44,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 45,
    "op": "set",
    "set": "add",
    "value": 45,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 46,
    "op": "set",
    "set": "add",
    "value": 46,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 2,
    "op": "set",
    "set": "add",
    "value": 11,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 47,
    "op": "set",
    "set": "add",
    "value": 47,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 48,
    "op": "set",
    "set": "add",
    "value": 48,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 49,
    "op": "set",
    "set": "add",
    "value": 49,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 50,
    "op": "set",
    "set": "add",
    "value": 50,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 51,
    "op": "set",
    "set": "add",
    "value": 51,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 2,
    "op": "set",
    "set": "add",
    "value": 12,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 52,
    "op": "set",
    "set": "add",
    "value": 52,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 53,
    "op": "set",
    "set": "add",
    "value": 53,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 54,
    "op": "set",
    "set": "add",
    "value": 54,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 55,
    "op": "set",
    "set": "add",
    "value": 55,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 56,
    "op": "set",
    "set": "add",
    "value": 56,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 2,
    "op": "set",
    "set": "add",
    "value": 13,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 57,
    "op": "set",
    "set": "add",
    "value": 57,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 58,
    "op": "set",
    "set": "add",
    "value": 58,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 59,
    "op": "set",
    "set": "add",
    "value": 59,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 60,
    "op": "set",
    "set": "add",
    "value": 60,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 61,
    "op": "set",
    "set": "add",
    "value": 61,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 2,
    "op": "set",
    "set": "add",
    "value": 14,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 62,
    "op": "set",
    "set": "add",
    "value": 62,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 63,
    "op": "set",
    "set": "add",
    "value": 63,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 64,
    "op": "set",
    "set": "add",
    "value": 64,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 65,
    "op": "set",
    "set": "add",
    "value": 65,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 66,
    "op": "set",
    "set": "add",
    "value": 66,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 2,
    "op": "set",
    "set": "add",
    "value": 15,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 67,
    "op": "set",
    "set": "add",
    "value": 67,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 68,
    "op": "set",
    "set": "add",
    "value": 68,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 69,
    "op": "set",
    "set": "add",
    "value": 69,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 70,
    "op": "set",
    "set": "add",
    "value": 70,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 71,
    "op": "set",
    "set": "add",
    "value": 71,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 2,
    "op": "set",
    "set": "add",
    "value": 16,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 72,
    "op": "set",
    "set": "add",
    "value": 72,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 73,
    "op": "set",
    "set": "add",
    "value": 73,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 74,
    "op": "set",
    "set": "add",
    "value": 74,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 75,
    "op": "set",
    "set": "add",
    "value": 75,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 76,
    "op": "set",
    "set": "add",
    "value": 76,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 2,
    "op": "set",
    "set": "add",
    "value": 17,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 77,
    "op": "set",
    "set": "add",
    "value": 77,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 78,
    "op": "set",
    "set": "add",
    "value": 78,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 79,
    "op": "set",
    "set": "add",
    "value": 79,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 80,
    "op": "set",
    "set": "add",
    "value": 80,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 81,
    "op": "set",
    "set": "add",
    "value": 81,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 2,
    "op": "set",
    "set": "add",
    "value": 18,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 82,
    "op": "set",
    "set": "add",
    "value": 82,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 83,
    "op": "set",
    "set": "add",
    "value": 83,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 84,
    "op": "set",
    "set": "add",
    "value": 84,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 85,
    "op": "set",
    "set": "add",
    "value": 85,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 86,
    "op": "set",
    "set": "add",
    "value": 86,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 2,
    "op": "set",
    "set": "add",
    "value": 19,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 87,
    "op": "set",
    "set": "add",
    "value": 87,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 88,
    "op": "set",
    "set": "add",
    "value": 88,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 89,
    "op": "set",
    "set": "add",
    "value": 89,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 90,
    "op": "set",
    "set": "add",
    "value": 90,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 91,
    "op": "set",
    "set": "add",
    "value": 91,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 2,
    "op": "set",
    "set": "add",
    "value": 20,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 92,
    "op": "set",
    "set": "add",
    "value": 92,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 93,
    "op": "set",
    "set": "add",
    "value": 93,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 94,
    "op": "set",
    "set": "add",
    "value": 94,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 95,
    "op": "set",
    "set": "add",
    "value": 95,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 96,
    "op": "set",
    "set": "add",
    "value": 96,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 2,
    "op": "set",
    "set": "add",
    "value": 21,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 97,
    "op": "set",
    "set": "add",
    "value": 97,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 98,
    "op": "set",
    "set": "add",
    "value": 98,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 99,
    "op": "set",
    "set": "add",
    "value": 99,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "delete": "delete",
    "key": 2,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 2,
    "op": "set",
    "set": "add",
    "value": 22,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 96,
    "oldValue": 96,
    "op": "set",
    "set": "replace",
    "value": 97,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 97,
    "oldValue": 97,
    "op": "set",
    "set": "replace",
    "value": 98,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 98,
    "oldValue": 98,
    "op": "set",
    "set": "replace",
    "value": 99,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 99,
    "oldValue": 99,
    "op": "set",
    "set": "replace",
    "value": 100,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        23,
      ],
    ],
    "key": 2,
    "op": "set",
    "set": "add",
    "value": 23,
  },
]
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > disposeAfter traces 1`] = `
Map {}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > emits warning metrics 1`] = `
Array []
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > emits warning traces 1`] = `
Map {}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > expiration reflected in dispose reason metrics 1`] = `
Array [
  Object {
    "cache": LRUCache [],
    "key": 1,
    "now": 2,
    "op": "set",
    "remainingTTL": 100,
    "set": "add",
    "start": 2,
    "ttl": 100,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "key": 2,
    "now": 2,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 2,
    "ttl": 10,
    "value": 2,
  },
  Object {
    "cache": LRUCache [],
    "key": 3,
    "now": 2,
    "op": "set",
    "remainingTTL": 100,
    "set": "add",
    "start": 2,
    "ttl": 100,
    "value": 3,
  },
  Object {
    "cache": LRUCache [],
    "key": 4,
    "now": 2,
    "op": "set",
    "remainingTTL": 100,
    "set": "add",
    "start": 2,
    "ttl": 100,
    "value": 4,
  },
  Object {
    "cache": LRUCache [],
    "key": 5,
    "now": 2,
    "op": "set",
    "remainingTTL": 100,
    "set": "add",
    "start": 2,
    "ttl": 100,
    "value": 5,
  },
  Object {
    "cache": LRUCache [],
    "key": 6,
    "now": 2,
    "op": "set",
    "remainingTTL": 100,
    "set": "add",
    "start": 2,
    "ttl": 100,
    "value": 6,
  },
  Object {
    "cache": LRUCache [],
    "delete": "delete",
    "key": 6,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [],
    "delete": "delete",
    "key": 5,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [],
    "delete": "delete",
    "key": 4,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [],
    "delete": "expire",
    "key": 2,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [],
    "get": "stale",
    "key": 2,
    "now": 22,
    "op": "get",
    "remainingTTL": -10,
    "start": 2,
    "ttl": 10,
  },
  Object {
    "cache": LRUCache [],
    "delete": "expire",
    "key": 3,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [],
    "get": "stale",
    "key": 3,
    "now": 222,
    "op": "get",
    "remainingTTL": -120,
    "start": 2,
    "ttl": 100,
  },
]
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > expiration reflected in dispose reason traces 1`] = `
Map {}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > fetch context metrics 1`] = `
Array []
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > fetch context required if set in ctor type metrics 1`] = `
Array []
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > fetch context required if set in ctor type traces 1`] = `
Map {
  Object {
    "cache": LRUCache [],
    "context": Object {
      "a": 1,
    },
    "fetch": "miss",
    "fetchDispatched": true,
    "key": "x",
    "op": "fetch",
    "trace": true,
  } => Array [
    "start",
    "end",
  ],
  Object {
    "cache": LRUCache [],
    "fetch": "miss",
    "fetchDispatched": true,
    "key": "y",
    "op": "fetch",
    "trace": true,
  } => Array [
    "start",
    "end",
  ],
  Object {
    "cache": LRUCache [],
    "context": Object {
      "x": 1,
    },
    "fetch": "miss",
    "fetchDispatched": true,
    "key": "z",
    "op": "fetch",
    "trace": true,
  } => Array [
    "start",
    "end",
  ],
  Object {
    "cache": LRUCache [],
    "context": Object {
      "a": 1,
    },
    "fetch": "miss",
    "fetchDispatched": true,
    "key": "x",
    "op": "fetch",
    "trace": true,
  } => Array [
    "start",
    "end",
  ],
  Object {
    "cache": LRUCache [],
    "fetch": "miss",
    "fetchDispatched": true,
    "key": "y",
    "op": "fetch",
    "trace": true,
  } => Array [
    "start",
    "end",
  ],
  Object {
    "cache": LRUCache [],
    "fetch": "inflight",
    "key": "y",
    "op": "fetch",
    "trace": true,
  } => Array [
    "start",
    "end",
  ],
  Object {
    "cache": LRUCache [],
    "context": Object {
      "x": 1,
    },
    "fetch": "miss",
    "fetchDispatched": true,
    "key": "z",
    "op": "fetch",
    "trace": true,
  } => Array [
    "start",
    "end",
  ],
}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > fetch context traces 1`] = `
Map {
  Object {
    "cache": LRUCache [
      Array [
        "x",
        Array [
          "x",
          "first context",
        ],
      ],
      Array [
        "y",
        Array [
          "y",
          "overridden",
        ],
      ],
    ],
    "context": "overridden",
    "fetch": "miss",
    "fetchDispatched": true,
    "fetchResolved": true,
    "fetchUpdated": true,
    "key": "y",
    "now": 1092,
    "op": "fetch",
    "remainingTTL": 10,
    "result": Array [
      "y",
      "overridden",
    ],
    "set": "add",
    "start": 1092,
    "trace": true,
    "ttl": 10,
    "value": Array [
      "y",
      "overridden",
    ],
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
  Object {
    "cache": LRUCache [
      Array [
        "x",
        Array [
          "x",
          "first context",
        ],
      ],
      Array [
        "y",
        Array [
          "y",
          "overridden",
        ],
      ],
    ],
    "context": "first context",
    "fetch": "miss",
    "fetchDispatched": true,
    "fetchResolved": true,
    "fetchUpdated": true,
    "key": "x",
    "now": 1092,
    "op": "fetch",
    "remainingTTL": 10,
    "result": Array [
      "x",
      "first context",
    ],
    "set": "add",
    "start": 1092,
    "trace": true,
    "ttl": 10,
    "value": Array [
      "x",
      "first context",
    ],
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
  Object {
    "cache": LRUCache [
      Array [
        "x",
        Array [
          "x",
          "first context",
        ],
      ],
      Array [
        "y",
        Array [
          "y",
          "overridden",
        ],
      ],
    ],
    "context": "ignored",
    "fetch": "hit",
    "key": "x",
    "now": 1092,
    "op": "fetch",
    "remainingTTL": 10,
    "result": Array [
      "x",
      "first context",
    ],
    "start": 1092,
    "trace": true,
    "ttl": 10,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > fetch options, signal metrics 1`] = `
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
    "delete": "delete",
    "key": 2,
    "op": "delete",
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
    "key": 2,
    "now": 972,
    "op": "set",
    "remainingTTL": 100,
    "set": "add",
    "start": 972,
    "ttl": 100,
    "value": 2,
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
    "delete": "delete",
    "key": 2,
    "op": "delete",
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
    "now": 972,
    "op": "set",
    "remainingTTL": 100,
    "set": "add",
    "start": 972,
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
    "now": 972,
    "op": "set",
    "remainingTTL": 100,
    "set": "add",
    "start": 972,
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
    "now": 972,
    "op": "set",
    "remainingTTL": 100,
    "set": "add",
    "start": 972,
    "ttl": 100,
    "value": 5,
  },
]
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > fetch options, signal traces 1`] = `
Map {
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
    "error": Error: deleted {
      "name": "Error",
    },
    "fetch": "miss",
    "fetchAborted": true,
    "fetchDispatched": true,
    "fetchError": Error: deleted {
      "name": "Error",
    },
    "key": 2,
    "op": "fetch",
    "trace": true,
  } => Array [
    "start",
    "end",
    "error",
    "asyncStart",
    "asyncEnd",
  ],
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
    "error": Error: replaced {
      "name": "Error",
    },
    "fetch": "miss",
    "fetchAborted": true,
    "fetchDispatched": true,
    "fetchError": Error: replaced {
      "name": "Error",
    },
    "key": 2,
    "op": "fetch",
    "trace": true,
  } => Array [
    "start",
    "end",
    "error",
    "asyncStart",
    "asyncEnd",
  ],
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
    "error": Error: evicted {
      "name": "Error",
    },
    "fetch": "miss",
    "fetchAborted": true,
    "fetchDispatched": true,
    "fetchError": Error: evicted {
      "name": "Error",
    },
    "key": 2,
    "op": "fetch",
    "trace": true,
  } => Array [
    "start",
    "end",
    "error",
    "asyncStart",
    "asyncEnd",
  ],
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
    "now": 972,
    "op": "fetch",
    "remainingTTL": 1000,
    "result": 1,
    "set": "add",
    "start": 972,
    "trace": true,
    "ttl": 1000,
    "value": 1,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
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
    "now": 972,
    "op": "fetch",
    "remainingTTL": 25,
    "result": 1,
    "set": "add",
    "start": 972,
    "trace": true,
    "ttl": 25,
    "value": 1,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > fetch without fetch method metrics 1`] = `
Array [
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
    "key": 0,
    "op": "set",
    "set": "add",
    "value": 0,
  },
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
    "key": 1,
    "op": "set",
    "set": "add",
    "value": 1,
  },
]
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > fetch without fetch method traces 1`] = `
Map {
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
    "result": 0,
    "trace": true,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
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
    "key": 1,
    "op": "fetch",
    "result": 1,
    "trace": true,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > fetchMethod must be a function metrics 1`] = `
Array []
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > fetchMethod must be a function traces 1`] = `
Map {}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > fetchMethod throws metrics 1`] = `
Array [
  Object {
    "cache": LRUCache [
      Array [
        "a",
        99,
      ],
    ],
    "key": "a",
    "now": 972,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 972,
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
    "now": 972,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 972,
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
    "delete": "fetch",
    "key": "a",
    "op": "delete",
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
    "delete": "fetch",
    "key": "b",
    "op": "delete",
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
    "key": "a",
    "now": 1032,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 1032,
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
    "now": 1032,
    "op": "get",
    "remainingTTL": 10,
    "start": 1032,
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
    "delete": "fetch",
    "key": "b",
    "op": "delete",
  },
]
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > fetchMethod throws traces 1`] = `
Map {
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
    "result": 1,
    "returnedStale": true,
    "trace": true,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
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
    "result": 1,
    "returnedStale": true,
    "trace": true,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
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
    "result": 1,
    "returnedStale": true,
    "trace": true,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
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
    "result": 2,
    "returnedStale": true,
    "trace": true,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
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
    "result": 2,
    "returnedStale": true,
    "trace": true,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
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
    "result": 2,
    "returnedStale": true,
    "trace": true,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
  Object {
    "cache": LRUCache [
      Array [
        "a",
        99,
      ],
    ],
    "error": Error: replaced {
      "name": "Error",
    },
    "fetch": "miss",
    "fetchAborted": true,
    "fetchDispatched": true,
    "fetchError": Error: replaced {
      "name": "Error",
    },
    "key": "a",
    "op": "fetch",
    "trace": true,
  } => Array [
    "start",
    "end",
    "error",
    "asyncStart",
    "asyncEnd",
  ],
  Object {
    "cache": LRUCache [
      Array [
        "a",
        99,
      ],
    ],
    "error": Error: fetch failure {
      "name": "Error",
    },
    "fetch": "miss",
    "fetchDispatched": true,
    "fetchError": Error: fetch failure {
      "name": "Error",
    },
    "fetchRejected": true,
    "key": "b",
    "op": "fetch",
    "trace": true,
  } => Array [
    "start",
    "end",
    "error",
    "asyncStart",
    "asyncEnd",
  ],
}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > fetchMethod throws, noDeleteOnFetchRejection option metrics 1`] = `
Array [
  Object {
    "cache": LRUCache [
      Array [
        "a",
        99,
      ],
    ],
    "key": "a",
    "now": 1032,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 1032,
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
    "now": 1032,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 1032,
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
    "delete": "delete",
    "key": "a",
    "op": "delete",
  },
  Object {
    "cache": LRUCache [
      Array [
        "a",
        99,
      ],
    ],
    "delete": "delete",
    "key": "b",
    "op": "delete",
  },
  Object {
    "cache": LRUCache [
      Array [
        "a",
        99,
      ],
    ],
    "key": "a",
    "now": 1092,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 1092,
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
    "now": 1092,
    "op": "get",
    "remainingTTL": 10,
    "start": 1092,
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
    "delete": "fetch",
    "key": "b",
    "op": "delete",
  },
]
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > fetchMethod throws, noDeleteOnFetchRejection option traces 1`] = `
Map {
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
    "result": 1,
    "returnedStale": true,
    "trace": true,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
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
    "result": 1,
    "returnedStale": true,
    "trace": true,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
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
    "result": 1,
    "returnedStale": true,
    "trace": true,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
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
    "result": 2,
    "returnedStale": true,
    "trace": true,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
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
    "result": 2,
    "returnedStale": true,
    "trace": true,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
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
    "result": 2,
    "returnedStale": true,
    "trace": true,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
  Object {
    "cache": LRUCache [
      Array [
        "a",
        99,
      ],
    ],
    "error": Error: replaced {
      "name": "Error",
    },
    "fetch": "miss",
    "fetchAborted": true,
    "fetchDispatched": true,
    "fetchError": Error: replaced {
      "name": "Error",
    },
    "key": "a",
    "op": "fetch",
    "trace": true,
  } => Array [
    "start",
    "end",
    "error",
    "asyncStart",
    "asyncEnd",
  ],
  Object {
    "cache": LRUCache [
      Array [
        "a",
        99,
      ],
    ],
    "error": Error: fetch failure {
      "name": "Error",
    },
    "fetch": "miss",
    "fetchDispatched": true,
    "fetchError": Error: fetch failure {
      "name": "Error",
    },
    "fetchRejected": true,
    "key": "b",
    "op": "fetch",
    "trace": true,
  } => Array [
    "start",
    "end",
    "error",
    "asyncStart",
    "asyncEnd",
  ],
}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > forceRefresh metrics 1`] = `
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
    "key": 1,
    "now": 1092,
    "op": "set",
    "remainingTTL": 100,
    "set": "add",
    "start": 1092,
    "ttl": 100,
    "value": 100,
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
    "key": 2,
    "now": 1092,
    "op": "set",
    "remainingTTL": 100,
    "set": "add",
    "start": 1092,
    "ttl": 100,
    "value": 200,
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
    "key": 1,
    "op": "peek",
    "peek": "hit",
    "value": 100,
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
    "key": 1,
    "now": 1192,
    "oldValue": 1,
    "op": "set",
    "remainingTTL": 100,
    "set": "replace",
    "start": 1192,
    "ttl": 100,
    "value": 100,
  },
]
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > forceRefresh metrics 2`] = `
Array [
  Object {
    "cache": LRUCache [
      Array [
        "10",
        8,
      ],
    ],
    "key": "10",
    "memo": "miss",
    "op": "memo",
    "value": 10,
  },
  Object {
    "cache": LRUCache [
      Array [
        "10",
        8,
      ],
    ],
    "context": 8,
    "key": "10",
    "memo": "hit",
    "op": "memo",
    "value": 10,
  },
  Object {
    "cache": LRUCache [
      Array [
        "10",
        8,
      ],
    ],
    "context": 8,
    "forceRefresh": true,
    "key": "10",
    "memo": "miss",
    "op": "memo",
    "value": 8,
  },
]
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > forceRefresh traces 1`] = `
Map {
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
    "fetch": "hit",
    "key": 1,
    "now": 1092,
    "op": "fetch",
    "remainingTTL": 100,
    "result": 100,
    "start": 1092,
    "trace": true,
    "ttl": 100,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
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
    "now": 1092,
    "oldValue": 200,
    "op": "fetch",
    "remainingTTL": 100,
    "result": 2,
    "set": "replace",
    "start": 1092,
    "trace": true,
    "ttl": 100,
    "value": 2,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
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
    "key": 1,
    "now": 1192,
    "oldValue": 100,
    "op": "fetch",
    "remainingTTL": 100,
    "result": 100,
    "set": "replace",
    "start": 1192,
    "trace": true,
    "ttl": 100,
    "value": 1,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
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
    "now": 1192,
    "oldValue": 2,
    "op": "fetch",
    "remainingTTL": 100,
    "result": 2,
    "set": "update",
    "start": 1192,
    "trace": true,
    "ttl": 100,
    "value": 2,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
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
    "result": 1,
    "trace": true,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
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
    "fetch": "hit",
    "key": 1,
    "now": 1192,
    "op": "fetch",
    "remainingTTL": 100,
    "result": 100,
    "start": 1192,
    "trace": true,
    "ttl": 100,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
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
    "now": 1192,
    "oldValue": 100,
    "op": "fetch",
    "remainingTTL": 100,
    "result": 1,
    "set": "replace",
    "start": 1192,
    "trace": true,
    "ttl": 100,
    "value": 1,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > forceRefresh traces 2`] = `
Map {}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > has false for pending fetch without stale val metrics 1`] = `
Array [
  Object {
    "cache": LRUCache [
      Array [
        1,
        1,
      ],
    ],
    "key": 1,
    "op": "has",
  },
  Object {
    "cache": LRUCache [
      Array [
        1,
        1,
      ],
    ],
    "has": "hit",
    "key": 1,
    "op": "has",
  },
  Object {
    "cache": LRUCache [
      Array [
        1,
        1,
      ],
    ],
    "has": "hit",
    "key": 1,
    "op": "has",
  },
  Object {
    "cache": LRUCache [
      Array [
        1,
        1,
      ],
    ],
    "has": "hit",
    "key": 1,
    "op": "has",
  },
]
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > has false for pending fetch without stale val traces 1`] = `
Map {
  Object {
    "cache": LRUCache [
      Array [
        1,
        1,
      ],
    ],
    "fetch": "miss",
    "fetchDispatched": true,
    "fetchResolved": true,
    "fetchUpdated": true,
    "key": 1,
    "op": "fetch",
    "result": 1,
    "set": "add",
    "trace": true,
    "value": 1,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
  Object {
    "cache": LRUCache [
      Array [
        "z",
        "z",
      ],
      Array [
        "y",
        "y",
      ],
      Array [
        "x",
        "x",
      ],
    ],
    "context": Object {
      "a": 1,
    },
    "fetch": "miss",
    "fetchDispatched": true,
    "fetchResolved": true,
    "fetchUpdated": true,
    "key": "x",
    "op": "fetch",
    "result": "x",
    "set": "add",
    "trace": true,
    "value": "x",
  } => Array [
    "asyncStart",
    "asyncEnd",
  ],
  Object {
    "cache": LRUCache [
      Array [
        "z",
        "z",
      ],
      Array [
        "y",
        "y",
      ],
      Array [
        "x",
        "x",
      ],
    ],
    "fetch": "miss",
    "fetchDispatched": true,
    "fetchResolved": true,
    "fetchUpdated": true,
    "key": "y",
    "op": "fetch",
    "result": "y",
    "set": "add",
    "trace": true,
    "value": "y",
  } => Array [
    "asyncStart",
    "asyncEnd",
  ],
  Object {
    "cache": LRUCache [
      Array [
        "z",
        "z",
      ],
      Array [
        "y",
        "y",
      ],
      Array [
        "x",
        "x",
      ],
    ],
    "context": Object {
      "x": 1,
    },
    "fetch": "miss",
    "fetchDispatched": true,
    "fetchResolved": true,
    "fetchUpdated": true,
    "key": "z",
    "op": "fetch",
    "result": "z",
    "set": "add",
    "trace": true,
    "value": "z",
  } => Array [
    "asyncStart",
    "asyncEnd",
  ],
  Object {
    "cache": LRUCache [
      Array [
        "z",
        "z",
      ],
      Array [
        "y",
        "y",
      ],
      Array [
        "x",
        "x",
      ],
    ],
    "context": Object {
      "a": 1,
    },
    "fetch": "miss",
    "fetchDispatched": true,
    "fetchResolved": true,
    "fetchUpdated": true,
    "key": "x",
    "op": "fetch",
    "result": "x",
    "set": "add",
    "trace": true,
    "value": "x",
  } => Array [
    "asyncStart",
    "asyncEnd",
  ],
  Object {
    "cache": LRUCache [
      Array [
        "z",
        "z",
      ],
      Array [
        "y",
        "y",
      ],
      Array [
        "x",
        "x",
      ],
    ],
    "fetch": "miss",
    "fetchDispatched": true,
    "fetchResolved": true,
    "fetchUpdated": true,
    "key": "y",
    "op": "fetch",
    "result": "y",
    "set": "add",
    "trace": true,
    "value": "y",
  } => Array [
    "asyncStart",
    "asyncEnd",
  ],
  Object {
    "cache": LRUCache [
      Array [
        "z",
        "z",
      ],
      Array [
        "y",
        "y",
      ],
      Array [
        "x",
        "x",
      ],
    ],
    "fetch": "inflight",
    "key": "y",
    "op": "fetch",
    "result": "y",
    "trace": true,
  } => Array [
    "asyncStart",
    "asyncEnd",
  ],
  Object {
    "cache": LRUCache [
      Array [
        "z",
        "z",
      ],
      Array [
        "y",
        "y",
      ],
      Array [
        "x",
        "x",
      ],
    ],
    "context": Object {
      "x": 1,
    },
    "fetch": "miss",
    "fetchDispatched": true,
    "fetchResolved": true,
    "fetchUpdated": true,
    "key": "z",
    "op": "fetch",
    "result": "z",
    "set": "add",
    "trace": true,
    "value": "z",
  } => Array [
    "asyncStart",
    "asyncEnd",
  ],
  Object {
    "cache": LRUCache [
      Array [
        1,
        1,
      ],
    ],
    "fetch": "refresh",
    "fetchDispatched": true,
    "fetchResolved": true,
    "fetchUpdated": true,
    "forceRefresh": true,
    "key": 1,
    "oldValue": 1,
    "op": "fetch",
    "result": 1,
    "set": "update",
    "trace": true,
    "value": 1,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > large item falls out of cache because maxEntrySize metrics 1`] = `
Array [
  Object {
    "cache": LRUCache [
      Array [
        3,
        3,
      ],
    ],
    "entrySize": 2,
    "key": 2,
    "op": "set",
    "set": "add",
    "totalCalculatedSize": 2,
    "value": 2,
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        3,
      ],
    ],
    "delete": "delete",
    "key": 2,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        3,
      ],
    ],
    "delete": "set",
    "key": 1,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        3,
      ],
    ],
    "key": 1,
    "maxEntrySizeExceeded": true,
    "op": "set",
    "set": "miss",
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        3,
      ],
    ],
    "entrySize": 3,
    "key": 3,
    "op": "set",
    "set": "add",
    "totalCalculatedSize": 3,
    "value": 3,
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        3,
      ],
    ],
    "delete": "set",
    "key": 4,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        3,
      ],
    ],
    "key": 4,
    "maxEntrySizeExceeded": true,
    "op": "set",
    "set": "miss",
    "value": 4,
  },
]
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > large item falls out of cache because maxEntrySize traces 1`] = `
Map {}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > large item falls out of cache, sizes are kept correct metrics 1`] = `
Array [
  Object {
    "cache": LRUCache [
      Array [
        3,
        3,
      ],
    ],
    "entrySize": 2,
    "key": 2,
    "op": "set",
    "set": "add",
    "totalCalculatedSize": 2,
    "value": 2,
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        3,
      ],
    ],
    "delete": "delete",
    "key": 2,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        3,
      ],
    ],
    "delete": "set",
    "key": 1,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        3,
      ],
    ],
    "key": 1,
    "maxEntrySizeExceeded": true,
    "op": "set",
    "set": "miss",
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        3,
      ],
    ],
    "entrySize": 3,
    "key": 3,
    "op": "set",
    "set": "add",
    "totalCalculatedSize": 3,
    "value": 3,
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        3,
      ],
    ],
    "delete": "set",
    "key": 4,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        3,
      ],
    ],
    "key": 4,
    "maxEntrySizeExceeded": true,
    "op": "set",
    "set": "miss",
    "value": 4,
  },
]
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > large item falls out of cache, sizes are kept correct traces 1`] = `
Map {}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > maxEntrySize, no maxSize metrics 1`] = `
Array [
  Object {
    "cache": LRUCache [
      Array [
        3,
        "xxx",
      ],
      Array [
        2,
        "xx",
      ],
    ],
    "delete": "set",
    "key": 11,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        "xxx",
      ],
      Array [
        2,
        "xx",
      ],
    ],
    "has": "miss",
    "key": 11,
    "op": "has",
  },
]
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > maxEntrySize, no maxSize traces 1`] = `
Map {
  Object {
    "cache": LRUCache [
      Array [
        3,
        "xxx",
      ],
      Array [
        2,
        "xx",
      ],
    ],
    "entrySize": 2,
    "fetch": "miss",
    "fetchDispatched": true,
    "fetchResolved": true,
    "fetchUpdated": true,
    "key": 2,
    "op": "fetch",
    "result": "xx",
    "set": "add",
    "totalCalculatedSize": 2,
    "trace": true,
    "value": "xx",
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
  Object {
    "cache": LRUCache [
      Array [
        3,
        "xxx",
      ],
      Array [
        2,
        "xx",
      ],
    ],
    "entrySize": 3,
    "fetch": "miss",
    "fetchDispatched": true,
    "fetchResolved": true,
    "fetchUpdated": true,
    "key": 3,
    "op": "fetch",
    "result": "xxx",
    "set": "add",
    "totalCalculatedSize": 5,
    "trace": true,
    "value": "xxx",
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
  Object {
    "cache": LRUCache [
      Array [
        3,
        "xxx",
      ],
      Array [
        2,
        "xx",
      ],
    ],
    "fetch": "miss",
    "fetchDispatched": true,
    "fetchResolved": true,
    "fetchUpdated": true,
    "key": 11,
    "maxEntrySizeExceeded": true,
    "op": "fetch",
    "result": "xxxxxxxxxxx",
    "set": "miss",
    "trace": true,
    "value": "xxxxxxxxxxx",
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > no funny business metrics 1`] = `
Array [
  Object {
    "cache": LRUCache [
      Array [
        2,
        4,
      ],
    ],
    "get": "miss",
    "key": 2,
    "op": "get",
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        4,
      ],
    ],
    "key": 2,
    "memo": "miss",
    "op": "memo",
    "value": 4,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        4,
      ],
    ],
    "key": 2,
    "memo": "hit",
    "op": "memo",
    "value": 4,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        4,
      ],
    ],
    "get": "hit",
    "key": 2,
    "op": "get",
    "value": 4,
  },
]
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > no funny business traces 1`] = `
Map {}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > noDisposeOnSet with delete() metrics 1`] = `
Array [
  Object {
    "cache": LRUCache [
      Array [
        3,
        "new 3",
      ],
      Array [
        2,
        "new 2",
      ],
      Array [
        1,
        "new 1",
      ],
    ],
    "key": 0,
    "op": "set",
    "set": "add",
    "value": 0,
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        "new 3",
      ],
      Array [
        2,
        "new 2",
      ],
      Array [
        1,
        "new 1",
      ],
    ],
    "key": 1,
    "op": "set",
    "set": "add",
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        "new 3",
      ],
      Array [
        2,
        "new 2",
      ],
      Array [
        1,
        "new 1",
      ],
    ],
    "key": 2,
    "op": "set",
    "set": "add",
    "value": 2,
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        "new 3",
      ],
      Array [
        2,
        "new 2",
      ],
      Array [
        1,
        "new 1",
      ],
    ],
    "key": 3,
    "op": "set",
    "set": "add",
    "value": 3,
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        "new 3",
      ],
      Array [
        2,
        "new 2",
      ],
      Array [
        1,
        "new 1",
      ],
    ],
    "key": 4,
    "op": "set",
    "set": "add",
    "value": 4,
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        "new 3",
      ],
      Array [
        2,
        "new 2",
      ],
      Array [
        1,
        "new 1",
      ],
    ],
    "key": 0,
    "oldValue": 0,
    "op": "set",
    "set": "replace",
    "value": "new 0",
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        "new 3",
      ],
      Array [
        2,
        "new 2",
      ],
      Array [
        1,
        "new 1",
      ],
    ],
    "key": 1,
    "oldValue": 1,
    "op": "set",
    "set": "replace",
    "value": "new 1",
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        "new 3",
      ],
      Array [
        2,
        "new 2",
      ],
      Array [
        1,
        "new 1",
      ],
    ],
    "key": 2,
    "oldValue": 2,
    "op": "set",
    "set": "replace",
    "value": "new 2",
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        "new 3",
      ],
      Array [
        2,
        "new 2",
      ],
      Array [
        1,
        "new 1",
      ],
    ],
    "key": 3,
    "oldValue": 3,
    "op": "set",
    "set": "replace",
    "value": "new 3",
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        "new 3",
      ],
      Array [
        2,
        "new 2",
      ],
      Array [
        1,
        "new 1",
      ],
    ],
    "delete": "delete",
    "key": 0,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        "new 3",
      ],
      Array [
        2,
        "new 2",
      ],
      Array [
        1,
        "new 1",
      ],
    ],
    "delete": "delete",
    "key": 4,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        "new 3",
      ],
      Array [
        2,
        "new 2",
      ],
      Array [
        1,
        "new 1",
      ],
    ],
    "key": 0,
    "op": "set",
    "set": "add",
    "value": 0,
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        "new 3",
      ],
      Array [
        2,
        "new 2",
      ],
      Array [
        1,
        "new 1",
      ],
    ],
    "key": 1,
    "op": "set",
    "set": "add",
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        "new 3",
      ],
      Array [
        2,
        "new 2",
      ],
      Array [
        1,
        "new 1",
      ],
    ],
    "key": 2,
    "op": "set",
    "set": "add",
    "value": 2,
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        "new 3",
      ],
      Array [
        2,
        "new 2",
      ],
      Array [
        1,
        "new 1",
      ],
    ],
    "key": 3,
    "op": "set",
    "set": "add",
    "value": 3,
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        "new 3",
      ],
      Array [
        2,
        "new 2",
      ],
      Array [
        1,
        "new 1",
      ],
    ],
    "key": 4,
    "op": "set",
    "set": "add",
    "value": 4,
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        "new 3",
      ],
      Array [
        2,
        "new 2",
      ],
      Array [
        1,
        "new 1",
      ],
    ],
    "key": 0,
    "oldValue": 0,
    "op": "set",
    "set": "replace",
    "value": "new 0",
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        "new 3",
      ],
      Array [
        2,
        "new 2",
      ],
      Array [
        1,
        "new 1",
      ],
    ],
    "key": 1,
    "oldValue": 1,
    "op": "set",
    "set": "replace",
    "value": "new 1",
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        "new 3",
      ],
      Array [
        2,
        "new 2",
      ],
      Array [
        1,
        "new 1",
      ],
    ],
    "key": 2,
    "oldValue": 2,
    "op": "set",
    "set": "replace",
    "value": "new 2",
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        "new 3",
      ],
      Array [
        2,
        "new 2",
      ],
      Array [
        1,
        "new 1",
      ],
    ],
    "key": 3,
    "oldValue": 3,
    "op": "set",
    "set": "replace",
    "value": "new 3",
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        "new 3",
      ],
      Array [
        2,
        "new 2",
      ],
      Array [
        1,
        "new 1",
      ],
    ],
    "delete": "delete",
    "key": 0,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        "new 3",
      ],
      Array [
        2,
        "new 2",
      ],
      Array [
        1,
        "new 1",
      ],
    ],
    "delete": "delete",
    "key": 4,
    "op": "delete",
  },
]
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > noDisposeOnSet with delete() traces 1`] = `
Map {}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > peek does not disturb order metrics 1`] = `
Array [
  Object {
    "cache": LRUCache [
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
      Array [
        0,
        0,
      ],
    ],
    "key": 0,
    "op": "set",
    "set": "add",
    "value": 0,
  },
  Object {
    "cache": LRUCache [
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
      Array [
        0,
        0,
      ],
    ],
    "key": 1,
    "op": "set",
    "set": "add",
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
      Array [
        0,
        0,
      ],
    ],
    "key": 2,
    "op": "set",
    "set": "add",
    "value": 2,
  },
  Object {
    "cache": LRUCache [
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
      Array [
        0,
        0,
      ],
    ],
    "key": 3,
    "op": "set",
    "set": "add",
    "value": 3,
  },
  Object {
    "cache": LRUCache [
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
      Array [
        0,
        0,
      ],
    ],
    "key": 4,
    "op": "set",
    "set": "add",
    "value": 4,
  },
  Object {
    "cache": LRUCache [
      Array [
        4,
        4,
      ],
      Array [
        3,
        3,
      ],
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
      Array [
        0,
        0,
      ],
    ],
    "key": 2,
    "op": "peek",
    "peek": "hit",
    "value": 2,
  },
]
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > peek does not disturb order traces 1`] = `
Map {}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > peek tests metrics 1`] = `
Array [
  Object {
    "cache": LRUCache [
      Array [
        5,
        5000,
      ],
    ],
    "key": 1,
    "now": 1,
    "op": "set",
    "remainingTTL": 100,
    "set": "add",
    "start": 1,
    "ttl": 100,
    "value": 10,
  },
  Object {
    "cache": LRUCache [
      Array [
        5,
        5000,
      ],
    ],
    "key": 2,
    "now": 21,
    "op": "set",
    "remainingTTL": 100,
    "set": "add",
    "start": 21,
    "ttl": 100,
    "value": 20,
  },
  Object {
    "cache": LRUCache [
      Array [
        5,
        5000,
      ],
    ],
    "key": 3,
    "now": 51,
    "op": "set",
    "remainingTTL": 100,
    "set": "add",
    "start": 51,
    "ttl": 100,
    "value": 30,
  },
  Object {
    "cache": LRUCache [
      Array [
        5,
        5000,
      ],
    ],
    "key": 4,
    "now": 91,
    "op": "set",
    "remainingTTL": 100,
    "set": "add",
    "start": 91,
    "ttl": 100,
    "value": 40,
  },
  Object {
    "cache": LRUCache [
      Array [
        5,
        5000,
      ],
    ],
    "key": 4,
    "now": 141,
    "oldValue": 40,
    "op": "set",
    "remainingTTL": 100,
    "set": "replace",
    "start": 141,
    "ttl": 100,
    "value": 50,
  },
  Object {
    "cache": LRUCache [
      Array [
        5,
        5000,
      ],
    ],
    "key": 1,
    "op": "peek",
    "peek": "stale",
  },
  Object {
    "cache": LRUCache [
      Array [
        5,
        5000,
      ],
    ],
    "key": 999,
    "op": "peek",
    "peek": "miss",
  },
  Object {
    "cache": LRUCache [
      Array [
        5,
        5000,
      ],
    ],
    "key": 1,
    "op": "peek",
    "peek": "hit",
    "value": 10,
  },
  Object {
    "cache": LRUCache [
      Array [
        5,
        5000,
      ],
    ],
    "key": 5,
    "op": "peek",
    "peek": "hit",
    "value": 5000,
  },
  Object {
    "cache": LRUCache [
      Array [
        5,
        5000,
      ],
    ],
    "key": 5,
    "op": "peek",
    "peek": "hit",
    "value": 5000,
  },
  Object {
    "cache": LRUCache [
      Array [
        5,
        5000,
      ],
    ],
    "key": 5,
    "op": "peek",
    "peek": "hit",
    "value": 5000,
  },
]
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > peek tests traces 1`] = `
Map {
  Object {
    "cache": LRUCache [
      Array [
        5,
        5000,
      ],
    ],
    "fetch": "miss",
    "fetchDispatched": true,
    "fetchResolved": true,
    "fetchUpdated": true,
    "key": 5,
    "now": 161,
    "op": "fetch",
    "remainingTTL": 100,
    "result": 5000,
    "set": "add",
    "start": 161,
    "trace": true,
    "ttl": 100,
    "value": 5000,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
  Object {
    "cache": LRUCache [
      Array [
        5,
        5000,
      ],
    ],
    "fetch": "stale",
    "fetchDispatched": true,
    "fetchResolved": true,
    "fetchUpdated": true,
    "key": 5,
    "now": 461,
    "oldValue": 5000,
    "op": "fetch",
    "remainingTTL": 100,
    "result": 5000,
    "set": "update",
    "start": 461,
    "trace": true,
    "ttl": 100,
    "value": 5000,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > placeholder promise is not removed when resolving metrics 1`] = `
Array []
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > placeholder promise is not removed when resolving traces 1`] = `
Map {
  Object {
    "cache": LRUCache [
      Array [
        3,
        3,
      ],
      Array [
        5,
        5,
      ],
    ],
    "entrySize": 3,
    "fetch": "miss",
    "fetchDispatched": true,
    "fetchResolved": true,
    "fetchUpdated": true,
    "key": 3,
    "op": "fetch",
    "result": 3,
    "set": "add",
    "totalCalculatedSize": 8,
    "trace": true,
    "value": 3,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
  Object {
    "cache": LRUCache [
      Array [
        3,
        3,
      ],
      Array [
        5,
        5,
      ],
    ],
    "entrySize": 4,
    "fetch": "miss",
    "fetchDispatched": true,
    "fetchResolved": true,
    "fetchUpdated": true,
    "key": 4,
    "op": "fetch",
    "result": 4,
    "set": "add",
    "totalCalculatedSize": 6,
    "trace": true,
    "value": 4,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
  Object {
    "cache": LRUCache [
      Array [
        3,
        3,
      ],
      Array [
        5,
        5,
      ],
    ],
    "entrySize": 5,
    "fetch": "miss",
    "fetchDispatched": true,
    "fetchResolved": true,
    "fetchUpdated": true,
    "key": 5,
    "op": "fetch",
    "result": 5,
    "set": "add",
    "totalCalculatedSize": 10,
    "trace": true,
    "value": 5,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > prints to stderr if no process.emitWarning metrics 1`] = `
Array []
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > prints to stderr if no process.emitWarning traces 1`] = `
Map {}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > properly dispose when using fetch metrics 1`] = `
Array []
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > properly dispose when using fetch traces 1`] = `
Map {
  Object {
    "cache": LRUCache [
      Array [
        1,
        1,
      ],
    ],
    "fetch": "miss",
    "fetchDispatched": true,
    "fetchResolved": true,
    "fetchUpdated": true,
    "key": 1,
    "now": 2423,
    "op": "fetch",
    "remainingTTL": 10,
    "result": 0,
    "set": "add",
    "start": 2423,
    "trace": true,
    "ttl": 10,
    "value": 0,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
  Object {
    "cache": LRUCache [
      Array [
        1,
        1,
      ],
    ],
    "fetch": "stale",
    "fetchDispatched": true,
    "fetchResolved": true,
    "fetchUpdated": true,
    "key": 1,
    "now": 2443,
    "oldValue": 0,
    "op": "fetch",
    "remainingTTL": 10,
    "result": 1,
    "set": "replace",
    "start": 2443,
    "trace": true,
    "ttl": 10,
    "value": 1,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > re-use key before initial fill completed metrics 1`] = `
Array [
  Object {
    "cache": LRUCache [
      Array [
        3,
        3,
      ],
      Array [
        1,
        2,
      ],
      Array [
        2,
        2,
      ],
      Array [
        0,
        0,
      ],
    ],
    "key": 0,
    "op": "set",
    "set": "add",
    "value": 0,
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        3,
      ],
      Array [
        1,
        2,
      ],
      Array [
        2,
        2,
      ],
      Array [
        0,
        0,
      ],
    ],
    "key": 1,
    "op": "set",
    "set": "add",
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        3,
      ],
      Array [
        1,
        2,
      ],
      Array [
        2,
        2,
      ],
      Array [
        0,
        0,
      ],
    ],
    "key": 2,
    "op": "set",
    "set": "add",
    "value": 2,
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        3,
      ],
      Array [
        1,
        2,
      ],
      Array [
        2,
        2,
      ],
      Array [
        0,
        0,
      ],
    ],
    "key": 1,
    "oldValue": 1,
    "op": "set",
    "set": "replace",
    "value": 2,
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        3,
      ],
      Array [
        1,
        2,
      ],
      Array [
        2,
        2,
      ],
      Array [
        0,
        0,
      ],
    ],
    "key": 3,
    "op": "set",
    "set": "add",
    "value": 3,
  },
]
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > re-use key before initial fill completed traces 1`] = `
Map {}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > refetch after aborted fetch rejects later metrics 1`] = `
Array [
  Object {
    "cache": LRUCache [
      Array [
        1,
        1,
      ],
    ],
    "key": 1,
    "now": 2654,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 2654,
    "ttl": 10,
    "value": 10,
  },
]
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > refetch after aborted fetch rejects later traces 1`] = `
Map {
  Object {
    "cache": LRUCache [
      Array [
        1,
        1,
      ],
    ],
    "fetch": "stale",
    "fetchAborted": true,
    "fetchDispatched": true,
    "fetchError": Error: gimme the stale value,
    "key": 1,
    "op": "fetch",
    "result": 10,
    "returnedStale": true,
    "trace": true,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
  Object {
    "cache": LRUCache [
      Array [
        1,
        1,
      ],
    ],
    "fetch": "stale",
    "fetchDispatched": true,
    "fetchResolved": true,
    "fetchUpdated": true,
    "key": 1,
    "now": 3054,
    "oldValue": 10,
    "op": "fetch",
    "remainingTTL": 10,
    "result": 1,
    "set": "replace",
    "start": 3054,
    "trace": true,
    "ttl": 10,
    "value": 1,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > send a signal metrics 1`] = `
Array [
  Object {
    "cache": LRUCache [],
    "delete": "fetch",
    "key": 1,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [],
    "get": "miss",
    "key": 1,
    "op": "get",
  },
]
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > send a signal traces 1`] = `
Map {
  Object {
    "cache": LRUCache [],
    "error": Error: custom abort signal {
      "name": "Error",
    },
    "fetch": "miss",
    "fetchAborted": true,
    "fetchDispatched": true,
    "fetchError": Error: custom abort signal {
      "name": "Error",
    },
    "key": 1,
    "op": "fetch",
    "trace": true,
  } => Array [
    "start",
    "end",
    "error",
    "asyncStart",
    "asyncEnd",
  ],
}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > setting maxSize with non-integer values metrics 1`] = `
Array []
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > setting maxSize with non-integer values traces 1`] = `
Map {}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > setting ttl with non-integer values metrics 1`] = `
Array []
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > setting ttl with non-integer values traces 1`] = `
Map {}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > staleFetchTimeout > abort before timeout metrics 1`] = `
Array [
  Object {
    "cache": LRUCache [],
    "delete": "fetch",
    "key": 1,
    "op": "delete",
  },
]
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > staleFetchTimeout > abort before timeout traces 1`] = `
Map {
  Object {
    "cache": LRUCache [],
    "error": Error: nope {
      "name": "Error",
    },
    "fetch": "stale",
    "fetchAborted": true,
    "fetchDispatched": true,
    "fetchError": Error: nope {
      "name": "Error",
    },
    "key": 1,
    "op": "fetch",
    "trace": true,
  } => Array [
    "start",
    "end",
    "error",
    "asyncStart",
    "asyncEnd",
  ],
}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > staleFetchTimeout > fetchMethod settles in time: fresh value metrics 1`] = `
Array [
  Object {
    "cache": LRUCache [
      Array [
        1,
        102,
      ],
    ],
    "key": 1,
    "op": "peek",
    "peek": "hit",
    "value": 102,
  },
]
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > staleFetchTimeout > fetchMethod settles in time: fresh value traces 1`] = `
Map {
  Object {
    "cache": LRUCache [
      Array [
        1,
        102,
      ],
    ],
    "fetch": "stale",
    "fetchDispatched": true,
    "fetchResolved": true,
    "fetchUpdated": true,
    "key": 1,
    "now": 4564,
    "oldValue": 101,
    "op": "fetch",
    "remainingTTL": 1000,
    "result": 102,
    "set": "replace",
    "start": 4564,
    "trace": true,
    "ttl": 1000,
    "value": 102,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > staleFetchTimeout > no stale value: wait for the fetchMethod metrics 1`] = `
Array []
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > staleFetchTimeout > no stale value: wait for the fetchMethod traces 1`] = `
Map {
  Object {
    "cache": LRUCache [
      Array [
        1,
        101,
      ],
    ],
    "fetch": "miss",
    "fetchDispatched": true,
    "fetchResolved": true,
    "fetchUpdated": true,
    "key": 1,
    "now": 3454,
    "op": "fetch",
    "remainingTTL": 1000,
    "result": 101,
    "set": "add",
    "start": 3454,
    "trace": true,
    "ttl": 1000,
    "value": 101,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > staleFetchTimeout > per-call option metrics 1`] = `
Array [
  Object {
    "cache": LRUCache [
      Array [
        2,
        208,
      ],
    ],
    "key": 2,
    "now": 9474,
    "op": "set",
    "remainingTTL": 1000,
    "set": "add",
    "start": 9474,
    "ttl": 1000,
    "value": 2,
  },
]
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > staleFetchTimeout > per-call option traces 1`] = `
Map {
  Object {
    "cache": LRUCache [
      Array [
        2,
        208,
      ],
    ],
    "fetch": "stale",
    "fetchDispatched": true,
    "fetchResolved": true,
    "fetchUpdated": true,
    "key": 2,
    "now": 10674,
    "oldValue": 2,
    "op": "fetch",
    "remainingTTL": 1000,
    "result": 208,
    "set": "replace",
    "start": 10674,
    "trace": true,
    "ttl": 1000,
    "value": 208,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > staleFetchTimeout > timeout, then abort: fetch() not affected metrics 1`] = `
Array [
  Object {
    "cache": LRUCache [
      Array [
        1,
        106,
      ],
    ],
    "get": "hit",
    "key": 1,
    "now": 8274,
    "op": "get",
    "remainingTTL": 1000,
    "start": 8274,
    "ttl": 1000,
    "value": 106,
  },
]
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > staleFetchTimeout > timeout, then abort: fetch() not affected traces 1`] = `
Map {
  Object {
    "cache": LRUCache [
      Array [
        1,
        106,
      ],
    ],
    "fetch": "stale",
    "fetchDispatched": true,
    "fetchResolved": true,
    "fetchTimedOut": true,
    "fetchUpdated": true,
    "key": 1,
    "now": 8274,
    "oldValue": 105,
    "op": "fetch",
    "remainingTTL": 1000,
    "result": 105,
    "returnedStale": true,
    "set": "replace",
    "start": 8274,
    "trace": true,
    "ttl": 1000,
    "value": 106,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > staleFetchTimeout > timeout, then rejection: refetch next time metrics 1`] = `
Array [
  Object {
    "cache": LRUCache [
      Array [
        1,
        105,
      ],
    ],
    "delete": "fetch",
    "key": 1,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [
      Array [
        1,
        105,
      ],
    ],
    "has": "miss",
    "key": 1,
    "op": "has",
  },
]
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > staleFetchTimeout > timeout, then rejection: refetch next time traces 1`] = `
Map {
  Object {
    "cache": LRUCache [
      Array [
        1,
        105,
      ],
    ],
    "fetch": "stale",
    "fetchDispatched": true,
    "fetchTimedOut": true,
    "key": 1,
    "op": "fetch",
    "result": 103,
    "returnedStale": true,
    "trace": true,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
  Object {
    "cache": LRUCache [
      Array [
        1,
        105,
      ],
    ],
    "fetch": "miss",
    "fetchDispatched": true,
    "fetchResolved": true,
    "fetchUpdated": true,
    "key": 1,
    "now": 7074,
    "op": "fetch",
    "remainingTTL": 1000,
    "result": 105,
    "set": "add",
    "start": 7074,
    "trace": true,
    "ttl": 1000,
    "value": 105,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > staleFetchTimeout > timeout: stale value, updated in the background metrics 1`] = `
Array [
  Object {
    "cache": LRUCache [
      Array [
        1,
        103,
      ],
    ],
    "get": "hit",
    "key": 1,
    "now": 5864,
    "op": "get",
    "remainingTTL": 1000,
    "start": 5864,
    "ttl": 1000,
    "value": 103,
  },
]
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > staleFetchTimeout > timeout: stale value, updated in the background traces 1`] = `
Map {
  Object {
    "cache": LRUCache [
      Array [
        1,
        103,
      ],
    ],
    "fetch": "stale",
    "fetchDispatched": true,
    "fetchResolved": true,
    "fetchTimedOut": true,
    "fetchUpdated": true,
    "key": 1,
    "now": 5864,
    "oldValue": 102,
    "op": "fetch",
    "remainingTTL": 1000,
    "result": 102,
    "returnedStale": true,
    "set": "replace",
    "start": 5864,
    "trace": true,
    "ttl": 1000,
    "value": 103,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
  Object {
    "cache": LRUCache [
      Array [
        1,
        103,
      ],
    ],
    "fetch": "inflight",
    "key": 1,
    "op": "fetch",
    "result": 102,
    "trace": true,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > staleFetchTimeout metrics 1`] = `
Array []
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > staleFetchTimeout traces 1`] = `
Map {}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > store strings, size = length metrics 1`] = `
Array [
  Object {
    "cache": LRUCache [
      Array [
        "repeated",
        "jjjjjjjjjj",
      ],
    ],
    "entrySize": 5,
    "key": 5,
    "op": "set",
    "set": "add",
    "totalCalculatedSize": 5,
    "value": "xxxxx",
  },
  Object {
    "cache": LRUCache [
      Array [
        "repeated",
        "jjjjjjjjjj",
      ],
    ],
    "entrySize": 10,
    "key": 10,
    "op": "set",
    "set": "add",
    "totalCalculatedSize": 15,
    "value": "xxxxxxxxxx",
  },
  Object {
    "cache": LRUCache [
      Array [
        "repeated",
        "jjjjjjjjjj",
      ],
    ],
    "entrySize": 20,
    "key": 20,
    "op": "set",
    "set": "add",
    "totalCalculatedSize": 35,
    "value": "xxxxxxxxxxxxxxxxxxxx",
  },
  Object {
    "cache": LRUCache [
      Array [
        "repeated",
        "jjjjjjjjjj",
      ],
    ],
    "delete": "delete",
    "key": 20,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [
      Array [
        "repeated",
        "jjjjjjjjjj",
      ],
    ],
    "delete": "delete",
    "key": 5,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [
      Array [
        "repeated",
        "jjjjjjjjjj",
      ],
    ],
    "entrySize": 10,
    "key": 0,
    "op": "set",
    "set": "add",
    "totalCalculatedSize": 10,
    "value": "xxxxxxxxxx",
  },
  Object {
    "cache": LRUCache [
      Array [
        "repeated",
        "jjjjjjjjjj",
      ],
    ],
    "entrySize": 10,
    "key": 1,
    "op": "set",
    "set": "add",
    "totalCalculatedSize": 20,
    "value": "xxxxxxxxxx",
  },
  Object {
    "cache": LRUCache [
      Array [
        "repeated",
        "jjjjjjjjjj",
      ],
    ],
    "entrySize": 10,
    "key": 2,
    "op": "set",
    "set": "add",
    "totalCalculatedSize": 30,
    "value": "xxxxxxxxxx",
  },
  Object {
    "cache": LRUCache [
      Array [
        "repeated",
        "jjjjjjjjjj",
      ],
    ],
    "entrySize": 10,
    "key": 3,
    "op": "set",
    "set": "add",
    "totalCalculatedSize": 40,
    "value": "xxxxxxxxxx",
  },
  Object {
    "cache": LRUCache [
      Array [
        "repeated",
        "jjjjjjjjjj",
      ],
    ],
    "entrySize": 10,
    "key": 4,
    "op": "set",
    "set": "add",
    "totalCalculatedSize": 50,
    "value": "xxxxxxxxxx",
  },
  Object {
    "cache": LRUCache [
      Array [
        "repeated",
        "jjjjjjjjjj",
      ],
    ],
    "entrySize": 100,
    "key": "big",
    "op": "set",
    "set": "add",
    "totalCalculatedSize": 100,
    "value": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  },
  Object {
    "cache": LRUCache [
      Array [
        "repeated",
        "jjjjjjjjjj",
      ],
    ],
    "entrySize": 10,
    "key": "big",
    "oldValue": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "op": "set",
    "set": "replace",
    "totalCalculatedSize": 10,
    "value": "yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
  },
  Object {
    "cache": LRUCache [
      Array [
        "repeated",
        "jjjjjjjjjj",
      ],
    ],
    "delete": "delete",
    "key": "big",
    "op": "delete",
  },
  Object {
    "cache": LRUCache [
      Array [
        "repeated",
        "jjjjjjjjjj",
      ],
    ],
    "entrySize": 10,
    "key": "repeated",
    "op": "set",
    "set": "add",
    "totalCalculatedSize": 10,
    "value": "iiiiiiiiii",
  },
  Object {
    "cache": LRUCache [
      Array [
        "repeated",
        "jjjjjjjjjj",
      ],
    ],
    "entrySize": 10,
    "key": "repeated",
    "oldValue": "iiiiiiiiii",
    "op": "set",
    "set": "replace",
    "totalCalculatedSize": 10,
    "value": "jjjjjjjjjj",
  },
  Object {
    "cache": LRUCache [
      Array [
        "repeated",
        "jjjjjjjjjj",
      ],
    ],
    "entrySize": 10,
    "key": "repeated",
    "oldValue": "jjjjjjjjjj",
    "op": "set",
    "set": "replace",
    "totalCalculatedSize": 10,
    "value": "iiiiiiiiii",
  },
  Object {
    "cache": LRUCache [
      Array [
        "repeated",
        "jjjjjjjjjj",
      ],
    ],
    "entrySize": 10,
    "key": "repeated",
    "oldValue": "iiiiiiiiii",
    "op": "set",
    "set": "replace",
    "totalCalculatedSize": 10,
    "value": "jjjjjjjjjj",
  },
  Object {
    "cache": LRUCache [
      Array [
        "repeated",
        "jjjjjjjjjj",
      ],
    ],
    "entrySize": 10,
    "key": "repeated",
    "oldValue": "jjjjjjjjjj",
    "op": "set",
    "set": "replace",
    "totalCalculatedSize": 10,
    "value": "iiiiiiiiii",
  },
  Object {
    "cache": LRUCache [
      Array [
        "repeated",
        "jjjjjjjjjj",
      ],
    ],
    "entrySize": 10,
    "key": "repeated",
    "oldValue": "iiiiiiiiii",
    "op": "set",
    "set": "replace",
    "totalCalculatedSize": 10,
    "value": "jjjjjjjjjj",
  },
  Object {
    "cache": LRUCache [
      Array [
        "repeated",
        "jjjjjjjjjj",
      ],
    ],
    "entrySize": 10,
    "key": "repeated",
    "oldValue": "jjjjjjjjjj",
    "op": "set",
    "set": "replace",
    "totalCalculatedSize": 10,
    "value": "iiiiiiiiii",
  },
  Object {
    "cache": LRUCache [
      Array [
        "repeated",
        "jjjjjjjjjj",
      ],
    ],
    "entrySize": 10,
    "key": "repeated",
    "oldValue": "iiiiiiiiii",
    "op": "set",
    "set": "replace",
    "totalCalculatedSize": 10,
    "value": "jjjjjjjjjj",
  },
  Object {
    "cache": LRUCache [
      Array [
        "repeated",
        "jjjjjjjjjj",
      ],
    ],
    "get": "hit",
    "key": "repeated",
    "op": "get",
    "value": "jjjjjjjjjj",
  },
]
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > store strings, size = length traces 1`] = `
Map {}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > tests using Date.now() > clear() disposes stale entries metrics 1`] = `
Array [
  Object {
    "cache": LRUCache [],
    "key": 0,
    "now": 13949,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 13949,
    "ttl": 10,
    "value": 0,
  },
  Object {
    "cache": LRUCache [],
    "key": 1,
    "now": 13949,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 13949,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "key": 2,
    "now": 13949,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 13949,
    "ttl": 10,
    "value": 2,
  },
  Object {
    "cache": LRUCache [],
    "key": 3,
    "now": 13949,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 13949,
    "ttl": 10,
    "value": 3,
  },
]
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > tests using Date.now() > clear() disposes stale entries traces 1`] = `
Map {}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > tests using Date.now() > indexes/rindexes can walk over stale entries metrics 1`] = `
Array [
  Object {
    "cache": LRUCache [
      Array [
        3,
        3,
      ],
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
    ],
    "key": 0,
    "now": 13931,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 13931,
    "ttl": 10,
    "value": 0,
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        3,
      ],
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
    ],
    "key": 1,
    "now": 13931,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 13931,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        3,
      ],
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
    ],
    "key": 2,
    "now": 13931,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 13931,
    "ttl": 10,
    "value": 2,
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        3,
      ],
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
    ],
    "key": 3,
    "now": 13940,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 13940,
    "ttl": 10,
    "value": 3,
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        3,
      ],
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
    ],
    "key": 4,
    "now": 13940,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 13940,
    "ttl": 10,
    "value": 4,
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        3,
      ],
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
    ],
    "key": 5,
    "now": 13940,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 13940,
    "ttl": 10,
    "value": 5,
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        3,
      ],
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
    ],
    "key": 6,
    "now": 13940,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 13940,
    "ttl": 10,
    "value": 6,
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        3,
      ],
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
    ],
    "key": 7,
    "now": 13940,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 13940,
    "ttl": 10,
    "value": 7,
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        3,
      ],
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
    ],
    "key": 8,
    "now": 13940,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 13940,
    "ttl": 10,
    "value": 8,
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        3,
      ],
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
    ],
    "key": 9,
    "now": 13940,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 13940,
    "ttl": 10,
    "value": 9,
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        3,
      ],
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
    ],
    "get": "hit",
    "key": 1,
    "now": 13940,
    "op": "get",
    "remainingTTL": 1,
    "start": 13931,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        3,
      ],
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
    ],
    "get": "hit",
    "key": 3,
    "now": 13940,
    "op": "get",
    "remainingTTL": 10,
    "start": 13940,
    "ttl": 10,
    "value": 3,
  },
]
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > tests using Date.now() > indexes/rindexes can walk over stale entries traces 1`] = `
Map {}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > tests using Date.now() > no delete on stale get metrics 1`] = `
Array [
  Object {
    "cache": LRUCache [],
    "key": 1,
    "now": 13989,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 13989,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "has": "stale",
    "key": 1,
    "now": 14000,
    "op": "has",
    "remainingTTL": -1,
    "start": 13989,
    "ttl": 10,
  },
  Object {
    "cache": LRUCache [],
    "get": "stale",
    "key": 1,
    "now": 14000,
    "op": "get",
    "remainingTTL": -1,
    "start": 13989,
    "ttl": 10,
  },
  Object {
    "cache": LRUCache [],
    "get": "stale",
    "key": 1,
    "now": 14000,
    "op": "get",
    "remainingTTL": -1,
    "returnedStale": true,
    "start": 13989,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "delete": "expire",
    "key": 1,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [],
    "get": "stale",
    "key": 1,
    "now": 14000,
    "op": "get",
    "remainingTTL": -1,
    "returnedStale": true,
    "start": 13989,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "get": "miss",
    "key": 1,
    "op": "get",
  },
]
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > tests using Date.now() > no delete on stale get traces 1`] = `
Map {}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > tests using Date.now() > no update ttl metrics 1`] = `
Array [
  Object {
    "cache": LRUCache [],
    "key": 0,
    "now": 13904,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 13904,
    "ttl": 10,
    "value": 0,
  },
  Object {
    "cache": LRUCache [],
    "key": 1,
    "now": 13904,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 13904,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "key": 2,
    "now": 13904,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 13904,
    "ttl": 10,
    "value": 2,
  },
  Object {
    "cache": LRUCache [],
    "key": 0,
    "now": 13913,
    "op": "set",
    "remainingTTL": 1,
    "set": "update",
    "start": 13904,
    "ttl": 10,
    "value": 0,
  },
  Object {
    "cache": LRUCache [],
    "key": 1,
    "now": 13913,
    "op": "set",
    "remainingTTL": 10,
    "set": "update",
    "start": 13913,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "delete": "expire",
    "key": 2,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [],
    "delete": "expire",
    "key": 0,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [],
    "get": "miss",
    "key": 2,
    "op": "get",
  },
  Object {
    "cache": LRUCache [],
    "get": "hit",
    "key": 1,
    "now": 13922,
    "op": "get",
    "remainingTTL": 1,
    "start": 13913,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "get": "miss",
    "key": 0,
    "op": "get",
  },
  Object {
    "cache": LRUCache [],
    "delete": "expire",
    "key": 1,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [],
    "get": "miss",
    "key": 1,
    "op": "get",
  },
]
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > tests using Date.now() > no update ttl traces 1`] = `
Map {}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > tests using Date.now() > purge stale items metrics 1`] = `
Array [
  Object {
    "cache": LRUCache [],
    "key": 0,
    "now": 13801,
    "op": "set",
    "remainingTTL": 1,
    "set": "add",
    "start": 13801,
    "ttl": 1,
    "value": 0,
  },
  Object {
    "cache": LRUCache [],
    "key": 1,
    "now": 13801,
    "op": "set",
    "remainingTTL": 2,
    "set": "add",
    "start": 13801,
    "ttl": 2,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "key": 2,
    "now": 13801,
    "op": "set",
    "remainingTTL": 3,
    "set": "add",
    "start": 13801,
    "ttl": 3,
    "value": 2,
  },
  Object {
    "cache": LRUCache [],
    "key": 3,
    "now": 13801,
    "op": "set",
    "remainingTTL": 4,
    "set": "add",
    "start": 13801,
    "ttl": 4,
    "value": 3,
  },
  Object {
    "cache": LRUCache [],
    "key": 4,
    "now": 13801,
    "op": "set",
    "remainingTTL": 5,
    "set": "add",
    "start": 13801,
    "ttl": 5,
    "value": 4,
  },
  Object {
    "cache": LRUCache [],
    "key": 5,
    "now": 13801,
    "op": "set",
    "remainingTTL": 6,
    "set": "add",
    "start": 13801,
    "ttl": 6,
    "value": 5,
  },
  Object {
    "cache": LRUCache [],
    "key": 6,
    "now": 13801,
    "op": "set",
    "remainingTTL": 7,
    "set": "add",
    "start": 13801,
    "ttl": 7,
    "value": 6,
  },
  Object {
    "cache": LRUCache [],
    "key": 7,
    "now": 13801,
    "op": "set",
    "remainingTTL": 8,
    "set": "add",
    "start": 13801,
    "ttl": 8,
    "value": 7,
  },
  Object {
    "cache": LRUCache [],
    "key": 8,
    "now": 13801,
    "op": "set",
    "remainingTTL": 9,
    "set": "add",
    "start": 13801,
    "ttl": 9,
    "value": 8,
  },
  Object {
    "cache": LRUCache [],
    "key": 9,
    "now": 13801,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 13801,
    "ttl": 10,
    "value": 9,
  },
  Object {
    "cache": LRUCache [],
    "delete": "expire",
    "key": 0,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [],
    "delete": "expire",
    "key": 1,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [],
    "delete": "expire",
    "key": 2,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [],
    "delete": "expire",
    "key": 3,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [],
    "delete": "expire",
    "key": 4,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [],
    "delete": "expire",
    "key": 5,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [],
    "delete": "expire",
    "key": 6,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [],
    "delete": "expire",
    "key": 7,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [],
    "delete": "expire",
    "key": 8,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [],
    "delete": "expire",
    "key": 9,
    "op": "delete",
  },
]
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > tests using Date.now() > purge stale items traces 1`] = `
Map {}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > tests using Date.now() > purgeStale() lockup metrics 1`] = `
Array [
  Object {
    "cache": LRUCache [],
    "key": 1,
    "now": 13969,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 13969,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "key": 2,
    "now": 13969,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 13969,
    "ttl": 10,
    "value": 2,
  },
  Object {
    "cache": LRUCache [],
    "key": 3,
    "now": 13969,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 13969,
    "ttl": 10,
    "value": 3,
  },
  Object {
    "cache": LRUCache [],
    "get": "hit",
    "key": 2,
    "now": 13974,
    "op": "get",
    "remainingTTL": 5,
    "start": 13969,
    "ttl": 10,
    "value": 2,
  },
  Object {
    "cache": LRUCache [],
    "delete": "expire",
    "key": 1,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [],
    "delete": "expire",
    "key": 3,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [],
    "delete": "expire",
    "key": 2,
    "op": "delete",
  },
]
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > tests using Date.now() > purgeStale() lockup traces 1`] = `
Map {}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > tests using Date.now() > set item pre-stale metrics 1`] = `
Array [
  Object {
    "cache": LRUCache [
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 1,
    "now": 13989,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 13989,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "has": "hit",
    "key": 1,
    "now": 13989,
    "op": "has",
    "remainingTTL": 10,
    "start": 13989,
    "ttl": 10,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "get": "hit",
    "key": 1,
    "now": 13989,
    "op": "get",
    "remainingTTL": 10,
    "start": 13989,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 2,
    "now": 13989,
    "op": "set",
    "remainingTTL": -1,
    "set": "add",
    "start": 13978,
    "ttl": 10,
    "value": 2,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "has": "stale",
    "key": 2,
    "now": 13989,
    "op": "has",
    "remainingTTL": -1,
    "start": 13978,
    "ttl": 10,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "delete": "expire",
    "key": 2,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "get": "stale",
    "key": 2,
    "now": 13989,
    "op": "get",
    "remainingTTL": -1,
    "returnedStale": true,
    "start": 13978,
    "ttl": 10,
    "value": 2,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "get": "miss",
    "key": 2,
    "op": "get",
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 2,
    "now": 13989,
    "op": "set",
    "remainingTTL": -1,
    "set": "add",
    "start": 13978,
    "ttl": 10,
    "value": 2,
  },
  Object {
    "cache": LRUCache [
      Array [
        1,
        1,
      ],
    ],
    "has": "stale",
    "key": 2,
    "now": 13989,
    "op": "has",
    "remainingTTL": -1,
    "start": 13978,
    "ttl": 10,
  },
  Object {
    "cache": LRUCache [
      Array [
        1,
        1,
      ],
    ],
    "delete": "expire",
    "key": 2,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [
      Array [
        1,
        1,
      ],
    ],
    "get": "stale",
    "key": 2,
    "now": 13989,
    "op": "get",
    "remainingTTL": -1,
    "returnedStale": true,
    "start": 13978,
    "ttl": 10,
    "value": 2,
  },
  Object {
    "cache": LRUCache [
      Array [
        1,
        1,
      ],
    ],
    "get": "miss",
    "key": 2,
    "op": "get",
  },
]
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > tests using Date.now() > set item pre-stale traces 1`] = `
Map {}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > tests using Date.now() > ttl on set, not on cache metrics 1`] = `
Array [
  Object {
    "cache": LRUCache [],
    "key": 1,
    "now": 12932,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 12932,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "get": "hit",
    "key": 1,
    "now": 12932,
    "op": "get",
    "remainingTTL": 10,
    "start": 12932,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "get": "hit",
    "key": 1,
    "now": 12937,
    "op": "get",
    "remainingTTL": 5,
    "start": 12932,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "get": "hit",
    "key": 1,
    "now": 12942,
    "op": "get",
    "remainingTTL": 0,
    "start": 12932,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "has": "stale",
    "key": 1,
    "now": 12943,
    "op": "has",
    "remainingTTL": -1,
    "start": 12932,
    "ttl": 10,
  },
  Object {
    "cache": LRUCache [],
    "delete": "expire",
    "key": 1,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [],
    "get": "stale",
    "key": 1,
    "now": 12943,
    "op": "get",
    "remainingTTL": -1,
    "start": 12932,
    "ttl": 10,
  },
  Object {
    "cache": LRUCache [],
    "key": 2,
    "now": 12943,
    "op": "set",
    "remainingTTL": 100,
    "set": "add",
    "start": 12943,
    "ttl": 100,
    "value": 2,
  },
  Object {
    "cache": LRUCache [],
    "has": "hit",
    "key": 2,
    "now": 12993,
    "op": "has",
    "remainingTTL": 50,
    "start": 12943,
    "ttl": 100,
  },
  Object {
    "cache": LRUCache [],
    "get": "hit",
    "key": 2,
    "now": 12993,
    "op": "get",
    "remainingTTL": 50,
    "start": 12943,
    "ttl": 100,
    "value": 2,
  },
  Object {
    "cache": LRUCache [],
    "has": "stale",
    "key": 2,
    "now": 13044,
    "op": "has",
    "remainingTTL": -1,
    "start": 12943,
    "ttl": 100,
  },
  Object {
    "cache": LRUCache [],
    "delete": "expire",
    "key": 2,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [],
    "get": "stale",
    "key": 2,
    "now": 13044,
    "op": "get",
    "remainingTTL": -1,
    "start": 12943,
    "ttl": 100,
  },
  Object {
    "cache": LRUCache [],
    "key": 0,
    "now": 13044,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 13044,
    "ttl": 10,
    "value": 0,
  },
  Object {
    "cache": LRUCache [],
    "key": 1,
    "now": 13044,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 13044,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "key": 2,
    "now": 13044,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 13044,
    "ttl": 10,
    "value": 2,
  },
  Object {
    "cache": LRUCache [],
    "key": 3,
    "now": 13044,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 13044,
    "ttl": 10,
    "value": 3,
  },
  Object {
    "cache": LRUCache [],
    "key": 4,
    "now": 13044,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 13044,
    "ttl": 10,
    "value": 4,
  },
  Object {
    "cache": LRUCache [],
    "key": 5,
    "now": 13044,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 13044,
    "ttl": 10,
    "value": 5,
  },
  Object {
    "cache": LRUCache [],
    "key": 6,
    "now": 13044,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 13044,
    "ttl": 10,
    "value": 6,
  },
  Object {
    "cache": LRUCache [],
    "key": 7,
    "now": 13044,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 13044,
    "ttl": 10,
    "value": 7,
  },
  Object {
    "cache": LRUCache [],
    "key": 8,
    "now": 13044,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 13044,
    "ttl": 10,
    "value": 8,
  },
  Object {
    "cache": LRUCache [],
    "has": "stale",
    "key": 4,
    "now": 13055,
    "op": "has",
    "remainingTTL": -1,
    "start": 13044,
    "ttl": 10,
  },
  Object {
    "cache": LRUCache [],
    "delete": "expire",
    "key": 4,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [],
    "get": "stale",
    "key": 4,
    "now": 13055,
    "op": "get",
    "remainingTTL": -1,
    "start": 13044,
    "ttl": 10,
  },
]
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > tests using Date.now() > ttl on set, not on cache traces 1`] = `
Map {}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > tests using Date.now() > ttl tests defaults metrics 1`] = `
Array [
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "key": 1,
    "now": 12485,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 12485,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "get": "hit",
    "key": 1,
    "now": 12485,
    "op": "get",
    "remainingTTL": 10,
    "start": 12485,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "get": "hit",
    "key": 1,
    "now": 12490,
    "op": "get",
    "remainingTTL": 5,
    "start": 12485,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "get": "hit",
    "key": 1,
    "now": 12495,
    "op": "get",
    "remainingTTL": 0,
    "start": 12485,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "has": "stale",
    "key": 1,
    "now": 12497,
    "op": "has",
    "remainingTTL": -2,
    "start": 12485,
    "ttl": 10,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "delete": "expire",
    "key": 1,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "get": "stale",
    "key": 1,
    "now": 12497,
    "op": "get",
    "remainingTTL": -2,
    "start": 12485,
    "ttl": 10,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "key": 2,
    "now": 12497,
    "op": "set",
    "remainingTTL": 100,
    "set": "add",
    "start": 12497,
    "ttl": 100,
    "value": 2,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "has": "hit",
    "key": 2,
    "now": 12547,
    "op": "has",
    "remainingTTL": 50,
    "start": 12497,
    "ttl": 100,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "get": "hit",
    "key": 2,
    "now": 12547,
    "op": "get",
    "remainingTTL": 50,
    "start": 12497,
    "ttl": 100,
    "value": 2,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "has": "stale",
    "key": 2,
    "now": 12598,
    "op": "has",
    "remainingTTL": -1,
    "start": 12497,
    "ttl": 100,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "delete": "expire",
    "key": 2,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "get": "stale",
    "key": 2,
    "now": 12598,
    "op": "get",
    "remainingTTL": -1,
    "start": 12497,
    "ttl": 100,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "key": 0,
    "now": 12598,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 12598,
    "ttl": 10,
    "value": 0,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "key": 1,
    "now": 12598,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 12598,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "key": 2,
    "now": 12598,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 12598,
    "ttl": 10,
    "value": 2,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "key": 3,
    "now": 12598,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 12598,
    "ttl": 10,
    "value": 3,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "key": 4,
    "now": 12598,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 12598,
    "ttl": 10,
    "value": 4,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "key": 5,
    "now": 12598,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 12598,
    "ttl": 10,
    "value": 5,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "key": 6,
    "now": 12598,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 12598,
    "ttl": 10,
    "value": 6,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "key": 7,
    "now": 12598,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 12598,
    "ttl": 10,
    "value": 7,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "key": 8,
    "now": 12598,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 12598,
    "ttl": 10,
    "value": 8,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "key": 4,
    "op": "peek",
    "peek": "stale",
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "has": "stale",
    "key": 4,
    "now": 12609,
    "op": "has",
    "remainingTTL": -1,
    "start": 12598,
    "ttl": 10,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "delete": "expire",
    "key": 4,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "get": "stale",
    "key": 4,
    "now": 12609,
    "op": "get",
    "remainingTTL": -1,
    "start": 12598,
    "ttl": 10,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "key": "immortal",
    "op": "set",
    "set": "add",
    "value": true,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "get": "hit",
    "key": "immortal",
    "op": "get",
    "value": true,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "get": "hit",
    "key": "immortal",
    "op": "get",
    "value": true,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "get": "hit",
    "key": "immortal",
    "op": "get",
    "value": true,
  },
]
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > tests using Date.now() > ttl tests defaults traces 1`] = `
Map {}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > tests using Date.now() > ttl tests with ttlResolution=100 metrics 1`] = `
Array [
  Object {
    "cache": LRUCache [],
    "key": 1,
    "now": 12809,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 12809,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "get": "hit",
    "key": 1,
    "now": 12809,
    "op": "get",
    "remainingTTL": 10,
    "start": 12809,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "get": "hit",
    "key": 1,
    "now": 12809,
    "op": "get",
    "remainingTTL": 10,
    "start": 12809,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "get": "hit",
    "key": 1,
    "now": 12809,
    "op": "get",
    "remainingTTL": 10,
    "start": 12809,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "has": "hit",
    "key": 1,
    "now": 12809,
    "op": "has",
    "remainingTTL": 10,
    "start": 12809,
    "ttl": 10,
  },
  Object {
    "cache": LRUCache [],
    "get": "hit",
    "key": 1,
    "now": 12809,
    "op": "get",
    "remainingTTL": 10,
    "start": 12809,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "has": "stale",
    "key": 1,
    "now": 12920,
    "op": "has",
    "remainingTTL": -101,
    "start": 12809,
    "ttl": 10,
  },
  Object {
    "cache": LRUCache [],
    "delete": "expire",
    "key": 1,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [],
    "get": "stale",
    "key": 1,
    "now": 12920,
    "op": "get",
    "remainingTTL": -101,
    "start": 12809,
    "ttl": 10,
  },
]
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > tests using Date.now() > ttl tests with ttlResolution=100 traces 1`] = `
Map {}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > tests using Date.now() > ttl with allowStale metrics 1`] = `
Array [
  Object {
    "cache": LRUCache [
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
    ],
    "key": 1,
    "now": 13055,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 13055,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
    ],
    "get": "hit",
    "key": 1,
    "now": 13055,
    "op": "get",
    "remainingTTL": 10,
    "start": 13055,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
    ],
    "get": "hit",
    "key": 1,
    "now": 13060,
    "op": "get",
    "remainingTTL": 5,
    "start": 13055,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
    ],
    "get": "hit",
    "key": 1,
    "now": 13065,
    "op": "get",
    "remainingTTL": 0,
    "start": 13055,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
    ],
    "has": "stale",
    "key": 1,
    "now": 13066,
    "op": "has",
    "remainingTTL": -1,
    "start": 13055,
    "ttl": 10,
  },
  Object {
    "cache": LRUCache [
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
    ],
    "get": "stale",
    "key": 1,
    "now": 13066,
    "op": "get",
    "remainingTTL": -1,
    "returnedStale": true,
    "start": 13055,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
    ],
    "delete": "expire",
    "key": 1,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
    ],
    "get": "stale",
    "key": 1,
    "now": 13066,
    "op": "get",
    "remainingTTL": -1,
    "returnedStale": true,
    "start": 13055,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
    ],
    "get": "miss",
    "key": 1,
    "op": "get",
  },
  Object {
    "cache": LRUCache [
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
    ],
    "key": 2,
    "now": 13066,
    "op": "set",
    "remainingTTL": 100,
    "set": "add",
    "start": 13066,
    "ttl": 100,
    "value": 2,
  },
  Object {
    "cache": LRUCache [
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
    ],
    "has": "hit",
    "key": 2,
    "now": 13116,
    "op": "has",
    "remainingTTL": 50,
    "start": 13066,
    "ttl": 100,
  },
  Object {
    "cache": LRUCache [
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
    ],
    "get": "hit",
    "key": 2,
    "now": 13116,
    "op": "get",
    "remainingTTL": 50,
    "start": 13066,
    "ttl": 100,
    "value": 2,
  },
  Object {
    "cache": LRUCache [
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
    ],
    "has": "stale",
    "key": 2,
    "now": 13167,
    "op": "has",
    "remainingTTL": -1,
    "start": 13066,
    "ttl": 100,
  },
  Object {
    "cache": LRUCache [
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
    ],
    "delete": "expire",
    "key": 2,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
    ],
    "get": "stale",
    "key": 2,
    "now": 13167,
    "op": "get",
    "remainingTTL": -1,
    "returnedStale": true,
    "start": 13066,
    "ttl": 100,
    "value": 2,
  },
  Object {
    "cache": LRUCache [
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
    ],
    "get": "miss",
    "key": 2,
    "op": "get",
  },
  Object {
    "cache": LRUCache [
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
    ],
    "key": 0,
    "now": 13167,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 13167,
    "ttl": 10,
    "value": 0,
  },
  Object {
    "cache": LRUCache [
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
    ],
    "key": 1,
    "now": 13167,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 13167,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
    ],
    "key": 2,
    "now": 13167,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 13167,
    "ttl": 10,
    "value": 2,
  },
  Object {
    "cache": LRUCache [
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
    ],
    "key": 3,
    "now": 13167,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 13167,
    "ttl": 10,
    "value": 3,
  },
  Object {
    "cache": LRUCache [
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
    ],
    "key": 4,
    "now": 13167,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 13167,
    "ttl": 10,
    "value": 4,
  },
  Object {
    "cache": LRUCache [
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
    ],
    "key": 5,
    "now": 13167,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 13167,
    "ttl": 10,
    "value": 5,
  },
  Object {
    "cache": LRUCache [
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
    ],
    "key": 6,
    "now": 13167,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 13167,
    "ttl": 10,
    "value": 6,
  },
  Object {
    "cache": LRUCache [
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
    ],
    "key": 7,
    "now": 13167,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 13167,
    "ttl": 10,
    "value": 7,
  },
  Object {
    "cache": LRUCache [
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
    ],
    "key": 8,
    "now": 13167,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 13167,
    "ttl": 10,
    "value": 8,
  },
  Object {
    "cache": LRUCache [
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
    ],
    "has": "stale",
    "key": 4,
    "now": 13178,
    "op": "has",
    "remainingTTL": -1,
    "start": 13167,
    "ttl": 10,
  },
  Object {
    "cache": LRUCache [
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
    ],
    "delete": "expire",
    "key": 4,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
    ],
    "get": "stale",
    "key": 4,
    "now": 13178,
    "op": "get",
    "remainingTTL": -1,
    "returnedStale": true,
    "start": 13167,
    "ttl": 10,
    "value": 4,
  },
  Object {
    "cache": LRUCache [
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
    ],
    "get": "miss",
    "key": 4,
    "op": "get",
  },
]
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > tests using Date.now() > ttl with allowStale traces 1`] = `
Map {}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > tests using Date.now() > ttl with updateAgeOnGet/updateAgeOnHas metrics 1`] = `
Array [
  Object {
    "cache": LRUCache [],
    "key": 1,
    "now": 13178,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 13178,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "get": "hit",
    "key": 1,
    "now": 13178,
    "op": "get",
    "remainingTTL": 10,
    "start": 13178,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "has": "hit",
    "key": 1,
    "now": 13183,
    "op": "has",
    "remainingTTL": 10,
    "start": 13183,
    "ttl": 10,
  },
  Object {
    "cache": LRUCache [],
    "get": "hit",
    "key": 1,
    "now": 13188,
    "op": "get",
    "remainingTTL": 5,
    "start": 13183,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "has": "hit",
    "key": 1,
    "now": 13189,
    "op": "has",
    "remainingTTL": 10,
    "start": 13189,
    "ttl": 10,
  },
  Object {
    "cache": LRUCache [],
    "get": "hit",
    "key": 1,
    "now": 13189,
    "op": "get",
    "remainingTTL": 10,
    "start": 13189,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "key": 2,
    "now": 13189,
    "op": "set",
    "remainingTTL": 100,
    "set": "add",
    "start": 13189,
    "ttl": 100,
    "value": 2,
  },
  Object {
    "cache": LRUCache [],
    "has": "hit",
    "key": 2,
    "now": 13239,
    "op": "has",
    "remainingTTL": 100,
    "start": 13239,
    "ttl": 100,
  },
  Object {
    "cache": LRUCache [],
    "get": "hit",
    "key": 2,
    "now": 13239,
    "op": "get",
    "remainingTTL": 100,
    "start": 13239,
    "ttl": 100,
    "value": 2,
  },
  Object {
    "cache": LRUCache [],
    "has": "hit",
    "key": 2,
    "now": 13289,
    "op": "has",
    "remainingTTL": 100,
    "start": 13289,
    "ttl": 100,
  },
  Object {
    "cache": LRUCache [],
    "get": "hit",
    "key": 2,
    "now": 13289,
    "op": "get",
    "remainingTTL": 100,
    "start": 13289,
    "ttl": 100,
    "value": 2,
  },
  Object {
    "cache": LRUCache [],
    "has": "hit",
    "key": 2,
    "now": 13339,
    "op": "has",
    "remainingTTL": 100,
    "start": 13339,
    "ttl": 100,
  },
  Object {
    "cache": LRUCache [],
    "get": "hit",
    "key": 2,
    "now": 13339,
    "op": "get",
    "remainingTTL": 100,
    "start": 13339,
    "ttl": 100,
    "value": 2,
  },
  Object {
    "cache": LRUCache [],
    "has": "hit",
    "key": 2,
    "now": 13389,
    "op": "has",
    "remainingTTL": 100,
    "start": 13389,
    "ttl": 100,
  },
  Object {
    "cache": LRUCache [],
    "get": "hit",
    "key": 2,
    "now": 13389,
    "op": "get",
    "remainingTTL": 100,
    "start": 13389,
    "ttl": 100,
    "value": 2,
  },
  Object {
    "cache": LRUCache [],
    "has": "hit",
    "key": 2,
    "now": 13439,
    "op": "has",
    "remainingTTL": 100,
    "start": 13439,
    "ttl": 100,
  },
  Object {
    "cache": LRUCache [],
    "get": "hit",
    "key": 2,
    "now": 13439,
    "op": "get",
    "remainingTTL": 100,
    "start": 13439,
    "ttl": 100,
    "value": 2,
  },
  Object {
    "cache": LRUCache [],
    "has": "hit",
    "key": 2,
    "now": 13489,
    "op": "has",
    "remainingTTL": 100,
    "start": 13489,
    "ttl": 100,
  },
  Object {
    "cache": LRUCache [],
    "get": "hit",
    "key": 2,
    "now": 13489,
    "op": "get",
    "remainingTTL": 100,
    "start": 13489,
    "ttl": 100,
    "value": 2,
  },
  Object {
    "cache": LRUCache [],
    "has": "hit",
    "key": 2,
    "now": 13539,
    "op": "has",
    "remainingTTL": 100,
    "start": 13539,
    "ttl": 100,
  },
  Object {
    "cache": LRUCache [],
    "get": "hit",
    "key": 2,
    "now": 13539,
    "op": "get",
    "remainingTTL": 100,
    "start": 13539,
    "ttl": 100,
    "value": 2,
  },
  Object {
    "cache": LRUCache [],
    "has": "hit",
    "key": 2,
    "now": 13589,
    "op": "has",
    "remainingTTL": 100,
    "start": 13589,
    "ttl": 100,
  },
  Object {
    "cache": LRUCache [],
    "get": "hit",
    "key": 2,
    "now": 13589,
    "op": "get",
    "remainingTTL": 100,
    "start": 13589,
    "ttl": 100,
    "value": 2,
  },
  Object {
    "cache": LRUCache [],
    "has": "hit",
    "key": 2,
    "now": 13639,
    "op": "has",
    "remainingTTL": 100,
    "start": 13639,
    "ttl": 100,
  },
  Object {
    "cache": LRUCache [],
    "get": "hit",
    "key": 2,
    "now": 13639,
    "op": "get",
    "remainingTTL": 100,
    "start": 13639,
    "ttl": 100,
    "value": 2,
  },
  Object {
    "cache": LRUCache [],
    "has": "hit",
    "key": 2,
    "now": 13689,
    "op": "has",
    "remainingTTL": 100,
    "start": 13689,
    "ttl": 100,
  },
  Object {
    "cache": LRUCache [],
    "get": "hit",
    "key": 2,
    "now": 13689,
    "op": "get",
    "remainingTTL": 100,
    "start": 13689,
    "ttl": 100,
    "value": 2,
  },
  Object {
    "cache": LRUCache [],
    "has": "stale",
    "key": 2,
    "now": 13790,
    "op": "has",
    "remainingTTL": -1,
    "start": 13689,
    "ttl": 100,
  },
  Object {
    "cache": LRUCache [],
    "delete": "expire",
    "key": 2,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [],
    "get": "stale",
    "key": 2,
    "now": 13790,
    "op": "get",
    "remainingTTL": -1,
    "start": 13689,
    "ttl": 100,
  },
  Object {
    "cache": LRUCache [],
    "key": 0,
    "now": 13790,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 13790,
    "ttl": 10,
    "value": 0,
  },
  Object {
    "cache": LRUCache [],
    "key": 1,
    "now": 13790,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 13790,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "key": 2,
    "now": 13790,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 13790,
    "ttl": 10,
    "value": 2,
  },
  Object {
    "cache": LRUCache [],
    "key": 3,
    "now": 13790,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 13790,
    "ttl": 10,
    "value": 3,
  },
  Object {
    "cache": LRUCache [],
    "key": 4,
    "now": 13790,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 13790,
    "ttl": 10,
    "value": 4,
  },
  Object {
    "cache": LRUCache [],
    "key": 5,
    "now": 13790,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 13790,
    "ttl": 10,
    "value": 5,
  },
  Object {
    "cache": LRUCache [],
    "key": 6,
    "now": 13790,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 13790,
    "ttl": 10,
    "value": 6,
  },
  Object {
    "cache": LRUCache [],
    "key": 7,
    "now": 13790,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 13790,
    "ttl": 10,
    "value": 7,
  },
  Object {
    "cache": LRUCache [],
    "key": 8,
    "now": 13790,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 13790,
    "ttl": 10,
    "value": 8,
  },
  Object {
    "cache": LRUCache [],
    "has": "miss",
    "key": 3,
    "op": "has",
  },
  Object {
    "cache": LRUCache [],
    "get": "miss",
    "key": 3,
    "op": "get",
  },
  Object {
    "cache": LRUCache [],
    "has": "stale",
    "key": 4,
    "now": 13801,
    "op": "has",
    "remainingTTL": -1,
    "start": 13790,
    "ttl": 10,
  },
  Object {
    "cache": LRUCache [],
    "delete": "expire",
    "key": 4,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [],
    "get": "stale",
    "key": 4,
    "now": 13801,
    "op": "get",
    "remainingTTL": -1,
    "start": 13790,
    "ttl": 10,
  },
]
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > tests using Date.now() > ttl with updateAgeOnGet/updateAgeOnHas traces 1`] = `
Map {}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > tests using Date.now() > ttlAutopurge metrics 1`] = `
Array [
  Object {
    "cache": LRUCache [],
    "key": 1,
    "now": 12920,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 12920,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "key": 2,
    "now": 12920,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 12920,
    "ttl": 10,
    "value": 2,
  },
  Object {
    "cache": LRUCache [],
    "key": 2,
    "now": 12920,
    "oldValue": 2,
    "op": "set",
    "remainingTTL": 11,
    "set": "replace",
    "start": 12920,
    "ttl": 11,
    "value": 3,
  },
  Object {
    "cache": LRUCache [],
    "delete": "expire",
    "key": 1,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [],
    "delete": "expire",
    "key": 2,
    "op": "delete",
  },
]
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > tests using Date.now() > ttlAutopurge traces 1`] = `
Map {}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > tests using Date.now() > ttlResolution only respected if non-negative integer metrics 1`] = `
Array []
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > tests using Date.now() > ttlResolution only respected if non-negative integer traces 1`] = `
Map {}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > tests using Date.now() > updateAgeOnGet + ttlAutopurge: entry eventually purged if not re-accessed metrics 1`] = `
Array [
  Object {
    "cache": LRUCache [],
    "key": "b",
    "now": 14212,
    "op": "set",
    "remainingTTL": 50,
    "set": "add",
    "start": 14212,
    "ttl": 50,
    "value": 2,
  },
  Object {
    "cache": LRUCache [],
    "get": "hit",
    "key": "b",
    "now": 14242,
    "op": "get",
    "remainingTTL": 20,
    "start": 14212,
    "ttl": 50,
    "value": 2,
  },
  Object {
    "cache": LRUCache [],
    "delete": "expire",
    "key": "b",
    "op": "delete",
  },
  Object {
    "cache": LRUCache [],
    "get": "miss",
    "key": "b",
    "op": "get",
  },
]
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > tests using Date.now() > updateAgeOnGet + ttlAutopurge: entry eventually purged if not re-accessed traces 1`] = `
Map {}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > tests using Date.now() > updateAgeOnGet reschedules ttlAutopurge timer metrics 1`] = `
Array [
  Object {
    "cache": LRUCache [],
    "key": "a",
    "now": 14000,
    "op": "set",
    "remainingTTL": 100,
    "set": "add",
    "start": 14000,
    "ttl": 100,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "get": "hit",
    "key": "a",
    "now": 14080,
    "op": "get",
    "remainingTTL": 20,
    "start": 14000,
    "ttl": 100,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "get": "hit",
    "key": "a",
    "now": 14110,
    "op": "get",
    "remainingTTL": 70,
    "start": 14080,
    "ttl": 100,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "delete": "expire",
    "key": "a",
    "op": "delete",
  },
  Object {
    "cache": LRUCache [],
    "get": "miss",
    "key": "a",
    "op": "get",
  },
]
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > tests using Date.now() > updateAgeOnGet reschedules ttlAutopurge timer traces 1`] = `
Map {}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > tests using Date.now() metrics 1`] = `
Array []
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > tests using Date.now() traces 1`] = `
Map {}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > tests with performance.now() > clear() disposes stale entries metrics 1`] = `
Array [
  Object {
    "cache": LRUCache [],
    "key": 0,
    "now": 12139,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 12139,
    "ttl": 10,
    "value": 0,
  },
  Object {
    "cache": LRUCache [],
    "key": 1,
    "now": 12139,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 12139,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "key": 2,
    "now": 12139,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 12139,
    "ttl": 10,
    "value": 2,
  },
  Object {
    "cache": LRUCache [],
    "key": 3,
    "now": 12139,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 12139,
    "ttl": 10,
    "value": 3,
  },
]
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > tests with performance.now() > clear() disposes stale entries traces 1`] = `
Map {}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > tests with performance.now() > indexes/rindexes can walk over stale entries metrics 1`] = `
Array [
  Object {
    "cache": LRUCache [
      Array [
        3,
        3,
      ],
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
    ],
    "key": 0,
    "now": 12121,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 12121,
    "ttl": 10,
    "value": 0,
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        3,
      ],
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
    ],
    "key": 1,
    "now": 12121,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 12121,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        3,
      ],
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
    ],
    "key": 2,
    "now": 12121,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 12121,
    "ttl": 10,
    "value": 2,
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        3,
      ],
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
    ],
    "key": 3,
    "now": 12130,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 12130,
    "ttl": 10,
    "value": 3,
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        3,
      ],
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
    ],
    "key": 4,
    "now": 12130,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 12130,
    "ttl": 10,
    "value": 4,
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        3,
      ],
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
    ],
    "key": 5,
    "now": 12130,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 12130,
    "ttl": 10,
    "value": 5,
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        3,
      ],
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
    ],
    "key": 6,
    "now": 12130,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 12130,
    "ttl": 10,
    "value": 6,
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        3,
      ],
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
    ],
    "key": 7,
    "now": 12130,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 12130,
    "ttl": 10,
    "value": 7,
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        3,
      ],
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
    ],
    "key": 8,
    "now": 12130,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 12130,
    "ttl": 10,
    "value": 8,
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        3,
      ],
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
    ],
    "key": 9,
    "now": 12130,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 12130,
    "ttl": 10,
    "value": 9,
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        3,
      ],
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
    ],
    "get": "hit",
    "key": 1,
    "now": 12130,
    "op": "get",
    "remainingTTL": 1,
    "start": 12121,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        3,
        3,
      ],
      Array [
        9,
        9,
      ],
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
      Array [
        4,
        4,
      ],
    ],
    "get": "hit",
    "key": 3,
    "now": 12130,
    "op": "get",
    "remainingTTL": 10,
    "start": 12130,
    "ttl": 10,
    "value": 3,
  },
]
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > tests with performance.now() > indexes/rindexes can walk over stale entries traces 1`] = `
Map {}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > tests with performance.now() > no delete on stale get metrics 1`] = `
Array [
  Object {
    "cache": LRUCache [],
    "key": 1,
    "now": 12179,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 12179,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "has": "stale",
    "key": 1,
    "now": 12190,
    "op": "has",
    "remainingTTL": -1,
    "start": 12179,
    "ttl": 10,
  },
  Object {
    "cache": LRUCache [],
    "get": "stale",
    "key": 1,
    "now": 12190,
    "op": "get",
    "remainingTTL": -1,
    "start": 12179,
    "ttl": 10,
  },
  Object {
    "cache": LRUCache [],
    "get": "stale",
    "key": 1,
    "now": 12190,
    "op": "get",
    "remainingTTL": -1,
    "returnedStale": true,
    "start": 12179,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "delete": "expire",
    "key": 1,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [],
    "get": "stale",
    "key": 1,
    "now": 12190,
    "op": "get",
    "remainingTTL": -1,
    "returnedStale": true,
    "start": 12179,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "get": "miss",
    "key": 1,
    "op": "get",
  },
]
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > tests with performance.now() > no delete on stale get traces 1`] = `
Map {}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > tests with performance.now() > no update ttl metrics 1`] = `
Array [
  Object {
    "cache": LRUCache [],
    "key": 0,
    "now": 12094,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 12094,
    "ttl": 10,
    "value": 0,
  },
  Object {
    "cache": LRUCache [],
    "key": 1,
    "now": 12094,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 12094,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "key": 2,
    "now": 12094,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 12094,
    "ttl": 10,
    "value": 2,
  },
  Object {
    "cache": LRUCache [],
    "key": 0,
    "now": 12103,
    "op": "set",
    "remainingTTL": 1,
    "set": "update",
    "start": 12094,
    "ttl": 10,
    "value": 0,
  },
  Object {
    "cache": LRUCache [],
    "key": 1,
    "now": 12103,
    "op": "set",
    "remainingTTL": 10,
    "set": "update",
    "start": 12103,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "delete": "expire",
    "key": 2,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [],
    "delete": "expire",
    "key": 0,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [],
    "get": "miss",
    "key": 2,
    "op": "get",
  },
  Object {
    "cache": LRUCache [],
    "get": "hit",
    "key": 1,
    "now": 12112,
    "op": "get",
    "remainingTTL": 1,
    "start": 12103,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "get": "miss",
    "key": 0,
    "op": "get",
  },
  Object {
    "cache": LRUCache [],
    "delete": "expire",
    "key": 1,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [],
    "get": "miss",
    "key": 1,
    "op": "get",
  },
]
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > tests with performance.now() > no update ttl traces 1`] = `
Map {}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > tests with performance.now() > purge stale items metrics 1`] = `
Array [
  Object {
    "cache": LRUCache [],
    "key": 0,
    "now": 11991,
    "op": "set",
    "remainingTTL": 1,
    "set": "add",
    "start": 11991,
    "ttl": 1,
    "value": 0,
  },
  Object {
    "cache": LRUCache [],
    "key": 1,
    "now": 11991,
    "op": "set",
    "remainingTTL": 2,
    "set": "add",
    "start": 11991,
    "ttl": 2,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "key": 2,
    "now": 11991,
    "op": "set",
    "remainingTTL": 3,
    "set": "add",
    "start": 11991,
    "ttl": 3,
    "value": 2,
  },
  Object {
    "cache": LRUCache [],
    "key": 3,
    "now": 11991,
    "op": "set",
    "remainingTTL": 4,
    "set": "add",
    "start": 11991,
    "ttl": 4,
    "value": 3,
  },
  Object {
    "cache": LRUCache [],
    "key": 4,
    "now": 11991,
    "op": "set",
    "remainingTTL": 5,
    "set": "add",
    "start": 11991,
    "ttl": 5,
    "value": 4,
  },
  Object {
    "cache": LRUCache [],
    "key": 5,
    "now": 11991,
    "op": "set",
    "remainingTTL": 6,
    "set": "add",
    "start": 11991,
    "ttl": 6,
    "value": 5,
  },
  Object {
    "cache": LRUCache [],
    "key": 6,
    "now": 11991,
    "op": "set",
    "remainingTTL": 7,
    "set": "add",
    "start": 11991,
    "ttl": 7,
    "value": 6,
  },
  Object {
    "cache": LRUCache [],
    "key": 7,
    "now": 11991,
    "op": "set",
    "remainingTTL": 8,
    "set": "add",
    "start": 11991,
    "ttl": 8,
    "value": 7,
  },
  Object {
    "cache": LRUCache [],
    "key": 8,
    "now": 11991,
    "op": "set",
    "remainingTTL": 9,
    "set": "add",
    "start": 11991,
    "ttl": 9,
    "value": 8,
  },
  Object {
    "cache": LRUCache [],
    "key": 9,
    "now": 11991,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 11991,
    "ttl": 10,
    "value": 9,
  },
  Object {
    "cache": LRUCache [],
    "delete": "expire",
    "key": 0,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [],
    "delete": "expire",
    "key": 1,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [],
    "delete": "expire",
    "key": 2,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [],
    "delete": "expire",
    "key": 3,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [],
    "delete": "expire",
    "key": 4,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [],
    "delete": "expire",
    "key": 5,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [],
    "delete": "expire",
    "key": 6,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [],
    "delete": "expire",
    "key": 7,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [],
    "delete": "expire",
    "key": 8,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [],
    "delete": "expire",
    "key": 9,
    "op": "delete",
  },
]
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > tests with performance.now() > purge stale items traces 1`] = `
Map {}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > tests with performance.now() > purgeStale() lockup metrics 1`] = `
Array [
  Object {
    "cache": LRUCache [],
    "key": 1,
    "now": 12159,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 12159,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "key": 2,
    "now": 12159,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 12159,
    "ttl": 10,
    "value": 2,
  },
  Object {
    "cache": LRUCache [],
    "key": 3,
    "now": 12159,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 12159,
    "ttl": 10,
    "value": 3,
  },
  Object {
    "cache": LRUCache [],
    "get": "hit",
    "key": 2,
    "now": 12164,
    "op": "get",
    "remainingTTL": 5,
    "start": 12159,
    "ttl": 10,
    "value": 2,
  },
  Object {
    "cache": LRUCache [],
    "delete": "expire",
    "key": 1,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [],
    "delete": "expire",
    "key": 3,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [],
    "delete": "expire",
    "key": 2,
    "op": "delete",
  },
]
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > tests with performance.now() > purgeStale() lockup traces 1`] = `
Map {}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > tests with performance.now() > set item pre-stale metrics 1`] = `
Array [
  Object {
    "cache": LRUCache [
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 1,
    "now": 12179,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 12179,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "has": "hit",
    "key": 1,
    "now": 12179,
    "op": "has",
    "remainingTTL": 10,
    "start": 12179,
    "ttl": 10,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "get": "hit",
    "key": 1,
    "now": 12179,
    "op": "get",
    "remainingTTL": 10,
    "start": 12179,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 2,
    "now": 12179,
    "op": "set",
    "remainingTTL": -1,
    "set": "add",
    "start": 12168,
    "ttl": 10,
    "value": 2,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "has": "stale",
    "key": 2,
    "now": 12179,
    "op": "has",
    "remainingTTL": -1,
    "start": 12168,
    "ttl": 10,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "delete": "expire",
    "key": 2,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "get": "stale",
    "key": 2,
    "now": 12179,
    "op": "get",
    "remainingTTL": -1,
    "returnedStale": true,
    "start": 12168,
    "ttl": 10,
    "value": 2,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "get": "miss",
    "key": 2,
    "op": "get",
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 2,
    "now": 12179,
    "op": "set",
    "remainingTTL": -1,
    "set": "add",
    "start": 12168,
    "ttl": 10,
    "value": 2,
  },
  Object {
    "cache": LRUCache [
      Array [
        1,
        1,
      ],
    ],
    "has": "stale",
    "key": 2,
    "now": 12179,
    "op": "has",
    "remainingTTL": -1,
    "start": 12168,
    "ttl": 10,
  },
  Object {
    "cache": LRUCache [
      Array [
        1,
        1,
      ],
    ],
    "delete": "expire",
    "key": 2,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [
      Array [
        1,
        1,
      ],
    ],
    "get": "stale",
    "key": 2,
    "now": 12179,
    "op": "get",
    "remainingTTL": -1,
    "returnedStale": true,
    "start": 12168,
    "ttl": 10,
    "value": 2,
  },
  Object {
    "cache": LRUCache [
      Array [
        1,
        1,
      ],
    ],
    "get": "miss",
    "key": 2,
    "op": "get",
  },
]
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > tests with performance.now() > set item pre-stale traces 1`] = `
Map {}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > tests with performance.now() > ttl on set, not on cache metrics 1`] = `
Array [
  Object {
    "cache": LRUCache [],
    "key": 1,
    "now": 11122,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 11122,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "get": "hit",
    "key": 1,
    "now": 11122,
    "op": "get",
    "remainingTTL": 10,
    "start": 11122,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "get": "hit",
    "key": 1,
    "now": 11127,
    "op": "get",
    "remainingTTL": 5,
    "start": 11122,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "get": "hit",
    "key": 1,
    "now": 11132,
    "op": "get",
    "remainingTTL": 0,
    "start": 11122,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "has": "stale",
    "key": 1,
    "now": 11133,
    "op": "has",
    "remainingTTL": -1,
    "start": 11122,
    "ttl": 10,
  },
  Object {
    "cache": LRUCache [],
    "delete": "expire",
    "key": 1,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [],
    "get": "stale",
    "key": 1,
    "now": 11133,
    "op": "get",
    "remainingTTL": -1,
    "start": 11122,
    "ttl": 10,
  },
  Object {
    "cache": LRUCache [],
    "key": 2,
    "now": 11133,
    "op": "set",
    "remainingTTL": 100,
    "set": "add",
    "start": 11133,
    "ttl": 100,
    "value": 2,
  },
  Object {
    "cache": LRUCache [],
    "has": "hit",
    "key": 2,
    "now": 11183,
    "op": "has",
    "remainingTTL": 50,
    "start": 11133,
    "ttl": 100,
  },
  Object {
    "cache": LRUCache [],
    "get": "hit",
    "key": 2,
    "now": 11183,
    "op": "get",
    "remainingTTL": 50,
    "start": 11133,
    "ttl": 100,
    "value": 2,
  },
  Object {
    "cache": LRUCache [],
    "has": "stale",
    "key": 2,
    "now": 11234,
    "op": "has",
    "remainingTTL": -1,
    "start": 11133,
    "ttl": 100,
  },
  Object {
    "cache": LRUCache [],
    "delete": "expire",
    "key": 2,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [],
    "get": "stale",
    "key": 2,
    "now": 11234,
    "op": "get",
    "remainingTTL": -1,
    "start": 11133,
    "ttl": 100,
  },
  Object {
    "cache": LRUCache [],
    "key": 0,
    "now": 11234,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 11234,
    "ttl": 10,
    "value": 0,
  },
  Object {
    "cache": LRUCache [],
    "key": 1,
    "now": 11234,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 11234,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "key": 2,
    "now": 11234,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 11234,
    "ttl": 10,
    "value": 2,
  },
  Object {
    "cache": LRUCache [],
    "key": 3,
    "now": 11234,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 11234,
    "ttl": 10,
    "value": 3,
  },
  Object {
    "cache": LRUCache [],
    "key": 4,
    "now": 11234,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 11234,
    "ttl": 10,
    "value": 4,
  },
  Object {
    "cache": LRUCache [],
    "key": 5,
    "now": 11234,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 11234,
    "ttl": 10,
    "value": 5,
  },
  Object {
    "cache": LRUCache [],
    "key": 6,
    "now": 11234,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 11234,
    "ttl": 10,
    "value": 6,
  },
  Object {
    "cache": LRUCache [],
    "key": 7,
    "now": 11234,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 11234,
    "ttl": 10,
    "value": 7,
  },
  Object {
    "cache": LRUCache [],
    "key": 8,
    "now": 11234,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 11234,
    "ttl": 10,
    "value": 8,
  },
  Object {
    "cache": LRUCache [],
    "has": "stale",
    "key": 4,
    "now": 11245,
    "op": "has",
    "remainingTTL": -1,
    "start": 11234,
    "ttl": 10,
  },
  Object {
    "cache": LRUCache [],
    "delete": "expire",
    "key": 4,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [],
    "get": "stale",
    "key": 4,
    "now": 11245,
    "op": "get",
    "remainingTTL": -1,
    "start": 11234,
    "ttl": 10,
  },
]
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > tests with performance.now() > ttl on set, not on cache traces 1`] = `
Map {}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > tests with performance.now() > ttl tests defaults metrics 1`] = `
Array [
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "key": 1,
    "now": 10675,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 10675,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "get": "hit",
    "key": 1,
    "now": 10675,
    "op": "get",
    "remainingTTL": 10,
    "start": 10675,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "get": "hit",
    "key": 1,
    "now": 10680,
    "op": "get",
    "remainingTTL": 5,
    "start": 10675,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "get": "hit",
    "key": 1,
    "now": 10685,
    "op": "get",
    "remainingTTL": 0,
    "start": 10675,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "has": "stale",
    "key": 1,
    "now": 10687,
    "op": "has",
    "remainingTTL": -2,
    "start": 10675,
    "ttl": 10,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "delete": "expire",
    "key": 1,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "get": "stale",
    "key": 1,
    "now": 10687,
    "op": "get",
    "remainingTTL": -2,
    "start": 10675,
    "ttl": 10,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "key": 2,
    "now": 10687,
    "op": "set",
    "remainingTTL": 100,
    "set": "add",
    "start": 10687,
    "ttl": 100,
    "value": 2,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "has": "hit",
    "key": 2,
    "now": 10737,
    "op": "has",
    "remainingTTL": 50,
    "start": 10687,
    "ttl": 100,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "get": "hit",
    "key": 2,
    "now": 10737,
    "op": "get",
    "remainingTTL": 50,
    "start": 10687,
    "ttl": 100,
    "value": 2,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "has": "stale",
    "key": 2,
    "now": 10788,
    "op": "has",
    "remainingTTL": -1,
    "start": 10687,
    "ttl": 100,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "delete": "expire",
    "key": 2,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "get": "stale",
    "key": 2,
    "now": 10788,
    "op": "get",
    "remainingTTL": -1,
    "start": 10687,
    "ttl": 100,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "key": 0,
    "now": 10788,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 10788,
    "ttl": 10,
    "value": 0,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "key": 1,
    "now": 10788,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 10788,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "key": 2,
    "now": 10788,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 10788,
    "ttl": 10,
    "value": 2,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "key": 3,
    "now": 10788,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 10788,
    "ttl": 10,
    "value": 3,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "key": 4,
    "now": 10788,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 10788,
    "ttl": 10,
    "value": 4,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "key": 5,
    "now": 10788,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 10788,
    "ttl": 10,
    "value": 5,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "key": 6,
    "now": 10788,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 10788,
    "ttl": 10,
    "value": 6,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "key": 7,
    "now": 10788,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 10788,
    "ttl": 10,
    "value": 7,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "key": 8,
    "now": 10788,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 10788,
    "ttl": 10,
    "value": 8,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "key": 4,
    "op": "peek",
    "peek": "stale",
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "has": "stale",
    "key": 4,
    "now": 10799,
    "op": "has",
    "remainingTTL": -1,
    "start": 10788,
    "ttl": 10,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "delete": "expire",
    "key": 4,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "get": "stale",
    "key": 4,
    "now": 10799,
    "op": "get",
    "remainingTTL": -1,
    "start": 10788,
    "ttl": 10,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "key": "immortal",
    "op": "set",
    "set": "add",
    "value": true,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "get": "hit",
    "key": "immortal",
    "op": "get",
    "value": true,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "get": "hit",
    "key": "immortal",
    "op": "get",
    "value": true,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "get": "hit",
    "key": "immortal",
    "op": "get",
    "value": true,
  },
]
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > tests with performance.now() > ttl tests defaults traces 1`] = `
Map {}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > tests with performance.now() > ttl tests with ttlResolution=100 metrics 1`] = `
Array [
  Object {
    "cache": LRUCache [],
    "key": 1,
    "now": 10999,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 10999,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "get": "hit",
    "key": 1,
    "now": 10999,
    "op": "get",
    "remainingTTL": 10,
    "start": 10999,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "get": "hit",
    "key": 1,
    "now": 10999,
    "op": "get",
    "remainingTTL": 10,
    "start": 10999,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "get": "hit",
    "key": 1,
    "now": 10999,
    "op": "get",
    "remainingTTL": 10,
    "start": 10999,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "has": "hit",
    "key": 1,
    "now": 10999,
    "op": "has",
    "remainingTTL": 10,
    "start": 10999,
    "ttl": 10,
  },
  Object {
    "cache": LRUCache [],
    "get": "hit",
    "key": 1,
    "now": 10999,
    "op": "get",
    "remainingTTL": 10,
    "start": 10999,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "has": "stale",
    "key": 1,
    "now": 11110,
    "op": "has",
    "remainingTTL": -101,
    "start": 10999,
    "ttl": 10,
  },
  Object {
    "cache": LRUCache [],
    "delete": "expire",
    "key": 1,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [],
    "get": "stale",
    "key": 1,
    "now": 11110,
    "op": "get",
    "remainingTTL": -101,
    "start": 10999,
    "ttl": 10,
  },
]
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > tests with performance.now() > ttl tests with ttlResolution=100 traces 1`] = `
Map {}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > tests with performance.now() > ttl with allowStale metrics 1`] = `
Array [
  Object {
    "cache": LRUCache [
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
    ],
    "key": 1,
    "now": 11245,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 11245,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
    ],
    "get": "hit",
    "key": 1,
    "now": 11245,
    "op": "get",
    "remainingTTL": 10,
    "start": 11245,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
    ],
    "get": "hit",
    "key": 1,
    "now": 11250,
    "op": "get",
    "remainingTTL": 5,
    "start": 11245,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
    ],
    "get": "hit",
    "key": 1,
    "now": 11255,
    "op": "get",
    "remainingTTL": 0,
    "start": 11245,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
    ],
    "has": "stale",
    "key": 1,
    "now": 11256,
    "op": "has",
    "remainingTTL": -1,
    "start": 11245,
    "ttl": 10,
  },
  Object {
    "cache": LRUCache [
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
    ],
    "get": "stale",
    "key": 1,
    "now": 11256,
    "op": "get",
    "remainingTTL": -1,
    "returnedStale": true,
    "start": 11245,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
    ],
    "delete": "expire",
    "key": 1,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
    ],
    "get": "stale",
    "key": 1,
    "now": 11256,
    "op": "get",
    "remainingTTL": -1,
    "returnedStale": true,
    "start": 11245,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
    ],
    "get": "miss",
    "key": 1,
    "op": "get",
  },
  Object {
    "cache": LRUCache [
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
    ],
    "key": 2,
    "now": 11256,
    "op": "set",
    "remainingTTL": 100,
    "set": "add",
    "start": 11256,
    "ttl": 100,
    "value": 2,
  },
  Object {
    "cache": LRUCache [
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
    ],
    "has": "hit",
    "key": 2,
    "now": 11306,
    "op": "has",
    "remainingTTL": 50,
    "start": 11256,
    "ttl": 100,
  },
  Object {
    "cache": LRUCache [
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
    ],
    "get": "hit",
    "key": 2,
    "now": 11306,
    "op": "get",
    "remainingTTL": 50,
    "start": 11256,
    "ttl": 100,
    "value": 2,
  },
  Object {
    "cache": LRUCache [
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
    ],
    "has": "stale",
    "key": 2,
    "now": 11357,
    "op": "has",
    "remainingTTL": -1,
    "start": 11256,
    "ttl": 100,
  },
  Object {
    "cache": LRUCache [
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
    ],
    "delete": "expire",
    "key": 2,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
    ],
    "get": "stale",
    "key": 2,
    "now": 11357,
    "op": "get",
    "remainingTTL": -1,
    "returnedStale": true,
    "start": 11256,
    "ttl": 100,
    "value": 2,
  },
  Object {
    "cache": LRUCache [
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
    ],
    "get": "miss",
    "key": 2,
    "op": "get",
  },
  Object {
    "cache": LRUCache [
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
    ],
    "key": 0,
    "now": 11357,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 11357,
    "ttl": 10,
    "value": 0,
  },
  Object {
    "cache": LRUCache [
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
    ],
    "key": 1,
    "now": 11357,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 11357,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
    ],
    "key": 2,
    "now": 11357,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 11357,
    "ttl": 10,
    "value": 2,
  },
  Object {
    "cache": LRUCache [
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
    ],
    "key": 3,
    "now": 11357,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 11357,
    "ttl": 10,
    "value": 3,
  },
  Object {
    "cache": LRUCache [
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
    ],
    "key": 4,
    "now": 11357,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 11357,
    "ttl": 10,
    "value": 4,
  },
  Object {
    "cache": LRUCache [
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
    ],
    "key": 5,
    "now": 11357,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 11357,
    "ttl": 10,
    "value": 5,
  },
  Object {
    "cache": LRUCache [
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
    ],
    "key": 6,
    "now": 11357,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 11357,
    "ttl": 10,
    "value": 6,
  },
  Object {
    "cache": LRUCache [
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
    ],
    "key": 7,
    "now": 11357,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 11357,
    "ttl": 10,
    "value": 7,
  },
  Object {
    "cache": LRUCache [
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
    ],
    "key": 8,
    "now": 11357,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 11357,
    "ttl": 10,
    "value": 8,
  },
  Object {
    "cache": LRUCache [
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
    ],
    "has": "stale",
    "key": 4,
    "now": 11368,
    "op": "has",
    "remainingTTL": -1,
    "start": 11357,
    "ttl": 10,
  },
  Object {
    "cache": LRUCache [
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
    ],
    "delete": "expire",
    "key": 4,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
    ],
    "get": "stale",
    "key": 4,
    "now": 11368,
    "op": "get",
    "remainingTTL": -1,
    "returnedStale": true,
    "start": 11357,
    "ttl": 10,
    "value": 4,
  },
  Object {
    "cache": LRUCache [
      Array [
        8,
        8,
      ],
      Array [
        7,
        7,
      ],
      Array [
        6,
        6,
      ],
      Array [
        5,
        5,
      ],
    ],
    "get": "miss",
    "key": 4,
    "op": "get",
  },
]
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > tests with performance.now() > ttl with allowStale traces 1`] = `
Map {}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > tests with performance.now() > ttl with updateAgeOnGet/updateAgeOnHas metrics 1`] = `
Array [
  Object {
    "cache": LRUCache [],
    "key": 1,
    "now": 11368,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 11368,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "get": "hit",
    "key": 1,
    "now": 11368,
    "op": "get",
    "remainingTTL": 10,
    "start": 11368,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "has": "hit",
    "key": 1,
    "now": 11373,
    "op": "has",
    "remainingTTL": 10,
    "start": 11373,
    "ttl": 10,
  },
  Object {
    "cache": LRUCache [],
    "get": "hit",
    "key": 1,
    "now": 11378,
    "op": "get",
    "remainingTTL": 5,
    "start": 11373,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "has": "hit",
    "key": 1,
    "now": 11379,
    "op": "has",
    "remainingTTL": 10,
    "start": 11379,
    "ttl": 10,
  },
  Object {
    "cache": LRUCache [],
    "get": "hit",
    "key": 1,
    "now": 11379,
    "op": "get",
    "remainingTTL": 10,
    "start": 11379,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "key": 2,
    "now": 11379,
    "op": "set",
    "remainingTTL": 100,
    "set": "add",
    "start": 11379,
    "ttl": 100,
    "value": 2,
  },
  Object {
    "cache": LRUCache [],
    "has": "hit",
    "key": 2,
    "now": 11429,
    "op": "has",
    "remainingTTL": 100,
    "start": 11429,
    "ttl": 100,
  },
  Object {
    "cache": LRUCache [],
    "get": "hit",
    "key": 2,
    "now": 11429,
    "op": "get",
    "remainingTTL": 100,
    "start": 11429,
    "ttl": 100,
    "value": 2,
  },
  Object {
    "cache": LRUCache [],
    "has": "hit",
    "key": 2,
    "now": 11479,
    "op": "has",
    "remainingTTL": 100,
    "start": 11479,
    "ttl": 100,
  },
  Object {
    "cache": LRUCache [],
    "get": "hit",
    "key": 2,
    "now": 11479,
    "op": "get",
    "remainingTTL": 100,
    "start": 11479,
    "ttl": 100,
    "value": 2,
  },
  Object {
    "cache": LRUCache [],
    "has": "hit",
    "key": 2,
    "now": 11529,
    "op": "has",
    "remainingTTL": 100,
    "start": 11529,
    "ttl": 100,
  },
  Object {
    "cache": LRUCache [],
    "get": "hit",
    "key": 2,
    "now": 11529,
    "op": "get",
    "remainingTTL": 100,
    "start": 11529,
    "ttl": 100,
    "value": 2,
  },
  Object {
    "cache": LRUCache [],
    "has": "hit",
    "key": 2,
    "now": 11579,
    "op": "has",
    "remainingTTL": 100,
    "start": 11579,
    "ttl": 100,
  },
  Object {
    "cache": LRUCache [],
    "get": "hit",
    "key": 2,
    "now": 11579,
    "op": "get",
    "remainingTTL": 100,
    "start": 11579,
    "ttl": 100,
    "value": 2,
  },
  Object {
    "cache": LRUCache [],
    "has": "hit",
    "key": 2,
    "now": 11629,
    "op": "has",
    "remainingTTL": 100,
    "start": 11629,
    "ttl": 100,
  },
  Object {
    "cache": LRUCache [],
    "get": "hit",
    "key": 2,
    "now": 11629,
    "op": "get",
    "remainingTTL": 100,
    "start": 11629,
    "ttl": 100,
    "value": 2,
  },
  Object {
    "cache": LRUCache [],
    "has": "hit",
    "key": 2,
    "now": 11679,
    "op": "has",
    "remainingTTL": 100,
    "start": 11679,
    "ttl": 100,
  },
  Object {
    "cache": LRUCache [],
    "get": "hit",
    "key": 2,
    "now": 11679,
    "op": "get",
    "remainingTTL": 100,
    "start": 11679,
    "ttl": 100,
    "value": 2,
  },
  Object {
    "cache": LRUCache [],
    "has": "hit",
    "key": 2,
    "now": 11729,
    "op": "has",
    "remainingTTL": 100,
    "start": 11729,
    "ttl": 100,
  },
  Object {
    "cache": LRUCache [],
    "get": "hit",
    "key": 2,
    "now": 11729,
    "op": "get",
    "remainingTTL": 100,
    "start": 11729,
    "ttl": 100,
    "value": 2,
  },
  Object {
    "cache": LRUCache [],
    "has": "hit",
    "key": 2,
    "now": 11779,
    "op": "has",
    "remainingTTL": 100,
    "start": 11779,
    "ttl": 100,
  },
  Object {
    "cache": LRUCache [],
    "get": "hit",
    "key": 2,
    "now": 11779,
    "op": "get",
    "remainingTTL": 100,
    "start": 11779,
    "ttl": 100,
    "value": 2,
  },
  Object {
    "cache": LRUCache [],
    "has": "hit",
    "key": 2,
    "now": 11829,
    "op": "has",
    "remainingTTL": 100,
    "start": 11829,
    "ttl": 100,
  },
  Object {
    "cache": LRUCache [],
    "get": "hit",
    "key": 2,
    "now": 11829,
    "op": "get",
    "remainingTTL": 100,
    "start": 11829,
    "ttl": 100,
    "value": 2,
  },
  Object {
    "cache": LRUCache [],
    "has": "hit",
    "key": 2,
    "now": 11879,
    "op": "has",
    "remainingTTL": 100,
    "start": 11879,
    "ttl": 100,
  },
  Object {
    "cache": LRUCache [],
    "get": "hit",
    "key": 2,
    "now": 11879,
    "op": "get",
    "remainingTTL": 100,
    "start": 11879,
    "ttl": 100,
    "value": 2,
  },
  Object {
    "cache": LRUCache [],
    "has": "stale",
    "key": 2,
    "now": 11980,
    "op": "has",
    "remainingTTL": -1,
    "start": 11879,
    "ttl": 100,
  },
  Object {
    "cache": LRUCache [],
    "delete": "expire",
    "key": 2,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [],
    "get": "stale",
    "key": 2,
    "now": 11980,
    "op": "get",
    "remainingTTL": -1,
    "start": 11879,
    "ttl": 100,
  },
  Object {
    "cache": LRUCache [],
    "key": 0,
    "now": 11980,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 11980,
    "ttl": 10,
    "value": 0,
  },
  Object {
    "cache": LRUCache [],
    "key": 1,
    "now": 11980,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 11980,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "key": 2,
    "now": 11980,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 11980,
    "ttl": 10,
    "value": 2,
  },
  Object {
    "cache": LRUCache [],
    "key": 3,
    "now": 11980,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 11980,
    "ttl": 10,
    "value": 3,
  },
  Object {
    "cache": LRUCache [],
    "key": 4,
    "now": 11980,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 11980,
    "ttl": 10,
    "value": 4,
  },
  Object {
    "cache": LRUCache [],
    "key": 5,
    "now": 11980,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 11980,
    "ttl": 10,
    "value": 5,
  },
  Object {
    "cache": LRUCache [],
    "key": 6,
    "now": 11980,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 11980,
    "ttl": 10,
    "value": 6,
  },
  Object {
    "cache": LRUCache [],
    "key": 7,
    "now": 11980,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 11980,
    "ttl": 10,
    "value": 7,
  },
  Object {
    "cache": LRUCache [],
    "key": 8,
    "now": 11980,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 11980,
    "ttl": 10,
    "value": 8,
  },
  Object {
    "cache": LRUCache [],
    "has": "miss",
    "key": 3,
    "op": "has",
  },
  Object {
    "cache": LRUCache [],
    "get": "miss",
    "key": 3,
    "op": "get",
  },
  Object {
    "cache": LRUCache [],
    "has": "stale",
    "key": 4,
    "now": 11991,
    "op": "has",
    "remainingTTL": -1,
    "start": 11980,
    "ttl": 10,
  },
  Object {
    "cache": LRUCache [],
    "delete": "expire",
    "key": 4,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [],
    "get": "stale",
    "key": 4,
    "now": 11991,
    "op": "get",
    "remainingTTL": -1,
    "start": 11980,
    "ttl": 10,
  },
]
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > tests with performance.now() > ttl with updateAgeOnGet/updateAgeOnHas traces 1`] = `
Map {}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > tests with performance.now() > ttlAutopurge metrics 1`] = `
Array [
  Object {
    "cache": LRUCache [],
    "key": 1,
    "now": 11110,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 11110,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "key": 2,
    "now": 11110,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 11110,
    "ttl": 10,
    "value": 2,
  },
  Object {
    "cache": LRUCache [],
    "key": 2,
    "now": 11110,
    "oldValue": 2,
    "op": "set",
    "remainingTTL": 11,
    "set": "replace",
    "start": 11110,
    "ttl": 11,
    "value": 3,
  },
  Object {
    "cache": LRUCache [],
    "delete": "expire",
    "key": 1,
    "op": "delete",
  },
  Object {
    "cache": LRUCache [],
    "delete": "expire",
    "key": 2,
    "op": "delete",
  },
]
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > tests with performance.now() > ttlAutopurge traces 1`] = `
Map {}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > tests with performance.now() > ttlResolution only respected if non-negative integer metrics 1`] = `
Array []
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > tests with performance.now() > ttlResolution only respected if non-negative integer traces 1`] = `
Map {}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > tests with performance.now() > updateAgeOnGet + ttlAutopurge: entry eventually purged if not re-accessed metrics 1`] = `
Array [
  Object {
    "cache": LRUCache [],
    "key": "b",
    "now": 12402,
    "op": "set",
    "remainingTTL": 50,
    "set": "add",
    "start": 12402,
    "ttl": 50,
    "value": 2,
  },
  Object {
    "cache": LRUCache [],
    "get": "hit",
    "key": "b",
    "now": 12432,
    "op": "get",
    "remainingTTL": 20,
    "start": 12402,
    "ttl": 50,
    "value": 2,
  },
  Object {
    "cache": LRUCache [],
    "delete": "expire",
    "key": "b",
    "op": "delete",
  },
  Object {
    "cache": LRUCache [],
    "get": "miss",
    "key": "b",
    "op": "get",
  },
]
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > tests with performance.now() > updateAgeOnGet + ttlAutopurge: entry eventually purged if not re-accessed traces 1`] = `
Map {}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > tests with performance.now() > updateAgeOnGet reschedules ttlAutopurge timer metrics 1`] = `
Array [
  Object {
    "cache": LRUCache [],
    "key": "a",
    "now": 12190,
    "op": "set",
    "remainingTTL": 100,
    "set": "add",
    "start": 12190,
    "ttl": 100,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "get": "hit",
    "key": "a",
    "now": 12270,
    "op": "get",
    "remainingTTL": 20,
    "start": 12190,
    "ttl": 100,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "get": "hit",
    "key": "a",
    "now": 12300,
    "op": "get",
    "remainingTTL": 70,
    "start": 12270,
    "ttl": 100,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "delete": "expire",
    "key": "a",
    "op": "delete",
  },
  Object {
    "cache": LRUCache [],
    "get": "miss",
    "key": "a",
    "op": "get",
  },
]
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > tests with performance.now() > updateAgeOnGet reschedules ttlAutopurge timer traces 1`] = `
Map {}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > tests with performance.now() metrics 1`] = `
Array []
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > tests with performance.now() traces 1`] = `
Map {}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > verify inflight works as expected metrics 1`] = `
Array [
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

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > verify inflight works as expected traces 1`] = `
Map {
  Object {
    "cache": LRUCache [
      Array [
        1,
        Object {},
      ],
    ],
    "fetch": "miss",
    "fetchDispatched": true,
    "fetchResolved": true,
    "fetchUpdated": true,
    "key": 1,
    "op": "fetch",
    "result": Object {},
    "set": "add",
    "trace": true,
    "value": Object {},
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
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
    "result": Object {},
    "trace": true,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
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
    "result": Object {},
    "trace": true,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
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
    "result": Object {},
    "trace": true,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
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
    "result": Object {},
    "trace": true,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > verify require works as expected metrics 1`] = `
Array [
  Object {
    "cache": LRUCache [],
    "entrySize": 1,
    "key": "x",
    "op": "set",
    "set": "add",
    "totalCalculatedSize": 1,
    "value": "x",
  },
  Object {
    "cache": LRUCache [],
    "entrySize": 1,
    "key": "y",
    "op": "set",
    "set": "add",
    "totalCalculatedSize": 2,
    "value": "y",
  },
  Object {
    "cache": LRUCache [],
    "delete": "delete",
    "key": "x",
    "op": "delete",
  },
  Object {
    "cache": LRUCache [],
    "delete": "delete",
    "key": "y",
    "op": "delete",
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "get": "fetching",
    "key": 1,
    "now": 52,
    "op": "get",
    "remainingTTL": 950,
    "start": 2,
    "ttl": 1000,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "get": "fetching",
    "key": 2,
    "now": 52,
    "op": "get",
    "remainingTTL": 950,
    "start": 2,
    "ttl": 1000,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "get": "hit",
    "key": 1,
    "now": 152,
    "op": "get",
    "remainingTTL": 1000,
    "start": 152,
    "ttl": 1000,
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "get": "fetching",
    "key": 2,
    "now": 152,
    "op": "get",
    "remainingTTL": 850,
    "start": 2,
    "ttl": 1000,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "get": "hit",
    "key": 1,
    "now": 252,
    "op": "get",
    "remainingTTL": 900,
    "start": 152,
    "ttl": 1000,
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "get": "hit",
    "key": 2,
    "now": 252,
    "op": "get",
    "remainingTTL": 1000,
    "start": 252,
    "ttl": 1000,
    "value": 2,
  },
]
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > verify require works as expected traces 1`] = `
Map {
  Object {
    "cache": LRUCache [
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "fetch": "miss",
    "fetchAborted": true,
    "fetchDispatched": true,
    "fetchError": Error: gimme the stale value,
    "fetchResolved": true,
    "fetchUpdated": true,
    "key": 2,
    "now": 252,
    "op": "fetch",
    "remainingTTL": 1000,
    "result": undefined,
    "set": "add",
    "start": 252,
    "trace": true,
    "ttl": 1000,
    "value": 2,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
  Object {
    "cache": LRUCache [
      Array [
        2,
        2,
      ],
      Array [
        1,
        1,
      ],
    ],
    "fetch": "miss",
    "fetchAborted": true,
    "fetchDispatched": true,
    "fetchError": Error: gimme the stale value,
    "fetchResolved": true,
    "fetchUpdated": true,
    "key": 1,
    "now": 152,
    "op": "fetch",
    "remainingTTL": 1000,
    "result": undefined,
    "set": "add",
    "start": 152,
    "trace": true,
    "ttl": 1000,
    "value": 1,
  } => Array [
    "start",
    "end",
    "asyncStart",
    "asyncEnd",
  ],
}
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > with context metrics 1`] = `
Array [
  Object {
    "cache": LRUCache [
      Array [
        2,
        4,
      ],
      Array [
        1,
        1,
      ],
    ],
    "context": true,
    "key": 1,
    "memo": "miss",
    "op": "memo",
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        4,
      ],
      Array [
        1,
        1,
      ],
    ],
    "context": true,
    "key": 1,
    "memo": "hit",
    "op": "memo",
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        4,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 1,
    "memo": "hit",
    "op": "memo",
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        4,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 2,
    "memo": "miss",
    "op": "memo",
    "value": 4,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        4,
      ],
      Array [
        1,
        1,
      ],
    ],
    "context": true,
    "key": 2,
    "memo": "hit",
    "op": "memo",
    "value": 4,
  },
  Object {
    "cache": LRUCache [
      Array [
        2,
        4,
      ],
      Array [
        1,
        1,
      ],
    ],
    "key": 2,
    "memo": "hit",
    "op": "memo",
    "value": 4,
  },
]
`

exports[`test/tracing.ts > TAP > test/tracing.ts > TAP > with context traces 1`] = `
Map {}
`

exports[`test/tracing.ts > TAP > tests using Date.now() > set item pre-stale > dump with stale values 1`] = `
Array [
  Array [
    1,
    Object {
      "start": 13989,
      "ttl": 10,
      "value": 1,
    },
  ],
  Array [
    2,
    Object {
      "start": 13978,
      "ttl": 10,
      "value": 2,
    },
  ],
]
`

exports[`test/tracing.ts > TAP > tests using Date.now() > ttl on set, not on cache > status updates 1`] = `
Array [
  Object {
    "cache": LRUCache [],
    "key": 1,
    "now": 12932,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 12932,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "get": "hit",
    "key": 1,
    "now": 12932,
    "op": "get",
    "remainingTTL": 10,
    "start": 12932,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "get": "hit",
    "key": 1,
    "now": 12937,
    "op": "get",
    "remainingTTL": 5,
    "start": 12932,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "get": "hit",
    "key": 1,
    "now": 12942,
    "op": "get",
    "remainingTTL": 0,
    "start": 12932,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "has": "stale",
    "key": 1,
    "now": 12943,
    "op": "has",
    "remainingTTL": -1,
    "start": 12932,
    "ttl": 10,
  },
  Object {
    "cache": LRUCache [],
    "get": "stale",
    "key": 1,
    "now": 12943,
    "op": "get",
    "remainingTTL": -1,
    "start": 12932,
    "ttl": 10,
  },
  Object {
    "cache": LRUCache [],
    "key": 2,
    "now": 12943,
    "op": "set",
    "remainingTTL": 100,
    "set": "add",
    "start": 12943,
    "ttl": 100,
    "value": 2,
  },
  Object {
    "cache": LRUCache [],
    "has": "hit",
    "key": 2,
    "now": 12993,
    "op": "has",
    "remainingTTL": 50,
    "start": 12943,
    "ttl": 100,
  },
  Object {
    "cache": LRUCache [],
    "get": "hit",
    "key": 2,
    "now": 12993,
    "op": "get",
    "remainingTTL": 50,
    "start": 12943,
    "ttl": 100,
    "value": 2,
  },
  Object {
    "cache": LRUCache [],
    "has": "stale",
    "key": 2,
    "now": 13044,
    "op": "has",
    "remainingTTL": -1,
    "start": 12943,
    "ttl": 100,
  },
  Object {
    "cache": LRUCache [],
    "get": "stale",
    "key": 2,
    "now": 13044,
    "op": "get",
    "remainingTTL": -1,
    "start": 12943,
    "ttl": 100,
  },
  Object {
    "cache": LRUCache [],
    "key": 0,
    "now": 13044,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 13044,
    "ttl": 10,
    "value": 0,
  },
  Object {
    "cache": LRUCache [],
    "key": 1,
    "now": 13044,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 13044,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "key": 2,
    "now": 13044,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 13044,
    "ttl": 10,
    "value": 2,
  },
  Object {
    "cache": LRUCache [],
    "key": 3,
    "now": 13044,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 13044,
    "ttl": 10,
    "value": 3,
  },
  Object {
    "cache": LRUCache [],
    "key": 4,
    "now": 13044,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 13044,
    "ttl": 10,
    "value": 4,
  },
  Object {
    "cache": LRUCache [],
    "key": 5,
    "now": 13044,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 13044,
    "ttl": 10,
    "value": 5,
  },
  Object {
    "cache": LRUCache [],
    "key": 6,
    "now": 13044,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 13044,
    "ttl": 10,
    "value": 6,
  },
  Object {
    "cache": LRUCache [],
    "key": 7,
    "now": 13044,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 13044,
    "ttl": 10,
    "value": 7,
  },
  Object {
    "cache": LRUCache [],
    "key": 8,
    "now": 13044,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 13044,
    "ttl": 10,
    "value": 8,
  },
  Object {
    "cache": LRUCache [],
    "has": "stale",
    "key": 4,
    "now": 13055,
    "op": "has",
    "remainingTTL": -1,
    "start": 13044,
    "ttl": 10,
  },
  Object {
    "cache": LRUCache [],
    "get": "stale",
    "key": 4,
    "now": 13055,
    "op": "get",
    "remainingTTL": -1,
    "start": 13044,
    "ttl": 10,
  },
]
`

exports[`test/tracing.ts > TAP > tests using Date.now() > ttl tests defaults > status updates 1`] = `
Array [
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "key": 1,
    "now": 12485,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 12485,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "get": "hit",
    "key": 1,
    "now": 12485,
    "op": "get",
    "remainingTTL": 10,
    "start": 12485,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "get": "hit",
    "key": 1,
    "now": 12490,
    "op": "get",
    "remainingTTL": 5,
    "start": 12485,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "get": "hit",
    "key": 1,
    "now": 12495,
    "op": "get",
    "remainingTTL": 0,
    "start": 12485,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "has": "stale",
    "key": 1,
    "now": 12497,
    "op": "has",
    "remainingTTL": -2,
    "start": 12485,
    "ttl": 10,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "get": "stale",
    "key": 1,
    "now": 12497,
    "op": "get",
    "remainingTTL": -2,
    "start": 12485,
    "ttl": 10,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "has": "hit",
    "key": 2,
    "now": 12547,
    "op": "has",
    "remainingTTL": 50,
    "start": 12497,
    "ttl": 100,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "get": "hit",
    "key": 2,
    "now": 12547,
    "op": "get",
    "remainingTTL": 50,
    "start": 12497,
    "ttl": 100,
    "value": 2,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "get": "stale",
    "key": 2,
    "now": 12598,
    "op": "get",
    "remainingTTL": -1,
    "start": 12497,
    "ttl": 100,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "key": 0,
    "now": 12598,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 12598,
    "ttl": 10,
    "value": 0,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "key": 1,
    "now": 12598,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 12598,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "key": 2,
    "now": 12598,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 12598,
    "ttl": 10,
    "value": 2,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "key": 3,
    "now": 12598,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 12598,
    "ttl": 10,
    "value": 3,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "key": 4,
    "now": 12598,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 12598,
    "ttl": 10,
    "value": 4,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "key": 5,
    "now": 12598,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 12598,
    "ttl": 10,
    "value": 5,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "key": 6,
    "now": 12598,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 12598,
    "ttl": 10,
    "value": 6,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "key": 7,
    "now": 12598,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 12598,
    "ttl": 10,
    "value": 7,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "key": 8,
    "now": 12598,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 12598,
    "ttl": 10,
    "value": 8,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "has": "stale",
    "key": 4,
    "now": 12609,
    "op": "has",
    "remainingTTL": -1,
    "start": 12598,
    "ttl": 10,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "get": "stale",
    "key": 4,
    "now": 12609,
    "op": "get",
    "remainingTTL": -1,
    "start": 12598,
    "ttl": 10,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "get": "hit",
    "key": "immortal",
    "op": "get",
    "value": true,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "get": "hit",
    "key": "immortal",
    "op": "get",
    "value": true,
  },
]
`

exports[`test/tracing.ts > TAP > tests using Date.now() > ttl tests with ttlResolution=100 > status updates 1`] = `
Array [
  Object {
    "cache": LRUCache [],
    "key": 1,
    "now": 12809,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 12809,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "get": "hit",
    "key": 1,
    "now": 12809,
    "op": "get",
    "remainingTTL": 10,
    "start": 12809,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "get": "hit",
    "key": 1,
    "now": 12809,
    "op": "get",
    "remainingTTL": 10,
    "start": 12809,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "get": "hit",
    "key": 1,
    "now": 12809,
    "op": "get",
    "remainingTTL": 10,
    "start": 12809,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "has": "hit",
    "key": 1,
    "now": 12809,
    "op": "has",
    "remainingTTL": 10,
    "start": 12809,
    "ttl": 10,
  },
  Object {
    "cache": LRUCache [],
    "get": "hit",
    "key": 1,
    "now": 12809,
    "op": "get",
    "remainingTTL": 10,
    "start": 12809,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "has": "stale",
    "key": 1,
    "now": 12920,
    "op": "has",
    "remainingTTL": -101,
    "start": 12809,
    "ttl": 10,
  },
  Object {
    "cache": LRUCache [],
    "get": "stale",
    "key": 1,
    "now": 12920,
    "op": "get",
    "remainingTTL": -101,
    "start": 12809,
    "ttl": 10,
  },
]
`

exports[`test/tracing.ts > TAP > tests using Date.now() > ttlAutopurge > status updates 1`] = `
Array [
  Object {
    "cache": LRUCache [],
    "key": 1,
    "now": 12920,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 12920,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "key": 2,
    "now": 12920,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 12920,
    "ttl": 10,
    "value": 2,
  },
  Object {
    "cache": LRUCache [],
    "key": 2,
    "now": 12920,
    "oldValue": 2,
    "op": "set",
    "remainingTTL": 11,
    "set": "replace",
    "start": 12920,
    "ttl": 11,
    "value": 3,
  },
]
`

exports[`test/tracing.ts > TAP > tests with performance.now() > set item pre-stale > dump with stale values 1`] = `
Array [
  Array [
    1,
    Object {
      "start": 12179,
      "ttl": 10,
      "value": 1,
    },
  ],
  Array [
    2,
    Object {
      "start": 12168,
      "ttl": 10,
      "value": 2,
    },
  ],
]
`

exports[`test/tracing.ts > TAP > tests with performance.now() > ttl on set, not on cache > status updates 1`] = `
Array [
  Object {
    "cache": LRUCache [],
    "key": 1,
    "now": 11122,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 11122,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "get": "hit",
    "key": 1,
    "now": 11122,
    "op": "get",
    "remainingTTL": 10,
    "start": 11122,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "get": "hit",
    "key": 1,
    "now": 11127,
    "op": "get",
    "remainingTTL": 5,
    "start": 11122,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "get": "hit",
    "key": 1,
    "now": 11132,
    "op": "get",
    "remainingTTL": 0,
    "start": 11122,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "has": "stale",
    "key": 1,
    "now": 11133,
    "op": "has",
    "remainingTTL": -1,
    "start": 11122,
    "ttl": 10,
  },
  Object {
    "cache": LRUCache [],
    "get": "stale",
    "key": 1,
    "now": 11133,
    "op": "get",
    "remainingTTL": -1,
    "start": 11122,
    "ttl": 10,
  },
  Object {
    "cache": LRUCache [],
    "key": 2,
    "now": 11133,
    "op": "set",
    "remainingTTL": 100,
    "set": "add",
    "start": 11133,
    "ttl": 100,
    "value": 2,
  },
  Object {
    "cache": LRUCache [],
    "has": "hit",
    "key": 2,
    "now": 11183,
    "op": "has",
    "remainingTTL": 50,
    "start": 11133,
    "ttl": 100,
  },
  Object {
    "cache": LRUCache [],
    "get": "hit",
    "key": 2,
    "now": 11183,
    "op": "get",
    "remainingTTL": 50,
    "start": 11133,
    "ttl": 100,
    "value": 2,
  },
  Object {
    "cache": LRUCache [],
    "has": "stale",
    "key": 2,
    "now": 11234,
    "op": "has",
    "remainingTTL": -1,
    "start": 11133,
    "ttl": 100,
  },
  Object {
    "cache": LRUCache [],
    "get": "stale",
    "key": 2,
    "now": 11234,
    "op": "get",
    "remainingTTL": -1,
    "start": 11133,
    "ttl": 100,
  },
  Object {
    "cache": LRUCache [],
    "key": 0,
    "now": 11234,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 11234,
    "ttl": 10,
    "value": 0,
  },
  Object {
    "cache": LRUCache [],
    "key": 1,
    "now": 11234,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 11234,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "key": 2,
    "now": 11234,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 11234,
    "ttl": 10,
    "value": 2,
  },
  Object {
    "cache": LRUCache [],
    "key": 3,
    "now": 11234,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 11234,
    "ttl": 10,
    "value": 3,
  },
  Object {
    "cache": LRUCache [],
    "key": 4,
    "now": 11234,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 11234,
    "ttl": 10,
    "value": 4,
  },
  Object {
    "cache": LRUCache [],
    "key": 5,
    "now": 11234,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 11234,
    "ttl": 10,
    "value": 5,
  },
  Object {
    "cache": LRUCache [],
    "key": 6,
    "now": 11234,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 11234,
    "ttl": 10,
    "value": 6,
  },
  Object {
    "cache": LRUCache [],
    "key": 7,
    "now": 11234,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 11234,
    "ttl": 10,
    "value": 7,
  },
  Object {
    "cache": LRUCache [],
    "key": 8,
    "now": 11234,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 11234,
    "ttl": 10,
    "value": 8,
  },
  Object {
    "cache": LRUCache [],
    "has": "stale",
    "key": 4,
    "now": 11245,
    "op": "has",
    "remainingTTL": -1,
    "start": 11234,
    "ttl": 10,
  },
  Object {
    "cache": LRUCache [],
    "get": "stale",
    "key": 4,
    "now": 11245,
    "op": "get",
    "remainingTTL": -1,
    "start": 11234,
    "ttl": 10,
  },
]
`

exports[`test/tracing.ts > TAP > tests with performance.now() > ttl tests defaults > status updates 1`] = `
Array [
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "key": 1,
    "now": 10675,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 10675,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "get": "hit",
    "key": 1,
    "now": 10675,
    "op": "get",
    "remainingTTL": 10,
    "start": 10675,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "get": "hit",
    "key": 1,
    "now": 10680,
    "op": "get",
    "remainingTTL": 5,
    "start": 10675,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "get": "hit",
    "key": 1,
    "now": 10685,
    "op": "get",
    "remainingTTL": 0,
    "start": 10675,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "has": "stale",
    "key": 1,
    "now": 10687,
    "op": "has",
    "remainingTTL": -2,
    "start": 10675,
    "ttl": 10,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "get": "stale",
    "key": 1,
    "now": 10687,
    "op": "get",
    "remainingTTL": -2,
    "start": 10675,
    "ttl": 10,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "has": "hit",
    "key": 2,
    "now": 10737,
    "op": "has",
    "remainingTTL": 50,
    "start": 10687,
    "ttl": 100,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "get": "hit",
    "key": 2,
    "now": 10737,
    "op": "get",
    "remainingTTL": 50,
    "start": 10687,
    "ttl": 100,
    "value": 2,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "get": "stale",
    "key": 2,
    "now": 10788,
    "op": "get",
    "remainingTTL": -1,
    "start": 10687,
    "ttl": 100,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "key": 0,
    "now": 10788,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 10788,
    "ttl": 10,
    "value": 0,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "key": 1,
    "now": 10788,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 10788,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "key": 2,
    "now": 10788,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 10788,
    "ttl": 10,
    "value": 2,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "key": 3,
    "now": 10788,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 10788,
    "ttl": 10,
    "value": 3,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "key": 4,
    "now": 10788,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 10788,
    "ttl": 10,
    "value": 4,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "key": 5,
    "now": 10788,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 10788,
    "ttl": 10,
    "value": 5,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "key": 6,
    "now": 10788,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 10788,
    "ttl": 10,
    "value": 6,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "key": 7,
    "now": 10788,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 10788,
    "ttl": 10,
    "value": 7,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "key": 8,
    "now": 10788,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 10788,
    "ttl": 10,
    "value": 8,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "has": "stale",
    "key": 4,
    "now": 10799,
    "op": "has",
    "remainingTTL": -1,
    "start": 10788,
    "ttl": 10,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "get": "stale",
    "key": 4,
    "now": 10799,
    "op": "get",
    "remainingTTL": -1,
    "start": 10788,
    "ttl": 10,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "get": "hit",
    "key": "immortal",
    "op": "get",
    "value": true,
  },
  Object {
    "cache": LRUCache [
      Array [
        "immortal",
        true,
      ],
    ],
    "get": "hit",
    "key": "immortal",
    "op": "get",
    "value": true,
  },
]
`

exports[`test/tracing.ts > TAP > tests with performance.now() > ttl tests with ttlResolution=100 > status updates 1`] = `
Array [
  Object {
    "cache": LRUCache [],
    "key": 1,
    "now": 10999,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 10999,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "get": "hit",
    "key": 1,
    "now": 10999,
    "op": "get",
    "remainingTTL": 10,
    "start": 10999,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "get": "hit",
    "key": 1,
    "now": 10999,
    "op": "get",
    "remainingTTL": 10,
    "start": 10999,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "get": "hit",
    "key": 1,
    "now": 10999,
    "op": "get",
    "remainingTTL": 10,
    "start": 10999,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "has": "hit",
    "key": 1,
    "now": 10999,
    "op": "has",
    "remainingTTL": 10,
    "start": 10999,
    "ttl": 10,
  },
  Object {
    "cache": LRUCache [],
    "get": "hit",
    "key": 1,
    "now": 10999,
    "op": "get",
    "remainingTTL": 10,
    "start": 10999,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "has": "stale",
    "key": 1,
    "now": 11110,
    "op": "has",
    "remainingTTL": -101,
    "start": 10999,
    "ttl": 10,
  },
  Object {
    "cache": LRUCache [],
    "get": "stale",
    "key": 1,
    "now": 11110,
    "op": "get",
    "remainingTTL": -101,
    "start": 10999,
    "ttl": 10,
  },
]
`

exports[`test/tracing.ts > TAP > tests with performance.now() > ttlAutopurge > status updates 1`] = `
Array [
  Object {
    "cache": LRUCache [],
    "key": 1,
    "now": 11110,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 11110,
    "ttl": 10,
    "value": 1,
  },
  Object {
    "cache": LRUCache [],
    "key": 2,
    "now": 11110,
    "op": "set",
    "remainingTTL": 10,
    "set": "add",
    "start": 11110,
    "ttl": 10,
    "value": 2,
  },
  Object {
    "cache": LRUCache [],
    "key": 2,
    "now": 11110,
    "oldValue": 2,
    "op": "set",
    "remainingTTL": 11,
    "set": "replace",
    "start": 11110,
    "ttl": 11,
    "value": 3,
  },
]
`

exports[`test/tracing.ts > TAP > verify inflight works as expected > status updates 1`] = `
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
    "result": Object {},
    "trace": true,
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
    "result": Object {},
    "trace": true,
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
