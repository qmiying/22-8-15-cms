import {IAccount,ILoginResault, IDataType} from './type'
import hyRequest from '../index'
// 设置登录请求url，适用于同时使用多个url的情况
enum LoginAPI {
  AccountLogin ='/login',
  LoginUserInfo = '/users/',  // users/1 
  UserMenus = '/role/'    //用法 role/1/id

}
// 账号登录请求操作封装：传入参数IAccount即账号密码后返回请求结果，数据类型以泛型定义
// 请求到的结果在store中处理
export function accountLoginRequest(account:IAccount){
  return hyRequest.post<IDataType<ILoginResault>>({
    url: LoginAPI.AccountLogin,
    // 参数account存body的数据  
    data: account
  })
}

// 根据用户id请求数据
 export function requestUserInfoById(id:number) {
  return hyRequest.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id,
    showLoading:false
  })
 }

 //根据登录用户请求菜单
 export function requestUserMenusByRoleId(id:number){
  return hyRequest.get<IDataType>({
    url:LoginAPI.UserMenus + id + '/menu',
    showLoading:false
  })
 }