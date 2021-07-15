<template>
  <v-app-bar
    id="app-bar"
    elevation="0"
    app
    color=secondary
    fade-img-on-scroll
  >
  <!-- <v-switch
    color=invert
    class="ml-15 mt-5"
    inset
    v-model="goDark"
    prepend-icon="mdi-weather-sunny"
    append-icon="mdi-moon-waning-crescent"
  >
  </v-switch> -->
    <v-spacer/>
    <div class="ml-10 mr-10">
      <v-btn
        to="/"
        target=""
        text
        class="text-center nav-button"
      >
        <span>home</span>
      </v-btn>
      <v-btn
        to="/work"
        target=""
        text
        class="text-center nav-button"
      >
        work
      </v-btn>
      <v-btn
        to="/about"
        target=""
        text
        class="text-center nav-button"
      >
        <span class="mr-2">about</span>
      </v-btn>
    </div>
  </v-app-bar>
</template>