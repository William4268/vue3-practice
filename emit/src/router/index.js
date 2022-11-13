import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/t2",
      name: "t2",
      component: () => import("../views/T2View.vue"),
    },
    {
      path: "/t3",
      name: "t3",
      component: () => import("../views/T3View.vue"),
    },
  ],
});

export default router;
