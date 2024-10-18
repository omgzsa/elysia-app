import { createApp } from "vue";
import { createHead } from "@vueuse/head";
import { createPinia } from "pinia";
import { MotionPlugin } from "@vueuse/motion";
import directus from "./plugins/directus";

import App from "./App.vue";
import router from "./router";

import AppLink from "@/components/AppLink.vue";
import AppHeader from "@/components/AppHeader.vue";

// css
import "./main.css";

const app = createApp(App);
const head = createHead();

// global component
app.component("AppLink", AppLink);
app.component("AppHeader", AppHeader);

app.use(directus, {
  url: import.meta.env.VITE_ELYSIA_API_URL,
})
app.use(createPinia());
app.use(head);
app.use(MotionPlugin);
app.use(router);

app.mount("#app");
