import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import VueYouTubeEmbed from 'vue-youtube-embed'
import '@fontsource/poppins/100.css';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/900.css';

Vue.config.productionTip = false

Vue.use(VueYouTubeEmbed)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
