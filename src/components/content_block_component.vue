<template >
    <div class="wrapper-content-block">
        <div class="title">
            <div class="internal-title">
                {{title}}
            </div>
        </div>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sint fugit molestias? Dolor voluptates id recusandae perferendis assumenda cum, suscipit, dignissimos adipisci omnis distinctio consectetur illum? Id laborum numquam natus reprehenderit, deleniti temporibus, architecto praesentium, voluptas vitae molestias deserunt. Sunt ex necessitatibus quasi expedita placeat rem. Quaerat ut aliquid sunt praesentium placeat itaque suscipit accusamus adipisci molestiae minus eveniet illum culpa aliquam tenetur, nam velit voluptate neque iure enim non quidem ratione consectetur. Nisi inventore eius iusto modi repellendus tempore recusandae praesentium ut expedita placeat, facere nostrum fugiat. Placeat aspernatur cupiditate asperiores architecto aliquid sit facere nesciunt, maiores commodi vitae.</p>
    </div>
</template>
<script>

import { defineComponent } from 'vue';

export default defineComponent({
  name: "content_block_component",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    return { props };
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
    
</style>