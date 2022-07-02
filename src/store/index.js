import Vue from 'vue'
import Vuex from 'vuex'
import common from './modules/common'
import login from './modules/login'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    common,
    login
  }
})
