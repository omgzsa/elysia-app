import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

// import AppLink from "@/components/AppLink.vue";

// css
import "./main.css";

const app = createApp(App);

// global component
// app.component("AppLink", AppLink);

app.use(createPinia());
app.use(router);

app.mount("#app");
