import { createApp } from 'vue'
import App from './App.vue'
import VueAnimateOnScroll from 'vue-animate-onscroll'
import 'animate.css';
import VueGlide from 'vue-glide-js'

createApp(App).use(VueAnimateOnScroll).use(VueGlide).mount('#app')
