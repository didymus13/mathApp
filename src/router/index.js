import Vue from 'vue'
import Router from 'vue-router'

import Config from '@/components/Config'
import Addition from '@/components/Addition'
import Subtraction from '@/components/Subtraction'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/config',
      name: 'Config',
      component: Config
    },
    {
      path: '/addition',
      name: 'Addition',
      component: Addition
    },
    {
      path: '/subtraction',
      name: 'Subtraction',
      component: Subtraction
    }
  ]
})
