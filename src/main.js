import 'babel-polyfill';

import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'

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
  render: h => h(App)
})
