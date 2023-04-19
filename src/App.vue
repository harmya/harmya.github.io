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
  background-color: #F9F7F7; 
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #112D4E;
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