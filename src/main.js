import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import router from "./router";
import App from "./App.vue";
import i18n from "./i18n";
const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(createPinia());
app.use(router);
app.use(ElementPlus);
app.use(i18n);
app.mount("#app");
