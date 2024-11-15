<template>
    <nav class="navbar">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="@/assets/logo.png" alt="MyApp Logo" />
        </a>
      </div>
      <div class="navbar-start">
        <router-link to="/" class="navbar-item">Introduction</router-link>
        <router-link to="/general" class="navbar-item">General</router-link>
        <router-link to="/history" class="navbar-item">Committee History</router-link>
        <router-link to="/characters" class="navbar-item">Characters</router-link>
        <router-link to="/resources" class="navbar-item">Resources</router-link>
      </div>
      <div class="navbar-spacer">

      </div>
      
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar_component',
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
  .navbar-item {
    color: #fff;
    text-decoration: none;
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
  }
  .navbar-item{
    align-content: center;
    font-size: clamp(16px,3vh,24px);
  }

  .navbar-spacer{
    flex: 2;
  }
  
  </style>
  