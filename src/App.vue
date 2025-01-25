

<template>
  <div id="app" class="wrapper">
    <header>
      <navbar_component/>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <img src="../public/img/heads/herobrine_head.png" 
    alt="Top Right Image" 
    class="top-right-image"
    :class="{ 'fade-in': imageVisible }"
    @click="removeImage"
    >
    <footer_component class="footer-component"></footer_component>
  </div>
</template>


<script>
import footer_component from './components/footer_component.vue';
import navbar_component from './components/navbar_component.vue';


export default {
  name: 'App',
  components: {
    navbar_component,
    footer_component
  },
  data() {
    return {
      imageVisible: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.imageVisible = true; 
    }, 500); 
  },
  methods: {
    removeImage() {
      this.imageVisible = false; // Permanently hide the image on click
    },
  },
}
</script>

<style>
.top-right-image {
  position: fixed;
  top: -50px;
  right: -60px;
  transform: rotate(-40deg);
  z-index: 999; /* Ensure it stays above other content */
  max-width: 150px; /* Adjust size as needed */
  opacity: 0; /* Start fully transparent */
  transition: opacity 10s ease-in-out; /* Gradual fade-in effect */
  box-shadow: 0 0 20px 10px rgba(0, 255, 255, 0.2); /* Glowing effect */
}

.top-right-image.fade-in {
  opacity: 0.5; /* Fully visible after the transition */
}

</style>
