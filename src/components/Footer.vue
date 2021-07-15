<template>
  <v-footer
    class=footer-section
    padless
  >
    <v-card
      flat
      tile
      width=100%
      class="secondary"
    >
    <v-card-title class="ml-10 mr-10">
      Like what you see?
    </v-card-title>
      <v-card-text class="ml-10 mr-10 footer-body">
        Let's connect
        <v-btn
          v-for="icon in icons"
          :key="icon.link"
          :href="icon.link"
          target="_blank"
          class="mx-4"
          icon
        >
          <v-icon size="24px">
            {{ icon.icon }}
          </v-icon>
        </v-btn>
      </v-card-text>
      <v-card-text class="mr-10 ml-10">
        <p>{{ new Date().getFullYear() }} — <a href='http://jaclynchan.me/' target="_blank" style="color:#88b1b1;text-decoration: none;"> Jaclyn Chan</a></p>
      </v-card-text>
    </v-card>
  </v-footer>
</template>