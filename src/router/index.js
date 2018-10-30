import Vue from 'vue'
import Router from 'vue-router'
import Home from '../page/home/index'
import Article from '../page/article/index'
import My from '../page/my/index'
import SetName from '../page/my/setname'
import Login from '../page/login/index'
import Menu from '../page/menu'
import Register from '../page/login/register'
import ArticleItem from '../page/article/item'
import Search from '../page/search/index'
import Record from '../page/article/record'
Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component:Menu,
      meta:{keepAlive:true,transIndex:0},
      children:[
        {
            path: '/', 
            redirect: '/home',
            meta:{keepAlive:true,transIndex:1}
        },
        {
            path:'/home',
            component:Home,
            meta:{keepAlive:true,transIndex:1}
        },
        {
            path:'/article',
            component:Article,
            meta:{keepAlive:true,transIndex:2}
        },
        {
            path:'/my',
            component:My,
            meta:{keepAlive:true,transIndex:3}
        },
        {
            path: '/articleItem',
            component:ArticleItem,
            meta:{keepAlive:true,transIndex:4}
        },
        {
          path: '/record',
          component: Record,
          meta:{keepAlive:true,transIndex:12},
        },
        {
          path: '/search',
          component: Search,
          meta:{keepAlive:true,transIndex:20},
        },
      ]
    },
    {
      path: '/login',
      component: Login,
      meta:{keepAlive:true,transIndex:10},
    },
    {
      path: '/register',
      component: Register,
      meta:{keepAlive:true,transIndex:11},
    },

  ]
})
