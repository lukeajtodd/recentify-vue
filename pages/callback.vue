<template>
  <div />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async mounted() {
    const token = window.location.hash.substr(1).split('&')[0].split('=')[1]

    if (token) {
      await window.opener.spotifyCallback(token)
    }

    window.location.replace('/')
  },
})
</script>