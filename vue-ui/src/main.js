import Vue from 'vue'
import App from './App.vue'
import './assets/gloable.css'
import './plugins/element.js'
import { Button, Input, Pagination, Progress } from 'element-ui'
Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Input)
Vue.use(Pagination)
Vue.use(Progress)
new Vue({
  render: h => h(App)
}).$mount('#app')
