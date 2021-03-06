<template>
  <div
    class="
      flex flex-col
      lg:flex-row lg:flex-nowrap
      mx-auto
      px-minor
      pt-minor
      pb-major
      lg:px-major lg:pt-0
    "
  >
    <aside class="flex flex-col lg:h-page-lg lg:sticky lg:top-0 lg:pt-major">
      <h1 class="text-xl lg:text-3xl text-primary font-bold">
        Recentify
      </h1>
      <p v-if="!token" class="text-base lg:text-lg text-white mt-8">View all your recent artists from Spotify. Just hit connect!</p>
      <Sidebar v-if="token" />
      <Connect :connect="connect" :disconnect="disconnect" />
    </aside>
    <main class="flex align-center w-full lg:flex-1 lg:pt-major">
      <Nuxt />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapWritableState, mapActions } from 'pinia'

import Sidebar from '@/components/Sidebar.vue'
import Connect from '@/components/Connect.vue'

import { useBearerStore } from '~/pinia/useBearerStore'
import { useSpotifyStore } from '@/pinia/useSpotifyStore'

export default Vue.extend({
  components: {
    Sidebar,
    Connect,
  },
  computed: {
    ...mapWritableState(useBearerStore, ['token']),
  },
  methods: {
    ...mapActions(useBearerStore, ['resetToken']),
    ...mapActions(useSpotifyStore, ['resetStore', 'updateTracks']),

    connect() {
      const popup = window.open(
        this.href(this.$config.clientId),
        'Login with Spotify',
        'width=800,height=600'
      )

      const callback = async (payload: string) => {
        localStorage.setItem('authorization', payload)
        this.token = payload
        this.updateTracks()

        if (popup) {
          popup.close()
        }
      }

      // @ts-ignore
      window.spotifyCallback = callback
    },

    disconnect() {
      this.resetToken()
      this.resetStore()
    },

    href: (clientId: string) =>
      `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${location.origin}/callback&scope=user-read-recently-played&show_dialog=true`,
  },
})
</script>