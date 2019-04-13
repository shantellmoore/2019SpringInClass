import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import MyFriends from "./views/Myfriends.vue"
import Register from "./views/Register.vue";
import Login from "./views/Login.vue";
import { isMainThread } from 'worker_threads';
import {Globals} from "@/models/api;"

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Myfriends',
      name: 'my-friends',
      component: MyFriends
    },
    {
      path: '/Login',
      name: 'login',
      component: Login
    },
    {
      path: '/Register',
      name: 'register',
      component: Register
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
router.beforeEach((to, from, next) => {
  const publicRoutes = ['home', 'login', 'register'];
  if(!publicRoutes.includes(to.name) && !Globals.user){
    next('login');
  }
  next();
})

export default router;
