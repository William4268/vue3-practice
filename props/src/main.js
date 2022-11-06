import { createApp } from "vue";
import App from "./App.vue";
import HelloVic from "./components/HelloVic.vue";

import "./assets/main.css";

const app = createApp(App);
app.component("HelloVic", HelloVic);

app.mount("#app");
