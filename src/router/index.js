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
    path: '/about',
    name: 'About',
    meta: { display: "About" },
    component: () => import('../views/About.vue')
  },
  {
    path: '/findItem',
    name: 'Find Item',
    meta: { display: "Add" },
    component: () => import('../views/FindItem.vue')
  },
  {
    path: '/login',
    name: 'LoginPage',
    meta: { display: "Login" },
    component: () => import('../views/LoginPage.vue')
  },
  {
    path: '/signup',
    name: 'SignUpPage',
    meta: { display: "Register" },
    component: () => import('../views/SignUpPage.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
