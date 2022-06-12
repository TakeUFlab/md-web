import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: () => import("../pages/home/index.vue"),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
