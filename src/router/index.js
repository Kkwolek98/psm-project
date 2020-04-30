import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import firebase from '../firebase/init'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: true,
    meta: {
      requiresAuth: true
    }
    
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: {
      requiresAuth: true
    },
    component: () => import('../views/Profile.vue'),
    props: true,
   
  },
  {
    path: '/jurnal',
    name: 'Jurnal',
    component: () => import('../views/Jurnal.vue'),
    props: true,
    meta: { 
      display: "Jurnal",
      requiresAuth: true
     }

  },
  {
    path: '/day',
    name: 'Day',
    meta: {
      requiresAuth: true
    },
    component: () => import('../views/DayView.vue'),
    // props: true,
    
  },

  {
    path: '/about',
    name: 'About',
    meta: { 
      display: "About",
      requiresAuth: true
  },
    component: () => import('../views/About.vue'),
    
  },
  {
    path: '/findItem',
    name: 'Find Item',
    meta: { display: "Add",
    requiresAuth: true
 },
    component: () => import('../views/FindItem.vue'),
   
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
  },
  {
    path: '/logout',
    name: 'Logout',
    meta: { display: "Logout",
    requiresAuth: true
    },
    component: () => import('../views/Logout.vue')
  }
 
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth )) {   
    if(!firebase.auth.currentUser){    
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    }else{
      next()
    }
  }

  next()
})

export default router
