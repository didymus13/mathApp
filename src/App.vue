<template>
  <div id="app">
    <navbar></navbar>
    <div class="section">
      <div class="content">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  components: {
    Navbar
  },
  name: 'app'
}
</script>

<style lang="scss">
</style>
