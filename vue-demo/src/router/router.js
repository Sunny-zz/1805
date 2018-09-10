import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import Pins from '../components/Pins'
import Events from '../components/Events'
import ShowList from '../components/ShowList'
import Errors from '../components/Errors'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      { path: '/', name: 'home', component: ShowList },
      { path: 'welcome/:tab', component: ShowList }
    ]
  },
  { path: '/a', redirect: '/pins' },
  { path: '/pins', component: Pins, name: 'pins' },
  { path: '/events', component: Events, name: 'events' },
  { path: '*', redirect: '/404' },
  { path: '/404', component: Errors }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
