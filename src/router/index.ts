import type { App } from 'vue';
import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';
import home from '@/pages/home/index.vue';

export const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: home, name: 'home' },
];

export const setupRouter = async (app: App) => {
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  app.use(router);
  await router.isReady();
};
