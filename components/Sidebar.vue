<template>
  <div>
    <h2 class="text-xl lg:text-2xl text-primary font-bold pt-10 lg:pt-32">
      Recently Played
    </h2>
    <ul class="py-5 lg:py-10">
      <li v-for="artist in artists" :key="artist.id" class="mb-2.5 lg:mb-5">
        <a
          class="text-base lg:text-xl"
          :class="{ 'text-primary': selectedArtist(artist), 'font-semibold': selectedArtist(artist) }"
          @click="() => updateArtist(artist.id)"
          >{{ artist.name }}</a
        >
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapState } from 'pinia'

import { useSpotifyStore } from '@/pinia/useSpotifyStore'
import type { Artist } from '@/pinia/useSpotifyStore'

export default Vue.extend({
  computed: {
    ...mapState(useSpotifyStore, ['artists', 'filteredArtist']),
    selectedArtist() {
      return (artist: Artist) => this.filteredArtist === artist.id
    }
  },
  methods: {
    ...mapActions(useSpotifyStore, ['updateArtist'])
  },
})
</script>