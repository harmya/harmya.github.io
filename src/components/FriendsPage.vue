<template>
  <div
    class="friend-view animate__animated animate__fadeIn animate__delay-0.3s"
  >
    <h1 class="friend-title">Friends</h1>
    <h2>If you want to know people working on great stuff:</h2>
    <div class="friend-list">
      <ul>
        <li class="friend-item">
          <p>
            <a href="https://arefmalek.com/" target="_blank" class="name"
              >Aref Malek</a
            >
            - AI and Software Engineer at Starlink
          </p>
        </li>
        <li class="friend-item">
          <p>
            <a href="https://bhavesh.dev/" target="_blank" class="name"
              >Bhavesh Pareekh</a
            >
            - Software Engineering, Hosting and basically everything
          </p>
        </li>
        <li class="friend-item">
          <p>
            <a href="https://coleroberts.dev" target="_blank" class="name"
              >Cole Roberts</a
            >
            - Systems/Operating Systems
          </p>
        </li>
        <li class="friend-item">
          <p>
            <a href="https://arnavmehra.com/" target="_blank" class="name"
              >Arnav Mehra</a
            >
            - Algorithms Guy
          </p>
        </li>
        <li class="friend-item">
          <p>
            <a href="https://www.zietek.dev/" target="_blank" class="name"
              >Jacob Zietek</a
            >
            - Robotics and AI Engineer at Armada
          </p>
        </li>
        <li class="friend-item">
          <p>
            <a href="https://jinen.setpal.net/" target="_blank" class="name"
              >Jinen Setpal</a
            >
            - Researcher in ML Interpretability
          </p>
        </li>
        <li class="friend-item">
          <p>
            <a href="https://mikail-khan.com" target="_blank" class="name"
              >Mikail Khan</a
            >
            - PL Nerd and PHD Student at CMU
          </p>
        </li>
        <li class="friend-item">
          <p>
            <a href="https://wade.dev/about/" target="_blank" class="name"
              >Nicholas Wade</a
            >
            - Robotics, AI and great stock picks
          </p>
        </li>
        <li class="friend-item">
          <p>
            <a href="https://sagarpatil.me/" target="_blank" class="name"
              >Sagar Patil</a
            >
            - 10x Engineer, AI, SWE and Systems
          </p>
        </li>
        <li class="friend-item">
          <p>
            <a
              href="https://www.siddharthshah.tech/"
              target="_blank"
              class="name"
              >Sarthak Mangla</a
            >
            - Software, AI and Cole Palmer Fan
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import 'animate.css';

export default {
  name: 'FriendsPage',
  methods: {
    goToHome() {
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
.name {
  font-weight: bold;
  color: aqua;
  cursor: pointer;
  text-decoration: underline;
}
</style>
