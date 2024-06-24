<template>
    <div class="animation-container" @mousemove="onMouseMove">
      <div v-for="(object, index) in objects" :key="index" class="falling-object" :style="object.style"></div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        objects: Array(30).fill().map(() => ({
          style: {
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
            animationDelay: `${Math.random() * 10}s`,
          },
        })),
        mouseX: 0,
        mouseY: 0,
      };
    },
    methods: {
      onMouseMove(event) {
        this.mouseX = event.clientX;
        this.mouseY = event.clientY;
        this.updateObjectStyles();
      },
      updateObjectStyles() {
        this.objects = this.objects.map((object) => {
          return {
            ...object,
            style: {
              ...object.style,
              transform: `translate(${this.mouseX}px, ${this.mouseY}px)`,
            },
          };
        });
      },
    },
  };
  </script>
  
  <style scoped>
  .animation-container {
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background: #282c34;
  }
  
  .falling-object {
    position: absolute;
    width: 10px; /* Small circles */
    height: 10px; /* Small circles */
    background-color: white;
    border-radius: 50%;
    animation: fall 10s linear infinite;
  }
  
  @keyframes fall {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(100vh);
    }
  }
  </style>
  