import { defineStore } from 'pinia'
import axios, { AxiosResponse } from 'axios'

import { useBearerStore } from './useBearerStore'
import { usePaginationStore } from './usePaginationStore'

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

interface RecentlyPlayedResponse {
  href: string
  items: any[]
  limit: number
  next: string
  cursors: {}
  total: number
}

export const useSpotifyStore = defineStore('spotify', {
  state: (): State => {
    return {
      filteredArtist: '',
      artists: [],
      tracks: []
    }
  },
  getters: {
    currentTracks(state) {
      const cachedFilteredArtist = localStorage.getItem('filteredArtist')

      if (!state.filteredArtist && cachedFilteredArtist) {
        this.filteredArtist = cachedFilteredArtist
      }

      if (!state.filteredArtist) return this.tracks

      return this.tracks.filter(track => track.artist.id === state.filteredArtist)
    }
  },
  actions: {
    resetFilter() {
      localStorage.removeItem('filteredArtist')
      this.filteredArtist = ''
    },
    resetStore() {
      this.filteredArtist = '';
      this.artists = []
      this.tracks = []
    },
    updateArtist(artist: Artist['id']) {
      localStorage.setItem('filteredArtist', artist)
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
      const { pagination } = usePaginationStore()

      if (!beareredToken) {
        console.error('Not authorised')
        return
      }

      const result: AxiosResponse<RecentlyPlayedResponse> = await axios({
        method: 'GET',
        responseType: 'json',
        url: `https://api.spotify.com/v1/me/player/recently-played?limit=10`,
        headers: {
          'Authorization': beareredToken,
          'Content-Type': 'application/json'
        }
      })

      pagination.tracks.next = pagination.tracks.current + 1
      // @ts-ignore
      pagination.tracks.nextUrl = result.next

      this.tracks = [...result.data.items].map(item => {
        return {
          id: item.track.id,
          name: item.track.name,
          image: item.track.album.images[1],
          album: {
            id: item.track.album.id,
            name: item.track.album.name
          },
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
