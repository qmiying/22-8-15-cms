import { RouteRecordRaw } from "vue-router";
// 获取所有需要显示的菜单对应的路径对象
export function mapMenusToRoutes(userMenus:any[]) :RouteRecordRaw[] {  
const routes: RouteRecordRaw[] = []   

// 1.先加载默认的所有routes
const allRoutes: RouteRecordRaw[] = []    //所有的路由对象
const routeFiles = require.context('../router/main', true, /\.ts/)    //webpack语法-获取所有的此路径下的  .ts文件
routeFiles.keys().forEach((key) => {
  const route = require('../router/main' + key.split('.')[1])   //对获取的文件对象进行处理
  allRoutes.push(route.default)   //获取到所有的路由对象
})

// 2.根据菜单获取需要添加的routes
const _resureGetRoute = (menus: any[]) =>{   //递归函数，获取到菜单里type=2的菜单
  for (const menu of menus) {
    if(menu.type == 2){
      const route = allRoutes.find((route) => route.path === menu.url)
      if (route) routes.push(route)   //添加当前
    } else {
      _resureGetRoute(menu.children)
    }
  }
}
_resureGetRoute(userMenus)

return allRoutes
}