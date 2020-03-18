import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Major from "../views/Major.vue";
import Submit from "../views/Submit.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/major",
    name: "Major",
    component: Major
  },
  {
    path: "/submit",
    name: "Submit",
    component: Submit
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
