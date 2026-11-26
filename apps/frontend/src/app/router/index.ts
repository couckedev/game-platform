import {
  createRouter,
  type RouteRecordRaw,
  type RouterHistory,
} from 'vue-router';
import { HomePage, SignInPage } from '@/app/pages';

export const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: async () => HomePage },
  { path: '/sign-in', name: 'sign-in', component: async () => SignInPage },
];

export function createAppRouter(history: RouterHistory) {
  const router = createRouter({ history, routes });
  return router;
}
