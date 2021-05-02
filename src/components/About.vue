<template>
  <div>
      <!-- intro section -->
    <div class="secondary landing full-height">
      <v-container>
        <v-row no-gutters>
          <v-col>
          <h2>Hello again 👋 I'm Jaclyn</h2>
          <h3 class=mb-3>Software Engineer. <a href='/' style="color:#88b1b1;text-decoration: none;">Creator.</a></h3>
            <v-slide-x-transition>
              <div class=mr-2>
              <v-card class=mb-2 color=info tile elevation=0>
                <v-card-text>📍 Singapore. Hong Kong. Waterloo.</v-card-text></v-card>
              <v-card class=mb-2 color=info tile elevation=0>
                <v-card-text>🎓 Computer science and finance student at the University of Waterloo</v-card-text></v-card>
              <v-card class=mb-2 color=info tile elevation=0>
                <v-card-text>🌱 Currently learning about venture capital and UI/UX design. </v-card-text></v-card>
               <v-card class=mb-2 color=info tile elevation=0>
                <v-card-text>💃 Dancer, Yoga Instructor, Singer and Foodie
                </v-card-text></v-card>
              </div>
            </v-slide-x-transition>
          </v-col>
          <v-col
            md="3"
            lg="3">
            <v-img
              :src="require('../assets/jaclyn_.jpg')"
              contain
              class="ma-4"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <p>
              I am currently a
              <span class=software>software engineer</span> at
              <a href="https://www.curvegrid.com/" target="_blank">
                <span class=curvegrid>
                Curvegrid</span></a>, a blockchain tooling company based in Tokyo.
              I am also a <span class=vc>venture capital</span> intern at <a href="https://www.kirinadams.com/" target="_blank"><span class=kirin>Kirin Adams</span></a> and on the investment team at <a href="http://frontrow.vc/" target="_blank">Front Row Ventures</a>.
              During summer 2020, I worked at <a href="https://www.cppinvestments.com/" target="_blank"><span class=cpp>CPP Investments</span></a>, a global investment management organisation with CAD$400+ billion assets under management as a <span class=quant>quantitative equity</span> engineer intern.
              I previously interned at <a href="https://www.aptiv.com/en/solutions/autonomous-mobility" target="_blank"><span class=nutonomy>nuTonomy</span></a> (acquired by Aptiv) as a <span class=robotics>robotics engineer</span> intern on the embedded systems team.
            </p>
            <br/>
            <p>
              When I'm on not on my computer, you can find me dancing in a studio, practicing yoga, singing in an a cappella rehearsal or stunting in cheer practice.
            </p>
            <br/>
            <p>
              Thanks for stopping by. Reach out! I'd love to meet you ✌️
            </p>
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
