<template>
    <div class="letter-wrapper">
        
        <p class="start"> {{start }}</p>
        <slot class="letter-body"></slot>
        <div class="sign-off">
            {{ position }}
            <span id="signature">{{signOff}}</span>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: "LetterComponent",
  props: {
    title: {
      type: String,
      required: true,
    },
    start: {
      type: String,
      required: true,
    },
    signOff: {
      type: String,
      required: false,
    },
    position: {
      type: String,
      required: false,
    },
  },
  setup(props) {
    return { props };
  },
});
</script>

<style scoped>
.sign-off{
    text-align: right;
}

#signature{
    font-family:"Brush Script MT", sans-serif;
    font-size: 2.5vh;
    margin-left: 1%;
}

.letter-wrapper{
    margin: 2% 0;
    width: 80%;
    font-size: clamp(14px,2.5vh,20px);
    padding: 2%;
    font-family: 'Palatino Linotype',sans-serif;
    text-shadow: 2px 2px 4px black;
}
.start{
    text-align: left;
    padding-left: 1% ;
}


    
</style>