import Vue from 'vue'
import Vuex from 'vuex'
import todos from '../modules/todos'
import filter from '../modules/filter'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    todos,
    filter
  }
})

export default store
