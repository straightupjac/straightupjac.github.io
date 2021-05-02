<template>
  <div>
    <v-container>
    <v-row no-gutters>
      <v-col md=10>
        <h2>Gallery</h2>
      </v-col>
      <v-spacer/>
      <v-btn
        tile @click=" $router.push('/creative')"
        elevation=0 class="mt-4 site-btn">
        Back
      </v-btn>
    </v-row>
    <VueGallerySlideshow :images="images" :index="index" @close="index = null"></VueGallerySlideshow>
    <v-row no-gutters>
      <v-img
        class="creative-img"
        src="../../assets/art/helix-bridge.jpg"
      />
      <v-img
        class="creative-img"
        src="../../assets/art/joseph-tan-2.jpg"
      />
      <v-img
        class="creative-img"
        src="../../assets/art/joseph-tan-3.jpg"
      />
      <v-img
        class="creative-img"
        src="../../assets/art/joseph-tan-4.jpg"
      />
      <v-img
        class="creative-img"
        src="../../assets/art/bellas-2.jpg"
      /><v-img
        class="creative-img"
        src="../../assets/art/bellas.jpeg"
      /><v-img
        class="creative-img"
        src="../../assets/art/joseph-tan.jpg"
      /><v-img
        class="creative-img"
        src="../../assets/art/kok-hong-2.jpg"
      /><v-img
        class="creative-img"
        src="../../assets/art/kok-hong.jpg"
      /><v-img
        class="creative-img"
        src="../../assets/art/kok-hong-3.jpg"
      /><v-img
        class="creative-img"
        src="../../assets/art/kok-hong-4.jpg"
      /><v-img
        class="creative-img"
        src="../../assets/art/lyricalight-3.jpg"
      /><v-img
        class="creative-img"
        src="../../assets/art/lyricalight-2.jpg"
      /><v-img
        class="creative-img"
        src="../../assets/art/lyricalight-5.jpg"
      /><v-img
        class="creative-img"
        src="../../assets/art/mindheist.jpg"
      /><v-img
        class="creative-img"
        src="../../assets/art/mindheist-2.jpg"
      /><v-img
        class="creative-img"
        src="../../assets/art/mindheist-3.jpg"
      />
      <v-img
        class="creative-img"
        src="../../assets/art/nectar-noises.jpg"
      /><v-img
        class="creative-img"
        src="../../assets/art/nectar-noises-2.jpg"
      /><v-img
        class="creative-img"
        src="../../assets/art/nectar-noises-4.jpg"
      /><v-img
        class="creative-img"
        src="../../assets/art/nectar-noises-6.jpg"
      /><v-img
        class="creative-img"
        src="../../assets/art/nectar-noises-7.jpg"
      /><v-img
        class="creative-img"
        src="../../assets/art/nectar-noises-8.jpg"
      /><v-img
        class="creative-img"
        src="../../assets/art/sas.jpg"
      /><v-img
        class="creative-img"
        src="../../assets/art/sas-2.jpg"
      />
      <v-img
        class="creative-img"
        src="../../assets/art/charlie.jpg"
      /><v-img
        class="creative-img"
        src="../../assets/art/anything-goes-2.jpg"
      /><v-img
        class="creative-img"
        src="../../assets/art/anything-goes-3.jpg"
      /><v-img
        class="creative-img"
        src="../../assets/art/anything-goes-4.jpg"
      /><v-img
        class="creative-img"
        src="../../assets/art/red.jpg"
      /><v-img
        class="creative-img"
        src="../../assets/art/red-2.jpg"
      /><v-img
        class="creative-img"
        src="../../assets/art/red-3.jpg"
      />
    </v-row>
    </v-container>
  </div>
</template>

<script>
import VueGallerySlideshow from 'vue-gallery-slideshow';

export default {
  name: "Gallery",
  data() {
    return {
      images: [
        "../../assets/art/lyricalight.jpg",
        "https://placekitten.com/g/200/300",
      ]
    }
  },
  components: {
    VueGallerySlideshow,
  }
}
</script>

<style>
.creative-img {
  height: 350px;
  width:400px;
}
</style>