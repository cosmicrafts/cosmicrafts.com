import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import DAO from './pages/DAO.vue';
import Whitepaper from './pages/Whitepaper.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/dao', component: DAO },
  { path: '/whitepaper', component: Whitepaper },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
