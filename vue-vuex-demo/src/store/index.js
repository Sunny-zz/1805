import Vuex from 'vuex'
import Vue from 'vue'
import count from '../modules/count'
import number from '../modules/number'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    count,
    number
  }
})

export default store
