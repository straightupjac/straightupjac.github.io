<template>
  <div>
    <v-container>
    <v-row align="center"
      justify="center">
      <v-col md=10>
        <h2>Choreography</h2>
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
          :videoID="'j40g4XCVyus'"
          :title="'AcaBellas ICCA 2020 Quarterfinals'"
          :date="'February 2020'"
          :description="'The AcaBellas are the University of Waterloo\'s upper-voice a cappella group, celebrating and developing female presence in a cappella! Choreographed by Jaclyn Chan.'"
          />
      </v-col>
      <v-col>
        <Video
          :videoID="'HLCXgYaAab0'"
          :title="'Momentum'"
          :date="'April 2018'"
          :description="'Momentum abstractly explores the concept of elastic and inelastic collisions surrounding momentum. It presents an unstructured narrative of particles colliding and transferring energy. Four dancers are in a state of constant connection.'"
          />
      </v-col>
      <v-col>
        <Video
          :videoID="'vkoBT9hsJmA'"
          :title="'Golden Ticket'"
          :date="'November 2017'"
          :description="'Violet Beauregarde receives her golden ticket in Charlie and the Chocolate Factory.'"
          />
      </v-col>
      <v-col>
        <Video
          :videoID="'1GYPBj0vc6w'"
          :title="'(De)vice'"
          :date="'March 2017'"
          :description="'A choreographic collaboration with ten dancers/choreographers. Exploring the impact that digital media and technology plays in our lives.'"
        />
      </v-col>
      <v-col>
        <Video
          :videoID="'f_syqPXnWks'"
          :title="'F*ck It'"
          :date="'Jan 2019'"
          :description="'Choreographed by Jaclyn Chan & Lucia Garcia Velasco.'"
          />
      </v-col>
       <v-col>
        <Video
          :videoID="'vCpoYcK7rS0'"
          :title="'Surrender'"
          :date="'November 2016'"
          :description="'A feeling of constantly being pulled in different directions.'"
        />
      </v-col>
      <v-col>
        <Video
          :videoID="'K857RmOtUcg'"
          :title="'Mindheist'"
          :date="'March 2018'"
          :description="'A choreographic collaboration with ten dancers/choreographers. Exploration of alzheimer\'s disease. A progressive, irreversible mental condition characterized by loss of memory, agitation and lack of mental stability.'"
        />
      </v-col>
    </v-row>
    </v-container>
  </div>
</template>

<script>
import Video from "./Video.vue";

export default {
  name: "Choreography",
  components: {
    Video,
  }
}
</script>
