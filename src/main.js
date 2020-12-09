import Vue from 'vue'

import { getCookieItem } from './utils/storage-service' // get token from cookie

import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import Element from 'element-ui'
// import './styles/element-variables.scss'

import '@/styles/index.scss' // global css


import App from './App.vue'
import router from './router'
import store from './store'

import getService from './services/index' // global request

import './icons' // icon
import './permission' // permission control
import './utils/error-log' // error log

import * as filters from './filters' // global filters


Vue.use(Element, {
  size: getCookieItem('size') || 'medium' // set element-ui default size
})

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.prototype.$getService = getService

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
