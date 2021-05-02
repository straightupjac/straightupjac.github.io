import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#484848',
        secondary: '#f2f7f8',
        accent: '#88b1b1',
        error: '#FF5252',
        info: '#f9f9f9',
        success: '#4CAF50',
        warning: '#FFC107',
        invert: 'black',
      },
    },
  },
});
