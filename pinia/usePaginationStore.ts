import { defineStore } from 'pinia'

interface PaginationItem {
  current: number
  next: number | null
  nextUrl?: string | null
}

interface Pagination {
  tracks: PaginationItem
}

interface State {
  pagination: Pagination
}

export const usePaginationStore = defineStore('pagination', {
  state: (): State => {
    return {
      pagination: {
        tracks: {
          current: 1,
          next: null,
          nextUrl: null
        }
      }
    }
  }
})
