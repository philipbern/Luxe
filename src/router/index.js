import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'; // Import Home view
import Login from '../views/Login.vue'; // Import Login view

const routes = [
  { path: '/', component: Home, meta: { requiresAuth: true } },
  { path: '/login', component: Login },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
