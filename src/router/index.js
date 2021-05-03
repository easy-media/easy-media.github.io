import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/laboratory',
    name: 'laboratory',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "laboratory" */ '../views/laboratory/index.vue')
  }, {
    path: '/help',
    name: "help",
    component: () => import(/*webpackChunkName:"help" */ '../views/help')
  }, {
    path: '/aboutme',
    name: 'aboutme',
    component: () => import(/*webpackChunkName:'aboutme' */ '../views/aboutme/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
