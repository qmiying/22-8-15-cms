// 编写账户输入规则
export const phoneRules = {
  // 针对name输入框的规则，一个{}写一个规则
  num: [
    {  // 规则1
      required: true,
      message: '请输入手机号',
      trigger: 'blur'
    },
    {  // 输入限制规则
      pattern: /^[0-9]{1,11}$/,
      message: '必须是11个数字',
      trigger: 'blur'
    }],
  code: [
    {  // 规则1
      required: true,
      message: '请输入验证码',
      trigger: 'blur'
    },
    {  // 输入限制规则
      pattern: /^[0-9]{1,6}$/,
      message: '验证码必须是6个数字',
      trigger: 'blur'
    }],
}