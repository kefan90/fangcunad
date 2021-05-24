import Vue from 'vue'
import Router from 'vue-router'
import Home from '../view/Home'
import Adv from '../view/Adv'
import Profile from '../view/Profile'
import ContactUs from '../view/ContactUs'
import Cooperative from '../view/Cooperative'
import Case from '../view/Case'
import Casegeli from '../view/Casegeli'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/adv',
      name: 'Adv',
      component: () => import('../view/Adv')
    }, {
      path: '/profile',
      name: 'Profile',
      component: () => import('../view/Profile')
    }, {
      path: '/contactus',
      name: ContactUs,
      component: () => import('../view/ContactUs')
    }, {
      path: '/cooperative',
      name: 'Cooperative',
      component: () => import('../view/Cooperative')
    }, {
      path: '/case',
      name: 'Case',
      component: () => import('../view/Case')
    }, {
      path: '/casegeli',
      name: 'Casegeli',
      component: () => import('../view/Casegeli')
    }
  ]
})
