import './assets/main.css'
import { createApp } from 'vue'
import App from './app.vue'
import router from './router'

import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

const app = createApp(App);
app.use(router);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(pinia);
app.mount('#app');
