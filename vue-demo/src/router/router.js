import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import Pins from '../components/Pins'
import Events from '../components/Events'
import ShowList from '../components/ShowList'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      { path: '/', component: ShowList },
      { path: 'welcome/:tab', component: ShowList }
    ]
  },
  { path: '/pins', component: Pins },
  { path: '/events', component: Events }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
