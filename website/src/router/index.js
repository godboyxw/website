import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import sports from '@/components/sports'
import social from '@/components/social'
import display from '@/components/display'
import Airport from '@/components/Airport'
import Park from '@/components/Park'
import Mall from '@/components/Mall'
import Ads from '@/components/Ads'
import Tour from '@/components/Tour'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/sports',
    name: 'sports',
    component: sports
  },
  {
    path: '/social',
    name: 'social',
    component: social
  },
  {
    path: '/display',
    name: 'display',
    component: display
  },
  {
    path: '/airport',
    name: 'Airport',
    component: Airport
  },
  {
    path: '/park',
    name: 'Park',
    component: Park
  },
  {
    path: '/mall',
    name: 'Mall',
    component: Mall
  },
  {
    path: '/ads',
    name: 'Ads',
    component: Ads
  },
  {
    path: '/tour',
    name: 'Tour',
    component: Tour
  }
  ]
})
