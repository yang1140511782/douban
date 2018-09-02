import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import MintUI from 'mint-ui';
import ElementUi from 'element-ui';
import axios from 'axios';
import filter from './utils/filter';
import common from './common/common'  //引用common.js
import api from './api' // 导入api接口
import 'mint-ui/lib/style.css'
Vue.prototype.$api = api; // 将api挂载到vue的原型上

Vue.config.productionTip = false;

Vue.use(MintUI)
Vue.use(ElementUi)
Vue.use(common)
Vue.prototype.$http = axios;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
