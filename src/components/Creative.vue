<template>
  <div>
    <v-container>
      <v-row>
        <h2>My alter ego</h2>
        <v-spacer/>
        <v-btn
          tile href="./files/jaclyn-chan-dance.pdf" target="_blank"
          elevation=0 class="mt-4 site-btn">
          dance resume
        </v-btn>
      </v-row>
    </v-container>
    <div id=creativeBanner>
    </div>
    <div class=secondary>
      <v-container>
        <v-row>
          <v-col md=3>
            <v-img class="rounded-lg" src="../assets/art/headshot.jpg"></v-img>
          </v-col>
          <v-col>
            <p class="art-about ">{{ projects.aboutMeArt}}</p>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div>
      <v-container>
        <v-row
          align="center"
          justify="center"
        >
        <v-btn class="ma-5" dark color="#88b1b1" x-large elevation=0
          @click=" $router.push('/creative/performances') "
        >Performances</v-btn>
        <v-btn class="ma-5" dark color="#88b1b1" x-large elevation=0
          @click=" $router.push('/creative/choreography') "
        >Choreography</v-btn>
        <v-btn class="ma-5" dark color="#88b1b1" x-large elevation=0
          @click=" $router.push('/creative/gallery') "
        >Gallery</v-btn>
        </v-row>
      </v-container>
    </div>
    <div>
      <v-row no-gutters>
        <v-img
          class="creative-img"
          src="../assets/art/joseph-tan-2.jpg"
        /><v-img
          class="creative-img"
          src="../assets/art/bellas.jpeg"
        />
        <v-img
          class="creative-img"
          src="../assets/art/joseph-tan-4.jpg"
        />
        <v-img
          class="creative-img"
          src="../assets/art/kok-hong-4.jpg"
        />
        <v-img
          class="creative-img"
          src="../assets/art/lyricalight-3.jpg"
        />
        <v-img
          class="creative-img"
          src="../assets/art/nectar-noises.jpg"
        />
        <v-img
          class="creative-img"
          src="../assets/art/mindheist.jpg"
        />
        <v-img
          class="creative-img"
          src="../assets/art/lyricalight-5.jpg"
        />
        <v-img
          class="creative-img"
          src="../assets/art/sas.jpg"
        />
      </v-row>
    </div>
  </div>
</template>

<script>
import Projects from '@/assets/projects.json';

export default {
name: "Creative",
data () {
    return {
      projects: Projects,
    }
},
};
</script>

<style scoped>
#creativeBanner {
  background-image: url("../assets/art/face.jpg");
  height: 200px;
  background-position: center, center;
}

.banner {
  height: 200px;
}

.headshot {
  height: 300px;
}

.creative-img {
  height: 300px;
  width: 400px;
}
</style>