import { createStore, storeKey, Store, useStore as useVuexStore } from 'vuex'
import { IRootState, IStoreType } from './type'
// 导入登录缓存模块
import login from './login/login'
import system from './main/system/system'

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
    login,
    system
  }
})

// 登录的初始化--处理当用户刷新页面时缓存消失的问题
export function setupStore(){
  store.dispatch('login/loadLocalLogin')
}
// 自己封装一个获取用户菜单的useStore 
export function useStore(): Store<IStoreType>{
  return useVuexStore()
}
export default store