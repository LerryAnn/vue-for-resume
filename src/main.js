// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'

Vue.config.productionTip = false

import axios from 'axios'
//全局声明使用
Vue.prototype.$axios = axios
//关键代码
axios.defaults.baseURL = '/api'
//按需修改请求头信息
axios.defaults.headers.post['Content-Type'] = 'application/json';
// axios.defaults.headers.post['Content-Type'] = "application/x-www-form-urlencoded";


/* eslint-disable no-new */


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
