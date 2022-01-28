<template>
  <div class="flex flex-col">
    <img :src="track.image.url" :alt="`${track.album.name} Album Cover`">
    <span class="text-base font-semibold mt-4">
      {{ track.name }}
    </span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Track } from '~/pinia/useSpotifyStore'

export default Vue.extend({
  props: {
    track: {
      type: Object as () => Track,
      required: true
    }
  }
})
</script>