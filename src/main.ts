import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { setupRouter } from './router';

async function setupApp() {
  const app = createApp(App);

  // 初始化路由
  await setupRouter(app);
  app.mount('#app');
}

setupApp();
