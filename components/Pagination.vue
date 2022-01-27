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
      lg:fixed lg:bottom-4 lg:right-4
    "
    :class="{ 'hidden': pages.length === 1 }"
  >
    <button
      class="
        text-white
        lg:bg-white lg:text-dark lg:rounded-l-3xl
        px-2
        lg:py-4 lg:px-4
      "
      :disabled="!hasPrevious"
      :class="{ 'hover:bg-gray-200': hasPrevious, 'cursor-pointer': hasPrevious }"
      @click="goPrev"
    >
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
    </button>
    <button
      class="
        text-white
        lg:bg-white lg:text-dark lg:rounded-r-3xl
        px-2
        lg:py-4 lg:px-4
      "
      :disabled="!hasNext"
      :class="{ 'hover:bg-gray-200': hasNext, 'cursor-pointer': hasNext }"
      @click="goNext"
    >
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
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapActions } from 'pinia'

import { usePaginationStore } from '~/pinia/usePaginationStore'
import { useSpotifyStore } from '~/pinia/useSpotifyStore'

import { Direction } from '~/pinia/useSpotifyStore'

export default Vue.extend({
  computed: {
    ...mapState(usePaginationStore, ['index', 'pages']),
    hasPrevious() {
      return this.index > 0
    },
    hasNext() {
      return this.index <= this.pages.length
    },
  },
  methods: {
    ...mapActions(useSpotifyStore, ['updateTracks']),
    goPrev() {
      // @ts-ignore
      this.updateTracks(Direction.Previous)
    },
    goNext() {
      // @ts-ignore
      this.updateTracks(Direction.Next)
    },
  },
})
</script>