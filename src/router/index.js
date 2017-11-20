import Vue from 'vue'
import Router from 'vue-router'
import Foundation from '@/components/Foundation'
import About from '@/components/About'
import CV from '@/components/CV'
import Process from '@/components/Process'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Foundation',
      component: Foundation
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/process',
      name: 'Process',
      component: Process
    },
    {
      path: '/cv',
      name: 'CV',
      component: CV
    }
  ]
})
