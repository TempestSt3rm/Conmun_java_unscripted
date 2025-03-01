<template>
  <div class="title-image-container">
  <div class="content-wrapper">
    
      <img src="../assets/Java-Unscripted_2.png" class="title-image">
      
      
      <Letter_component
      title="Chair"
      start="Hello Delegates!"
      signOff="Hudson Bonneau"
      position="Committee Chair"
      >

      <p>
        My name is Hudson Joseph Bonneau (He/Him) and I am elated to bring you into the world of Minecraft: Escape from Herobrine’s Grip at CONMUN 2025! I am a third year student at Concordia University in the Acting for Theatre program. Joining me is our wonderful vice-chair Charlize Davis (She/Her), who is coming in to her first year at Concordia University after spending two years in Vancouver and is now studying Child Studies.
      </p>
      <p>
        I have been a MUN delegate for 8 years between high school & collegiate MUN, and have spent the last year as a training director on Concordia’s travel team, CED. This will be my 3rd year working in the front room at CONMUN and I’m very excited to continue my MUN career with this insane committee.
      </p>
      <p>
        Outside of MUN I spend my time between acting and playing board games, but I have a storied history with videogames, especially Minecraft. Growing up Minecraft was always the game that me and my friends would come back to time and time again. I have spent more time than I care to admit in Minecraft servers.
      </p>
      <p>
        As the Chair of this committee, and given the sandbox format of Minecraft, I am looking above all for creativity in your solutions. This committee is set up so that there are practically infinite possibilities for you to take your front room debate and your back room notes. So while you try to escape, remember that in this game everything you want to do is available to you.
      </p>


      </Letter_component>

      <Letter_component
      title="Chair"
      start="Hello fellow delegates!"
      position="Minecraft Crisis Team x ConMUN"
      >

      <p>
        Hello fellow delegates! My name is Bryan Vu and I am happy to present to you our exciting committee Java Unscripted: Escape from Herobrine's Grip. ConMUN was my first university level conference and the main reason I fell in love with MUN. I hope to provide you all with the same memorable experience! My lovely ACD Mathis Paquin and I had a lot of fun cooking up the mechanics for this committee and intend to add little elements of chaos here and there to spice things up. We hope you enjoy this committee as much as we enjoyed making it!
      </p>
      <p>
        Now, we think it is important to highlight some of the expectations we have from you all! Firstly, we really want people to build upon the mechanics we have presented in this background guide and find unique approaches to the committee, whether it be strictly through Minecraft's mechanics or by building upon them. Delegates who can put their own personal flair on their notes and think creatively with the interactions between the committee's mechanics, Minecraft's regular mechanics and the mystical world that we have built up will find themselves successful in progressing their crisis arcs.
      </p>
      <p>
        Secondly, the element of chaos is meant to provide delegates with a way to advance debate and bring up topics that might not come up otherwise. The idea behind the chaos is not to advantage certain delegates and disadvantage others, but rather bring up fruitful debate of very realistic power imbalances that may exist. You may be wondering what these elements of chaos are, but you'll have to wait and see until the committee starts!
      </p>
      <p>
        Thirdly, communication of intent will be incredibly important. With such a vast game with so many different mechanics, delegates can take a number of exciting approaches and we are excited to read them all. However, with the amount of variety, it might be hard to understand where delegates are headed so please be clear with your crisis notes and communicate to us where you want it to be headed. If you are having trouble with who to write to for your two notepads, remember there are a plethora of entities in the game and other ways to style your notepad to make sense within this committee! We love new approaches to the committee so be creative!
      </p>
      <p>
        Lastly, make sure you have <span style="font-weight: 800;"> fun </span> with the committee. This committee topic was designed not to take itself so seriously, so go wild with your crisis notes. While frontroom debate will be more serious, touch upon many more survival skills and essentially mimic the creation of a new world/realm requiring careful directives and clauses to successfully build it, the backroom is not limited by these factors, so we implore delegates to let their imaginations go wild and test the boundaries (world borders) of committee!
      </p>
      <p>
        If you have any questions whatsoever as to the mechanics of the committee, basic points of information, etc… do not hesitate to contact us at:
        <br/> javaunscripted@cg-aa.org

      </p>


      </Letter_component>

  </div>
    
  </div>
</template>
  
<script>
import Letter_component from '@/components/letter_component.vue';


export default {
  name: "introduction_page",
  components:{
    Letter_component,
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
  background-image: url("../assets/herobrine_statue_only_blurred.png");
  background-size: cover; 
  background-repeat: no-repeat; 
  background-position: center; 
  background-attachment: fixed; 
  color: white; 
  font-family: Arial, sans-serif; 
}



.title-image{
  width: 50%;
  max-width: 50%; 
  height: auto; 
  padding: 50vh 0;
}


.letter-body{
  line-height: 2;
}

</style>
  