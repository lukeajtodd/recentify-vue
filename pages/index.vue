<template>
  <div>
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-4">
      <div v-for="track in tracks" :key="track.id">
        {{ track.name }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapState } from 'pinia'

import { tracksStore } from '@/pinia/tracksStore'

export default Vue.extend({
  name: 'IndexPage',
  computed: {
    ...mapState(tracksStore, ['tracks'])
  },
  methods: {
    ...mapActions(tracksStore, ['updateTracks'])
  },
  mounted() {
    this.updateTracks()
  }
})
</script>
