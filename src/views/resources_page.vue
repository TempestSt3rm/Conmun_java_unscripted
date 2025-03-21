<template>
    <div class="grid-container">

        
        <Character_resource_component v-for=" character_stat in filtered_character_stats"
        
        :characterName=character_stat.characterName 
        :key = character_stat.characterName
        :armor=character_stat.armor 
        :heart=character_stat.heart 
        :life=character_stat.life 
        :hunger=character_stat.hunger 
        class="grid-component">
        </Character_resource_component>

        

    </div>
</template>
<script>
import Character_resource_component from '@/components/character_resource_component.vue';
import character_stats from '@/assets/information/delegate_info'

export default {
    name: "resources_page",
    components: {
        Character_resource_component
    },
    data(){
        return{
            character_stats
        }
    },
    computed: {
        filtered_character_stats() {
            return this.character_stats.filter(character => character.life > 0);
        }
    }
}
</script>
<style>

.grid-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 30px;
    column-gap: 30px;
    padding: 2vw;
    
}

.grid-component {
    flex-grow: 1;
    min-width: 200px;
    max-width: 300px;
    background-color: rgb(100, 99, 99);
    border-radius: 10%;
    box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.9); /* Soft shadow */
}



</style>