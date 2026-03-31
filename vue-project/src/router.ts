import { createRouter, createWebHashHistory } from 'vue-router';
import Layout from './Layout.vue';
import Home from './Home.vue';
import Playground from './Playground.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Layout,       // parent route — renders banner + nav + <router-view />
      children: [
        { path: '',            component: Home },        // /
        { path: 'playground',  component: Playground },  // /playground
      ],
    },
  ],
});

export default router;
