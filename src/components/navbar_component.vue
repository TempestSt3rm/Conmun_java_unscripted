<template>
    <nav class="navbar">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="@/assets/logo.png" alt="MyApp Logo" />
        </a>
      </div>
      <button class="burger" @click="toggleMenu">
      ☰
      </button>
      <div :class="{ 'navbar-start': true, active: isMenuOpen }">
        <router-link to="/background" class="navbar-item">Background</router-link>
        <router-link to="/history" class="navbar-item">Committee History</router-link>
        <router-link to="/mechanics" class="navbar-item">Mechanics</router-link>
        <router-link to="/characters" class="navbar-item">Characters</router-link>
        <!-- <router-link to="/resources" class="navbar-item">Resources</router-link> -->
      </div>
      <div class="navbar-spacer">

      </div>
      
    </nav>
  </template>
  
  <script>
  import { ref } from "vue";

export default {
  name: "Navbar_component",
  setup() {
    const isMenuOpen = ref(false);

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    return { isMenuOpen, toggleMenu };
  },
};
  </script>
  
  <style scoped>
  .navbar {
    background-color: #262423;
    color: #fff;
    padding: 1.5rem;
    display: flex;
    height: 6vh;
    border-bottom: 7px solid #52a435;
    align-items: center;
    
  }

  .navbar-item{
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    
    font-family: 'Minecraftia',sans-serif ;
    height: fit-content;
    font-size: clamp(16px,1.7vw,2vw);
  }

  .navbar-start .navbar-item{
    padding-top: 2.5vh;
  }

  .navbar-item img{ 
    width: 100%; 
    height: 100%; 
    object-fit: contain; 
  }

  .navbar-brand{
    flex: 2;
    height: 10vh;
    overflow: hidden;
  }
  .navbar-start{
    flex: 8;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-content: center;
    
    height: 10vh;
  }


  .navbar-spacer{
    flex: 2;
  }


  .burger {
  display: none;
  font-size: 6vh;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  }


  @media screen and (max-width: 768px) {
  .burger {
    display: block;
    position:absolute;
    right: 0;
  }
  .navbar-spacer{
    flex: 0;
  }

  .navbar-start {
    display: none; /* Hide the menu by default */
    flex-direction: column;
    background-color: #333;
    position: absolute;
    top: 60px;
    right: 0;
    width: 200px;
    border-radius: 5px;
  }

  .navbar-start.active {
    display: flex; /* Show the menu when active */
  }

  .navbar-item {
    text-align: right;
    padding: 1rem;
  }
}

  
  </style>
  