<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width=80%
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          tile elevation=0 class=site-btn>
          Learn more
          </v-btn>
      </template>

      <v-card>
        <v-card-title class="primary">
          <h1 class=ma-4>SpaceLab</h1>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col>
               <img class="rounded-lg ma-3" contain :src="require('../../assets/projects/spacelabgroup.jpg')">
            <img class="rounded-lg ma-3" contain :src="require('../../assets/projects/space2.jpg')">
             </v-col>
             <v-col>
                 <img class="rounded-lg ma-3" contain :src="require('../../assets/projects/spacelablong.png')">
               <img class="rounded-lg ma-3" contain :src="require('../../assets/projects/spacelabworking.jpg')">
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <h3 class=mb-3>Software and Electrical Lead. Founding Member. Mentor</h3>
              <p>• Research Topic: The Effect of Melanin Production on the Growth of Escherichia coli Bacterium in Space</p>
              <p>• First team in Southeast Asia to win SGD$60k grant to launch biology experiment sent to the International Space Station</p>
              <p>• Specialized in software and electrical systems including Printed Circuit Board design, CAD and sensor programming</p>
              <p>• Implemented a data capturing system with PBASIC and conceptualized the infrastructure of the micro lab</p>
            <p class=ma-3> "A group of students from the Singapore American School (SAS) have become the first in Singapore to have a science experiment installed on the International Space Station (ISS).
              Their experiment, which aims to find out the effects of melanin on bacteria growth in space, was successfully carried to space on the Dragon spacecraft on June 4 via
            American company SpaceX's Falcon 9 rocket at the Kennedy Space Centre in Florida in the United States." -
            <a href='https://www.straitstimes.com/singapore/education/first-students-here-to-send-experiment-to-iss' style="color:#88b1b1;text-decoration: none;">Straits Times</a></p>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>