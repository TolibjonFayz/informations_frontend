import { createRouter, createWebHistory } from "vue-router";
import MainPageVue from "../pages/MainPage.vue";
import KategoryPageVue from "../pages/KategoryPage.vue";
import SearchPageVue from "../pages/SearchPage.vue";
import AboutPageVue from "../pages/AboutPage.vue";
import SinglePageVue from "../pages/SinglePage.vue";

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
    {
      path: "/search",
      name: "search",
      component: SearchPageVue,
    },
    {
      path: "/about",
      name: "about",
      component: AboutPageVue,
    },
    {
      path: "/blog/:id",
      name: "singlepage",
      component: SinglePageVue,
    },
  ],
});

export default router;
