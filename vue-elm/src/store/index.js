import Vue from 'vue'
import Vuex from 'vuex'
import goods from '../modules/goods'
import carts from '../modules/cart'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    goods,
    carts
  }
})

export default store
