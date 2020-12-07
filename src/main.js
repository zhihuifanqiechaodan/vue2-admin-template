import Vue from 'vue'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import Element from 'element-ui'
import './styles/element-variables.scss'

import '@/styles/index.scss' // global css


import App from './App.vue'
import router from './router'
import store from './store'

import getService from './services/index' // 请求封装
import './icons' // icon
import './permission' // permission control

import * as filters from './filters' // global filters


Vue.use(Element);

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
