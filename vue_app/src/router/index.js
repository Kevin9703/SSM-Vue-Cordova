import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      isLogin: true
    },
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      isLogin: false
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    meta: {
      isLogin: false
    },
    component: () => import('../views/Register.vue')
  },
  {
    path: '/shoppingcart',
    name: 'ShoppingCart',
    meta: {
      isLogin: true
    },
    component: () => import('../views/ShoppingCart.vue')
  },
  {
    path: '/allitem',
    name: 'AllItem',
    meta: {
      isLogin: true
    },
    component: () => import('../views/AllItem.vue')
  },
  {
    path: '/userdetail',
    name: 'UserDetail',
    meta: {
      isLogin: true
    },
    component: () => import('../views/UserDetail.vue')
  },
  {
    path: '/test',
    name: 'test',
    meta: {
      isLogin: true
    },
    component: () => import('../views/test.vue')
  },
  {
    path: '/MySell',
    name: '/MySell',
    meta: {
      isLogin: true
    },
    component: () => import('../views/MySell.vue')
  },
  {
    path: '/Sell',
    name: '/Sell',
    meta: {
      isLogin: true
    },
    component: () => import('../views/Sell.vue')
  },
  {
    path: '/ReviseGoods/:goodId',
    name: 'ReviseGoods',
    meta: {
      isLogin: true
    },
    component: () => import('../views/ReviseGoods.vue')
  },
  {
    path: '/MyDetail',
    name: 'MyDetail',
    meta: {
      isLogin: true
    },
    component: () => import('../views/MyDetail.vue')
  },
  {
    path: '/IconRevise',
    name: 'IconRevise',
    meta: {
      isLogin: true
    },
    component: () => import('../views/IconRevise.vue')
  },
  {
    path: '/GoodDetail/:goodId',
    name: 'GoodDetail',
    meta: {
      isLogin: true
    },
    component: () => import('../views/GoodDetail.vue')
  },
  {
    path: '/PostDetail/:postId',
    name: 'PostDetail',
    meta: {
      isLogin: true
    },
    component: () => import('../views/PostDetail.vue')
  },
]

const router = new VueRouter({
  mode:'hash',
  routes
})

export default router
