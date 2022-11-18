import { Module } from "vuex";
import { IRootState } from "@/store/type";
import { ISystemState } from "./types";
import { getPageListData } from "@/service/main/system/system";
// 获取所有用户信息用于保存和展示
const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state(){
    return {
      userList: [],
      userCount: 0
    }
  },
  mutations:{
    changeUserList(state, userList: any){
      state.userList = userList
    },
    changeUserCount(state, userCount: any){
      state.userCount = userCount
    }
  },
  actions:{
    async getPageListAction({ commit }, payload: any) {     //查询条件payload:{baseUrl,queryInfo}
      //对页面发送请求
      const pageResult = await getPageListData(payload.pageUrl, payload.queryInfo)
      console.log(pageResult)
      const { list, totalCount } = pageResult.data
      commit('changeUserList', list)
      commit('changeUserCount', totalCount)
    }
  }
}

export default systemModule