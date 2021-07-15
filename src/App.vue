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
};
</script>

<style lang="scss">
@import "variables.scss";
@import "styles.scss";

</style>