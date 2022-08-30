import { createStore, storeKey } from 'vuex'
import { IRootState } from './type'
// 导入登录缓存模块
import login from './login/login'

 const store = createStore<IRootState>({
  state() {
    return {
      name: 'lihua',
      age: 18
    }
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    login
  }
})

// 登录的初始化--处理当用户刷新页面时缓存消失的问题
export function setupStore(){
  store.dispatch('login/loadLocalLogin')
}

export default store