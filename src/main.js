import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import MintUI from 'mint-ui';
import axios from 'axios';
import filter from './filter/filter'
import 'mint-ui/lib/style.css'
import common from './common/common'  //引用common.js
Vue.config.productionTip = false;
Vue.use(MintUI)
Vue.use(common)
Vue.prototype.$http = axios;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
