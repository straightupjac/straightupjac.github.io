import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '@/components/HomePage.vue';
import About from '@/components/About.vue';
import Work from '@/components/Work.vue';
import Creative from '@/components/Creative.vue';
import Community from '@/components/Community.vue';
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
    path: '/community',
    component: Community,
  },
  {
    path: '/*',
    component: NotFound,
  },
];

const router = new Router({
  mode: "history",
  routes,
  base: process.env.BASE_URL,
});

export default router;