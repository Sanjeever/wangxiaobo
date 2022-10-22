import { createApp, defineAsyncComponent } from "vue";
import { createPinia } from "pinia";
import { createHead } from "@vueuse/head";
import App from "./App.vue";
import router from "./router";
import components from "./pages/index";

import "./assets/main.css";

const app = createApp(App);
const head = createHead();

app.use(createPinia());
app.use(router);
app.use(head);
app.use(components);

app.mount("#app");
