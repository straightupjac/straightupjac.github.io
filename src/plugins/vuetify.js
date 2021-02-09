import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#f2f7f8',
        secondary: '#333333',
        accent: '#88b1b1',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        invert: 'black',
      },
      dark: {
        primary: '000000',
        secondary: '#333333',
        accent: '#88b1b1',
        error: '#f88ff9',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        invert: 'white',
      },
    },
  },
});
