import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import Result from '@/components/Result'

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
      name: 'Result',
      component: Result
    }
  ]
})
