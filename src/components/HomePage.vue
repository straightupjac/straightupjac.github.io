<template>
  <div>
  <!-- intro section -->
    <div class="primary landing full-height">
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
              class="rounded-circle ma-4"
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
                  <v-col class=text-right>
                    <v-btn tile href="./files/resume.pdf" target="_blank" elevation=0 class="site-btn">resume</v-btn>
                    <v-btn to="/work" tile elevation=0 class="site-btn">more</v-btn>
                  </v-col>
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
              Figma, Digital Media, Video Editing, Choreography, Music
            </p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col md=3 sm=12>
          <v-card elevation=0 tile>
            <v-card-title>
            <h3>Interpersonal 🤝</h3>
            </v-card-title>
            <v-card-text>
            <p>
              Communication, Problem-solving, Adaptability, Teamwork
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
        <v-col>
          <h2>Discover my work</h2>
        </v-col>
      </v-row>
      <v-row justify="center" class="d-flex">
        <v-col sm=6 md=3 xs=6 class="d-flex">
          <v-card color=primary elevation=0 class="card-outer">
          <v-card-text>
            <h3 class=mb-2>16 Weeks</h3>
            <img contain :src="require('../assets/projects/16weekslogo.png')"/>
          </v-card-text>
          <v-card-text>
            Content Director. A group of Engineering and CS students sharing our experiences in tech across different roles, locations, and companies!
          </v-card-text>
          <v-card-actions class="card-actions">
            <v-spacer></v-spacer>
            <v-btn href="https://www.youtube.com/channel/UCyAUw8sY5NN34v-ad6ym49A" target="_blank" tile elevation=0 class=site-btn>
            <v-icon>mdi-youtube</v-icon></v-btn>
          </v-card-actions>
          </v-card>
        </v-col>
        <v-col sm=6  md=3 xs=6 class="d-flex">
          <v-card color=primary elevation=0 class="card-outer">
             <v-card-text>
            <h3 class=mb-2>SoGal Waterloo</h3>
            <img contain :src="require('../assets/projects/SoGal.png')"/>
             </v-card-text>
             <v-card-text>
              Marketing Lead. Working to close the diversity gap in entrepreneurship and venture capital.
             </v-card-text>
             <v-card-actions class="card-actions">
            <v-spacer></v-spacer>
            <v-btn tile elevation=0 href="https://linktr.ee/sogalwaterloo/" target="_blank" class=site-btn><v-icon>mdi-web</v-icon></v-btn>
             <v-btn tile elevation=0 href="https://www.facebook.com/groups/400152264387185" target="_blank" class=site-btn><v-icon>mdi-facebook</v-icon></v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col sm=6 md=3 xs=6 class="d-flex">
          <v-card color=primary elevation=0 class="card-outer">
             <v-card-text>
            <h3 class=mb-2>BitFinca</h3>
            <img contain :src="require('../assets/projects/bitfinca.png')"/>
             </v-card-text>
             <v-card-text>
              MarketMake Hackathon. A blockchain-based lending platform that allows anyone to microinvest in ventures that matter.
             </v-card-text>
            <v-card-actions class="card-actions">
            <v-spacer></v-spacer>
            <v-btn href="https://curvegrid.github.io/bitfinca" target="_blank" tile elevation=0 class=site-btn><v-icon>mdi-web</v-icon></v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col sm=6 md=3 class="d-flex">
          <v-card color=primary elevation=0 class="card-outer">
             <v-card-text>
            <h3 class=mb-2>Tech+</h3>
            <img contain :src="require('../assets/projects/techplus.png')"/>
            </v-card-text>
            <v-card-text>
              Mentorship Program Organizer. Cultivating a more inclusive and diverse tech community at UWaterloo.
             </v-card-text>
            <v-card-actions class="card-actions">
            <v-spacer></v-spacer>
             <v-btn href="http://www.techplusuw.org/" target="_blank" tile elevation=0 class=site-btn><v-icon>mdi-web</v-icon></v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row justify="center" class="d-flex">
        <v-col md=3 xs=6 sm=6 class="d-flex">
          <v-card color=primary elevation=0 class="card-outer">
            <v-card-text>
            <h3 class=mb-2>Pearshare</h3>
            <img contain :src="require('../assets/projects/pearshare.png')"/>
            </v-card-text>
              <v-card-text>
              Angelhack Singapore 2018. Code for a Cause Impact Winner. Reducing food wastage.
             </v-card-text>
            <v-card-actions class="card-actions">
            <v-spacer></v-spacer>
            <v-btn href="https://pearshare.github.io/" target="_blank" tile elevation=0 class=site-btn><v-icon>mdi-web</v-icon></v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col md=3 xs=6 sm=6 class="d-flex">
          <v-card color=primary elevation=0 class="card-outer">
            <v-card-text>
            <h3 class=mb-2>SpaceLab</h3>
            <img class="rounded-lg" contain :src="require('../assets/projects/rocket.png')"/>
            </v-card-text>
              <v-card-text>
              First team in Southeast Asia to win SGD$60k grant to launch biology experiment sent to the International Space Station.
              Launched on the SpaceX Falcon 9 on June 4, 2017.
             </v-card-text>
            <v-card-actions class="card-actions">
             <v-spacer class="d-flex justify-space-between align-end" />
            <space-lab/>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols=6 md=3 xs=6 sm=6 class="d-flex">
          <v-card color=primary elevation=0 class="card-outer">
            <v-card-text>
            <h3 class=mb-2>TEDxYouth@SAS</h3>
            <img class="rounded-lg" contain :src="require('../assets/projects/turningtides.png')"/>
            </v-card-text>
             <v-card-text>
              Executive Producer. Lead Organizer. Selected to attend TEDFest 2018, an official TED conference in NYC
             </v-card-text>
            <v-card-actions class="card-actions">
             <v-spacer class="d-flex justify-space-between align-end" />
            <TEDx/>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col md=3 xs=6 sm=6 class="d-flex">
          <v-card color=primary elevation=0 class="card-outer">
            <v-card-text>
            <h3 class=mb-2>FIRST Robotics</h3>
            <img class="rounded-lg" contain :src="require('../assets/projects/robot.png')"/>
            </v-card-text>
            <v-card-text>
              Team Captain. Youth Mentor. Project Manager. Awarded Excellence in Robotics Award, Senior Technology Award and PTA Scholar Award for contributions to robotics
             </v-card-text>
            <v-card-actions class="card-actions">
             <v-spacer class="d-flex justify-space-between align-end" />
            <coming-soon/>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      </v-container>
    </div>
    <!-- <div>
      <v-container>
        <v-row no-gutters>
        <v-col md=6 offset-md=1>
          <h2>Milestones</h2>
        </v-col>
      </v-row>
      </v-container>
    </div> -->
  </div>
</template>

<script>
import ComingSoon from './projects/ComingSoon.vue';
import SpaceLab from './projects/SpaceLab.vue';
import TEDx from './projects/TedX.vue';

export default {
  name: "Home",
  components: {
    ComingSoon,
    SpaceLab,
    TEDx,
  },
  data: () => ({
    show: false,
  }),
  mounted() {
    this.show = ! this.show;
  },
};
</script>

<style>

#projects {
  background: #f9f9f9;
}
</style>
