import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home.vue";
import Library from "./views/Library.vue";
import NotFound from "./views/NotFound.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/vue",
      name: "home",
      component: Home
    },
    {
      path: "/",
      name: "library",
      component: Library
    },
    {
      path: "*",
      name: "404",
      component: NotFound
    }
  ]
});
