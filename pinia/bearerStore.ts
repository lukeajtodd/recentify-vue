import { defineStore } from 'pinia'

export const bearerStore = defineStore('bearer', {
  state: () => {
    const token = localStorage.getItem('authorization')

    return {
      token: token || '',
    }
  },
  getters: {
    beareredToken(state) {
      return `Bearer ${state.token}`
    }
  }
})
