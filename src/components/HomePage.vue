<template>
  <div>
  <!-- intro section -->
    <div class="secondary landing full-height">
      <v-container>
        <v-row no-gutters>
          <v-col md=5 offset-md=2>
          <h2>Hi there 👋, I'm Jaclyn</h2>
          <h3 class=mb-3>Software Engineer. <a href='/' style="color:#88b1b1;text-decoration: none;">Creator.</a></h3>
            <v-slide-x-transition>
              <div class=mr-2>
              <p ><v-icon>mdi-map-marker</v-icon> Singapore. Hong Kong. Waterloo.</p>
              <p ><v-icon>mdi-school</v-icon> Computer Science and Finance, University of Waterloo</p>
              </div>
            </v-slide-x-transition>
          </v-col>
          <v-col
            md="3"
            lg="3">
            <v-img
              :src="require('../assets/JaclynCover.jpg')"
              contain
              class="rounded-lg ma-4"
            />
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
                </v-col>
              </v-row>
      </v-container>
    </div>
    <!-- skills section -->
    <div id="skills">
       <v-container>
      <v-row no-gutters>
        <v-col>
          <h2>Skills</h2>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col cols="12" md=3 xs=12>
          <v-card elevation=0>
            <v-card-title>
              <h3>Languages 👩‍💻</h3>
            </v-card-title>
            <v-card-text>
            <p>
              Python, Javascript, C/C++, Scala, Java, Scheme, Bash, SQL, R, RobotC, Go, Solidity
            </p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col xs=6 md=3>
          <v-card elevation=0>
            <v-card-title>
            <h3>Tools 🧰</h3>
             </v-card-title>
            <v-card-text>
            <p>
              Git, Jira, Pandas, Linux, Excel, Docker, MLFlow, Vue.js, CAD
            </p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col md=3>
          <v-card elevation=0>
            <v-card-title>
            <h3>Creative 💃</h3>
            </v-card-title>
            <v-card-text>
            <p>
              Figma, Video Editing, Dance, Choreography, Music
            </p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col md=3 sm=12>
          <v-card elevation=0 tile>
            <v-card-title>
            <h3>Leadership 🤝</h3>
            </v-card-title>
            <v-card-text>
            <p>
              Adaptability, Collaboration, Strategic Thinking, Cultural Competence
            </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    </div>
        <div id="projects">
      <v-container>
        <v-row no-gutters>
        <v-col md=10>
          <h2>What I've worked on</h2>
        </v-col>
        <v-spacer/>
        <v-btn
          tile to='/work'
          elevation=0 class="mt-4 site-btn">
          See more
        </v-btn>
      </v-row>
      <v-row justify="center" class="d-flex">
        <v-col sm=6  md=3 xs=6 class="d-flex">
          <v-card color=secondary elevation=0 class="card-outer">
            <v-card-text>
            <h3 class=mb-2>{{projects.frv.title}}</h3>
            <div class="text-center">
            <img contain :src="require(`@/${projects.frv.image}`)"/>
            </div>
             </v-card-text>
             <v-card-text>
               {{projects.frv.description}}
             </v-card-text>
             <v-card-actions class="card-actions">
            <v-spacer></v-spacer>
            <v-btn tile elevation=0 href="http://frontrow.vc/" target="_blank" class=site-btn><v-icon>mdi-web</v-icon></v-btn>
             <v-btn tile elevation=0 href="https://www.linkedin.com/company/front-row-ventures/" target="_blank" class=site-btn><v-icon>mdi-linkedin</v-icon></v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col sm=6  md=3 xs=6 class="d-flex">
          <v-card color=secondary elevation=0 class="card-outer">
             <v-card-text>
            <h3 class=mb-2>{{projects.soGal.title}}</h3>
            <img contain :src="require(`@/${projects.soGal.image}`)"/>
             </v-card-text>
             <v-card-text>
               {{projects.soGal.description}}
             </v-card-text>
             <v-card-actions class="card-actions">
            <v-spacer></v-spacer>
            <v-btn tile elevation=0 href="https://linktr.ee/sogalwaterloo/" target="_blank" class=site-btn><v-icon>mdi-web</v-icon></v-btn>
             <v-btn tile elevation=0 href="https://www.facebook.com/groups/400152264387185" target="_blank" class=site-btn><v-icon>mdi-facebook</v-icon></v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col sm=6 md=3 xs=6 class="d-flex">
          <v-card color=secondary elevation=0 class="card-outer">
          <v-card-text>
            <h3 class=mb-2>{{projects.sixteenWeeks.title}}</h3>
            <img contain :src="require(`@/${projects.sixteenWeeks.image}`)"/>
          </v-card-text>
          <v-card-text>
            {{projects.sixteenWeeks.description}}
          </v-card-text>
          <v-card-actions class="card-actions">
            <v-spacer></v-spacer>
            <v-btn href="https://www.youtube.com/channel/UCyAUw8sY5NN34v-ad6ym49A" target="_blank" tile elevation=0 class=site-btn>
            <v-icon>mdi-youtube</v-icon></v-btn>
          </v-card-actions>
          </v-card>
        </v-col>
        <v-col sm=6 md=3 class="d-flex">
          <v-card color=secondary elevation=0 class="card-outer">
             <v-card-text>
            <h3 class=mb-2>{{projects.techplus.title}}</h3>
            <img contain :src="require(`@/${projects.techplus.image}`)"/>
            </v-card-text>
            <v-card-text>
              {{projects.techplus.description}}
             </v-card-text>
            <v-card-actions class="card-actions">
            <v-spacer></v-spacer>
             <v-btn href="http://www.techplusuw.org/" target="_blank" tile elevation=0 class=site-btn><v-icon>mdi-web</v-icon></v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row justify="center" class="d-flex">
        <v-col sm=6 md=3 xs=6 class="d-flex">
          <v-card color=secondary elevation=0 class="card-outer">
             <v-card-text>
            <h3 class=mb-2>{{projects.bitFinca.title}}</h3>
            <img contain :src="require(`@/${projects.bitFinca.image}`)"/>
             </v-card-text>
             <v-card-text>
               {{projects.bitFinca.description}}
             </v-card-text>
            <v-card-actions class="card-actions">
            <v-spacer></v-spacer>
            <v-btn href="https://curvegrid.github.io/bitfinca" target="_blank" tile elevation=0 class=site-btn><v-icon>mdi-web</v-icon></v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col md=3 xs=6 sm=6 class="d-flex">
          <v-card color=secondary elevation=0 class="card-outer">
            <v-card-text>
            <h3 class=mb-2>{{projects.pearShare.title}}</h3>
            <img contain :src="require(`@/${projects.pearShare.image}`)"/>
            </v-card-text>
              <v-card-text>
              {{projects.pearShare.description}}
             </v-card-text>
            <v-card-actions class="card-actions">
            <v-spacer></v-spacer>
            <v-btn href="https://pearshare.github.io/" target="_blank" tile elevation=0 class=site-btn><v-icon>mdi-web</v-icon></v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col md=3 xs=6 sm=6 class="d-flex">
          <v-card color=secondary elevation=0 class="card-outer">
            <v-card-text>
            <h3 class=mb-2>{{projects.spaceLab.title}}</h3>
            <img class="rounded-lg" contain :src="require(`@/${projects.spaceLab.image}`)"/>
            </v-card-text>
              <v-card-text>
              {{projects.spaceLab.description}}
             </v-card-text>
            <v-card-actions class="card-actions">
             <v-spacer class="d-flex justify-space-between align-end" />
            <space-lab/>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols=6 md=3 xs=6 sm=6 class="d-flex">
          <v-card color=secondary elevation=0 class="card-outer">
            <v-card-text>
            <h3 class=mb-2>{{projects.ted.title}}</h3>
            <img class="rounded-lg" contain :src="require(`@/${projects.ted.image}`)"/>
            </v-card-text>
             <v-card-text>
               {{projects.ted.description}}
             </v-card-text>
            <v-card-actions class="card-actions">
             <v-spacer class="d-flex justify-space-between align-end" />
            <TEDx/>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import SpaceLab from './projects/SpaceLab.vue';
import TEDx from './projects/TedX.vue';
import Projects from '@/assets/projects.json';

export default {
  name: "Home",
  components: {
    SpaceLab,
    TEDx,
  },
  data () {
    return {
      projects: Projects,
    }
  },
  mounted() {
    this.show = ! this.show;
  },
};
</script>

<style scoped>

#projects {
  background: #f9f9f9;
}
</style>
