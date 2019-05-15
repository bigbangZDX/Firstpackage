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





Vue.use(Router)
// Swiper.use(Swiper)

export default new Router({
  linkActiveClass:"myActive",
  routes: [
    {
      path: '/',
      redirect:"/deng"
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      // children:[
      //   {path:"show",component:show
      
      // }
      // ]
    },
    {
      path: '/show',
      name: 'show',
      component: show,
    },
    {
      path: '/fenlei',
      name: 'fenlei',
      component: fenlei       //组件
    },
    {
      path: '/shopcar',
      name: 'shopcar',
      component: shopcar
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine,
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
    },
    {
      path: '/youhui',
      name: 'youhui',
      component: youhui,
    },
    {
      path: '/help',
      name: 'help',
      component: help,
    },
    {
      path: '/updatePass',
      name: 'updatePass',
      component: updatePass,
    },
    {
      path: '/deep',
      name: 'deep',
      component: deep,
    },
    {
      path: '/address',
      name: 'address',
      component: address,
    },
    {
      path: '/aixin',
      name: 'aixin',
      component: aixin,
    },
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


