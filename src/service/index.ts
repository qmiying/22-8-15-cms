//service统一出口
// 导入request/index中封装的HYRequest类
import HYRequest from './request'
// 导入config中的配置baseURL
import { BASE_URL, TIME_OUT } from './request/config'
// 创建HYRequest类的实例对象hyRequest对象
const hyRequest = new HYRequest({
  // 请求数据的网址
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  // 实例拦截器
  interceptors: {
    requestInterceptor: (config) => {
      // 携带token的请求拦截
      const token = ''
      if (token) {
        // config.headers.Authorization = `Bearer ${token}`
      }
      console.log('请求成功的拦截')
      return config
    },
    requestInterceptorCatch: (err) => {
      console.log('请求失败的拦截')
      return err
    },
    responseInterceptor: (res) => {
      console.log('响应成功的拦截')
      return res
    },
    responseInterceporCatch: (err) => {
      console.log('响应失败的拦截')
      return err
    }
  }
})
export default hyRequest