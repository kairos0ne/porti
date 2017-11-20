import Vue from 'vue'
import Router from 'vue-router'
import Foundation from '@/components/Foundation'
import About from '@/components/About'

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
    }
  ]
})
