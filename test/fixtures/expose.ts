import LRUCache from '../../index'
export const exposeStatics = (LRU: typeof LRUCache) => {
  return LRU as unknown as {
    AbortController: any
    AbortSignal: any
  }
}
export const expose = (cache: LRUCache<any, any>) => {
  return cache as unknown as {
    isBackgroundFetch: (v: any) => boolean
    backgroundFetch: (
      v: any,
      index: number,
      options: { [k: string]: any },
      context?: any
    ) => Promise<any>
    isStale: (index?: number) => boolean
    valList: any[]
    keyList: any[]
    free: number[]
    keyMap: Map<any, number>
    starts: number[]
    ttls: number[]
    sizes: number[]
    indexes: (...a: any[]) => Iterable<number>
    rindexes: (...a: any[]) => Iterable<number>
    next: number[]
    prev: number[]
    head: number
    tail: number
    moveToTail: (i: number) => void
  }
}
