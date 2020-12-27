import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import jiekou from '../components/demo/jiekou.vue'

import tab1 from '../components/demo/tab1.vue'
import tab2 from '../components/demo/tab2.vue'
import tab3 from '../components/demo/tab3.vue'
import element from '../components/demo/element.vue'
import tianqi from '../components/demo/tianqi.vue'
import duanzi from '../components/demo/duanzi.vue'
import ceshi from '../components/demo/ceshi.vue'
import music from '../components/demo/music.vue'
import wangyiyun from '../components/lianxi/wangyiyun.vue'
import daohang from '../components/daohang/daohang.vue'
import daohangz from '../components/daohang/daohangz.vue'
import avue from '../components/daohang/avue.vue'

// avue
import crud from '../components/avuejs/crud.vue'
import table from '../components/avuejs/table.vue'
import map from '../components/avuejs/map.vue'
import dialog from '../components/avuejs/dialog.vue'
import tablezd from '../components/avuejs/tablezd.vue'
import page from '../components/avuejs/page.vue'
import demo from '../components/avuejs/demo.vue'


// 测试
import a from '../components/a/a.vue'
import b from '../components/b/a.vue'

Vue.use(VueRouter)

  const routes = [    
    {
      path:'/demo',
      component:demo
    },
    {
      path:'/page',
      component:page
    },
    {
      path:'/tablezd',
      component:tablezd
    },
    {
    path:'/dialog',
    component:dialog
  },

    {
      path:'/map',
      component:map
    },
    {
      path:'/table',
      component:table
    },
    {
      path:'/crud',
      component:crud
    },
    {
      path:'/avue',
      component:avue
    },
    {
      path:'/daohangz',
      component:daohangz
    },
    {
      path:'/daohang',
      component:daohang
    },
    {
      path:'/wangyiyun',
      component:wangyiyun
    },
    {
      path:'/music',
      component:music
    },
    {
      path:'/ceshi',
      component:ceshi
    },
    {
      path:'/duanzi',
      component:duanzi
    },
    {
      path:'/tianqi',
      component:tianqi
    },
    {
      path:'/element',
      component:element
    },
    {
      path:'/tab3',
      component:tab3
    },
    {
      path:'/tab2',
      component:tab2
    },
    {
      path:'/tab1',
      component:tab1
    },
    {
      path:'/jiekou',
      component:jiekou
    },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // 重定项
    redirect:'/about/b',
    // 嵌套路由
    children:[
      {
        path:'a',
        component:a
      },
      {
        path:'b',
        component:b
      },
    ],
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },


]

const router = new VueRouter({
  mode:'history', //设置地址栏 #/ 是否存在,默认是hash,history代表没有 #/
  routes

})

export default router
