<template >
    <div class="content-wrapper">
        <img src="../assets/Mechanics.png" class="header">

        <Content_block_component title="The Concordia SMP">
          <p> 
            The Minecraft server that this committee is based on will now be called the Concordia SMP.
            Every delegate in this committee represents a popular Minecraft content creator that either comes 
            from standalone content or SMP servers. You are all trapped in the Minecraft world seemingly 
            against your own will and there is no way out for you.
          </p>
          <br>
          <p>
            Delegates will have access to anything reasonable that could have been on them or in their room 
            when they were transported into this game. These items will appear as special items in the game and 
            will allow for characters to be creative with warping the mechanics of their game. 
            Creativity within reason will allow delegates to slightly tweak what is known in Minecraft and 
            potentially even give them an edge over the other members in committee. 
            Delegates will be asked to specify these special items in the first note if they wish to bring any.
          </p>
          <br>
          <p>
            The Concordia SMP will be running on the latest version of Minecraft (1.21.4) and any mechanics 
            from Minecraft will be available to the delegates in the committee. Delegates can also build upon 
            Minecraft and attempt to introduce new mechanics that could realistically exist within Minecraft 
            if you were transported into the game (for example, the ability to communicate with villagers or 
            the various other mobs in the game will be allowed). Crisis updates will consist of updates directly to 
            the committee's website that 
            will be given to delegates' prior to the conference and displayed on the chair's screen as well.
          </p>
          <br>
          <p>
            Every delegate will have the following traits: a health bar, a number of lives, 
            experience levels, armor and hunger in the game. Each trait is either classified as public or private, 
            depending on its visibility to other delegates. Public traits will show up on the committee's website
            and delegates are free to inquire at any time about their own public traits or other's public traits. 
            Private traits will be tracked in backroom through the double notepad system.
          </p>
        </Content_block_component >

        <Content_block_component title="Health Bar (Public)" image-name="HeartWhole">
          <p> 
            Tracks the amount of health each delegate has. It is measured in half hearts. 
            Delegates have twenty half hearts (or ten full hearts) when they first spawn into the game. 
            If a delegate's health bar ever depletes to zero hearts, 
            they lose a life and have to respawn, granting them another full ten hearts again.
          </p>
        </Content_block_component >

        <Content_block_component title="Armor (Public)" image-name="ArmorWhole">
          <p>
            represents a delegate's resistance to hostile actions within the game. 
            Whether it be an attempted assassination or being exiled by the committee into the nether, 
            a delegate's armor points will reduce the amount of hearts they would normally lose from the 
            committee's different events. 
            The more armor a delegate has, the less hearts they will lose from events.
          </p>
        </Content_block_component>

        <Content_block_component title="Hunger (Public)" image-name="HungerWhole">
          <p>
            Building beyond simple hunger, things such as sickness, poison, heat and sanity 
            will also affect a delegate's hunger. A delegate's hunger dropping below a certain threshold 
            (that will remain hidden) will cause that delegate to start losing hearts,
            so make sure to stay healthy at all times.
          </p>
        </Content_block_component>

        <Content_block_component title="Experience Levels (Private)">
          <p>
            represents the delegate's influence in committee. A delegate's experience level will 
            serve as a primary indicator of how powerful their notes can be. 
            The more experience levels a delegate has, the more they are capable of achieving in backroom. 
            Experience levels can be obtained from more than just how they are habitually obtained in 
            Minecraft and can also be obtained through note quality and character thematics. 
            Much like the other traits, the experience level can be affected by frontroom directives.
          </p>
        </Content_block_component>

        <Content_block_component title="Starting Stats">
          <p>
            Each delegate will start the game with three lives much like in the DreamSMP and this is subject 
            to change depending on the events of the first committee session. 
            Additionally, everyone's health bar and hunger will be set to full, 
            while their armor will be set to empty. Experience levels will also be set to zero at the 
            start of the committee.
            Crisis updates will almost always affect delegates' public traits and affect how the committee 
            should be approaching problems. It is important to keep them in mind when drafting directives 
            and a reminder that adhering to the game's mechanics, acknowledging them and building around 
            them will allow delegates to accelerate their arcs quite quickly. Coming up with new mechanics 
            and using them will also allow delegates to quickly accelerate their arcs. Here are a couple 
            examples of realistic mechanics that could theoretically exist in Minecraft:
          </p>
          <ul class="list-element">
            <li>
              Using Redstone to create actual computers to communicate across the Minecraft land
            </li>
            <li>
              Using the game's ores to create new alloys that have unique properties
            </li>
            <li>
              Talking to the various mobs in the game 
              (although there is much doubt zombies would be very interested in communicating)
            </li>
          </ul>

          <p>
            Understandably, the committee being based in a video game may be extremely confusing so please feel 
            free to reach out to us at any time concerning mechanics, 
            and many of these mechanics will be reminded to delegates at the start of the committee.
          </p>

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