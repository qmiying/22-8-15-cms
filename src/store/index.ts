import { createStore } from 'vuex'
import { IRootState } from './type'
// 导入登录缓存模块
import login from './login/login'

export default createStore<IRootState>({
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
