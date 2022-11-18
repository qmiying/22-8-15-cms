type IFormType = 'input' | 'password' | 'select' | 'datepicker'

export interface IFormItem {
  field: string,
  type: IFormType,
  label: string,
  rules?: any[],
  placeholder?: any,
  // 针对select的配置
  options?: any[],
  // 针对其他的配置
  otherOptions?: any
}
// 搜索栏里所有的配置文件类型
export interface IForm {
  formItems: IFormItem[],
  labelWidth?: string,
  itemStyle: any,
  colLayout: any

}