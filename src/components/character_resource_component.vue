<template>


    <div class="character-resource-container "> <!-- glitch -->
        <div class="name">
            {{ props.characterName }}
        </div>
        <div class="stats">


            <div class="stat-line">
                <div class="stat-package">
                    <img v-if="!hasEmptyArmor" :src="imgPaths.armorWhole" alt="Armor" class="stat-image"/>
                    <img v-if="hasEmptyArmor" :src="imgPaths.armorEmpty" alt="Armor" class="stat-image"/>
                    {{ props.armor }}
                </div>

                <div class="stat-package">
                    <img :src="imgPaths.heart" alt="Heart" class="stat-image" />
                    {{ props.heart }}
                </div>
                <div class="stat-package">
                    <img :src="imgPaths.hunger" alt="Hunger" class="stat-image" />
                    {{ props.hunger }}
                </div>
            </div>

            <div class="stat-line">
                <span v-for="n in props.life" :key="'life-' + n">
                    <img :src="imgPaths.life" alt="life" />
                </span>
            </div>
        </div>


    </div>



</template>

<script setup>
// import { ref } from 'vue';
import { defineProps,computed } from "vue";
// const message = ref('This is character resource component');

const props = defineProps({
    characterName: String,
    heart: Number,
    armor: Number,
    hunger: Number,
    life: Number,
});

const imgPaths = {
    heart: "/img/HeartWhole.png",
    armorWhole: "/img/ArmorWhole.png",
    armorHalf: "/img/ArmorHalf.png",
    armorEmpty: "/img/ArmorEmpty.png",
    hunger: "/img/HungerWhole.png",
    life: "/img/LifeWhole.png",
};

const hasEmptyArmor = computed(() => props.armor === 0);

</script>


<style>
.character-resource-container {
    display: flex;
    flex-direction: column;
    width: fit-content;
}

.name{
    font-family: 'Minecraftia',sans-serif;
    font-size: x-large;
    
}

.stat-line {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

.stat-package{
    display: flex;
    align-items: center;
    font-size: 25px;
}

.stat-image {
    height: auto;
    width: 40px;
}

.stat-number {
    margin-left: 10px;
    min-width: 50px;
    font-size: x-large;
    font-weight: 600;
}

.image-line img {
    margin: 0; 
    padding: 0;
}

.image-line{
    display: flex;
    flex-direction: row;
    gap: 2px;
    
}
</style>