import LRUCache from '../../'
export const expose = (cache: LRUCache<any, any>, LRU = LRUCache) => {
  return Object.assign(
    LRU.unsafeExposeInternals(cache),
    cache
  )
}
