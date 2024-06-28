import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import FriendsPage from './components/FriendsPage.vue';

const routes = [
    {
        path: '/friends',
        name: 'FriendsPage',
        component: FriendsPage,
    },

  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },

];

const router = new createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
