import Vue from "vue";
import App from "./App.vue";
import store from "../store";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import BootstrapVue from "bootstrap-vue";

/* eslint-disable no-new */

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  render: (h) => h(App),
});
