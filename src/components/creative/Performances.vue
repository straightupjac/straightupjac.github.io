<template>
  <div>
    <v-container>
    <v-row align="center"
      justify="center">
      <v-col md=10>
        <h2>Performances</h2>
      </v-col>
      <v-spacer/>
      <v-btn
        tile @click=" $router.push('/creative')"
        elevation=0 class="mt-4 site-btn">
        Back
      </v-btn>
    </v-row>
    <v-row>
      <v-col>
        <Video
          :videoID="'AXGKOAKMVPM'"
          :title="'How You Like That (Dance Cover)'"
          :date="'August 2020'"
          :description="'Filmed in Singapore.'"
          />
      </v-col>
      <v-col>
        <Video
          :videoID="'5TvDQWuKHFA'"
          :title="'Santa Baby'"
          :date="'December 2019'"
          :description="'Unravel-mEOT. '"
          />
      </v-col>
      <v-col>
        <Video
          :videoID="'LU5LKVM0M4g'"
          :title="'Fusion'"
          :date="'April 2018'"
          :description="'Choreographed by Elena Cherry. Performed as part of the full-length production Definition at the Singapore American School'"
          />
      </v-col>
      <v-col>
        <Video
          :videoID="'d5A3hqRvqsg'"
          :title="'The Birds pt 1'"
          :date="'April 2017'"
          :description="'Choreographed by Hannah Bradshaw. Performed as part of the full-length production Showcase at the Singapore American School.'"
          />
      </v-col>
       <v-col>
        <Video
          :videoID="'nyG2jY05y9U'"
          :title="'We have it all'"
          :date="'April 2017'"
          :description="'Choreographed by Diya Vuthandam. Performed as part of the full-length production Showcase at the Singapore American School.'"
        />
      </v-col>
      <v-col>
        <Video
          :videoID="'82zRzwBBsK4'"
          :title="'Victory'"
          :date="'April 2017'"
          :description="'Choreographed by Lucia Garcia Velasco. Performed as part of the full-length production Showcase at the Singapore American School.'"
        />
      </v-col>
    </v-row>
    </v-container>
  </div>
</template>

<script>
import Video from "./Video.vue";

export default {
  name: "Performances",
  components: {
    Video,
  }
}
</script>

<style>

</style>