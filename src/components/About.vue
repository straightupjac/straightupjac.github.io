<template>
  <div>
      <!-- intro section -->
    <div class="primary landing full-height">
      <v-container>
        <v-row no-gutters>
          <v-col md=5 offset-md=2>
          <h2>Jaclyn Chan</h2>
          <h3 class=mb-3>Software Engineer. <a href='/' style="color:#88b1b1;text-decoration: none;">Creator.</a></h3>
            <v-slide-x-transition>
              <div class=mr-2>
              <v-card class=mb-2 color=info tile elevation=0>
                <v-card-text>📍 Singapore. Hong Kong. Waterloo.</v-card-text></v-card>
              <v-card class=mb-2 color=info tile elevation=0>
                <v-card-text>🔭 Seeking opportunities in software engineering and product management.</v-card-text></v-card>
              <v-card class=mb-2 color=info tile elevation=0>
                <v-card-text>🎓 Studying computer science and finance at the University of Waterloo</v-card-text></v-card>
              <v-card class=mb-2 color=info tile elevation=0>
                <v-card-text>🌱 I’m currently learning UI/UX design. </v-card-text></v-card>
              <v-card class=mb-2 color=info tile elevation=0>
                <v-card-text>💡 Got an idea? I'd love to chat!</v-card-text></v-card>
              <v-card class=mb-2 color=info tile elevation=0>
                <v-card-text>💃 Outside of class you can find me rehearsing in a dance studio, singing in an a cappella rehearsal or stunting in cheer practice.
                </v-card-text></v-card>
               <v-card class=mb-2 color=info tile elevation=0>
                <v-card-text>🥢 In my free time, I love discovering new resturants and eating out with friends :)
                </v-card-text></v-card>
              </div>
            </v-slide-x-transition>
          </v-col>
          <v-col
            md="3"
            lg="3">
            <v-img
              :src="require('../assets/JaclynCover.jpg')"
              contain
              class="rounded-circle ma-4"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col md=8 offset-md=2>

          </v-col>
        </v-row>
        <v-row class=mt-8>
                <v-col md=8 offset-md=2>
                  <h1 class=mb-3>Work Experience</h1>
                  <v-row>
                    <v-col md=3><p>Jan 2021 -</p></v-col>
                    <v-col>
                      <h3>Software Engineering Intern @ Curvegrid</h3>
                      <p>Building Blockchain tooling technologies.</p>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col md=3><p>Jun 2020-Aug 2020</p></v-col>
                    <v-col>
                      <h3>Quantitative Equity Engineering Intern @ CPP Investments</h3>
                      <p>Implemented statistical analytics tools for factor investing portfolios</p>
                    </v-col>
                  </v-row>
                   <v-row>
                     <v-col md=3><p>Jun 2020-Aug 2020</p></v-col>
                    <v-col>
                      <h3>Robotics Engineer Intern @ nuTonomy</h3>
                      <p>Autonomous mobility solutions</p>
                    </v-col>
                  </v-row>
                  <v-col class=text-right>
                    <v-btn tile href="./files/resume.pdf" target="_blank" elevation=0 class="site-btn">resume</v-btn>
                  </v-col>
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
