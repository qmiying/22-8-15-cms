import { IloginState } from "./login/type"

// 指定state类型接口 
export interface IRootState {
  name: string,
  age: number
}

export interface IRootWithModule {
  login:IloginState
}
// 导出结合类型--解决vux与ts不适配的问题1
export type IStoreType = IRootState & IRootWithModule