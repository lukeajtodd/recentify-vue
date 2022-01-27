<template>
  <div>
    <ul class="py-5 lg:py-10">
      <li v-for="artist in artists" :key="artist.id" class="mb-2.5 lg:mb-5">
        <a
          class="text-base lg:text-xl cursor-pointer"
          :class="{
            'text-primary': selectedArtist(artist),
            'font-semibold': selectedArtist(artist),
          }"
          @click="() => handleUpdateArtist(artist.id)"
          >{{ artist.name }}</a
        >
      </li>
      <hr class="border-2 my-8" />
      <li v-if="filteredArtist" class="text-right">
        <a @click="resetFilter" class="cursor-pointer">
          <small class="flex">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.7427 8.46448L19.1569 9.87869L17.0356 12L19.157 14.1214L17.7428 15.5356L15.6214 13.4142L13.5 15.5355L12.0858 14.1213L14.2072 12L12.0859 9.87878L13.5002 8.46457L15.6214 10.5858L17.7427 8.46448Z"
                fill="currentColor"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.58579 19L2.29289 12.7071C1.90237 12.3166 1.90237 11.6834 2.29289 11.2929L8.58579 5H22.5857V19H8.58579ZM9.41421 7L4.41421 12L9.41421 17H20.5857V7H9.41421Z"
                fill="currentColor"
              />
            </svg>
            <span class="ml-2">Reset</span>
          </small>
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapState } from 'pinia'

import { usePaginationStore } from '~/pinia/usePaginationStore'
import { useSpotifyStore } from '@/pinia/useSpotifyStore'
import type { Artist } from '@/pinia/useSpotifyStore'

export default Vue.extend({
  computed: {
    ...mapState(useSpotifyStore, ['artists', 'filteredArtist']),
    selectedArtist() {
      return (artist: Artist) => this.filteredArtist === artist.id
    },
  },
  methods: {
    ...mapActions(useSpotifyStore, ['updateArtist', 'resetFilter']),
    ...mapActions(usePaginationStore, ['resetPagination']),
    handleUpdateArtist(id: Artist['id']) {
      this.resetPagination()
      this.updateArtist(id)
    }
  },
})
</script>