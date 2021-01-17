import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
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
  {
    path: '/',
    name: 'globalFeed',
    component: () => import('@/views/GlobalFeed'),
  },
  {
    path: '/feed',
    name: 'yourFeed',
    component: () => import('@/views/GlobalFeed'),
  },
  {
    path: '/tags/:slug',
    name: 'tag',
    component: () => import('@/views/GlobalFeed'),
  },
  {
    path: '/articles/new',
    name: 'createArticle',
    component: () => import('@/views/GlobalFeed'),
  },
  {
    path: '/articles/:slug',
    name: 'article',
    component: () => import('@/views/GlobalFeed'),
  },
  {
    path: '/articles/:slug/edit',
    name: 'editArticle',
    component: () => import('@/views/GlobalFeed'),
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import('@/views/GlobalFeed'),
  },
  {
    path: '/profiles/:slug',
    name: 'userProfile',
    component: () => import('@/views/GlobalFeed'),
  },
  {
    path: '/profiles/:slug/favorites',
    name: 'userProfileFavorites',
    component: () => import('@/views/GlobalFeed'),
  },
]

const router = new VueRouter({
  routes,
})

export default router
