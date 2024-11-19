<template>
    <div class="content-wrapper">
      <div class="title-image-container">
        <img src="../assets/herobrine_statue.png" class="title-image">
      </div>
      <Letter_component 
      title="Opening Statement" 
      start="dear members" 
      signOff="First Last"
      position="Position"
      >
      <p class="letter-body"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur necessitatibus voluptates debitis assumenda accusamus incidunt sunt non, quae eius alias minima ullam voluptas ex iusto fugiat quo similique ipsum nihil dolorem repellat? Aut minima veniam ullam ducimus ratione iusto quod possimus maiores sequi delectus molestiae, placeat assumenda nisi quisquam hic rem odio velit ab! Soluta, cum delectus reiciendis impedit incidunt, neque fugiat numquam eius eligendi placeat alias quod repudiandae atque cupiditate sunt saepe quis maiores perspiciatis architecto dicta iusto? Commodi quos neque fugiat minus eaque in, dolorem sapiente sunt vel porro quidem harum nulla maiores exercitationem dolor blanditiis quam, sed quae similique rerum mollitia fugit veritatis ab! Nesciunt molestiae impedit, enim autem minus perspiciatis dignissimos aliquid quis illo! Vitae necessitatibus ratione labore at, soluta assumenda in nulla, reprehenderit corporis magnam ipsam vero rerum mollitia obcaecati veritatis modi eos odit, consectetur quos sit doloremque sint eum ea quisquam? Vitae provident culpa laudantium necessitatibus voluptates, ut nulla voluptatibus asperiores, suscipit sit nisi commodi consequatur in, eos ipsa! Quas a, similique dolore atque dolorum, alias voluptate distinctio quae deserunt soluta molestiae repudiandae amet ea eaque expedita optio laboriosam ab sint explicabo harum error. Neque reiciendis suscipit officiis velit tenetur illum earum quis culpa.</p>

      </Letter_component>


      <Letter_component 
      title="Opening Statement" 
      start="dear members" 
      signOff="First Last"
      position="Position"
      >
      <p class="letter-body"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur necessitatibus voluptates debitis assumenda accusamus incidunt sunt non, quae eius alias minima ullam voluptas ex iusto fugiat quo similique ipsum nihil dolorem repellat? Aut minima veniam ullam ducimus ratione iusto quod possimus maiores sequi delectus molestiae, placeat assumenda nisi quisquam hic rem odio velit ab! Soluta, cum delectus reiciendis impedit incidunt, neque fugiat numquam eius eligendi placeat alias quod repudiandae atque cupiditate sunt saepe quis maiores perspiciatis architecto dicta iusto? Commodi quos neque fugiat minus eaque in, dolorem sapiente sunt vel porro quidem harum nulla maiores exercitationem dolor blanditiis quam, sed quae similique rerum mollitia fugit veritatis ab! Nesciunt molestiae impedit, enim autem minus perspiciatis dignissimos aliquid quis illo! Vitae necessitatibus ratione labore at, soluta assumenda in nulla, reprehenderit corporis magnam ipsam vero rerum mollitia obcaecati veritatis modi eos odit, consectetur quos sit doloremque sint eum ea quisquam? Vitae provident culpa laudantium necessitatibus voluptates, ut nulla voluptatibus asperiores, suscipit sit nisi commodi consequatur in, eos ipsa! Quas a, similique dolore atque dolorum, alias voluptate distinctio quae deserunt soluta molestiae repudiandae amet ea eaque expedita optio laboriosam ab sint explicabo harum error. Neque reiciendis suscipit officiis velit tenetur illum earum quis culpa.</p>

      </Letter_component>


      <Letter_component 
      title="Opening Statement" 
      start="dear members" 
      signOff="First Last"
      position="Position"
      >
      <p class="letter-body"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur necessitatibus voluptates debitis assumenda accusamus incidunt sunt non, quae eius alias minima ullam voluptas ex iusto fugiat quo similique ipsum nihil dolorem repellat? Aut minima veniam ullam ducimus ratione iusto quod possimus maiores sequi delectus molestiae, placeat assumenda nisi quisquam hic rem odio velit ab! Soluta, cum delectus reiciendis impedit incidunt, neque fugiat numquam eius eligendi placeat alias quod repudiandae atque cupiditate sunt saepe quis maiores perspiciatis architecto dicta iusto? Commodi quos neque fugiat minus eaque in, dolorem sapiente sunt vel porro quidem harum nulla maiores exercitationem dolor blanditiis quam, sed quae similique rerum mollitia fugit veritatis ab! Nesciunt molestiae impedit, enim autem minus perspiciatis dignissimos aliquid quis illo! Vitae necessitatibus ratione labore at, soluta assumenda in nulla, reprehenderit corporis magnam ipsam vero rerum mollitia obcaecati veritatis modi eos odit, consectetur quos sit doloremque sint eum ea quisquam? Vitae provident culpa laudantium necessitatibus voluptates, ut nulla voluptatibus asperiores, suscipit sit nisi commodi consequatur in, eos ipsa! Quas a, similique dolore atque dolorum, alias voluptate distinctio quae deserunt soluta molestiae repudiandae amet ea eaque expedita optio laboriosam ab sint explicabo harum error. Neque reiciendis suscipit officiis velit tenetur illum earum quis culpa.</p>

      </Letter_component>
      
    </div>
</template>
  
<script>
import Letter_component from '@/components/letter_component.vue';

export default {
  name: "introduction_page",
  components:{
    Letter_component
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
  