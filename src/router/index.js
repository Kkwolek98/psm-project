import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: true,
    // to trzeba odkomentowac na samym koncu
    // beforeEnter: (to, from, next) =>{
    //   if(to.this.$email){
    //     next()
    //   }else{
    //     next({name: 'LoginPage'})
    //   }
    // }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue'),
    props: true,
    // to trzeba odkomentowac na samym koncu
    // beforeEnter: (to, from, next) =>{
    //   if(to.this.$email){
    //     next()
    //   }else{
    //     next({name: 'LoginPage'})
    //   }
    // }
  },
  {
    path: '/day',
    name: 'Day',
    component: () => import('../views/DayView.vue'),
    // props: true,
    // to trzeba odkomentowac na samym koncu
    // beforeEnter: (to, from, next) =>{
    //   if(to.this.$email){
    //     next()
    //   }else{
    //     next({name: 'LoginPage'})
    //   }
    // }
  },

  {
    path: '/about',
    name: 'About',
    meta: { display: "About" },
    component: () => import('../views/About.vue'),
    // to trzeba odkomentowac na samym koncu
    // beforeEnter: (to, from, next) =>{
    //   if(to.this.$email){
    //     next()
    //   }else{
    //     next({name: 'LoginPage'})
    //   }
    // }
  },
  {
    path: '/findItem',
    name: 'Find Item',
    meta: { display: "Add" },
    component: () => import('../views/FindItem.vue'),
    // to trzeba odkomentowac na samym koncu
    // beforeEnter: (to, from, next) =>{
    //   if(to.this.$email){
    //     next()
    //   }else{
    //     next({name: 'LoginPage'})
    //   }
    // }
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
