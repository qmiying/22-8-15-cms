//1.安装和导入axios
import axios from 'axios'
//import { configProviderProps } from 'element-plus'

// 2.配置axios的默认项
// 2.1全局配置某些属性
axios.defaults.baseURL = 'http://123.207.32.32:8000/'
axios.defaults.timeout = 1000

// 2.2配置单个请求
axios.get('home/multidata').then((res) => {
  console.log(res)
})

// 3、axios.all --多个请求一起返回
axios.all([
  axios.get('home/multidata'),
  axios.get('home/multidata')
]).then((res) => {
  console.log(res[0]);
  console.log(res[1])
})

// 4.axios拦截器
// 相截请求:fn1请求发送成功执行的函数，fn2请求发送失败执行的函数
axios.interceptors.request.use((config) => {
  //请求成功想做的一些操作
  // 1.给请求添加token
  // 2.isLoading动画
  console.log('请求发送成功')
  return config
}, (err) => {
  // 打印请求失败的错误提示
  console.log('请求发送失败')
})
// 拦截相应
axios.interceptors.response.use((res) => {
  // f1数据响应成功（服务器正常返回了数据，20x)
  console.log(res)
  return res
}, (err) => {
  console.log('服务器相应失败')
  return err
})