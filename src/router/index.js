import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'globalFeed',
    component: () => import('@/views/GlobalFeed'),
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
