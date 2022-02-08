/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/map-like.js TAP > dump 1`] = `
Array [
  Array [
    3,
    Object {
      "size": 0,
      "value": "3",
    },
  ],
  Array [
    4,
    Object {
      "size": 0,
      "value": "4",
    },
  ],
  Array [
    5,
    Object {
      "size": 0,
      "value": "5",
    },
  ],
  Array [
    6,
    Object {
      "size": 0,
      "value": "6",
    },
  ],
  Array [
    7,
    Object {
      "size": 0,
      "value": "7",
    },
  ],
]
`

exports[`test/map-like.js TAP > dump, 7 stale 1`] = `
Array [
  Array [
    3,
    Object {
      "size": 0,
      "ttl": 0,
      "value": "3",
    },
  ],
  Array [
    5,
    Object {
      "size": 0,
      "ttl": 0,
      "value": "5",
    },
  ],
  Array [
    6,
    Object {
      "size": 0,
      "ttl": 0,
      "value": "6",
    },
  ],
  Array [
    4,
    Object {
      "size": 0,
      "ttl": 0,
      "value": "new value 4",
    },
  ],
]
`

exports[`test/map-like.js TAP > dump, new value 4 1`] = `
Array [
  Array [
    3,
    Object {
      "size": 0,
      "value": "3",
    },
  ],
  Array [
    5,
    Object {
      "size": 0,
      "value": "5",
    },
  ],
  Array [
    6,
    Object {
      "size": 0,
      "value": "6",
    },
  ],
  Array [
    7,
    Object {
      "size": 0,
      "value": "7",
    },
  ],
  Array [
    4,
    Object {
      "size": 0,
      "value": "new value 4",
    },
  ],
]
`

exports[`test/map-like.js TAP > empty, dump 1`] = `
Array []
`

exports[`test/map-like.js TAP > empty, entries 1`] = `
Generator []
`

exports[`test/map-like.js TAP > empty, keys 1`] = `
Generator []
`

exports[`test/map-like.js TAP > empty, values 1`] = `
Generator []
`

exports[`test/map-like.js TAP > entries 1`] = `
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

exports[`test/map-like.js TAP > entries, 7 stale 1`] = `
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

exports[`test/map-like.js TAP > entries, new value 4 1`] = `
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

exports[`test/map-like.js TAP > forEach, no thisp 1`] = `
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

exports[`test/map-like.js TAP > forEach, with thisp 1`] = `
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

exports[`test/map-like.js TAP > keys 1`] = `
Generator [
  7,
  6,
  5,
  4,
  3,
]
`

exports[`test/map-like.js TAP > keys, 7 stale 1`] = `
Generator [
  4,
  6,
  5,
  3,
]
`

exports[`test/map-like.js TAP > keys, new value 4 1`] = `
Generator [
  4,
  7,
  6,
  5,
  3,
]
`

exports[`test/map-like.js TAP > values 1`] = `
Generator [
  "7",
  "6",
  "5",
  "4",
  "3",
]
`

exports[`test/map-like.js TAP > values, 7 stale 1`] = `
Generator [
  "new value 4",
  "6",
  "5",
  "3",
]
`

exports[`test/map-like.js TAP > values, new value 4 1`] = `
Generator [
  "new value 4",
  "7",
  "6",
  "5",
  "3",
]
`
