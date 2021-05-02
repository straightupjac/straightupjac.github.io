<template>
  <div>
    <v-container id="top">
      <v-row no-gutters>
      <v-col md=9>
        <h2>What I've worked on...</h2>
      </v-col>
      <v-spacer/>
      <v-btn
        @click="$vuetify.goTo('#featuredProjects')"
        elevation=0 class="mt-4 site-btn" tile>
        Projects
      </v-btn>
      <v-btn
        tile href="./files/jaclyn-chan-resume.pdf" target="_blank"
        elevation=0 class="mt-4 site-btn">
        resume
      </v-btn>
    </v-row>
    <h3>Community</h3>
      <v-row justify="center" class="d-flex">
        <v-col sm=6  md=4 xs=6 class="d-flex">
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
        <v-col sm=6 md=4 xs=6 class="d-flex">
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
      <v-col sm=6  md=4 xs=6 class="d-flex">
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
      <v-col sm=6 md=4 class="d-flex">
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
      <v-col cols=6 md=4 xs=6 sm=6 class="d-flex">
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
    <div id=featuredProjects>
      <v-row>
         <h3>Projects</h3>
         <v-spacer/>
        <v-btn
          @click="$vuetify.goTo('#top')"
          elevation=0 class="mt-4 site-btn" tile>
          Back to top
        </v-btn>
      </v-row>
    <v-row justify="center" class="d-flex">
      <v-col sm=6 md=4 xs=6 class="d-flex">
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
      <v-col md=4 xs=6 sm=6 class="d-flex">
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
      <v-col md=4 xs=6 sm=6 class="d-flex">
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
      <v-col md=4 xs=6 sm=6 class="d-flex">
        <v-card color=secondary elevation=0 class="card-outer">
          <v-card-text>
          <h3 class=mb-2>{{projects.frc.title}}</h3>
          <img class="rounded-lg" contain :src="require(`@/${projects.frc.image}`)"/>
          </v-card-text>
          <v-card-text>
            {{projects.frc.description}}
            </v-card-text>
          <v-card-actions class="card-actions">
            <v-spacer class="d-flex justify-space-between align-end" />
          <coming-soon/>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col sm=6 md=4 xs=6 class="d-flex">
        <v-card color=secondary elevation=0 class="card-outer">
          <v-card-text>
          <h3 class=mb-2>{{projects.gnome.title}}</h3>
          <img class="rounded-lg" contain :src="require(`@/${projects.gnome.image}`)"/>
          </v-card-text>
          <v-card-text>
            {{projects.gnome.description}}
            </v-card-text>
          <v-card-actions class="card-actions">
            <v-spacer class="d-flex justify-space-between align-end" />
            <v-btn :href="projects.gnome.links[0].link" target="_blank" tile elevation=0 class=site-btn><v-icon>mdi-web</v-icon></v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col sm=6 md=4 xs=6 class="d-flex">
        <v-card color=secondary elevation=0 class="card-outer">
          <v-card-text>
          <h3 class=mb-2>{{projects.htn.title}}</h3>
          <img class="rounded-lg" contain :src="require(`@/${projects.htn.image}`)"/>
          </v-card-text>
          <v-card-text>
            {{projects.htn.description}}
            </v-card-text>
          <v-card-actions class="card-actions">
            <v-spacer class="d-flex justify-space-between align-end" />
            <v-btn :href="projects.htn.links[0].link" target="_blank" tile elevation=0 class=site-btn><v-icon>mdi-web</v-icon></v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    </div>
    </v-container>
  </div>
</template>

<script>
import Projects from '@/assets/projects.json';
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
data () {
    return {
      projects: Projects,
    }
},
mounted() {
  console.log(this.projects.sixteenWeeks);
},
};
</script>

<style scoped>
#projects {
background: #f9f9f9;
}
</style>