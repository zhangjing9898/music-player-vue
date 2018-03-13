import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './action';
import * as getters from './getter';
import state from './stata';
import mutations from './mutations';
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

//check
const debug=process.env.NODE_ENV !=='production'

export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  strict:debug,
  plugins:debug?[createLogger()]:[]
})
