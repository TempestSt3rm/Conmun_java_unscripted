<template>
    <div class="letter-wrapper">
        <h1> {{ title }}</h1>
        <p class="start"> {{start }}</p>
        <slot></slot>
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
      required: true,
    },
    position: {
      type: String,
      required: true,
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
    font-family:"Brush Script MT", cursive;
    font-size: 2.5vh;
    margin-left: 1%;
}

.letter-wrapper{
    margin: 2% 0;
    width: 80%;
    border: 4px solid #A0A0A0;
    border-style: ridge;
    font-size: clamp(14px,2.5vh,20px);
    padding: 2%;
}
.start{
    text-align: left;
    padding-left: 1% ;
}

p {
  line-height: 2; 
}
    
</style>