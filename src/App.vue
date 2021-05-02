<template>
<div id="app">
  <v-app
    background=secondary
    :dark="setTheme()"
  >
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

    <v-main>
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </v-main>

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
  </v-app>
</div>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    userBar: false,
    icons: [
      {icon: "mdi-linkedin", link: "https://www.linkedin.com/in/jaclyndchan/",},
      {icon: "mdi-instagram", link: "https://www.instagram.com/straightupraspberry", },
      {icon: "mdi-twitter", link: "https://twitter.com/straightupjac"},
      {icon: "mdi-github", link: "https://github.com/straightupjac"},
      {icon: "mdi-email", link: "mailto:jdc.jaclyn@gmail.com"},
      ],
    goDark: false,
  }),
  methods: {
    setTheme() {
      if (this.goDark === true) {
        return (this.$vuetify.theme.dark = true);
      } else {
        return (this.$vuetify.theme.dark = false);
      }
    },
  },
};
</script>

<style lang="scss">
@import "variables.scss";
@import "styles.scss";

</style>