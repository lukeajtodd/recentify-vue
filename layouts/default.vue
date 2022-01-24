<template>
  <div class="flex flex-col lg:flex-row lg:flex-nowrap mx-auto px-minor pt-minor lg:px-major lg:pt-major">
    <aside class="flex flex-col lg:h-screen lg:sticky lg:top-0">
      <img
        class="w-logo-sm lg:w-logo-lg"
        :class="{ 'mb-10': !token }"
        src="/images/logo.png"
        alt="Spotify Logo"
      />
      <Sidebar v-if="token" />
      <Connect v-else :connect="connect" />
    </aside>
    <main class="flex align-center w-full lg:flex-1 mt-4">
      <Nuxt />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'pinia'

import Sidebar from '@/components/Sidebar.vue'
import Connect from '@/components/Connect.vue'

import { href, connect } from '@/helpers/auth'
import { useBearerStore } from '~/pinia/useBearerStore'

export default Vue.extend({
  components: {
    Sidebar,
    Connect
  },
  computed: {
    ...mapState(useBearerStore, ['token'])
  },
  methods: {
    connect() {
      // @ts-ignore
      connect(href(this.$config.clientId, this.$config.redirectURI))
    }
  }
})
</script>