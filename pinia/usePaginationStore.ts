import { defineStore } from 'pinia'

interface Pagination {
  current: number
  next: number | null
  nextUrl?: string | null
}

interface State {
  pagination: Pagination
}

export const usePaginationStore = defineStore('pagination', {
  state: (): State => {
    return {
      pagination: {
        current: 1,
        next: null,
        nextUrl: null,
      },
    }
  },
})
