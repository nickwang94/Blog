import Vue from "vue";
import VueI18n from "vue-i18n";
Vue.use(VueI18n)

import messages from './lang'
export default new VueI18n({
    locale: 'zh',
    messages
})
