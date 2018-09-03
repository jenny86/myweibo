import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/index'
import Article from '../components/article'
import My from '../components/my/index'
import SetName from '../components/my/setname'
import Login from '../components/login/index'
import Menu from '../components/menu'
import Register from '../components/login/register'

Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component:Menu,
      children:[
        {
            path:'/home',
            component:Home
        },
        {
            path:'/article',
            component:Article
        },
        {
            path:'/my',
            component:My
        },
        {
            path: '/', 
            redirect: '/home' 
        }
      ]
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    }
  ]
})
