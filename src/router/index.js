import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/login/login'
import Home from '../pages/home/home'
import User from '../pages/user/user'
import First from '../pages/first/first'
import Detail from '../pages/detail/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    }, {
    	path: '/home',
      name: 'Home',
      component: Home,
      children: [{
    	  path: '/first',
        name: 'first',
        component: First
      }, {
    	  path: '/user',
        name: 'User',
        component: User
      }, {
    	  path: '/detail',
        name: 'Detail',
        component: Detail
      }]
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})

