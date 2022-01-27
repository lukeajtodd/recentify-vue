<template>
  <div v-if="token">
    <div class="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:px-minor">
      <Card v-for="(track, index) in tracks" :key="`${track.id}${index}`" :track="track" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapState } from 'pinia'

import { useSpotifyStore } from '~/pinia/useSpotifyStore'
import { useBearerStore } from '~/pinia/useBearerStore'

import Card from '~/components/Card.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    Card
  },
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
