import('./bootstrap');

import { createApp } from './src/vue3/vue.global.js';
import Main from './components/Main.vue';


createApp(Main).mount('#app');
