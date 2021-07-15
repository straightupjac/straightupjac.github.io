<template>
<div id="app">
  <v-app
    background=secondary
    :dark="setTheme()"
  >
    <NavBar />
    <v-main>
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </v-main>
    <Footer />
  </v-app>
</div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';

export default {
  name: "App",
  components: {
    Footer,
    NavBar,
  },
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