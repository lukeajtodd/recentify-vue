import { defineStore } from 'pinia'
import axios from 'axios'

import { bearerStore } from './bearerStore'

interface Artist {
  id: string
  name: string
}

interface Track {
  id: string
  name: string
  artist: Artist
}

interface State {
  tracks: Track[]
}

export const tracksStore = defineStore('tracks', {
  state: (): State => {
    return {
      tracks: []
    }
  },
  actions: {
    async updateTracks() {
      const { beareredToken } = bearerStore()

      const result = await axios({
        method: 'GET',
        responseType: 'json',
        url: `https://api.spotify.com/v1/me/player/recently-played`,
        headers: {
          'Authorization': beareredToken,
          'Content-Type': 'application/json'
        }
      })

      this.tracks = [...result.data.items].map(item => {
        console.log(item)
        return {
          id: item.track.id,
          name: item.track.name,
          artist: {
            id: item.track.artists[0].id,
            name: item.track.artists[0].name,
          }
        }
      })
    }
  }
})
