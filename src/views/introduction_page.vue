<template>
    <div class="content-wrapper">
      <div class="title-image-container">
        <img src="../assets/herobrine_statue.png" class="title-image">
      </div>      
    </div>
</template>
  
<script>

export default {
  name: "introduction_page",
  components:{
    
  },
};
</script>
  
<style scoped>


.content-wrapper{
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}
.title-image-container{
  width: 100%;
  max-width: 100%; 
  height: auto; 
  justify-content: center; /* Center the image horizontally */
}
.title-image{
  width: 100%;
  max-width: 100%; 
  height: auto; 
}


.letter-body{
  line-height: 2;
}

</style>
  