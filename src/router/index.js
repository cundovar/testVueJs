
import France8travail from '@/view/France8travail.vue';
import Home from '@/view/Home.vue';
import { createRouter, createWebHistory } from 'vue-router';


const routes = [
  { path: '/', component: Home },
  { path: '/france_travail', component: France8travail  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;