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
  //------- 메인화면
  {
    path: '/main',
    name: 'Main',
    component: function () {
      return import('../views/default/main.vue')
    }
  },
  //------- 로그인
  {
    path: '/login',
    name: 'Login',
    component: function () {
      return import('../views/account/login.vue')
    }
  },
  //------- 회원가입
  {
    path: '/register',
    name: 'register',
    component: function () {
      return import('../views/account/register.vue')
    }
  },

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

import store from '@/store/index.js';

// beforeEach
router.beforeEach(function (to, from, next) {
  // to : 이동할 url
  // from : 현재 url
  // next : to에서 지정한 url로 이동하기 위해 꼭 호출해야 하는 함수
  
  if (to.path == "/main") {
    store.commit("common/setMainSearchBar", true)
  } else {
    store.commit("common/setMainSearchBar", false)
  }

  next();
})

export default router
