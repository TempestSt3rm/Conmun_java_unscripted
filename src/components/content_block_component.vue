<template >
    <div class="wrapper-content-block">
      <div class="title">
          <div class="internal-title">
              {{titleContent}}
              <img v-if="fullImagePath" :src="fullImagePath" alt="Dynamic Image" class="character-head" />
          </div>
      </div>
      <div class="content-text-wrapper">
        <slot></slot>
      </div>
    </div>
</template>
<script>

import { defineComponent } from 'vue';
import { computed } from 'vue';


export default defineComponent({
  name: "content_block_component",
  props: {
    title: {
      type: String,
      required: true,
    },
    imageName:{
      type: String,
      required: false,
    }
  },
  setup(props) {
    // Predefined path
    const basePath = '/img/';
    const fileType = '.png';

    // Compute the full image path
    const fullImagePath = computed(() => {
      return props.imageName ? `${basePath}${props.imageName}${fileType}` : null;
    });

    // Return variables to make them accessible in the template
    return {
      fullImagePath,
      titleContent: props.title,
    };
  },
});


</script>
<style >

.wrapper-content-block{
    width: 70%;
    padding: 1% 3%;
}

.title{
    border-bottom: 2px solid #52a435 ;
    text-align: left;
    font-size: 4vh;
}

.internal-title{
    margin-left: 2%;
}

.content-text-wrapper{
  margin: 3% 0;
}

.character-head{
  height: 5vh;
  width: auto;
}
</style>