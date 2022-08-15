// 单独封装登录的数据缓存
import { Module } from "vuex";
import { IloginState } from "./type";
import { IRootState } from "../type";

const loginModule: Module<IloginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: 'lihua',
      userInfo: 18
    }
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
}

export default loginModule