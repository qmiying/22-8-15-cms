import type { AxiosRequestConfig, AxiosResponse } from "axios"
// 定义接口，封装了几个拦截器类型
export interface HYRequestInterceptors<T = AxiosResponse> {  //T泛型决定responseInterceptor传入的类型
  // 接口中定义了4个函数类型的响应属性
  // 拦截器不一定是需要的，所以设置为可选类型
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig   //请求拦截，正确请求
  requestInterceptorCatch?: (err: any) => any    //请求拦截，错误拦截
  responseInterceptor?: (res: T) => T  //响应拦截，正确拦截
  responseInterceporCatch?: (err: any) => any
}
// 通过接口扩展传入请求的类型
export interface HYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: HYRequestInterceptors<T>
  showLoading?: boolean
}
