<template>
  <div id="app">
    <img alt="logo" src="./assets/logo.png">
    <Index />
    <p>&copy; 2021 <a href="https://starinc.xyz">Star Inc.</a></p>
  </div>
</template>

<script>
import Index from './views/Index.vue'

export default {
  name: 'App',
  components: { Index }
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

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
