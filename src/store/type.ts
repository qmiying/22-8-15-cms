import { IloginState } from "./login/type"
import { ISystemState } from "./main/system/types"

// 指定state类型接口 
export interface IRootState {
  name: string,
  age: number
}
// 在其他地方引入时知道有此类型
export interface IRootWithModule {
  login:IloginState
  system: ISystemState
}
// 导出结合类型--解决vux与ts不适配的问题1
export type IStoreType = IRootState & IRootWithModule