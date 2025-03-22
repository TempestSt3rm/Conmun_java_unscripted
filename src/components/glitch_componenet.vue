<template>
    <div v-if="show" class="glitch-overlay">
      <div class="tear" v-for="n in 10" :key="n"></div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const show = ref(true)
  
  onMounted(() => {
    setTimeout(() => {
      show.value = false
    }, 9999999999) 
  })
  </script>
  
  <style scoped>
  .glitch-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    z-index: 9999;
    overflow: hidden;
    mix-blend-mode: difference;
    background: black;
    animation: flash 0.15s alternate infinite;
  }
  
  .tear {
    position: absolute;
    width: 150%;
    height: 5vh;
    background: white;
    opacity: 0.1;
    transform: rotate(-15deg);
    animation: tearAnim 0.6s infinite ease-in-out;
  }
  
  .tear:nth-child(1) {
    top: 10%;
    animation-delay: 0s;
  }
  .tear:nth-child(2) {
    top: 30%;
    animation-delay: 0.2s;
  }
  .tear:nth-child(3) {
    top: 50%;
    animation-delay: 0.4s;
  }
  .tear:nth-child(4) {
    top: 70%;
    animation-delay: 0.1s;
  }
  .tear:nth-child(5) {
    top: 85%;
    animation-delay: 0.3s;
  }
  
  @keyframes tearAnim {
    0%, 100% {
      transform: translateX(0) rotate(-15deg);
      opacity: 0.1;
    }
    50% {
      transform: translateX(-30px) rotate(-15deg);
      opacity: 0.4;
    }
  }
  
  @keyframes flash {
    from {
      opacity: 0.95;
    }
    to {
      opacity: 0.85;
    }
  }
  </style>
  