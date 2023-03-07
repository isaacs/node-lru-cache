# bench-lru

benchmark the least-recently-used caches which are available on npm.

## Update: March, 2023

Forked and ported over to be used within the lru-cache project
directly.  Made a bunch of changes to make it easier to run this
on an ongoing basis and detect regressions.

More implementations can be added by adding them to the list in
the `make-deps.sh` script, but for my purposes, the only decently
fast and reasonably correct LRU implementations apart from this
one are hashlru, lru-fast, and especially, mnemonist.  My purpose
is not to win a contest, it's to easily track and debug
performance characteristics of this library.

Run the tests by running `make` in this directory.

## Update: January, 2022

This is a fork of Dominc Tarr's original `bench-lru` script. I've made the
following modifications.

First, I noted that cache performance and correctness in JavaScript is
highly dependent on the types of keys used to store items in the cache.

Specifically:

1. When using keys that aren't strings or symbols, it's possible for keys
   to collide if using an `Object` as the backing store rather than a
   `Map`.
2. When using integer numbers as object keys, V8 is extremely optimized for
   `Object` data storage, especially if the values are also integers.
   However, if the values are numeric strings but numeric _float_ strings,
   performance goes out the window.
3. Long strings are much slower Object keys than long strings.

In the real world, it's quite rare to store 200k integers using the exact
same 200k integers as keys. This iteration of the benchmark uses a variety
of integers, floats, numeric integer strings, numeric float strings, long
strings, strings and integers that collide, objects, and so on, and
disqualifies caches that don't pass a basic correctness smoke test.

Next, the weighting of scores doesn't much match real world use cases
either. In observing several production use cases of LRU caches, the
some consistent patterns can be observed.

Typically, an LRUCache is being used (if it is actually needed) for a case
where:

1. The total data corpus is _very large_, and cannot comfortably fit in
   memory. (If it isn't large, just save it all, don't bother with an
   LRU.)
2. The time required to fetch any given item is significant. (If it isn't,
   just fetch it each time, don't bother with an LRU.)
3. The time over which the data will be accessed is significant, and thus
   the subset of the corpus of data which will _eventually_ need to be
   accessed is by the process is more than can comfortably fit in memory.
4. Items tend to spike in popularity for a while, then become less
   frequenty accessed.

If these criteria are met, an LRUCache is a good fit. If a few of them are
likely, and the others _might_ be true, then it might still be a good fit
to be safe. It's a fairly common need, if somewhat specific.

Given this behavior pattern, the weights in the benchmark were off. Simply
reporting updates per ms next to evictions per ms is a bit unhelpful.
Dominic was correct that evictions are important.

However, an eviction _can only happen_ at the time of making a `set()`
call, which means that you just performed some expensive upstream action to
get the thing that you're caching from its origin.

`update`s (that is, setting a key which is already in the cache) are
extremely rare in normal LRU-friendly workloads. If you already have it in
the cache, don't fetch it upstream or write it again, use the cached one.
That's the whole point!

The _most_ frequent operations an LRUCache is normally called upon for is:
"fetching an item from the queue again".

That is to say, to the greatest extent possible, `get()` performance should
be roughly equivalent, regardless of where in the heirarchy of recency a
given item is found. If fetching the most recently used item is fast, but
fetching the item 50% most recently used, or even least recently used, is
slow, then the cache will perform poorly (and unpredictably!) under real
workloads.

To account for the priorities (and the fact that eviction is much slower in
every cache measured), the following weights are applied to form a
final "score", which is used to sort the list:

1. `evict * 5`
2. `get2 * 5`
3. `get1 * 3`
4. `set * 2`
5. `update * 1`

Note that since `get2` tends to be much faster than `evict` in all caches
tested, this ends up being the most important metric.

Also, I observed that some caches perform very well when `get()` calls are
made in the order in which they were inserted into the cache, but much more
poorly when `get()` calls are made out of order. Under real workloads, a
cache is rarely called upon to list its contents in insertion order, but
instead is used in an unpredictable order.

To accomplish this, the ordering of the data used in the `update` and
`get2` benchmarks is randomized, so that the items need to be constantly
reshuffled, as they would be in a real use case.

### Conclusions from this new approach, and my attempts to make lru-cache perform well

1. Only caches with `Map`-based key stores are capable of handling keys
   that are long string, numeric float strings, or `Symbol` objects with
   adequate performance.

   This was surprising to me! I expected that `Symbol` objects would
   perform well in an `Object` key store, and I suspect that future
   versions of V8 may optimize this code path if more people use it. The
   performance gains on long strings (and especially numeric float strings)
   in `Map` key stores was somewhat surprising as well, but this just shows
   the hazard of optimizing for a benchmark instead of making a benchmark
   match real workloads.

2. Only caches with `Map`-based key stores are capable of handling
   non-string/symbol keys correctly.

3. The garbage-collection penalty for throwing away an object (the approach
   advocated below) is very low for an object full of integer keys and
   numeric values. However, it rises dramatically for almost any other
   shape of data, making linked-list style approaches more effective.

4. Similarly, the gc penalty for object-based linked list approaches makes
   them perform significantly worse than pointer-based linked list
   approaches.

   That is, it's much faster to implement the linked list as two arrays of
   integers and do `this.next[index]` and `this.previous[index]` rather
   than an array of node objects and `node.next` and `node.previous`. No
   amount of object optimization (reusing objects from a pool, etc.)
   seemed able to get around this.

   This wasn't surprising, but it was disappointing. `node.next.value` is
   much more ergonomic and readable than
   `this.valueList[this.next[index]]`.

Almost any of these cache implementations will perform well enough in any
situation where you find yourself with a problem that needs a cache. But
as always, if you are optimizing a hot path and performance matters, make
sure to test it against your actual scenario. If you are strictly using
integers as keys, it's worth using one of the "worse" caches on this list.

## Results

```
int: just an integer
| name                                                           | set   | get1  | update | get2  | evict | score  |
|----------------------------------------------------------------|-------|-------|--------|-------|-------|--------|
| [lru-fast](https://npmjs.com/package/lru-fast)                 | 27663 | 63492 | 8780   | 59880 | 6425  | 586107 |
| [tiny-lru](https://npmjs.com/package/tiny-lru)                 | 22396 | 55096 | 9639   | 51282 | 6359  | 507924 |
| [mnemonist-object](https://www.npmjs.com/package/mnemonist)    | 37736 | 36765 | 15674  | 35778 | 15974 | 460201 |
| [simple-lru-cache](https://npmjs.com/package/simple-lru-cache) | 15723 | 46083 | 6388   | 44346 | 12225 | 458938 |
| [hashlru](https://npmjs.com/package/hashlru)                   | 29112 | 31696 | 12747  | 34130 | 12666 | 400039 |
| [hyperlru-object](https://npmjs.com/package/hyperlru-object)   | 7313  | 30395 | 8547   | 25445 | 6398  | 273573 |
| [lru-cache-7](https://npmjs.com/package/lru-cache)             | 10655 | 20471 | 6796   | 19084 | 5244  | 211159 |
| [lru-cache-7-dispose](https://npmjs.com/package/lru-cache)     | 10395 | 20141 | 6662   | 18727 | 5417  | 208595 |
| [lru-cache-7-size](https://npmjs.com/package/lru-cache)        | 9790  | 20346 | 4652   | 17809 | 5180  | 200215 |
| [mnemonist-map](https://www.npmjs.com/package/mnemonist)       | 12547 | 16488 | 8921   | 16000 | 6002  | 193489 |
| [lru-cache-7-ttl](https://npmjs.com/package/lru-cache)         | 7605  | 17513 | 4121   | 15911 | 4558  | 174215 |
| [lru](https://www.npmjs.com/package/lru)                       | 11779 | 14194 | 5732   | 14914 | 4168  | 167282 |
| [js-lru](https://www.npmjs.com/package/js-lru)                 | 8107  | 15373 | 7460   | 14296 | 3853  | 160538 |
| [secondary-cache](https://npmjs.com/package/secondary-cache)   | 9195  | 11179 | 5258   | 15962 | 3995  | 156970 |
| [lru-cache](https://npmjs.com/package/lru-cache)               | 5218  | 12247 | 4380   | 10422 | 3341  | 120372 |
| [hyperlru-map](https://npmjs.com/package/hyperlru-map)         | 4985  | 11534 | 4858   | 11001 | 2582  | 117345 |
| [modern-lru](https://npmjs.com/package/modern-lru)             | 7027  | 9896  | 4308   | 8803  | 2876  | 106445 |

strint: stringified integer
| name                                                           | set   | get1  | update | get2  | evict | score  |
|----------------------------------------------------------------|-------|-------|--------|-------|-------|--------|
| [hashlru](https://npmjs.com/package/hashlru)                   | 42373 | 37383 | 14025  | 37383 | 13889 | 467280 |
| [lru-cache-7](https://npmjs.com/package/lru-cache)             | 18709 | 42105 | 7505   | 41322 | 17094 | 463318 |
| [lru-cache-7-dispose](https://npmjs.com/package/lru-cache)     | 18570 | 42373 | 7767   | 40984 | 16807 | 460981 |
| [lru-cache-7-size](https://npmjs.com/package/lru-cache)        | 16625 | 41408 | 7189   | 40486 | 16026 | 447223 |
| [tiny-lru](https://npmjs.com/package/tiny-lru)                 | 28050 | 42644 | 8120   | 40241 | 6020  | 423457 |
| [mnemonist-object](https://www.npmjs.com/package/mnemonist)    | 26702 | 35273 | 11111  | 35273 | 14738 | 420389 |
| [mnemonist-map](https://www.npmjs.com/package/mnemonist)       | 20222 | 33389 | 10352  | 32787 | 17969 | 404743 |
| [simple-lru-cache](https://npmjs.com/package/simple-lru-cache) | 12895 | 36166 | 7933   | 36496 | 10995 | 379676 |
| [lru-cache-7-ttl](https://npmjs.com/package/lru-cache)         | 11587 | 36232 | 4918   | 36697 | 11461 | 377578 |
| [lru-fast](https://npmjs.com/package/lru-fast)                 | 23095 | 4836  | 8150   | 54795 | 6141  | 373528 |
| [js-lru](https://www.npmjs.com/package/js-lru)                 | 10554 | 29197 | 7719   | 28777 | 7669  | 298648 |
| [lru](https://www.npmjs.com/package/lru)                       | 20964 | 28818 | 5132   | 27894 | 4749  | 296729 |
| [hyperlru-object](https://npmjs.com/package/hyperlru-object)   | 7997  | 29240 | 5983   | 28249 | 5267  | 277277 |
| [lru-cache](https://npmjs.com/package/lru-cache)               | 6570  | 26774 | 5072   | 26385 | 6693  | 263924 |
| [hyperlru-map](https://npmjs.com/package/hyperlru-map)         | 6037  | 22396 | 6244   | 20263 | 5520  | 214421 |
| [modern-lru](https://npmjs.com/package/modern-lru)             | 8197  | 17668 | 6470   | 19436 | 6234  | 204218 |
| [secondary-cache](https://npmjs.com/package/secondary-cache)   | 7496  | 15760 | 4614   | 13643 | 3716  | 153681 |

str: string that is not a number
| name                                                           | set  | get1  | update | get2  | evict | score  |
|----------------------------------------------------------------|------|-------|--------|-------|-------|--------|
| [mnemonist-object](https://www.npmjs.com/package/mnemonist)    | 7449 | 17637 | 7321   | 16260 | 5587  | 184365 |
| [lru-cache-7-dispose](https://npmjs.com/package/lru-cache)     | 6691 | 12788 | 5349   | 11396 | 3661  | 132380 |
| [lru-cache-7-size](https://npmjs.com/package/lru-cache)        | 6466 | 12821 | 3752   | 11409 | 3662  | 130502 |
| [lru-cache-7](https://npmjs.com/package/lru-cache)             | 6568 | 12547 | 5362   | 11142 | 3604  | 129869 |
| [tiny-lru](https://npmjs.com/package/tiny-lru)                 | 7095 | 12531 | 6250   | 10256 | 3142  | 125023 |
| [mnemonist-map](https://www.npmjs.com/package/mnemonist)       | 7278 | 10341 | 5919   | 9341  | 3801  | 117208 |
| [hashlru](https://npmjs.com/package/hashlru)                   | 9311 | 6517  | 4614   | 6307  | 8478  | 116712 |
| [simple-lru-cache](https://npmjs.com/package/simple-lru-cache) | 4241 | 9302  | 5745   | 8772  | 4632  | 109153 |
| [lru](https://www.npmjs.com/package/lru)                       | 6711 | 10449 | 5947   | 8937  | 2120  | 106001 |
| [lru-fast](https://npmjs.com/package/lru-fast)                 | 4379 | 9770  | 5583   | 9350  | 2702  | 103911 |
| [js-lru](https://www.npmjs.com/package/js-lru)                 | 5259 | 9315  | 4915   | 9166  | 2539  | 101903 |
| [lru-cache-7-ttl](https://npmjs.com/package/lru-cache)         | 5302 | 8897  | 3049   | 8241  | 3269  | 97894  |
| [lru-cache](https://npmjs.com/package/lru-cache)               | 4028 | 8214  | 3213   | 7339  | 2219  | 83701  |
| [hyperlru-object](https://npmjs.com/package/hyperlru-object)   | 3716 | 7321  | 3600   | 7110  | 2236  | 79725  |
| [hyperlru-map](https://npmjs.com/package/hyperlru-map)         | 3512 | 7800  | 3361   | 6698  | 2057  | 77560  |
| [secondary-cache](https://npmjs.com/package/secondary-cache)   | 4660 | 6616  | 2740   | 4827  | 1910  | 65593  |
| [modern-lru](https://npmjs.com/package/modern-lru)             | 4360 | 5792  | 2826   | 5330  | 1956  | 65352  |

numstr: a mix of integers and strings that look like them
⠴ Benchmarking 1 of 17 caches [hashlru] failed correctness check at key="2"
⠧ Benchmarking 3 of 17 caches [hyperlru-object] failed correctness check at key="2"
⠋ Benchmarking 5 of 17 caches [lru] failed correctness check at key="2"
⠋ Benchmarking 11 of 17 caches [lru-fast] failed correctness check at key="2"
⠦ Benchmarking 13 of 17 caches [secondary-cache] failed correctness check at key="2"
⠹ Benchmarking 14 of 17 caches [simple-lru-cache] failed correctness check at key="2"
⠇ Benchmarking 15 of 17 caches [tiny-lru] failed correctness check at key="2"
⠼ Benchmarking 16 of 17 caches [mnemonist-object] failed correctness check at key="2"
| name                                                           | set   | get1  | update | get2  | evict | score  |
|----------------------------------------------------------------|-------|-------|--------|-------|-------|--------|
| [lru-cache-7-dispose](https://npmjs.com/package/lru-cache)     | 10309 | 18519 | 6470   | 16736 | 6105  | 196850 |
| [lru-cache-7](https://npmjs.com/package/lru-cache)             | 10194 | 18587 | 6112   | 16327 | 5863  | 193211 |
| [lru-cache-7-size](https://npmjs.com/package/lru-cache)        | 9281  | 18382 | 5215   | 16779 | 5757  | 191603 |
| [mnemonist-map](https://www.npmjs.com/package/mnemonist)       | 11211 | 17483 | 5025   | 15552 | 6085  | 188081 |
| [lru-cache-7-ttl](https://npmjs.com/package/lru-cache)         | 7257  | 13996 | 3567   | 13477 | 4880  | 151854 |
| [js-lru](https://www.npmjs.com/package/js-lru)                 | 7070  | 13803 | 6260   | 12469 | 3387  | 141089 |
| [lru-cache](https://npmjs.com/package/lru-cache)               | 5044  | 12682 | 3731   | 10667 | 3192  | 121160 |
| [hyperlru-map](https://npmjs.com/package/hyperlru-map)         | 4302  | 11461 | 3851   | 9901  | 2620  | 109443 |
| [modern-lru](https://npmjs.com/package/modern-lru)             | 6510  | 9276  | 4511   | 8969  | 3217  | 106289 |
| [hashlru](https://npmjs.com/package/hashlru)                   | 0     | 0     | 0      | 0     | 0     | 0      |
| [hyperlru-object](https://npmjs.com/package/hyperlru-object)   | 0     | 0     | 0      | 0     | 0     | 0      |
| [lru](https://www.npmjs.com/package/lru)                       | 0     | 0     | 0      | 0     | 0     | 0      |
| [lru-fast](https://npmjs.com/package/lru-fast)                 | 0     | 0     | 0      | 0     | 0     | 0      |
| [secondary-cache](https://npmjs.com/package/secondary-cache)   | 0     | 0     | 0      | 0     | 0     | 0      |
| [simple-lru-cache](https://npmjs.com/package/simple-lru-cache) | 0     | 0     | 0      | 0     | 0     | 0      |
| [tiny-lru](https://npmjs.com/package/tiny-lru)                 | 0     | 0     | 0      | 0     | 0     | 0      |
| [mnemonist-object](https://www.npmjs.com/package/mnemonist)    | 0     | 0     | 0      | 0     | 0     | 0      |

pi: multiples of pi
| name                                                           | set  | get1  | update | get2  | evict | score  |
|----------------------------------------------------------------|------|-------|--------|-------|-------|--------|
| [lru-cache-7](https://npmjs.com/package/lru-cache)             | 5588 | 11891 | 4519   | 10905 | 3064  | 121213 |
| [mnemonist-map](https://www.npmjs.com/package/mnemonist)       | 7457 | 9980  | 5838   | 9579  | 3842  | 117797 |
| [lru-cache-7-size](https://npmjs.com/package/lru-cache)        | 4700 | 10096 | 2950   | 11148 | 2719  | 111973 |
| [lru-cache-7-dispose](https://npmjs.com/package/lru-cache)     | 5372 | 10256 | 4248   | 10262 | 2951  | 111825 |
| [js-lru](https://www.npmjs.com/package/js-lru)                 | 3807 | 8893  | 5237   | 8058  | 2400  | 91820  |
| [lru-cache-7-ttl](https://npmjs.com/package/lru-cache)         | 3269 | 5313  | 3204   | 7968  | 2526  | 78151  |
| [lru-cache](https://npmjs.com/package/lru-cache)               | 3309 | 6709  | 3230   | 6861  | 1837  | 73465  |
| [hyperlru-map](https://npmjs.com/package/hyperlru-map)         | 3152 | 6234  | 3444   | 6246  | 1694  | 68150  |
| [modern-lru](https://npmjs.com/package/modern-lru)             | 2642 | 4103  | 2452   | 4190  | 1508  | 48535  |
| [mnemonist-object](https://www.npmjs.com/package/mnemonist)    | 1643 | 2244  | 2016   | 2315  | 836   | 27789  |
| [lru](https://www.npmjs.com/package/lru)                       | 1688 | 1980  | 1744   | 1891  | 1277  | 26900  |
| [hashlru](https://npmjs.com/package/hashlru)                   | 1801 | 1599  | 1362   | 1545  | 1655  | 25761  |
| [simple-lru-cache](https://npmjs.com/package/simple-lru-cache) | 1358 | 1948  | 1803   | 1998  | 789   | 24298  |
| [lru-fast](https://npmjs.com/package/lru-fast)                 | 1326 | 1944  | 1590   | 1994  | 681   | 23449  |
| [tiny-lru](https://npmjs.com/package/tiny-lru)                 | 1542 | 1917  | 1484   | 1803  | 749   | 23079  |
| [hyperlru-object](https://npmjs.com/package/hyperlru-object)   | 1304 | 1755  | 1473   | 1871  | 663   | 22016  |
| [secondary-cache](https://npmjs.com/package/secondary-cache)   | 1336 | 1597  | 1162   | 1661  | 610   | 19980  |

float: floating point values
| name                                                           | set  | get1  | update | get2  | evict | score  |
|----------------------------------------------------------------|------|-------|--------|-------|-------|--------|
| [lru-cache-7-size](https://npmjs.com/package/lru-cache)        | 5420 | 10493 | 3197   | 12255 | 3091  | 122246 |
| [lru-cache-7](https://npmjs.com/package/lru-cache)             | 5478 | 11827 | 4633   | 10858 | 3048  | 120600 |
| [mnemonist-map](https://www.npmjs.com/package/mnemonist)       | 7582 | 10325 | 6209   | 9766  | 3849  | 120423 |
| [lru-cache-7-dispose](https://npmjs.com/package/lru-cache)     | 5318 | 8150  | 3664   | 11912 | 3293  | 114775 |
| [js-lru](https://www.npmjs.com/package/js-lru)                 | 4004 | 8610  | 5488   | 8407  | 2555  | 94136  |
| [lru-cache-7-ttl](https://npmjs.com/package/lru-cache)         | 3327 | 7067  | 3033   | 7776  | 2532  | 82428  |
| [hyperlru-map](https://npmjs.com/package/hyperlru-map)         | 3077 | 6609  | 3506   | 6414  | 1681  | 69962  |
| [lru-cache](https://npmjs.com/package/lru-cache)               | 3151 | 6279  | 3212   | 6623  | 1698  | 69956  |
| [modern-lru](https://npmjs.com/package/modern-lru)             | 2964 | 4551  | 2616   | 4665  | 1701  | 54027  |
| [mnemonist-object](https://www.npmjs.com/package/mnemonist)    | 1657 | 2376  | 2028   | 2448  | 846   | 28940  |
| [lru](https://www.npmjs.com/package/lru)                       | 1749 | 2181  | 1821   | 1985  | 1207  | 27822  |
| [hashlru](https://npmjs.com/package/hashlru)                   | 1784 | 1675  | 1456   | 1604  | 1639  | 26264  |
| [tiny-lru](https://npmjs.com/package/tiny-lru)                 | 1662 | 2006  | 1612   | 1917  | 840   | 24739  |
| [lru-fast](https://npmjs.com/package/lru-fast)                 | 1367 | 2018  | 1788   | 2071  | 703   | 24446  |
| [simple-lru-cache](https://npmjs.com/package/simple-lru-cache) | 1368 | 1919  | 1880   | 1975  | 797   | 24233  |
| [hyperlru-object](https://npmjs.com/package/hyperlru-object)   | 1305 | 1866  | 1515   | 1886  | 684   | 22573  |
| [secondary-cache](https://npmjs.com/package/secondary-cache)   | 1323 | 1662  | 1232   | 1690  | 634   | 20484  |

obj: an object with a single key
⠴ Benchmarking 1 of 17 caches [hashlru] failed correctness check at key={"z":0}
⠧ Benchmarking 3 of 17 caches [hyperlru-object] failed correctness check at key={"z":0}
⠇ Benchmarking 5 of 17 caches [lru] failed correctness check at key={"z":0}
⠼ Benchmarking 11 of 17 caches [lru-fast] failed correctness check at key={"z":0}
⠋ Benchmarking 13 of 17 caches [secondary-cache] failed correctness check at key={"z":0}
⠴ Benchmarking 14 of 17 caches [simple-lru-cache] failed correctness check at key={"z":0}
⠙ Benchmarking 15 of 17 caches [tiny-lru] failed correctness check at key={"z":0}
⠧ Benchmarking 16 of 17 caches [mnemonist-object] failed correctness check at key={"z":0}
| name                                                           | set   | get1  | update | get2  | evict | score  |
|----------------------------------------------------------------|-------|-------|--------|-------|-------|--------|
| [lru-cache-7](https://npmjs.com/package/lru-cache)             | 10215 | 19822 | 6581   | 19157 | 5623  | 210377 |
| [lru-cache-7-dispose](https://npmjs.com/package/lru-cache)     | 9921  | 20429 | 6718   | 18349 | 5548  | 207332 |
| [lru-cache-7-size](https://npmjs.com/package/lru-cache)        | 8913  | 20387 | 5954   | 18639 | 5366  | 204966 |
| [mnemonist-map](https://www.npmjs.com/package/mnemonist)       | 11710 | 18100 | 5161   | 16273 | 5700  | 192746 |
| [lru-cache-7-ttl](https://npmjs.com/package/lru-cache)         | 7055  | 17227 | 3566   | 16064 | 4551  | 172432 |
| [js-lru](https://www.npmjs.com/package/js-lru)                 | 7613  | 14286 | 6892   | 12723 | 3630  | 146741 |
| [lru-cache](https://npmjs.com/package/lru-cache)               | 5061  | 12158 | 4043   | 10655 | 3644  | 122134 |
| [modern-lru](https://npmjs.com/package/modern-lru)             | 6129  | 10616 | 5444   | 10304 | 2957  | 115855 |
| [hyperlru-map](https://npmjs.com/package/hyperlru-map)         | 4537  | 11056 | 3974   | 9128  | 2557  | 104641 |
| [hashlru](https://npmjs.com/package/hashlru)                   | 0     | 0     | 0      | 0     | 0     | 0      |
| [hyperlru-object](https://npmjs.com/package/hyperlru-object)   | 0     | 0     | 0      | 0     | 0     | 0      |
| [lru](https://www.npmjs.com/package/lru)                       | 0     | 0     | 0      | 0     | 0     | 0      |
| [lru-fast](https://npmjs.com/package/lru-fast)                 | 0     | 0     | 0      | 0     | 0     | 0      |
| [secondary-cache](https://npmjs.com/package/secondary-cache)   | 0     | 0     | 0      | 0     | 0     | 0      |
| [simple-lru-cache](https://npmjs.com/package/simple-lru-cache) | 0     | 0     | 0      | 0     | 0     | 0      |
| [tiny-lru](https://npmjs.com/package/tiny-lru)                 | 0     | 0     | 0      | 0     | 0     | 0      |
| [mnemonist-object](https://www.npmjs.com/package/mnemonist)    | 0     | 0     | 0      | 0     | 0     | 0      |

rand: random floating point number
| name                                                           | set  | get1  | update | get2  | evict | score  |
|----------------------------------------------------------------|------|-------|--------|-------|-------|--------|
| [lru-cache-7-size](https://npmjs.com/package/lru-cache)        | 4912 | 10644 | 3218   | 11744 | 3027  | 118829 |
| [lru-cache-7](https://npmjs.com/package/lru-cache)             | 5789 | 11013 | 4197   | 10834 | 3099  | 118479 |
| [mnemonist-map](https://www.npmjs.com/package/mnemonist)       | 7524 | 10050 | 5936   | 9398  | 3826  | 117254 |
| [lru-cache-7-dispose](https://npmjs.com/package/lru-cache)     | 5640 | 9217  | 3837   | 10846 | 3061  | 112303 |
| [js-lru](https://www.npmjs.com/package/js-lru)                 | 3982 | 8052  | 5155   | 8651  | 2431  | 92685  |
| [lru-cache-7-ttl](https://npmjs.com/package/lru-cache)         | 3176 | 7246  | 2881   | 7070  | 2488  | 78761  |
| [lru-cache](https://npmjs.com/package/lru-cache)               | 3071 | 6810  | 3150   | 6481  | 1812  | 71187  |
| [hyperlru-map](https://npmjs.com/package/hyperlru-map)         | 3175 | 6295  | 3386   | 6109  | 1712  | 67726  |
| [modern-lru](https://npmjs.com/package/modern-lru)             | 3341 | 4206  | 2594   | 4619  | 1653  | 53254  |
| [mnemonist-object](https://www.npmjs.com/package/mnemonist)    | 1669 | 2380  | 1984   | 2350  | 859   | 28507  |
| [lru](https://www.npmjs.com/package/lru)                       | 1723 | 1866  | 1668   | 1829  | 1265  | 26182  |
| [hashlru](https://npmjs.com/package/hashlru)                   | 1790 | 1610  | 1402   | 1546  | 1613  | 25607  |
| [tiny-lru](https://npmjs.com/package/tiny-lru)                 | 1667 | 2060  | 1572   | 1946  | 809   | 24861  |
| [simple-lru-cache](https://npmjs.com/package/simple-lru-cache) | 1368 | 1958  | 1791   | 1999  | 768   | 24236  |
| [lru-fast](https://npmjs.com/package/lru-fast)                 | 1360 | 1952  | 1760   | 1987  | 696   | 23751  |
| [hyperlru-object](https://npmjs.com/package/hyperlru-object)   | 1205 | 1815  | 1509   | 1949  | 682   | 22519  |
| [secondary-cache](https://npmjs.com/package/secondary-cache)   | 1391 | 1665  | 1217   | 1740  | 645   | 20919  |

sym: a Symbol object
⠼ Benchmarking 5 of 17 caches [lru] failed correctness check TypeError: Cannot convert a Symbol value to a string
    at LRU.set (/Users/isaacs/dev/isaacs/lru-cache/bench-lru/node_modules/lru/index.js:69:41)
    at self.onmessage (evalmachine.<anonymous>:116:38)
    at process.<anonymous> (/Users/isaacs/dev/isaacs/lru-cache/bench-lru/node_modules/tiny-worker/lib/worker.js:60:55)
    at process.emit (node:events:520:28)
    at emit (node:internal/child_process:936:14)
    at processTicksAndRejections (node:internal/process/task_queues:84:21)
| name                                                           | set   | get1  | update | get2  | evict | score  |
|----------------------------------------------------------------|-------|-------|--------|-------|-------|--------|
| [lru-cache-7](https://npmjs.com/package/lru-cache)             | 9886  | 19361 | 6991   | 17809 | 5445  | 201116 |
| [lru-cache-7-dispose](https://npmjs.com/package/lru-cache)     | 9809  | 19455 | 6258   | 17794 | 5430  | 200361 |
| [lru-cache-7-size](https://npmjs.com/package/lru-cache)        | 9074  | 19417 | 6450   | 17953 | 5359  | 199409 |
| [mnemonist-object](https://www.npmjs.com/package/mnemonist)    | 7776  | 20492 | 6831   | 17391 | 5593  | 198779 |
| [mnemonist-map](https://www.npmjs.com/package/mnemonist)       | 10893 | 17652 | 5375   | 15540 | 5616  | 185897 |
| [js-lru](https://www.npmjs.com/package/js-lru)                 | 7297  | 14399 | 6925   | 12650 | 3591  | 145921 |
| [lru-cache-7-ttl](https://npmjs.com/package/lru-cache)         | 7174  | 14124 | 3938   | 12300 | 4535  | 144833 |
| [tiny-lru](https://npmjs.com/package/tiny-lru)                 | 7758  | 12845 | 6824   | 11682 | 3125  | 134910 |
| [lru-fast](https://npmjs.com/package/lru-fast)                 | 6028  | 3537  | 6916   | 16340 | 2874  | 125653 |
| [hashlru](https://npmjs.com/package/hashlru)                   | 9602  | 7148  | 5144   | 6761  | 8264  | 120917 |
| [lru-cache](https://npmjs.com/package/lru-cache)               | 5179  | 12114 | 3814   | 10846 | 3207  | 120779 |
| [simple-lru-cache](https://npmjs.com/package/simple-lru-cache) | 4636  | 8957  | 6044   | 8981  | 4601  | 110097 |
| [hyperlru-map](https://npmjs.com/package/hyperlru-map)         | 4540  | 10959 | 4344   | 8799  | 2696  | 103776 |
| [modern-lru](https://npmjs.com/package/modern-lru)             | 6129  | 8421  | 5045   | 8460  | 2817  | 98951  |
| [hyperlru-object](https://npmjs.com/package/hyperlru-object)   | 3577  | 7533  | 3856   | 6349  | 2258  | 76644  |
| [secondary-cache](https://npmjs.com/package/secondary-cache)   | 5319  | 7573  | 3177   | 5238  | 2055  | 72999  |
| [lru](https://www.npmjs.com/package/lru)                       | 0     | 0     | 0      | 0     | 0     | 0      |

longstr: a very long string
| name                                                           | set  | get1  | update | get2  | evict | score  |
|----------------------------------------------------------------|------|-------|--------|-------|-------|--------|
| [lru-cache-7](https://npmjs.com/package/lru-cache)             | 5882 | 11044 | 5009   | 10147 | 3107  | 116175 |
| [lru-cache-7-size](https://npmjs.com/package/lru-cache)        | 5828 | 11287 | 4102   | 10320 | 2738  | 114909 |
| [lru-cache-7-dispose](https://npmjs.com/package/lru-cache)     | 5936 | 9960  | 4827   | 10020 | 3224  | 112799 |
| [mnemonist-map](https://www.npmjs.com/package/mnemonist)       | 6464 | 9264  | 6291   | 8396  | 3193  | 104956 |
| [lru-cache-7-ttl](https://npmjs.com/package/lru-cache)         | 4900 | 8834  | 3499   | 8094  | 2759  | 94066  |
| [js-lru](https://www.npmjs.com/package/js-lru)                 | 4700 | 8316  | 5185   | 7997  | 2298  | 91008  |
| [lru-cache](https://npmjs.com/package/lru-cache)               | 3666 | 7862  | 3514   | 6991  | 2044  | 79607  |
| [mnemonist-object](https://www.npmjs.com/package/mnemonist)    | 2949 | 6658  | 4930   | 6640  | 2690  | 77452  |
| [hyperlru-map](https://npmjs.com/package/hyperlru-map)         | 3377 | 7283  | 3492   | 6607  | 1856  | 74410  |
| [simple-lru-cache](https://npmjs.com/package/simple-lru-cache) | 2248 | 4006  | 4218   | 3946  | 2547  | 53197  |
| [hashlru](https://npmjs.com/package/hashlru)                   | 4003 | 3281  | 2791   | 3078  | 3169  | 51875  |
| [lru-fast](https://npmjs.com/package/lru-fast)                 | 2261 | 4432  | 3907   | 4352  | 1616  | 51565  |
| [modern-lru](https://npmjs.com/package/modern-lru)             | 3132 | 4287  | 2691   | 4307  | 1282  | 49761  |
| [tiny-lru](https://npmjs.com/package/tiny-lru)                 | 2502 | 3859  | 3854   | 3752  | 1826  | 48325  |
| [hyperlru-object](https://npmjs.com/package/hyperlru-object)   | 1989 | 3715  | 2690   | 3430  | 1235  | 41138  |
| [secondary-cache](https://npmjs.com/package/secondary-cache)   | 2500 | 3394  | 2086   | 2845  | 1148  | 37233  |
| [lru](https://www.npmjs.com/package/lru)                       | 2345 | 3073  | 2714   | 2903  | 1042  | 36348  |

mix: a mix of all the types
⠦ Benchmarking 1 of 17 caches [hashlru] failed correctness check at key={"z":3}
⠧ Benchmarking 3 of 17 caches [hyperlru-object] failed correctness check at key={"z":3}
⠏ Benchmarking 5 of 17 caches [lru] failed correctness check TypeError: Cannot convert a Symbol value to a string
    at LRU.set (/Users/isaacs/dev/isaacs/lru-cache/bench-lru/node_modules/lru/index.js:69:41)
    at self.onmessage (evalmachine.<anonymous>:116:38)
    at process.<anonymous> (/Users/isaacs/dev/isaacs/lru-cache/bench-lru/node_modules/tiny-worker/lib/worker.js:60:55)
    at process.emit (node:events:520:28)
    at emit (node:internal/child_process:936:14)
    at processTicksAndRejections (node:internal/process/task_queues:84:21)
⠼ Benchmarking 11 of 17 caches [lru-fast] failed correctness check at key={"z":3}
⠴ Benchmarking 13 of 17 caches [secondary-cache] failed correctness check at key={"z":3}
⠙ Benchmarking 14 of 17 caches [simple-lru-cache] failed correctness check at key={"z":3}
⠧ Benchmarking 15 of 17 caches [tiny-lru] failed correctness check at key={"z":3}
⠸ Benchmarking 16 of 17 caches [mnemonist-object] failed correctness check at key={"z":3}
| name                                                           | set  | get1  | update | get2  | evict | score  |
|----------------------------------------------------------------|------|-------|--------|-------|-------|--------|
| [lru-cache-7](https://npmjs.com/package/lru-cache)             | 7457 | 13342 | 5802   | 12195 | 3979  | 141612 |
| [mnemonist-map](https://www.npmjs.com/package/mnemonist)       | 8061 | 14015 | 6369   | 11312 | 3975  | 140971 |
| [lru-cache-7-dispose](https://npmjs.com/package/lru-cache)     | 7138 | 13271 | 5321   | 12210 | 3953  | 140225 |
| [lru-cache-7-size](https://npmjs.com/package/lru-cache)        | 6847 | 13405 | 4351   | 12070 | 3757  | 137395 |
| [js-lru](https://www.npmjs.com/package/js-lru)                 | 5316 | 9676  | 4381   | 9170  | 2900  | 104391 |
| [lru-cache-7-ttl](https://npmjs.com/package/lru-cache)         | 5708 | 9833  | 3164   | 8333  | 3419  | 102839 |
| [lru-cache](https://npmjs.com/package/lru-cache)               | 4165 | 8624  | 3328   | 7890  | 2557  | 89765  |
| [hyperlru-map](https://npmjs.com/package/hyperlru-map)         | 3875 | 7758  | 3351   | 7179  | 2017  | 80355  |
| [modern-lru](https://npmjs.com/package/modern-lru)             | 4919 | 6256  | 3227   | 6129  | 2147  | 73213  |
| [hashlru](https://npmjs.com/package/hashlru)                   | 0    | 0     | 0      | 0     | 0     | 0      |
| [hyperlru-object](https://npmjs.com/package/hyperlru-object)   | 0    | 0     | 0      | 0     | 0     | 0      |
| [lru](https://www.npmjs.com/package/lru)                       | 0    | 0     | 0      | 0     | 0     | 0      |
| [lru-fast](https://npmjs.com/package/lru-fast)                 | 0    | 0     | 0      | 0     | 0     | 0      |
| [secondary-cache](https://npmjs.com/package/secondary-cache)   | 0    | 0     | 0      | 0     | 0     | 0      |
| [simple-lru-cache](https://npmjs.com/package/simple-lru-cache) | 0    | 0     | 0      | 0     | 0     | 0      |
| [tiny-lru](https://npmjs.com/package/tiny-lru)                 | 0    | 0     | 0      | 0     | 0     | 0      |
| [mnemonist-object](https://www.npmjs.com/package/mnemonist)    | 0    | 0     | 0      | 0     | 0     | 0      |
```

The best performers are `lru-cache` version 7 and `mnemonist`'s `LRUMap`, across
most categories. `mnemonist-map` seems to consistently have slightly
better eviction and set performance, and slightly worse get performance,
for many key types. The difference is small enough to be negligible,
which is to be expected.

For object-friendly key spaces (strictly integers or strictly short strings),
`mnemonist`'s `LRUCache` and `hashlru` seem to do the best.

For strictly integer key sets, `lru-fast` lives up to its name, blowing the
other implementations out of the water, but did not perform nearly as well
with other types of keys.

---

What follows below is Dominic Tarr's original discussion from 2016.

_[@isaacs](https://github.com/isaacs)_

---

## Introduction

An LRU cache is a cache with bounded memory use.
The point of a cache is to improve performance,
so how performant are the available implementations?

LRUs achive bounded memory use by removing the oldest items when a threashold number of items
is reached. We measure 3 cases, adding an item, updating an item, and adding items
which push other items out of the LRU.

There is a [previous benchmark](https://www.npmjs.com/package/bench-cache)
but it did not describe it's methodology. (and since it measures the memory used,
but tests everything in the same process, it does not get clear results)

## Benchmark

I run a very simple multi-process benchmark, with 5 iterations to get a median of ops/ms:

1. Set the LRU to fit max N=200,000 items.
2. Add N random numbers to the cache, with keys 0-N.
3. Then update those keys with new random numbers.
4. Then _evict_ those keys, by adding keys N-2N.

### Results

Operations per millisecond (_higher is better_):

| name                                                           | set   | get1  | update | get2  | evict |
| -------------------------------------------------------------- | ----- | ----- | ------ | ----- | ----- |
| [hashlru](https://npmjs.com/package/hashlru)                   | 18536 | 17590 | 17794  | 18332 | 9381  |
| [mnemonist-object](https://www.npmjs.com/package/mnemonist)    | 15314 | 69444 | 35026  | 68966 | 7949  |
| [quick-lru](https://npmjs.com/package/quick-lru)               | 8214  | 4572  | 6777   | 4608  | 6345  |
| [tiny-lru](https://npmjs.com/package/tiny-lru)                 | 6530  | 46296 | 37244  | 42017 | 5961  |
| [lru-fast](https://npmjs.com/package/lru-fast)                 | 5979  | 36832 | 32626  | 40900 | 5929  |
| [mnemonist-map](https://www.npmjs.com/package/mnemonist)       | 6272  | 15785 | 10923  | 16077 | 3738  |
| [lru](https://www.npmjs.com/package/lru)                       | 3927  | 5454  | 5001   | 5366  | 2827  |
| [simple-lru-cache](https://npmjs.com/package/simple-lru-cache) | 3393  | 3855  | 3701   | 3899  | 2496  |
| [hyperlru-object](https://npmjs.com/package/hyperlru-object)   | 3515  | 3953  | 4044   | 4102  | 2495  |
| [js-lru](https://www.npmjs.com/package/js-lru)                 | 3813  | 10010 | 9246   | 10309 | 1843  |
| [secondary-cache](https://npmjs.com/package/secondary-cache)   | 2780  | 5705  | 5790   | 10549 | 1727  |
| [lru-cache](https://npmjs.com/package/lru-cache)               | 2275  | 3388  | 3334   | 3301  | 1593  |
| [hyperlru-map](https://npmjs.com/package/hyperlru-map)         | 2424  | 2508  | 2443   | 2540  | 1552  |
| [modern-lru](https://npmjs.com/package/modern-lru)             | 2710  | 3946  | 3581   | 4021  | 1327  |
| [mkc](https://npmjs.com/packacge/package/mkc)                  | 1559  | 2044  | 1178   | 2161  | 1037  |

We can group the results in a few categories:

- all rounders (mnemonist, lru_cache, tiny-lru, simple-lru-cache, lru-fast) where the performance to add update and evict are comparable.
- fast-write, slow-evict (lru, hashlru, lru-native, modern-lru) these have better set/update times, but for some reason are quite slow to evict items!
- slow in at least 2 categories (lru-cache, mkc, faster-lru-cache, secondary-cache)

## Discussion

It appears that all-round performance is the most difficult to achive, in particular,
performance on eviction is difficult to achive. I think eviction performance is the most important
consideration, because once the cache is _warm_ each subsequent addition causes an eviction,
and actively used, _hot_, cache will run close to it's eviction performance.
Also, some have faster add than update, and some faster update than add.

`modern-lru` gets pretty close to `lru-native` perf.
I wrote `hashlru` after my seeing the other results from this benchmark, it's important to point
out that it does not use the classic LRU algorithm, but has the important properties of the LRU
(bounded memory use and O(1) time complexity)

Splitting the benchmark into multiple processes helps minimize JIT state pollution (gc, turbofan opt/deopt, etc.), and we see a much clearer picture of performance per library.

## Future work

This is still pretty early results, take any difference smaller than an order of magnitude with a grain of salt.

It is necessary to measure the statistical significance of the results to know accurately the relative performance of two closely matched implementations.

I also didn't test the memory usage. This should be done running the benchmarks each in a separate process, so that the memory used by each run is not left over while the next is running.

## Conclusion

Javascript is generally slow, so one of the best ways to make it fast is to write less of it.
LRUs are also quite difficult to implement (linked lists!). In trying to come up with a faster
LRU implementation I realized that something far simpler could do the same job. Especially
given the strengths and weaknesses of javascript, this is significantly faster than any of the
other implementations, _including_ the C implementation. Likely, the overhead of the C<->js boundry
is partly to blame here.

## License

MIT
