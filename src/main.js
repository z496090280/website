/*
 * @Author: lee
 * @Date: 2022-03-02 19:54:19
 * @LastEditTime: 2022-03-03 16:34:35
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 格式化css
import '@/assets/css/reset.css'
import '@/assets/css/resetEl.css'
// 适配方案
import 'lib-flexible/flexible'
import '@/utils/viewport'
Vue.use(ElementUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
