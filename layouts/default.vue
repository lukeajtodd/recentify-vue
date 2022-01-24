<template>
  <div class="flex flex-col lg:flex-row md:flex-nowrap mx-auto">
    <aside class="flex flex-col md:h-screen md:sticky md:top-0 px-minor pt-minor lg:px-major lg:pt-major">
      <img
        class="w-logo-sm lg:w-logo-lg"
        src="/images/logo.png"
        alt="Spotify Logo"
      />
      <Sidebar />
      <Connect :connect="connect" />
    </aside>
    <main class="flex align-center w-full md:flex-1 mt-4">
      <Nuxt />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Sidebar from '@/components/Sidebar.vue'
import Connect from '@/components/Connect.vue'

import { connect } from '@/helpers/auth'

export default Vue.extend({
  components: {
    Sidebar,
    Connect
  },
  methods: {
    connect
  }
})
</script>