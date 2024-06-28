<template>
  <div class="friend-view animate__animated animate__fadeIn animate__delay-0.3s">
    <h1 class="friend-title">Friends</h1>
    <h1>No one :(</h1>
  </div>
</template>

<script>
import 'animate.css';

export default {
  name: 'FriendsPage',
  methods: {
    goToHome() {
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
</style>