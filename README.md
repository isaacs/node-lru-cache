# lru-cache

A cache object that deletes the least-recently-used items.

Specify a max number of the most recently used items that you want to keep,
and this cache will keep at least that many of the most recently accessed
items.

This is not primarily a TTL cache, and does not make strong TTL guarantees.
There is no pre-emptive pruning of expired items, but you _may_ set a TTL
on the cache, and it will treat expired items as missing when they are
fetched, and delete them.

## Installation:

```js
npm install lru-cache --save
```

## Usage:

```javascript
const LRU = require('lru-cache')

// only 'max' is required
const options = {
  // the number of most recently used items to keep at minimum.
  // note that actual cache storage MAY grow to as much as 2*max-1
  // must be a positive integer.
  max: 500,

  // function to calculate size of items.  useful if storing strings or
  // buffers or other items where memory size depends on the object itself.
  // also note that oversized items do NOT immediately get dropped from
  // the cache, though they will cause faster turnover in the storage.
  sizeCalculation: (value, key) => {
    // return an positive integer which is the size of the item,
    // if a positive integer is not returned, will use 1 as the size.
    return 1
  },

  // function to call when the item is removed entirely from the cache
  // note that this may be long after the item becomes _inaccessible_ by
  // virtue of being moved to the old list, and then overridden by a new
  // value.  do not depend precise timing here!
  dispose: (value, key) => {
    freeFromMemoryOrWhatever(value)
  },

  // max time to live for items before they are considered stale
  // note that stale items are NOT preemptively removed, and MAY
  // live in the cache, contributing to its LRU max, long after they
  // have expired.
  // Also, as this cache is optimized for LRU/MRU operations, some of
  // the staleness/TTL checks will reduce performance, as they will incur
  // overhead by deleting from Map objects rather than simply throwing old
  // Map objects away.
  // Must be a positive integer in ms, defaults to 0, which means "no TTL"
  ttl: 1000 * 60 * 5,

  // return stale items from cache.get() before disposing of them
  // boolean, default false
  allowStale: false,

  // update the age of items on cache.get(), renewing their TTL
  // boolean, default false
  updateAgeOnGet: false,

  // update the age of items on cache.has(), renewing their TTL
  // boolean, default false
  updateAgeOnHas: false,

  // update the "recently-used"-ness of items on cache.has()
  // boolean, default false
  updateRecencyOnHas: false,
}

const cache = new LRU(options)

cache.set("key", "value")
cache.get("key") // "value"

// non-string keys ARE fully supported
// but note that it must be THE SAME object, not
// just a JSON-equivalent object.
var someObject = { a: 1 }
cache.set(someObject, 'a value')
// Object keys are not toString()-ed
cache.set('[object Object]', 'a different value')
assert.equal(cache.get(someObject), 'a value')
// A similar object with same keys/values won't work,
// because it's a different object identity
assert.equal(cache.get({ a: 1 }), undefined)

cache.reset()    // empty the cache
```

If you put more stuff in it, then items will fall out.

## Options

* `max` - The maximum number (or size) of items that are gauranteed to
  remain in the cache (assuming no TTL pruning or explicit deletions).
  Note that the _actual_ storage may be as much as `2 * max - 1`, or much
  more if using a `sizeCalculation` function where a single item can be any
  arbitrary size.  This must be a positive finite intger.

* `sizeCalculation` - Functionthat is used to calculate the size of stored
  items.  If you're storing strings or buffers, then you probably want to
  do something like `n => n.length`.  The item is passed as the first
  argument, and the key is passed as the second argumnet.

    This may be overridden by passing an options object to `cache.set()`.

    Optional, must be a function.  If not set to a function, the default
    behavior is to treat every item as `size=1`.

    Deprecated alias: `length`

* `dispose` Function that is called on items when they are dropped
  from the cache.  This can be handy if you want to close file
  descriptors or do other cleanup tasks when items are no longer
  stored in the cache.

    Note that this may be long after the item becomes _inaccessible_ by
    virtue of being moved to the old list, and then overridden by a new
    value.  Do not depend precise timing here!

    It is called *after* the item has been fully removed from the cache, so
    if you want to put it right back in, that is safe to do.

    Unlike several other options, this may _not_ be overridden by passing
    an option to `set()`, for performance reasons.  If disposal functions
    may vary between cache entries, then the entire list must be scanned
    on every cache swap, even if no disposal function is in use.

    Optional, must be a function.

* `noDisposeOnSet` Set to `true` to suppress calling the `dispose()`
  function if the entry key is still accessible within the cache.

* `ttl` - max time to live for items before they are considered stale.
  Note that stale items are NOT preemptively removed, and MAY live in the
  cache, contributing to its LRU max, long after they have expired.

    Also, as this cache is optimized for LRU/MRU operations, some of
    the staleness/TTL checks will reduce performance, as they will incur
    overhead by deleting from Map objects rather than simply throwing old
    Map objects away.

    This is not primarily a TTL cache, and does not make strong TTL
    guarantees.  There is no pre-emptive pruning of expired items, but you
    _may_ set a TTL on the cache, and it will treat expired items as missing
    when they are fetched, and delete them.

    Optional, but must be a positive integer in ms if specified.

    This may be overridden by passing an options object to `cache.set()`.

    Deprecated alias: `maxAge`

* `allowStale` - By default, if you set `ttl`, it'll only delete stale
  items from the cache when you `get(key)`.  That is, it's not
  pre-emptively pruning items.

    If you set `allowStale:true`, it'll return the stale value before
    deleting it.  If you don't set this, then it'll return `undefined` when
    you try to get a stale entry.

    Note that when a stale entry is fetched, _even if it is returned due to
    `allowStale` being set_, it is removed from the cache immediately.  You
    can immediately put it back in the cache if you wish, thus resetting the
    TTL.

    This may be overridden by passing an options object to `cache.get()`.
    The `cache.has()` method will always return `false` for stale items.

    Boolean, default false, only relevant if `ttl` is set.

    Deprecated alias: `stale`

* `updateAgeOnGet` - When using time-expiring entries with `ttl`, setting
  this to `true` will make each item's age reset to 0 whenever it is
  retrieved from cache with `get()`, causing it to not expire.  (It can
  still fall out of cache based on recency of use, of course.)

    This may be overridden by passing an options object to `cache.get()`.

    Boolean, default false, only relevant if `ttl` is set.

* `updateAgeOnHas` - When using time-expiring entries with `ttl`, setting
  this to `true` will make each item's age reset to 0 whenever it is
  checked for existence in the cache with `has()`, causing it to not
  expire.  (It can still fall out of cache based on recency of use, of
  course.)

    Note that using this option means that `cache.has()` is no longer
    idempotent, as it can change a cache entry's staleness.

    This may be overridden by passing an options object to `cache.has()`.

    Boolean, default false, only relevant if `ttl` is set.

* `updateRecencyOnHas` - Update the recency of a cache entry when calling
  `cache.has()`.  By default, cache entry recency is only updated when
  calling `cache.get()` or `cache.set()`.

    Note that using this option means that `cache.has()` can affect the
    shape of the cache, and even cause items to be dropped, if updating an
    item's recency allows less recently used items to be discarded.

    This may be overridden by passing an options object to `cache.has()`.

    Boolean, default false.

* `updateRecencyOnGet` - If set to false, do _not_ update the recency of an
  item when `cache.get()` retrieves it from the cache.

    Setting this option to `false` is only useful in rare scenarios.  It
    effectively removes the whole point of this library, by no longer
    tracking "use" of cache entries.  However, note that less recently
    _added_ items will still be dropped from cache as new items are added.

    This may be overridden by passing an options object to `cache.get()`.

    Boolean, default true, only disabled if explicitly set to `false`.

## API

* `new LRUCache(options)`

    Create a new LRUCache.  All options are documented above, and are on
    the cache as public members.

* `cache.max`, `cache.ttl`, `cache.allowStale`, etc.

    All option names are exposed as public members on the cache object.

    These are intended for read access only.  Changing them during program
    operation can cause undefined behavior.

* `cache.size`

    The total size of items held in the cache at the current moment.

    Note that this value will often be _greater_ than `cache.max`, but as
    long as at least `cache.max` items have been added, it will never be
    _less_ than `cache.max`.

    When using the default sizeCalculation method of `()=>1`, `cache.size`
    will never grow beyond `2 * max - 1`.  If a `sizeCalculation` method
    returns different sizes based on entry values, then `cache.size` may be
    much greater than `cache.max`, but will still never shrink below
    `cache.max` once reached.

* `cache.itemCount`

    The total number of items held in the cache at the current moment.

    Note that this value will often be _greater_ than `cache.max`, but as
    long as at least `cache.max` items have been added, it will never be
    _less_ than `cache.max`.

    When using the default sizeCalculation method of `()=>1`, `cache.size`
    will never grow beyond `2 * max - 1`.  If a `sizeCalculation` method
    returns different sizes based on entry values, then `cache.size` may be
    much greater than `cache.max`, but will still never shrink below
    `cache.max` once reached.

* `set(key, value, [{size, sizeCalculation, ttl }])`

    Add a value to the cache.  Optional options object may contain `ttl`
    and `sizeCalculation` as described above, which default to the settings
    on the cache object.  Options object my also include `size`, which will
    prevent calling the `sizeCalculation` function and just use the
    specified number if it is a positive integer.

    Will update the recency of the entry, adding it to the current
    generation.

* `get(key, [{ updateAgeOnGet, updateRecencyOnGet, allowStale }]) => value`

    Return a value from the cache.

    By default, will update the recency of the cache entry found.

    If the key is not found, `get()` will return `undefined`.  This can be
    confusing when setting values specifically to `undefined`, as in
    `cache.set(key, undefined)`.  Use `cache.has()` to determine whether a
    key is present in the cache at all.

    The key and val can be any value.

* `has(key, [{ updateRecencyOnHas, updateAgeOnHas }])`

    Check if a key is in the cache, without (by default) updating the
    recency or age.

    Will return `false` if the item has a ttl and is stale, even though it
    is technically in the cache.

* `delete(key)`

    Deletes a key out of the cache.

    This should not be done often in normal circumstances, as it can
    negatively impact performance.

* `reset()`

    Clear the cache entirely, throwing away all values.

* `keys()`

    Return a generator yielding the keys in the cache.

* `values()`

    Return a generator yielding the values in the cache.

* `entries()`

    Return a generator yielding `[key, value]` pairs.

* `find(fn, [getOptions])`

    Find a value for which the supplied `fn` method returns a truthy value,
    similar to `Array.find()`.

    `fn` is called as `fn(value, key, cache)`.

    The optional `getOptions` are applied to the resulting `get()` of the
    item found.

* `dump()`

    Return an array of `[key, entry]` objects which can be passed to
    `cache.load()`

    Note: this returns an actual array, not a generator, so it can be more
    easily passed around.

* `load(entries)`

    Reset the cache and load in the items in `entries` in the order listed.
    Note that the shape of the resulting cache may be different if the same
    options are not used in both caches.

### Internal Methods and Properties

Do not use or rely on these.  This documentation is here so that it is
especially clear that this not "undocumented" because someone forgot; it
_is_ documented, and the documentation is telling you not to do it.

Do not report bugs that stem from using these properties.  They will be
ignored.

* `cache.current` **INTERNAL**

    Internal `Map()` object storing the current generation of entries.

    Do not use or rely on this.

* `cache.old` **INTERNAL**

    Internal `Map()` object storing the previous generation of entries.

    Do not use or rely on this.

* `rawIterate` **INTERNAL**

    Helper method used by keys, values, entries, and dump.

    Do not use or rely on this.

* `promote(key, entry)` **INTERNAL**

    Move an entry from the old generation to the current generation.

    Do not use or rely on this.

## Breaking Changes in Version 7

This library changed to a different algorithm and internal data structure
in version 7, yielding significantly better performance, albeit with
some subtle changes to the semantics and some removed API surface as a
result.

### Semantic/Contract Changes

Instead of keeping a list of items sorted by use recency, there are two
maps, a `current` and `old` map.  When a key is not found in the `current`
map, but is in the `old` map, it is copied to `current`.  When the number
of items in `current` is greater than or equal to the specified `max`, then
`current` becomes `old`, `old` is discarded, and a new map is created for
`current`, thus discarding the old generation in one operation with less
bookkeeping.

All `set()` oprations are performed on the `current()` map.

This means:

* Items _may_ be retained (in the old map) even when they are no longer
  accessible, by virtue of being shadowed by a different entry with the
  same key in the `current` map.

* We may in some cases store as much as `2 * max - 1` items, because we
  only discard anything once `current` is full.

* `dispose()` calls may be performed long after the item has ceased to be
  accessible, since we only do this when discarding the `old` map.

* An item may be accessible, even if it is not strictly within the `max`
  most recently used items.

* Many of the features that relied on iteration/ordering no longer make
  sense.  For example, `cache.pop()` isn't possible, since we don't
  keep items in order of recency, only in batches.

For example, consider a cache with `{ max: 5 }`.

* Add 5 items to the cache, in order.  This causes a `swap()` to the
  `old` generation.
* Add 4 more items, which all stay in the `current` generation.
* At this point there are _9_ items accessible.

```js
const LRU = require('lru-cache')
const cache = new LRU({ max: 5 })
for (let i = 0; i < 5; i++) {
  cache.set(i, i)
}
// now 0-4 are all in old generation, current generation is empty
for (let i = 5; i < 9; i++) {
  cache.set(i, i)
}
// now 5-8 are in the current generation, 0-4 in old gen
// but 0 was less recently used than 4.
console.log(cache.get(0)) // v7+: '0', previously: 'undefined'
// this pulls 0 from old to current, so current.size = 5,
// and a swap is performed.
// we have just discarded 4 in favor of 0!
```

If we `get()` the first item added in the first step, it will move to
the `current` generation, and the other 4 items in the `old`
generation will be pruned.

In previous versions of this library, at most exactly 5 items would
ever be accessible, and they would always be the most recently used 5
items.  The above scenario shows that it is no longer possible to rely
on the contract that this cache will always and only return exactly the
`max` most recently used items.

### Specific API Changes

For the most part, the feature set has been maintained as much as possible.

However, some other cleanup and refactoring changes were made in v7 as
well.

* The `set()`, `get()`, and `has()` functions take options objects
  instead of positional booleans/integers for optional parameters.
* `size` can be set explicitly on `set()`.
* `updateAgeOnHas` and `updateRecencyOnHas` added.
* `peek()` method removed, use the `{updateRecencyOnGet:false}` option.
* `cache.length` was renamed to the more fitting `cache.size`.
* Option name deprecations:
  * `stale` -> `allowStale`
  * `length` -> `sizeCalculation`
  * `maxAge` -> `ttl`
* The objects used by `cache.load()` and `cache.dump()` are incompatible
  with previous versions.
