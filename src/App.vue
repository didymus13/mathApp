<template>
  <div id="app">
    <navbar></navbar>
    <img src="./assets/logo.png">
    <router-view/>
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
