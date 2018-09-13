import Vue from 'vue'
import App from './App.vue'
import './assets/gloable.css'
import router from './router/router'
import store from './store'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
