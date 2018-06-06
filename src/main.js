import Vue from "vue";
import VueHead from "vue-head";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { createProvider } from "./vue-apollo";

Vue.config.productionTip = false;
Vue.use(VueHead);

new Vue({
  router,
  store,
  provide: createProvider().provide(),
  render: h => h(App)
}).$mount("#app");
