<template >
    <div class="content-wrapper">
        <img src="../assets/overview.png" class="header">
        <Content_block_component title="What is Minecraft?">
          
          <img src="../assets/Minecraft.png" alt="Description" class="wrapped-image" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, rem iste ex molestias, ut minima saepe cumque consectetur adipisci iusto eaque ea voluptates officia modi inventore atque eius, totam iure quas possimus quam voluptas! Itaque aliquam minima vero, laborum ipsam harum quia. Quisquam molestiae labore minima accusantium odio amet nesciunt harum, quia praesentium, unde facilis voluptates nisi. Doloribus ad dolore fuga praesentium dolorem adipisci explicabo odio obcaecati porro laudantium voluptates expedita mollitia sed, earum eveniet fugit alias reprehenderit, aspernatur ratione similique? Perspiciatis pariatur dolorem tempora odit sint magni corporis earum cumque delectus ratione, mollitia esse, necessitatibus in? Cupiditate libero fuga, necessitatibus illo veritatis velit dignissimos numquam molestias at autem cum quisquam ut. Dignissimos molestias ad hic animi voluptatum dolore culpa saepe labore consectetur doloremque, repellendus perspiciatis dolorum modi molestiae rem. Ut vitae quod earum maxime suscipit reiciendis nesciunt itaque, doloribus sapiente ea, fugit voluptatum at aperiam. Facere sint omnis illum, officia sunt facilis, tempora impedit qui et in totam dolores pariatur dolore maxime accusantium enim quos quisquam, blanditiis eos! Dignissimos in optio consequatur dolor officiis delectus quae non minima rem deleniti vel earum exercitationem voluptatem, facere culpa soluta quos incidunt perferendis a quod ratione id aliquam atque reiciendis? Modi veniam, at optio necessitatibus a fugit omnis quidem, odit totam eveniet saepe sunt dolores illum suscipit minus similique ut aliquid voluptas nemo iste expedita, quo perspiciatis. Praesentium ab nisi minima libero ipsa sequi! Quasi minima debitis delectus odio sit maxime odit atque, distinctio explicabo magnam est amet excepturi voluptate nisi non numquam autem! Labore ab veritatis ea, amet fugiat, laudantium mollitia ullam a atque sint cum quae accusantium obcaecati quas praesentium? Ipsa totam at nostrum tempore? Possimus quidem non officiis dolor voluptates, eos, aliquid velit est totam, mollitia asperiores quae eius! Beatae at optio id earum, quam accusantium cupiditate. Dolorum, nesciunt.
          </p>
        </Content_block_component>

        <Content_block_component title="Survival">
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sint fugit molestias? Dolor voluptates id recusandae perferendis assumenda cum, suscipit, dignissimos adipisci omnis distinctio consectetur illum? Id laborum numquam natus reprehenderit, deleniti temporibus, architecto praesentium, voluptas vitae molestias deserunt. Sunt ex necessitatibus quasi expedita placeat rem. Quaerat ut aliquid sunt praesentium placeat itaque suscipit accusamus adipisci molestiae minus eveniet illum culpa aliquam tenetur, nam velit voluptate neque iure enim non quidem ratione consectetur. Nisi inventore eius iusto modi repellendus tempore recusandae praesentium ut expedita placeat, facere nostrum fugiat. Placeat aspernatur cupiditate asperiores architecto aliquid sit facere nesciunt, maiores commodi vitae.</p>
        </Content_block_component>

        <Content_block_component title="Progression">

        </Content_block_component>
        
        <Content_block_component title="Biomes">
        
        </Content_block_component>
        

    </div>
    




</template>
<script>
import Content_block_component from '@/components/content_block_component.vue';


export default {
    name: "general_page",
    components:{
    Content_block_component
  },
}
</script>

<style scoped>

.content-wrapper{
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}

.header{
    margin: 3% 0px;
    max-width: 100%;
    height: auto;   
}

p{
  line-height: 2;
  text-align: left;
  margin: 0;
}

.flex-wrapper {
  display: flex;
  align-items: flex-start;
  gap: 10px; 
  margin-top: 2.5%;
}

.wrapped-image {
  float: right; /* Floats the image to the left */
  margin: 10px; /* Adds space between the image and the text */
  width: 20%; /* Optional: Sets the width of the image */
}

    
</style>