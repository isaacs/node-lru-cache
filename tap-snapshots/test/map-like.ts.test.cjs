/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/map-like.ts TAP > dump 1`] = `
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

exports[`test/map-like.ts TAP > dump, 7 stale 1`] = `
Array [
  Array [
    3,
    Object {
      "size": 1,
      "ttl": 0,
      "value": "3",
    },
  ],
  Array [
    5,
    Object {
      "size": 1,
      "ttl": 0,
      "value": "5",
    },
  ],
  Array [
    6,
    Object {
      "size": 1,
      "ttl": 0,
      "value": "6",
    },
  ],
  Array [
    4,
    Object {
      "size": 1,
      "ttl": 0,
      "value": "new value 4",
    },
  ],
]
`

exports[`test/map-like.ts TAP > dump, new value 4 1`] = `
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

exports[`test/map-like.ts TAP > empty, dump 1`] = `
Array []
`

exports[`test/map-like.ts TAP > empty, entries 1`] = `
Generator []
`

exports[`test/map-like.ts TAP > empty, keys 1`] = `
Generator []
`

exports[`test/map-like.ts TAP > empty, rentries 1`] = `
Generator []
`

exports[`test/map-like.ts TAP > empty, rkeys 1`] = `
Generator []
`

exports[`test/map-like.ts TAP > empty, rvalues 1`] = `
Generator []
`

exports[`test/map-like.ts TAP > empty, values 1`] = `
Generator []
`

exports[`test/map-like.ts TAP > entries 1`] = `
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

exports[`test/map-like.ts TAP > entries, 7 stale 1`] = `
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

exports[`test/map-like.ts TAP > entries, new value 4 1`] = `
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

exports[`test/map-like.ts TAP > forEach, no thisp 1`] = `
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

exports[`test/map-like.ts TAP > forEach, with thisp 1`] = `
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

exports[`test/map-like.ts TAP > forEach, with thisp 2`] = `
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

exports[`test/map-like.ts TAP > keys 1`] = `
Generator [
  7,
  6,
  5,
  4,
  3,
]
`

exports[`test/map-like.ts TAP > keys, 7 stale 1`] = `
Generator [
  4,
  6,
  5,
  3,
]
`

exports[`test/map-like.ts TAP > keys, new value 4 1`] = `
Generator [
  4,
  7,
  6,
  5,
  3,
]
`

exports[`test/map-like.ts TAP > rentries 1`] = `
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

exports[`test/map-like.ts TAP > rentries, 7 stale 1`] = `
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

exports[`test/map-like.ts TAP > rentries, new value 4 1`] = `
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

exports[`test/map-like.ts TAP > rforEach, no thisp 1`] = `
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

exports[`test/map-like.ts TAP > rkeys 1`] = `
Generator [
  3,
  4,
  5,
  6,
  7,
]
`

exports[`test/map-like.ts TAP > rkeys, 7 stale 1`] = `
Generator [
  3,
  5,
  6,
  4,
]
`

exports[`test/map-like.ts TAP > rkeys, new value 4 1`] = `
Generator [
  3,
  5,
  6,
  7,
  4,
]
`

exports[`test/map-like.ts TAP > rvalues 1`] = `
Generator [
  "3",
  "4",
  "5",
  "6",
  "7",
]
`

exports[`test/map-like.ts TAP > rvalues, 7 stale 1`] = `
Generator [
  "3",
  "5",
  "6",
  "new value 4",
]
`

exports[`test/map-like.ts TAP > rvalues, new value 4 1`] = `
Generator [
  "3",
  "5",
  "6",
  "7",
  "new value 4",
]
`

exports[`test/map-like.ts TAP > values 1`] = `
Generator [
  "7",
  "6",
  "5",
  "4",
  "3",
]
`

exports[`test/map-like.ts TAP > values, 7 stale 1`] = `
Generator [
  "new value 4",
  "6",
  "5",
  "3",
]
`

exports[`test/map-like.ts TAP > values, new value 4 1`] = `
Generator [
  "new value 4",
  "7",
  "6",
  "5",
  "3",
]
`
