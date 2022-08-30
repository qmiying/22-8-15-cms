// 单独封装登录的数据缓存
import { Module } from "vuex";
import { IloginState } from "./type";
import { IRootState } from "../type";
import { accountLoginRequest, requestUserInfoById, requestUserMenusByRoleId } from "@/service/login/login";   // 导入account等的登录请求
import { IAccount } from "@/service/login/type"; 
import localCache from '@/utils/cache'  // 导入本地缓存方法保存token
import router from '@/router/index'

const loginModule: Module<IloginState, IRootState> = {
  namespaced: true,
  state() { 
    return {
      token: '',
      userInfo: {},
      userMenus:[]
    }
  },
  getters: {
  },
  mutations: {
    changeToken(state,token:string){   // 修改保存登录数据
      state.token = token
    },
    changeUserInfo(state,userInfo:any){  // 修改保存用户信息
      state.userInfo = userInfo
    },
    changeUserMenus(state,userMenus:any){  //修改保存用户菜单
      state.userMenus = userMenus
    }
  },
  actions: {
    // 账号的登录请求,async-js的异步操作：可以用同步的写法写异步操作
    async accountLoginAction({commit},payload:IAccount){      // 传入账号密码 保存token，执行登录请求
      
      // 1.实现登录和保存token 
      console.log('执行accountLoginAction',payload)
      const loginResult = await accountLoginRequest(payload)        // 导入axios的login 实现账号的登录逻辑
      // console.log(loginResult.data.id)
      const {id,token} = loginResult.data
      console.log(id,token)
      commit('changeToken',token)
      localCache.setCache('token',token)  // 本地缓存token

      // 2.请求用户信息和保存用户信息
      const userInfoResult = await requestUserInfoById (id)
      const userInfo = userInfoResult.data
      console.log(userInfo)
      commit('changeUserInfo',userInfo)
      localCache.setCache('userInfo',userInfo)

       // 3.获取用户菜单
       const userMenusResault = await requestUserMenusByRoleId(userInfo.role.id)
       const userMenus = userMenusResault.data
      console.log(userMenus)
       commit('changeUserMenus', userMenus)
       localCache.setCache('userMenus', userMenus)

       // 4.跳转首页
      router.push('/main')
      },

      //5. 刷新页面时缓存数据
      loadLocalLogin({commit}){
        const token = localCache.getCache('token')
        if(token){
          commit('changeToken',token)
        }
        const userInfo =localCache.getCache("id")
        if(userInfo){
          commit('changeUserInfo',userInfo)
        }
        const userMenus = localCache.getCache('id')
        if(userMenus){
          commit('changeUserMenus',userMenus)
        }

      }
    // 手机的登录请求  
    //  
  },
  modules: {
  }
}

export default loginModule