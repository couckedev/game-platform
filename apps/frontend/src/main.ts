import { createApp } from 'vue';
import { createWebHistory } from 'vue-router';
import { createAppPlugin } from './app/bootstrap/bootstrap-app-plugin';
import App from './app/components/App.vue';
import { createAppRouter } from './app/router/index.ts';

const app = createApp(App);

app.use(createAppPlugin({ router: createAppRouter(createWebHistory()) }));

app.mount('#app');
