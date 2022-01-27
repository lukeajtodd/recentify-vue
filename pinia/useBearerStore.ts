import { defineStore } from 'pinia'

export const useBearerStore = defineStore('bearer', {
  state: () => {
    const token = localStorage.getItem('authorization')

    return {
      token: token || '',
    }
  },
  getters: {
    beareredToken(state) {
      let token: string = state.token

      if (!state.token) {
        const cachedToken = localStorage.getItem('authorization')
        if (cachedToken) {
          token = cachedToken
        }
      }

      if (!token) {
        return null
      }

      return `Bearer ${token}`
    }
  },
  actions: {
    resetToken() {
      localStorage.removeItem('authorization')
      this.token = ''
    }
  }
})
