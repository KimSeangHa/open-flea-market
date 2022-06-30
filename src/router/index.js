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
    path: '/registerForm',
    name: 'registerForm',
    component: function () {
      return import('../views/account/registerForm.vue')
    }
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
