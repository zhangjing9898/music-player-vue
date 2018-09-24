import 'babel-polyfill';

import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'
//这里的store作为 state machine
import store from './store'

import fastclick from 'fastclick';

fastclick.attach(document.body);

Vue.config.productionTip = false

Vue.use(VueLazyload,{
  loading:require('./common/image/default.png')
})

import 'common/stylus/index.styl';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
