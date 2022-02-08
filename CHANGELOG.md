# cringe lorg

## 7.2.0

* Add reason to dispose() calls.

## 7.1.0

* Add `ttlResolution` option
* Add `ttlAutopurge` option

## v7 - 2022-02

This library changed to a different algorithm and internal data structure
in version 7, yielding significantly better performance, albeit with
some subtle changes as a result.

If you were relying on the internals of LRUCache in version 6 or before, it
probably will not work in version 7 and above.

### Specific API Changes

For the most part, the feature set has been maintained as much as possible.

However, some other cleanup and refactoring changes were made in v7 as
well.

* The `set()`, `get()`, and `has()` functions take options objects
  instead of positional booleans/integers for optional parameters.
* `size` can be set explicitly on `set()`.
* `cache.length` was renamed to the more fitting `cache.size`.
* Deprecations:
  * `stale` option -> `allowStale`
  * `maxAge` option -> `ttl`
  * `length` option -> `sizeCalculation`
  * `length` property -> `size`
  * `prune()` method -> `purgeStale()`
  * `reset()` method -> `clear()`
* The objects used by `cache.load()` and `cache.dump()` are incompatible
  with previous versions.

## v6 - 2020-07

* Drop support for node v8 and earlier

## v5 - 2018-11

* Add updateAgeOnGet option
* Guards around setting max/maxAge to non-numbers
* Use classes, drop support for old nodes

## v4 - 2015-12

* Improve performance
* add noDisposeOnSet option
* feat(prune): allow users to proactively prune old entries
* Use Symbols for private members
* Add maxAge setter/getter

## v3 - 2015-11

* Add cache.rforEach
* Allow non-string keys

## v2 - 2012-08

* add cache.pop()
* add cache.peek()
* add cache.keys()
* add cache.values()
* fix memory leak
* add `stale` option to return stale values before deleting
* use null-prototype object to avoid hazards
* make options argument an object

## v1 - 2010-05

* initial implementation
