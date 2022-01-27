<template>
  <div class="w-full mt-auto">
    <button v-if="!token" class="bg-primary rounded font-bold text-sm px-5 py-2" @click="connect">Connect</button>
    <button v-else class="bg-red-700 rounded font-bold text-sm px-5 py-2" @click="disconnect">Disconnect</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'pinia'

import { useBearerStore } from '@/pinia/useBearerStore'

export default Vue.extend({
  props: {
    connect: {
      type: Function,
      required: true
    },
    disconnect: {
      type: Function,
      required: true
    }
  },
  computed: {
    ...mapState(useBearerStore, ['token'])
  }
})
</script>