import './assets/main.css'
import { createApp } from 'vue'
import App from './app.vue'
import router from './router'
import { createPinia } from 'pinia'

const app = createApp(App);
app.use(router);
app.mount('#app');
app.use(createPinia())
