<template>
  <div />
</template>

<script lang="ts">
import Vue from 'vue'
import { mapWritableState } from 'pinia'

import { bearerStore } from '@/pinia/bearerStore'

export default Vue.extend({
  computed: {
    ...mapWritableState(bearerStore, ['token']),
  },
  async mounted() {
    const token = window.location.hash.substr(1).split('&')[0].split('=')[1]

    if (token) {
      await window.opener.spotifyCallback(token)
      this.token = token
    }

    window.location.replace('/')
  },
})
</script>