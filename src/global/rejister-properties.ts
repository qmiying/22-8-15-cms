import { App } from 'vue'
import { formatUtcString } from '@/utils/data-format'
export default function registerProperties(app: App){
  // 自定义全局属性过滤器-可以在任意组件使用在此定义的方法
  app.config.globalProperties.$filters = {
    // 其他全局属性函数 
    foo(){},
    formatTime(value: string){
      return  formatUtcString(value)

    }  
  }
}