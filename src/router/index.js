import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import foo from '@/pages/index/foo'
import web from '@/pages/index/web'
import data from '@/pages/index/data'
import modules from '@/pages/index/module'
import socket from '@/pages/index/websocket'
import list from '@/pages/list/index'
import login from '@/pages/login/index'
import Register from '@/pages/login/register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children: [
        {
          path: '/foo/:id',
          name: 'foo',
          component: foo,
        },
        {
          path: '/web',
          name: 'web',
          component: web,
        },
        {
          path: '/data',
          name: 'data',
          component: data,
        },
        {
          path: '/socket',
          name: 'socket',
          component: socket,
        },
      ]
    },
    {
      path: '/module',
      name: 'module',
      component: modules,
      children:[
        {
          path: '/list',
          name: 'list',
          component: list
        }
      ]
    },
    {
      path: '/login/index',
      name: 'Login',
      component: login
    },
    {
      path: '/login/Register',
      name: 'Register',
      component: Register
    },
  ]
})
