import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import Search from '@/components/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Header',
      component: Header
    },
    {
      path: '/result',
      name: 'Search',
      component: Search
    }
  ]
})
