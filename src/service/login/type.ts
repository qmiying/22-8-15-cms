export interface IAccount {
  name:string,
  password:number
}
// 定义用户登录后接收到的结果类型接口
export interface ILoginResault {
  id: number,
  name: string,
  token: string
}


