import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/Register'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login'),
  },
]

const router = new VueRouter({
  routes,
})

export default router
