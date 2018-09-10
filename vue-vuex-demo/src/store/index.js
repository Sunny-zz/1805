import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

const state = {
  count: 2
}
const mutations = {
  increment(state) {
    state.count++
  }
}
const store = new Vuex.Store({
  state,
  mutations
})

export default store
