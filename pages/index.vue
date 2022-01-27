<template>
  <div v-if="token">
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 px-minor">
      <div v-for="(track, index) in tracks" :key="`${track.id}${index}`">
        {{ track.name }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapState } from 'pinia'

import { useSpotifyStore } from '~/pinia/useSpotifyStore'
import { useBearerStore } from '~/pinia/useBearerStore'

export default Vue.extend({
  name: 'IndexPage',
  computed: {
    ...mapState(useBearerStore, ['token']),
    ...mapState(useSpotifyStore, ['tracks'])
  },
  methods: {
    ...mapActions(useSpotifyStore, ['updateTracks'])
  },
  mounted() {
    this.updateTracks()
  }
})
</script>
