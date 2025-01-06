import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import DAO from './pages/DAO.vue';
import Whitepaper from './pages/Whitepaper.vue';
import Dashboard from './pages/Dashboard.vue'; // Import Dashboard
import Games from './pages/Games.vue'; // Import Games

const routes = [
  { path: '/', component: Home },
  { path: '/dao', component: DAO },
  { path: '/whitepaper', component: Whitepaper },
  { path: '/dashboard', component: Dashboard }, // Add Dashboard route
  { path: '/games', component: Games }, // Add Games route
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
