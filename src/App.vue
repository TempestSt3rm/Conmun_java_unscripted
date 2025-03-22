

<template>
  <div id="app" class="wrapper">
    <header>
      <navbar_component/>
    </header>
    <main>
      <!-- <glitch_component></glitch_component> -->
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
// import glitch_component from './components/glitch_componenet.vue';
import navbar_component from './components/navbar_component.vue';


export default {
  name: 'App',
  components: {
    navbar_component,
    footer_component,
    // glitch_component
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
      this.imageVisible = false; 
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
  z-index: 999; 
  max-width: 150px; 
  opacity: 0; 
  transition: opacity 10s ease-in-out; 
  box-shadow: 0 0 20px 10px rgba(0, 255, 255, 0.2); 
}

.top-right-image.fade-in {
  opacity: 0.5; 
}

</style>
