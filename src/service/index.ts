//service统一出口
// 导入request/index中封装的HYRequest类
import HYRequest from './request'
// 导入config中的配置baseURL
import { BASE_URL, TIME_OUT } from './request/config'
// 导入本地缓存方法
import localCache from '@/utils/cache'
// 创建HYRequest类的实例对象hyRequest对象
const hyRequest = new HYRequest({
  // 请求数据的网址
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  // 实例拦截器
  interceptors: {
    requestInterceptor: (config) => {
       // 携带token的拦截
      const token = localCache.getCache('token')
      if (token) {
                //TS2532: Object is possibly ‘undefined’  解决：在后面使用！非空运算符；让编译器知道不会未定义或成为null
        config.headers!.Authorization = `Bearer ${token}`    
      }
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      return res
    },
    responseInterceporCatch: (err) => {
      return err
    }
  }
})
export default hyRequest