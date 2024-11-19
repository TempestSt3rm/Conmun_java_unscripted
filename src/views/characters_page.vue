<template >
    <div>
        <div class="header">
        <img src="../assets/character_sheet.png">
        
        </div>

        <Content_block_component title="Steve" imageName="Steve">
            <p> Steve is the goat of minecraft </p>
        </Content_block_component>
    </div>
</template>
<script>
import Content_block_component from '@/components/content_block_component.vue';

export default {
    name: "characters_page",
    components:{
    Content_block_component
    },
}
</script>
<style scoped>

p{
    text-align: left;
}
</style>