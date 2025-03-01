<template>
  
  <div class="character-container">
    
    <img :src="fullImagePath" alt="Dynamic Image" class="character-head"/>
    <div class="character-name">
      {{ characterName }}
    </div>
  </div>
  
    
</template>

<script>
import { defineComponent } from 'vue';
import { computed } from 'vue';

export default defineComponent({
    name: "character_header_component",
    props: {
    characterName: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    
    const basePath = '/img/heads/';
    const fileType = '.png';
    
    const fullImagePath = computed(() => {
      return props.characterName ? `${basePath}${props.characterName}${fileType}` : null;
    });

    return {
      fullImagePath,
      titleContent: props.characterName,
    };
  },

})
</script>

<style scoped>


.character-container {
  display: flex;
  flex-direction: column;
  max-width: 80vw;
  background-image: url('../assets/character_frame.png');
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat; 
  padding: 10px; 
  width: 250px;
  aspect-ratio: 1 / 1;
  min-width: 250px;
  justify-content: top;
  align-items: center;
  margin: 30px;
}

.character-head{
  width: 45%;
  height: auto;
  margin: 15% 0% 5% 0%;
}

.character-name{
  font-size: 22px;
  margin-bottom: 5%;
  white-space: nowrap;
}



</style>