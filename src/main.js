import Vue from 'vue'
import App from "@/App";
// Element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false

import i18n from './i18n'
new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')
