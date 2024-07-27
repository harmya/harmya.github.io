import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import FriendsPage from './components/FriendsPage.vue';

const routes = [
  {
    path: '/friends',
    name: 'FriendsPage',
    component: FriendsPage,
  },

  {
    path: '',
    name: 'HomePage',
    component: HomePage,
  },
];

const router = new createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
