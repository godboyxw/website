import Vue from 'vue'
import Router from 'vue-router'
import Airport from '@/components/Airport'
import Park from '@/components/Park'
import Mall from '@/components/Mall'
import Ads from '@/components/Ads'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
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
  }
  ]
})
