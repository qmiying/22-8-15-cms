// 编写账户输入规则
export const rules = {
  // 针对name输入框的规则，一个{}写一个规则
  name: [
    {  // 规则1
      required: true,
      message: '请输入用户名',
      trigger: 'blur'
    },
    {  // 输入限制规则
      pattern: /^[a-z0-9]{5,10}$/,
      message: '用户名必须是5-10个字母和数字字符',
      trigger: 'blur'
    }],
  password: [
    {  // 规则1
      required: true,
      message: '请输入密码',
      trigger: 'blur'
    },
    {  // 输入限制规则
      pattern: /^[a-z0-9]{3,}$/,
      message: '密码必须是3个以上个字母和数字字符',
      trigger: 'blur'
    }],
}