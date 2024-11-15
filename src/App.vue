

<template>
  <div id="app" class="wrapper">
    <header>
      <navbar_component/>
    </header>
    <main>
      <router-view></router-view>
    </main>
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
  }
}
</script>

<style>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}

html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #262423;
  font-size: clamp(12px,2vh,30px);
}

.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content-wrapper{
  max-width: 100vw;
}

.footer-component{
  margin-top: auto;
}

.styless{
  text-decoration: none;
  color: inherit;
}


a {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;
}


.router-link-exact-active {
  font-weight: bold;
}

a {
  position: relative;
  color: #262423;
  text-decoration: none;
  font-size: 1.2em;
  transition: color 0.3s ease;
}


/* Slide-in underline animation */
a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 2px;
  background-color: #52a435;
  transform: scaleX(0); 
  transform-origin: bottom right;
  transition: transform 0.3s ease; 
}

/* Expand underline on hover */
a:hover::after {
  transform: scaleX(1); /* Fully reveals the underline */
  transform-origin: bottom left;
}

</style>
