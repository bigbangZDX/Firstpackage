import Vue from 'vue'
import Router from 'vue-router'
// import Swiper from 'swiper'
import shouye from '@/components/shouye/shouye'
import home from '@/components/home/home'
import fenlei from '@/components/fenlei/fenlei'
import shopcar from '@/components/shopcar/shopcar'
import mine from '@/components/mine/mine'
import deng from '@/components/deng/deng'
import show from '@/components/show/show'
import gobuy from '@/components/gobuy/gobuy'
import youhui from '@/components/youhui/youhui'
import help from '@/components/help/help'
import updatePass from '@/components/updatePass/updatePass'
import deep from '@/components/deep/deep'
import address from '@/components/address/address'
import aixin from '@/components/aixin/aixin'
import money from '@/components/money/money'
import dingdan from '@/components/dingdan/dingdan'





Vue.use(Router)
// Swiper.use(Swiper)

export default new Router({
  linkActiveClass:"myActive",
  routes: [
    {
      path: '/',
      redirect:"/home"
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      meta: {
        requireAuth: false // 配置此条，进入页面前判断是否需要登陆
      },
      // children:[
      //   {path:"show",component:show
      
      // }
      // ]
    },
    {
      path: '/show',
      name: 'show',
      component: show,
      meta: {
        requireAuth: false // 配置此条，进入页面前判断是否需要登陆
      },
    },
    {
      path: '/fenlei',
      name: 'fenlei',
      component: fenlei  ,     //组件
      meta: {
        requireAuth: false // 配置此条，进入页面前判断是否需要登陆
      },
    },
    {
      path: '/shopcar',
      name: 'shopcar',
      component: shopcar,
      meta: {
        requireAuth: true // 配置此条，进入页面前判断是否需要登陆
      },
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine,
      meta: {
        requireAuth: true // 配置此条，进入页面前判断是否需要登陆
      },
      // children:[
      //   {path:"deng",component:deng
      
      // }
      // ]
    },
    {
      path: '/deng',
      name: 'deng',
      component: deng,
    },
    {
      path: '/gobuy',
      name: 'gobuy',
      component: gobuy,
      meta: {
        requireAuth: true // 配置此条，进入页面前判断是否需要登陆
      },
    },
    {
      path: '/youhui',
      name: 'youhui',
      component: youhui,
      meta: {
        requireAuth: true // 配置此条，进入页面前判断是否需要登陆
      },
    },
    {
      path: '/help',
      name: 'help',
      component: help,
      meta: {
        requireAuth: true // 配置此条，进入页面前判断是否需要登陆
      },
    },
    {
      path: '/updatePass',
      name: 'updatePass',
      component: updatePass,
      meta: {
        requireAuth: true // 配置此条，进入页面前判断是否需要登陆
      },
    },
    {
      path: '/deep',
      name: 'deep',
      component: deep,
      meta: {
        requireAuth: true // 配置此条，进入页面前判断是否需要登陆
      },
    },
    {
      path: '/address',
      name: 'address',
      component: address,
      meta: {
        requireAuth: true // 配置此条，进入页面前判断是否需要登陆
      },
    },
    {
      path: '/aixin',
      name: 'aixin',
      component: aixin,
      meta: {
        requireAuth: true // 配置此条，进入页面前判断是否需要登陆
      },
    },
    {
      path: '/money',
      name: 'money',
      component: money,
      meta: {
        requireAuth: true // 配置此条，进入页面前判断是否需要登陆
      },
      
    },
    {
      path: '/dingdan',
      name: 'dingdan',
      component: dingdan,
      meta: {
        requireAuth: true // 配置此条，进入页面前判断是否需要登陆
      },}
  ]
});
      
// export default  new Swiper ('.swiper-container', {
//     direction: 'vertical', // 垂直切换选项
//     loop: true, // 循环模式选项
    
//     // 如果需要分页器
//     pagination: {
//       el: '.swiper-pagination',
//     },
    
//     // 如果需要前进后退按钮
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     }
    
//     // 如果需要滚动条
//     // scrollbar: {
//     //   el: '.swiper-scrollbar',
//     // },
//   })        


