<template>
  <div
    class="
      text-lg
      flex
      items-center
      justify-end
      text-white
      font-semibold
      mb-4
      lg:bg-white
      lg:text-dark
      lg:rounded-3xl
      lg:py-4
      lg:px-6
      lg:fixed
      lg:bottom-4
      lg:right-4
    "
  >
    <div class="px-2">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.2426 6.34317L14.8284 4.92896L7.75739 12L14.8285 19.0711L16.2427 17.6569L10.5858 12L16.2426 6.34317Z"
          fill="currentColor"
        />
      </svg>
    </div>
    <div class="flex justify-between">
      <span class="px-2 cursor-pointer" v-if="current > 1">
        {{ previous }}
      </span>
      <span class="px-2 opacity-80">{{ current }}</span>
      <span @click="goNext" class="px-2 cursor-pointer" v-if="next">
        {{ next }}
      </span>
    </div>
    <div class="px-2">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.5858 6.34317L12 4.92896L19.0711 12L12 19.0711L10.5858 17.6569L16.2427 12L10.5858 6.34317Z"
          fill="currentColor"
        />
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapActions } from 'pinia'

import { usePaginationStore } from '~/pinia/usePaginationStore'
import { useSpotifyStore } from '~/pinia/useSpotifyStore'

export default Vue.extend({
  computed: {
    ...mapState(usePaginationStore, ['pagination']),
    previous() {
      return this.pagination.current - 1
    },
    current() {
      return this.pagination.current
    },
    next() {
      console.log(this.pagination)
      return this.pagination.nextUrl ? this.pagination.current + 1 : null
    },
  },
  methods: {
    ...mapActions(useSpotifyStore, ['updateTracks']),
    goNext() {
      this.updateTracks(this.pagination.nextUrl)
    },
  },
})
</script>