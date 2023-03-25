<template>
  <HomePage />
</template>

<script>
import HomePage from './components/HomePage.vue'

export default {
  name: 'App',
  components: {
    HomePage
  }
}
</script>

<style>
* {
  background-color: #0A2647;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #e9e9e9;
  margin-top: 60px;
}

@keyframes slideIn {
  0% {
    transform: translateX(-100%);
  }
  60% {
    transform: translateX(5%);
  }
  100% {
    transform: translateX(0);
  }
}



</style>
