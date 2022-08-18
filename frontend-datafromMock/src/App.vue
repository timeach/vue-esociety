<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <ESociety msg="Welcome to The E Society"/>
</template>

<script>
import ESociety from './components/ESociety.vue'

export default {
  name: 'App',
  components: {
    ESociety,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
