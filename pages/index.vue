<template>
  <div v-if="token">
    <Pagination v-if="currentTracks && currentTracks.length"/>
    <div
      class="w-full pt-12 lg:pt-0 lg:pl-8 flex items-center justify-center"
      v-if="!currentTracks || !currentTracks.length"
    >
      <p class="text-base lg:text-lg text-white">No tracks to show.</p>
    </div>
    <div
      v-else
      class="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:px-minor"
    >
      <Card
        v-for="(track, index) in currentTracks"
        :key="`${track.id}${index}`"
        :track="track"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapState } from 'pinia'

import { useSpotifyStore } from '~/pinia/useSpotifyStore'
import { useBearerStore } from '~/pinia/useBearerStore'

import Card from '~/components/Card.vue'
import Pagination from '~/components/Pagination.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    Card,
    Pagination,
  },
  computed: {
    ...mapState(useBearerStore, ['token']),
    // @ts-ignore
    ...mapState(useSpotifyStore, ['currentTracks']),
  },
  methods: {
    ...mapActions(useSpotifyStore, ['updateTracks']),
  },
  mounted() {
    this.updateTracks()
  },
})
</script>
