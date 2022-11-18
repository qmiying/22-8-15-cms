import axios from "axios"
// 导入类型
import type { AxiosInstance } from 'axios'
import type { HYRequestInterceptors, HYRequestConfig } from './type'
// 使用 unplugin-element-plus 并且只使用组件 API，您需要手动导入样式
// 1.导入loading组件、样式和类型
import 'element-plus/es/components/loading/style/css'
import { ElLoading } from 'element-plus/lib/index'
import { LoadingInstance } from 'element-plus/lib/components/loading/src/loading'
// 封装网络请求相关类，在外层index.ts中调用
const DEFAULT_LOADING = true
class HYRequest {
  // 创建一个构造器，创建多个请求时使用构造器，适配不同请求的属性
  instance: AxiosInstance
  interceptors?: HYRequestInterceptors
  showLoading: boolean
  // 2.存储请求时的loading
  loading?: LoadingInstance

  //构造器--传入上面封装的接口
  constructor(config: HYRequestConfig) {
    // 创建变量接收结果 instance-请求的数据，interceptors-拦截器
    this.instance = axios.create(config)   //创建axios实例
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? DEFAULT_LOADING
    // 创建拦截器
    // 1.从config中取出的拦截器是对应实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
      )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceporCatch
    )

    // 2.添加所有的实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
      // 3.请求时的loading配置
        if (this.showLoading) {
          this.loading = ElLoading.service({
          lock: true,
          text: '正在加载.....',
          background: 'rgba(0, 0, 0, 0.7)',
        })
      }
      return config
    }, (err) => {
      return err
    })

    this.instance.interceptors.response.use((res) => {
      // 4.请求成功移除loading
      this.loading?.close()  //使用可选链，有值的时候才调用
      // 获取到我们需要的真正数据
      const data = res.data
      // 例子：拦截器里拦截错误信息方式1
      if (data.returnCode === '-1001') {
        console.log('错误拦截1')
      } else {
        return data
      }
    }, (err) => {
      // 4.请求失败移除loading
      this.loading?.close()
      // 例子：拦截器里拦截错误信息方式2：判断不同的HttpErrorCode显示不同拦截
      if (err.response.status === 404) {
        console.log('404的错误')
      }
      return err
    })
  }

  // 单个请求的拦截器
  // 定义请求返回泛型类型T的promise，以便在实例中获取到数据res
  request<T = any>(config: HYRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 1.单个请求对config的处理
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      // 2、判断是否显示loading
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 1、单个请求对数据的处理
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          //console.log(res)
          // 2、请求结束后将是否显示loading调回初始值true,避免影响下一个请求
          this.showLoading = DEFAULT_LOADING
          // 3.将结果resolve返回出去
          resolve(res)
        })
        .catch((err) => {
          this.showLoading = DEFAULT_LOADING
          reject(err)
          return err
        })
    })
  }
  // 封装其他请求方法
  get<T = any>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }
  post<T = any>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }
  delete<T = any>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
  patch<T = any>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default HYRequest