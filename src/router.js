import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import DAO from './pages/DAO.vue';

const routes = [
  { path: '/', component: Home }, // Home page
  { path: '/dao', component: DAO }, // DAO page
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
