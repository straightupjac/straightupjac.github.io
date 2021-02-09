<template>
  <div>
    <div class="primary landing full-height">
      <v-container>
        <v-row no-gutters>
          <v-col
          md="1"
          lg="1"/>
          <v-col
          justify-center
            cols="12"
            md="6"
            lg="6"
          >
            <v-slide-x-transition>
              <v-card v-show="show" elevation=0 color=transparent>
                <v-card-title class="mb-6">
                  <h1>Jaclyn Chan</h1>
                </v-card-title>
                <v-card-text class="body-text"><br/>
                  <p >Engineer. <a href='/' style="color:#88b1b1;text-decoration: none;">Creator.</a></p>
                  <p ><v-icon>mdi-map-marker</v-icon> Singapore. Hong Kong. Canada.</p>
                  <p ><v-icon>mdi-school</v-icon> Computer Science and Finance, University of Waterloo</p>
                  <br/>
                  <p><strong>Currently:</strong> Software Engineering Intern @ Curvegrid</p>
                  <p><strong>Previously:</strong> Quantitative Equity Engineering Intern @ CPP Investments, Robotics Engineer Intern @ nuTonomy</p>
                  <br/>
                  <p >16 Weeks Content Director, SoGal Waterloo Marketing Lead</p>
                  <p >Outside of class you can find me rehearsing in a dance studio, singing in an a cappella rehearsal or stunting in cheer practice.</p>
                </v-card-text>
              </v-card>
            </v-slide-x-transition>
          </v-col>
          <v-col
            md="5"
            lg="5">
            <v-img
              :src="require('../assets/JaclynCover.jpg')"
              contain
              class="rounded-circle"
            />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data: () => ({
    show: false,
  }),
  mounted() {
    this.show = ! this.show;
  },
};
</script>
