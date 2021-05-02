<template>
  <div>
    <v-container>
      <h2>My alter ego</h2>
    </v-container>
    <v-img class="rounded-lg banner" src="../assets/art/face.jpg"></v-img>
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
        <v-btn class="ma-5" dark color="#88b1b1" x-large elevation=0>Gallery</v-btn>
        <v-btn class="ma-5" dark color="#88b1b1" x-large elevation=0>Choreography</v-btn>
        <v-btn class="ma-5" dark color="#88b1b1" x-large elevation=0>Performances</v-btn>
        </v-row>
      </v-container>
    </div>
    <div>
      <v-row no-gutters>

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

<style>
.banner {
  height: 200px;
}

.headshot {
  height: 300px;
}
</style>