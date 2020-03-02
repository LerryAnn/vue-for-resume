import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Project from '@/pages/Project'
import Detail from '@/pages/Detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '/',
      component: Home
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
    },
    {
      path: '/Project',
      name: 'Project',
      component: Project
    },
    {
      path: '/Detail/:id',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/*',
      redirect: '/'
    },
  ]
})
