<template>
  <div v-if="characterData" class="missing-page">
    <div class="poster">

      <img class="header" src="../assets/Missing.png">

      <div class="image-container">
        <canvas ref="skinViewerCanvas" class="skin-viewer"></canvas>
      </div>
      <div class="details">
        <h1 class="missing-name">
          {{ characterData.name }}
        </h1>
        <h2>
          MISSING SINCE: {{ characterData.missingSince }}
        </h2>

        <div class="details-pages">
          <div class="details-box-1">
            <ul>
              <li> MISSING FROM: <span style="font-weight: bold;"> {{ characterData.missingFrom }} </span></li>
              <li> AGE AT DISSAPEARENCE: <span style="font-weight: bold;"> {{ characterData.ageAtDisappearance }} </span>
              </li>
              <li> AFFILATION: <span style="font-weight: bold;"> {{ characterData.affiliation }} </span></li>
            </ul>
          </div>
          <div class="details-box-2">
            <ul>
              <li> HEIGHT: <span style="font-weight: bold;"> {{ characterData.height }} </span> </li>
              <li> GENDER: <span style="font-weight: bold;"> {{ characterData.gender }} </span> </li>
              <li> HAIR: <span style="font-weight: bold;"> {{ characterData.hair }} </span></li>
              <li> EYES: <span style="font-weight: bold;"> {{ characterData.eyes }} </span></li>
            </ul>
          </div>
          

        </div>

      </div>
      

    </div>
    <div class="character-description">
      {{ characterData.description }}
    </div>
    



  </div>
</template>

<script>
import missingData from "@/assets/information/character_info.json"; // Update the path to your JSON file
import { SkinViewer } from "skinview3d";
import { WalkingAnimation } from "skinview3d";

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      characterData: null,
    };
  },
  created() {
    this.characterData = missingData[this.name] || null;
  },
  mounted() {
    const skinViewer = new SkinViewer({
      canvas: this.$refs.skinViewerCanvas,
      width: 300,
      height: 400,
      skin: this.characterData.skin_link,
    });

    skinViewer.autoRotate = true;
    skinViewer.animation = new WalkingAnimation();
  },
};
</script>

<style scoped>
.poster {
  display: flex;
  flex-direction: column;
  max-width: 80vw;
  background-image: url('../assets/poster.png');
  background-size: cover;
  background-position: center;
  padding: 10px;
  width: 55vw;
  min-width: 250px;
  justify-content: flex-start; 
  align-items: center;
  margin: 30px;
  overflow: hidden; 
  word-wrap: break-word; 
  text-align: center; 
  min-height: 90vh;
  height: auto;
}


.image-container {
  width: 100%;
  max-width: 600px;
  aspect-ratio: 4 / 3;
  position: relative;
  overflow: hidden;
}


.missing-page {
  color: white;
  font-family: 'Arial', sans-serif;
  text-align: center;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: fit-content;
}

.header {
  width: 60%;
  height: auto;
  margin: 5% 0;
}

.image-container img {
  width: 200px;
  height: 60vh;
  border: 2px solid white;
  margin-bottom: 60vh;
}

.details {
  margin: 20px 20px;
  color: black;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: auto;
  min-height: 10vh;
  order: 999;
}

.details h1 {
  font-size: 2.2vw;
  color: red;
  margin: 10px 0;
}

.details-pages {
  display: flex;
  flex-direction: row;
  height: fit-content;
  flex-wrap: wrap;
}

.details-box-1 {
  flex: 2;
}

.details-box-2 {
  flex: 1;
}

.details li {
  list-style-type: none;
  padding: 0;
  margin: 20px 0;
  font-size: 1.5vw;
}

.character-description{
  max-width: 70vw;
  font-size: 1.5vw;
  font-family: 'Minecraftia',sans-serif ;
  background-image: url('../assets/sign-background.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 20px 20px;
  color: black;
  font-weight: 700;

}
</style>