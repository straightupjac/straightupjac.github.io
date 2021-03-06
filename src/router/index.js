import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '@/components/HomePage.vue';
import About from '@/components/About.vue';
import Work from '@/components/Work.vue';
import Creative from '@/components/Creative.vue';
import Gallery from '@/components/creative/Gallery.vue';
import Performances from '@/components/creative/Performances.vue';
import Choreography from '@/components/creative/Choreography.vue';
import NotFound from '@/components/NotFound.vue';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/work',
    component: Work,
  },
  {
    path: '/creative',
    component: Creative,
  },
  {
    path: '/creative/gallery',
    component: Gallery,
  },
  {
    path: '/creative/performances',
    component: Performances,
  },
  {
    path: '/creative/choreography',
    component: Choreography,
  },
  {
    path: '*',
    component: NotFound,
  },
];

const router = new Router({
  routes,
  base: process.env.BASE_URL,
});

export default router;
