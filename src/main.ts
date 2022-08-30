import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 安装和导入css初始化配置
import 'normalize.css'
import './assets/css/index.css'

// 测试
//import './service/axios.demo'
// index可不写
import hyRequest from './service/index'
import { globalRegister } from './global'
import {setupStore} from './store/index'
// 全局引入element-plus和样式
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(globalRegister)
app.use(store)
app.use(router)
setupStore()
app.mount('#app')

// 使用类HYRequset创建的对象hyRequest进行网络请求
// 使用此类实例传入在request/index下封装的属性和方法
// hyRequest.request({  某个请求的单个拦截
//   url: 'home/multidata',
//   method: 'GET',
//   interceptors: {
//     requestInterceptor: (config) => {
//       console.log('单独请求的config')
//       return config
//     },
//     responseInterceptor: (res) => {
//       console.log('单独请求的response')
//       return res
//     }
//   }
// })
// 定义返回数据类型接口
interface DataType {
  data: any,
  returnCode: string,
  success: boolean
}

// hyRequest.get<DataType>({
//   url: 'home/multidata',
//   //method: 'GET',
//   showLoading: true
// }).then((res) => {
//   console.log(res.data)
//   console.log(res.returnCode)
//   console.log(res.success)
// })