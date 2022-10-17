import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import localCache from '@/utils/cache'
import { firstMenu } from '@/utils/map-menus'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/main',
    name: 'main',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/main/main.vue')
  },
  {
    // 路径不对时报错
    path:'/:pathMatch(.*)*',
    name:'no-found',
    component:() => import('@/views/no-found/no-found.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 导航守卫
router.beforeEach((to) => {
  if(to.path !== '/login'){
    const token = localCache.getCache('token')
    if(!token){
      return '/login' 
    }
  }
//如果进入的页面是main，重定向到第一次获取到的菜单
  if(to.path === '/main'){
    return firstMenu.url
  }
})


export default router
