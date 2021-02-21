<template>
  <div id="app">
    <SharesList/>
  </div>
</template>

<script>

import SharesList from '@/components/SharesList.vue'

export default {
  name: 'App',
  components: {
    SharesList
  }
}
</script>

<style lang="scss">
@import "./style.scss"
</style>
