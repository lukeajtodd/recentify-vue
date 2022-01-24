<template>
  <div class="w-full">
    <button class="bg-primary rounded font-bold text-sm px-5 py-2" @click="connect">Connect</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    connect: {
      type: Function,
      required: true
    }
  }
})
</script>