export const contentTableConfig = {
  title : '用户列表',
  propList: [
    { prop:'name', label: '用户名', minWidth: '100' },
    { prop:'realname', label: '真实姓名', minWidth: '180' },
    { prop:'cellphone', label: '电话', minWidth: '180' },
    { prop:'enable', label: '状态', minWidth: '100' , slotName: 'status'},
    { prop:'createAt', label: '创建时间', minWidth: '250' , slotName: 'createAt'},
    { prop:'updateAt', label: '更新时间', minWidth: '250' , slotName: 'updateAt'},
    { label: '操作', minWidth: '120' , slotName: 'handler'},  //操作插槽
  ],
  showIndexColumn: true ,  //决定是否显示序号
  showSelectColumn: true  //决定是否显示选择框
}