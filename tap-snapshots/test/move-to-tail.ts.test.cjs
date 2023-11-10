/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/move-to-tail.ts > TAP > list integrity > list after initial fill 1`] = `
Array [
  Object {
    "_": "H",
    "head": 0,
    "index": 0,
    "next": 1,
    "prev": 0,
    "tail": 4,
  },
  Object {
    "_": "1",
    "head": 0,
    "index": 1,
    "next": 2,
    "prev": 0,
    "tail": 4,
  },
  Object {
    "_": "2",
    "head": 0,
    "index": 2,
    "next": 3,
    "prev": 1,
    "tail": 4,
  },
  Object {
    "_": "3",
    "head": 0,
    "index": 3,
    "next": 4,
    "prev": 2,
    "tail": 4,
  },
  Object {
    "_": "T",
    "head": 0,
    "index": 4,
    "next": 0,
    "prev": 3,
    "tail": 4,
  },
]
`

exports[`test/move-to-tail.ts > TAP > list integrity > list after moveToTail 2 1`] = `
Array [
  Object {
    "_": "H",
    "head": 0,
    "index": 0,
    "next": 1,
    "prev": 0,
    "tail": 2,
  },
  Object {
    "_": "1",
    "head": 0,
    "index": 1,
    "next": 3,
    "prev": 0,
    "tail": 2,
  },
  Object {
    "_": "T",
    "head": 0,
    "index": 2,
    "next": 3,
    "prev": 4,
    "tail": 2,
  },
  Object {
    "_": "3",
    "head": 0,
    "index": 3,
    "next": 4,
    "prev": 1,
    "tail": 2,
  },
  Object {
    "_": "4",
    "head": 0,
    "index": 4,
    "next": 2,
    "prev": 3,
    "tail": 2,
  },
]
`

exports[`test/move-to-tail.ts > TAP > list integrity > list after moveToTail 4 1`] = `
Array [
  Object {
    "_": "H",
    "head": 0,
    "index": 0,
    "next": 1,
    "prev": 0,
    "tail": 4,
  },
  Object {
    "_": "1",
    "head": 0,
    "index": 1,
    "next": 3,
    "prev": 0,
    "tail": 4,
  },
  Object {
    "_": "2",
    "head": 0,
    "index": 2,
    "next": 4,
    "prev": 3,
    "tail": 4,
  },
  Object {
    "_": "3",
    "head": 0,
    "index": 3,
    "next": 2,
    "prev": 1,
    "tail": 4,
  },
  Object {
    "_": "T",
    "head": 0,
    "index": 4,
    "next": 2,
    "prev": 2,
    "tail": 4,
  },
]
`
