<template>
  <div>
    <h2 class="text-lg lg:text-2xl text-primary font-bold pt-10 lg:pt-32">
      Recently Played
    </h2>
    <ul class="py-5 lg:py-10">
      <li>
        <a href="#" @click="() => updateArtist('artist')">Artist</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  methods: {
    updateArtist: (artist: string) => {
      console.log(artist)
    },
  },
})
</script>