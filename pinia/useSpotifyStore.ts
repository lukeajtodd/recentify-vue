import { defineStore } from 'pinia'
import axios from 'axios'

import { useBearerStore } from './useBearerStore'

export interface Artist {
  id: string
  name: string
}

export interface Track {
  id: string
  name: string
  artist: Artist
}

interface State {
  filteredArtist: Artist['id']
  artists: Artist[]
  tracks: Track[]
}

export const useSpotifyStore = defineStore('spotify', {
  state: (): State => {
    return {
      filteredArtist: '',
      artists: [],
      tracks: []
    }
  },
  actions: {
    updateArtist(artist: Artist['id']) {
      this.filteredArtist = artist
    },
    updateArtists() {
      this.artists = this.tracks.reduce((artists: Artist[], track: Track) => {
        if (artists.find((artist: Artist) => artist.id === track.artist.id)) {
          return artists
        }

        artists.push({
          id: track.artist.id,
          name: track.artist.name
        })

        return artists
      }, [])
    },
    async updateTracks() {
      const { beareredToken } = useBearerStore()

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
        return {
          id: item.track.id,
          name: item.track.name,
          artist: {
            id: item.track.artists[0].id,
            name: item.track.artists[0].name,
          }
        }
      })

      this.updateArtists()
    }
  }
})