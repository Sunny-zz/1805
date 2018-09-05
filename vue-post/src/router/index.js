import VueRouter from 'vue-router'
import Home from '../components/Home'
import Post from '../components/Post'
import Vue from 'vue'
Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/post', component: Post }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
