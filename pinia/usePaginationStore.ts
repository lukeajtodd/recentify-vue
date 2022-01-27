import { defineStore } from 'pinia'

import { Direction, baseUrl } from './useSpotifyStore'

interface State {
  index: number
  pages: string[]
}

export const usePaginationStore = defineStore('pagination', {
  state: (): State => {
    return {
      index: 0,
      pages: [baseUrl]
    }
  },
  actions: {
    getUrl() {
      return this.pages[this.index]
    },
    resetPagination() {
      this.index = 0;
      this.pages = [baseUrl]
    },
    updateIndex(direction: Direction) {
      const goingNext = direction === Direction.Next
      const goingPrevious = direction === Direction.Previous

      if (goingNext) {
        this.index += 1
      }

      if (goingPrevious) {
        this.index -= 1
      }
    },
    updatePages(nextPage: string) {
      if (this.pages.indexOf(nextPage) === -1) {
        this.pages.push(nextPage)
      }
    }
  }
})
