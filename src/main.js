import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import mck from "../mock/mock-data.js";

Vue.config.productionTip = false;

let data = {
  confessions: mck
};

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount("#app");
