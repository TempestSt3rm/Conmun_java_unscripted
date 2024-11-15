<template >
    <div class="content-wrapper">
        <img src="../assets/overview.png" class="header">
        <Content_block_component title="Title">

        </Content_block_component>

        <Content_block_component title="Title">

        </Content_block_component>
        
        <Content_block_component title="Title">
        
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
}
    
</style>