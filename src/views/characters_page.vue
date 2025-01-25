<template>
    <div>
      <div class="header">
        <img src="../assets/Missing-Minecrafters_1.png" />
      </div>
  
      <div class="content-container">
        <div class="content-subcontainer">
          
          <router-link
            v-for="character in characters"
            :key="character"
            :to="{ name: 'CharacterPage', params: { name:character } }"
            class="character_router"
          >
            <Character_header_component :characterName="character"/>
          </router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Character_header_component from '@/components/character_header_component.vue';
  
  export default {
    name: 'characters_page',
    components: {
      Character_header_component,
    },
    data() {
      return {
        // List of characters
        characters: [
          'AWESAMDUDE',
          'BAJAN CANADIAN',
          'CaptainSparklez',
          'CUPQUAKE',
          'DanTDM',
          'FUNDY',
          'GeorgeNotFound',
          'GRIAN',
          'JEROMEASF',
          'JSCHLATT',
          'LDSHADOWLADY',
          'MUMBOJUMBO',
          'NIKI',
          'PEWDIEPIE',
          'Ph1LzA',
          'PUNZ',
          'PRESTONPLAYZ',
          'QUACKITY',
          'RANBOO',
          'STAMPYLONGHEAD',
          'TOMMYINNIT',
          'TUBBO'
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .content-container {
    display: flex;
    align-items: baseline;
    justify-content: center;
    height: auto;
    margin: 20px 20px;
  }
  
  .content-subcontainer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    max-width: 86vw;
    flex-wrap: wrap;
    align-items: center;
    font-family: 'Minecraftia';
  }

.a {
  position: relative;
  color: white; 
  text-decoration: none; 
  font-weight: normal; 
  transition: font-weight 0.3s ease; 
}

.content-subcontainer a:hover {
  font-weight: bold; 
}

  </style>
  