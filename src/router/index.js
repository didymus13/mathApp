import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Config from '@/components/Config'
import Addition from '@/components/Addition'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/config',
      name: 'Config',
      component: Config
    },
    {
      path: '/addition',
      name: 'Addition',
      component: Addition
    }
  ]
})
