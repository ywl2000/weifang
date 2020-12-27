import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    age:3
  },
  mutations: {
    do(state){
      state.age++
    }
  },
  actions: {
  },
  modules: {
  }
})
