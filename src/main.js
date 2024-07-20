import Vue from "vue";
import Element from "element-ui";
import enLang from "element-ui/lib/locale/lang/en";
import 'element-ui/lib/theme-chalk/index.css';
import App from "./App.vue";
import './assets/tailwind.css'

Vue.config.productionTip = false;
Vue.use(Element, {
  size: "medium",
  locale: enLang,
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
