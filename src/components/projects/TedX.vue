<template>
  <div class="text-center">
    <v-dialog
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
        <v-card-title class="secondary">
          <h1 class=ma-4>TEDxYouth@SAS</h1>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col>
               <img class="rounded-lg ma-3" contain :src="require('../../assets/projects/ted.jpg')">
            <img class="rounded-lg ma-3" contain :src="require('../../assets/projects/tedgroup.jpg')">
             </v-col>
             <v-col>
                 <img class="rounded-lg ma-3" contain :src="require('../../assets/projects/tedfest.jpg')">
               <img class="rounded-lg ma-3" contain :src="require('../../assets/projects/tedfestpair.jpg')">
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <h3 class=mb-3>Lead Organizer. Executive Producer. Event Manager.</h3>
             <p> TEDxYouth@SAS is an organization that seeks to provide a number of opportunities for people to share ideas.
              We were created in the spirit of TED’s mission, “ideas worth spreading.”</p>
              <p ma-3>• Led 30+ member team to produce main stage event, managing speaker curation, technical theater coordination and rehearsal
                    logistics for events with 100+ guests. Collaborated with finance team to manage budgets of $25k+</p>
              <p ma-3>• Managed event logistics (2015) and was selected to attend TEDFest 2018, an official TED conference in NYC</p>
              <p ma-3>• Lead Organizer (2017-18), Executive Producer (2015-17), Event Manger (2015)</p>

            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>