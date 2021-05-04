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
          <h1 class=ma-4>Coming Soon</h1>
        </v-card-title>
        <v-card-text>
          <h3 class=ma-3>Stay tuned for more information :)</h3>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>