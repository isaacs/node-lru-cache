/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/map-like.ts > TAP > bunch of iteration things > dump 1`] = `
Array [
  Array [
    3,
    Object {
      "size": 1,
      "value": "3",
    },
  ],
  Array [
    4,
    Object {
      "size": 1,
      "value": "4",
    },
  ],
  Array [
    5,
    Object {
      "size": 1,
      "value": "5",
    },
  ],
  Array [
    6,
    Object {
      "size": 1,
      "value": "6",
    },
  ],
  Array [
    7,
    Object {
      "size": 1,
      "value": "7",
    },
  ],
]
`

exports[`test/map-like.ts > TAP > bunch of iteration things > dump, 7 stale 1`] = `
Array [
  Array [
    3,
    Object {
      "size": 1,
      "start": 0,
      "ttl": 0,
      "value": "3",
    },
  ],
  Array [
    5,
    Object {
      "size": 1,
      "start": 0,
      "ttl": 0,
      "value": "5",
    },
  ],
  Array [
    6,
    Object {
      "size": 1,
      "start": 0,
      "ttl": 0,
      "value": "6",
    },
  ],
  Array [
    4,
    Object {
      "size": 1,
      "start": 0,
      "ttl": 0,
      "value": "new value 4",
    },
  ],
  Array [
    7,
    Object {
      "size": 1,
      "start": -9999,
      "ttl": 1,
      "value": "stale",
    },
  ],
]
`

exports[`test/map-like.ts > TAP > bunch of iteration things > dump, new value 4 1`] = `
Array [
  Array [
    3,
    Object {
      "size": 1,
      "value": "3",
    },
  ],
  Array [
    5,
    Object {
      "size": 1,
      "value": "5",
    },
  ],
  Array [
    6,
    Object {
      "size": 1,
      "value": "6",
    },
  ],
  Array [
    7,
    Object {
      "size": 1,
      "value": "7",
    },
  ],
  Array [
    4,
    Object {
      "size": 1,
      "value": "new value 4",
    },
  ],
]
`

exports[`test/map-like.ts > TAP > bunch of iteration things > dump, resolved fetch 99 too late 1`] = `
Array [
  Array [
    3,
    Object {
      "size": 1,
      "value": "3",
    },
  ],
  Array [
    5,
    Object {
      "size": 1,
      "value": "5",
    },
  ],
  Array [
    6,
    Object {
      "size": 1,
      "value": "6",
    },
  ],
  Array [
    7,
    Object {
      "size": 1,
      "value": "7",
    },
  ],
  Array [
    4,
    Object {
      "size": 1,
      "value": "new value 4",
    },
  ],
]
`

exports[`test/map-like.ts > TAP > bunch of iteration things > empty, dump 1`] = `
Array []
`

exports[`test/map-like.ts > TAP > bunch of iteration things > empty, entries 1`] = `
Generator []
`

exports[`test/map-like.ts > TAP > bunch of iteration things > empty, foreach 1`] = `
Array []
`

exports[`test/map-like.ts > TAP > bunch of iteration things > empty, keys 1`] = `
Generator []
`

exports[`test/map-like.ts > TAP > bunch of iteration things > empty, rentries 1`] = `
Generator []
`

exports[`test/map-like.ts > TAP > bunch of iteration things > empty, rforeach 1`] = `
Array []
`

exports[`test/map-like.ts > TAP > bunch of iteration things > empty, rkeys 1`] = `
Generator []
`

exports[`test/map-like.ts > TAP > bunch of iteration things > empty, rvalues 1`] = `
Generator []
`

exports[`test/map-like.ts > TAP > bunch of iteration things > empty, values 1`] = `
Generator []
`

exports[`test/map-like.ts > TAP > bunch of iteration things > entries 1`] = `
Generator [
  Array [
    7,
    "7",
  ],
  Array [
    6,
    "6",
  ],
  Array [
    5,
    "5",
  ],
  Array [
    4,
    "4",
  ],
  Array [
    3,
    "3",
  ],
]
`

exports[`test/map-like.ts > TAP > bunch of iteration things > entries, 7 stale 1`] = `
Generator [
  Array [
    4,
    "new value 4",
  ],
  Array [
    6,
    "6",
  ],
  Array [
    5,
    "5",
  ],
  Array [
    3,
    "3",
  ],
]
`

exports[`test/map-like.ts > TAP > bunch of iteration things > entries, new value 4 1`] = `
Generator [
  Array [
    4,
    "new value 4",
  ],
  Array [
    7,
    "7",
  ],
  Array [
    6,
    "6",
  ],
  Array [
    5,
    "5",
  ],
  Array [
    3,
    "3",
  ],
]
`

exports[`test/map-like.ts > TAP > bunch of iteration things > entries, resolved fetch 99 too late 1`] = `
Generator [
  Array [
    4,
    "new value 4",
  ],
  Array [
    7,
    "7",
  ],
  Array [
    6,
    "6",
  ],
  Array [
    5,
    "5",
  ],
  Array [
    3,
    "3",
  ],
]
`

exports[`test/map-like.ts > TAP > bunch of iteration things > fetch 123 resolved, dump 1`] = `
Array [
  Array [
    0,
    Object {
      "size": 1,
      "value": "0",
    },
  ],
  Array [
    1,
    Object {
      "size": 1,
      "value": "1",
    },
  ],
  Array [
    2,
    Object {
      "size": 1,
      "value": "2",
    },
  ],
  Array [
    123,
    Object {
      "size": 1,
      "value": "123",
    },
  ],
]
`

exports[`test/map-like.ts > TAP > bunch of iteration things > fetch 123 resolved, entries 1`] = `
Generator [
  Array [
    123,
    "123",
  ],
  Array [
    2,
    "2",
  ],
  Array [
    1,
    "1",
  ],
  Array [
    0,
    "0",
  ],
]
`

exports[`test/map-like.ts > TAP > bunch of iteration things > fetch 123 resolved, foreach 1`] = `
Array [
  Array [
    123,
    "123",
  ],
  Array [
    2,
    "2",
  ],
  Array [
    1,
    "1",
  ],
  Array [
    0,
    "0",
  ],
]
`

exports[`test/map-like.ts > TAP > bunch of iteration things > fetch 123 resolved, keys 1`] = `
Generator [
  123,
  2,
  1,
  0,
]
`

exports[`test/map-like.ts > TAP > bunch of iteration things > fetch 123 resolved, rentries 1`] = `
Generator [
  Array [
    0,
    "0",
  ],
  Array [
    1,
    "1",
  ],
  Array [
    2,
    "2",
  ],
  Array [
    123,
    "123",
  ],
]
`

exports[`test/map-like.ts > TAP > bunch of iteration things > fetch 123 resolved, rforeach 1`] = `
Array [
  Array [
    0,
    "0",
  ],
  Array [
    1,
    "1",
  ],
  Array [
    2,
    "2",
  ],
  Array [
    123,
    "123",
  ],
]
`

exports[`test/map-like.ts > TAP > bunch of iteration things > fetch 123 resolved, rkeys 1`] = `
Generator [
  0,
  1,
  2,
  123,
]
`

exports[`test/map-like.ts > TAP > bunch of iteration things > fetch 123 resolved, rvalues 1`] = `
Generator [
  "0",
  "1",
  "2",
  "123",
]
`

exports[`test/map-like.ts > TAP > bunch of iteration things > fetch 123 resolved, values 1`] = `
Generator [
  "123",
  "2",
  "1",
  "0",
]
`

exports[`test/map-like.ts > TAP > bunch of iteration things > forEach, no thisp 1`] = `
Array [
  Array [
    "new value 4",
    4,
  ],
  Array [
    "6",
    6,
  ],
  Array [
    "5",
    5,
  ],
  Array [
    "3",
    3,
  ],
]
`

exports[`test/map-like.ts > TAP > bunch of iteration things > forEach, with thisp 1`] = `
Array [
  Array [
    "new value 4",
    4,
    Object {
      "a": 1,
    },
  ],
  Array [
    "6",
    6,
    Object {
      "a": 1,
    },
  ],
  Array [
    "5",
    5,
    Object {
      "a": 1,
    },
  ],
  Array [
    "3",
    3,
    Object {
      "a": 1,
    },
  ],
]
`

exports[`test/map-like.ts > TAP > bunch of iteration things > forEach, with thisp 2`] = `
Array [
  Array [
    "3",
    3,
    Object {
      "r": 1,
    },
  ],
  Array [
    "5",
    5,
    Object {
      "r": 1,
    },
  ],
  Array [
    "6",
    6,
    Object {
      "r": 1,
    },
  ],
  Array [
    "new value 4",
    4,
    Object {
      "r": 1,
    },
  ],
]
`

exports[`test/map-like.ts > TAP > bunch of iteration things > keys 1`] = `
Generator [
  7,
  6,
  5,
  4,
  3,
]
`

exports[`test/map-like.ts > TAP > bunch of iteration things > keys, 7 stale 1`] = `
Generator [
  4,
  6,
  5,
  3,
]
`

exports[`test/map-like.ts > TAP > bunch of iteration things > keys, new value 4 1`] = `
Generator [
  4,
  7,
  6,
  5,
  3,
]
`

exports[`test/map-like.ts > TAP > bunch of iteration things > keys, resolved fetch 99 too late 1`] = `
Generator [
  4,
  7,
  6,
  5,
  3,
]
`

exports[`test/map-like.ts > TAP > bunch of iteration things > pending fetch, dump 1`] = `
Array []
`

exports[`test/map-like.ts > TAP > bunch of iteration things > pending fetch, entries 1`] = `
Generator []
`

exports[`test/map-like.ts > TAP > bunch of iteration things > pending fetch, foreach 1`] = `
Array []
`

exports[`test/map-like.ts > TAP > bunch of iteration things > pending fetch, keys 1`] = `
Generator []
`

exports[`test/map-like.ts > TAP > bunch of iteration things > pending fetch, rentries 1`] = `
Generator []
`

exports[`test/map-like.ts > TAP > bunch of iteration things > pending fetch, rforeach 1`] = `
Array []
`

exports[`test/map-like.ts > TAP > bunch of iteration things > pending fetch, rkeys 1`] = `
Generator []
`

exports[`test/map-like.ts > TAP > bunch of iteration things > pending fetch, rvalues 1`] = `
Generator []
`

exports[`test/map-like.ts > TAP > bunch of iteration things > pending fetch, values 1`] = `
Generator []
`

exports[`test/map-like.ts > TAP > bunch of iteration things > rentries 1`] = `
Generator [
  Array [
    3,
    "3",
  ],
  Array [
    4,
    "4",
  ],
  Array [
    5,
    "5",
  ],
  Array [
    6,
    "6",
  ],
  Array [
    7,
    "7",
  ],
]
`

exports[`test/map-like.ts > TAP > bunch of iteration things > rentries, 7 stale 1`] = `
Generator [
  Array [
    3,
    "3",
  ],
  Array [
    5,
    "5",
  ],
  Array [
    6,
    "6",
  ],
  Array [
    4,
    "new value 4",
  ],
]
`

exports[`test/map-like.ts > TAP > bunch of iteration things > rentries, new value 4 1`] = `
Generator [
  Array [
    3,
    "3",
  ],
  Array [
    5,
    "5",
  ],
  Array [
    6,
    "6",
  ],
  Array [
    7,
    "7",
  ],
  Array [
    4,
    "new value 4",
  ],
]
`

exports[`test/map-like.ts > TAP > bunch of iteration things > rentries, resolved fetch 99 too late 1`] = `
Generator [
  Array [
    3,
    "3",
  ],
  Array [
    5,
    "5",
  ],
  Array [
    6,
    "6",
  ],
  Array [
    7,
    "7",
  ],
  Array [
    4,
    "new value 4",
  ],
]
`

exports[`test/map-like.ts > TAP > bunch of iteration things > rforEach, no thisp 1`] = `
Array [
  Array [
    "3",
    3,
  ],
  Array [
    "5",
    5,
  ],
  Array [
    "6",
    6,
  ],
  Array [
    "new value 4",
    4,
  ],
]
`

exports[`test/map-like.ts > TAP > bunch of iteration things > rkeys 1`] = `
Generator [
  3,
  4,
  5,
  6,
  7,
]
`

exports[`test/map-like.ts > TAP > bunch of iteration things > rkeys, 7 stale 1`] = `
Generator [
  3,
  5,
  6,
  4,
]
`

exports[`test/map-like.ts > TAP > bunch of iteration things > rkeys, new value 4 1`] = `
Generator [
  3,
  5,
  6,
  7,
  4,
]
`

exports[`test/map-like.ts > TAP > bunch of iteration things > rkeys, resolved fetch 99 too late 1`] = `
Generator [
  3,
  5,
  6,
  7,
  4,
]
`

exports[`test/map-like.ts > TAP > bunch of iteration things > rvalues 1`] = `
Generator [
  "3",
  "4",
  "5",
  "6",
  "7",
]
`

exports[`test/map-like.ts > TAP > bunch of iteration things > rvalues, 7 stale 1`] = `
Generator [
  "3",
  "5",
  "6",
  "new value 4",
]
`

exports[`test/map-like.ts > TAP > bunch of iteration things > rvalues, new value 4 1`] = `
Generator [
  "3",
  "5",
  "6",
  "7",
  "new value 4",
]
`

exports[`test/map-like.ts > TAP > bunch of iteration things > rvalues, resolved fetch 99 too late 1`] = `
Generator [
  "3",
  "5",
  "6",
  "7",
  "new value 4",
]
`

exports[`test/map-like.ts > TAP > bunch of iteration things > values 1`] = `
Generator [
  "7",
  "6",
  "5",
  "4",
  "3",
]
`

exports[`test/map-like.ts > TAP > bunch of iteration things > values, 7 stale 1`] = `
Generator [
  "new value 4",
  "6",
  "5",
  "3",
]
`

exports[`test/map-like.ts > TAP > bunch of iteration things > values, new value 4 1`] = `
Generator [
  "new value 4",
  "7",
  "6",
  "5",
  "3",
]
`

exports[`test/map-like.ts > TAP > bunch of iteration things > values, resolved fetch 99 too late 1`] = `
Generator [
  "new value 4",
  "7",
  "6",
  "5",
  "3",
]
`
