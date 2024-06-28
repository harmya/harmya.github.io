import { createApp } from 'vue'
import App from './App.vue'
import VueAnimateOnScroll from 'vue-animate-onscroll'
import 'animate.css';
import router from './router'


createApp(App).use(VueAnimateOnScroll).use(router).mount('#app')