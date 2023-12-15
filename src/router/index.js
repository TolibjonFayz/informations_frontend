import { createRouter, createWebHistory } from "vue-router";
import MainPageVue from "../pages/MainPage.vue";
import KategoryPageVue from "../pages/KategoryPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: MainPageVue,
    },
    {
      path: "/category",
      name: "category",
      component: KategoryPageVue,
    },
  ],
});

export default router;
