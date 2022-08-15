// 封装本地缓存
class LocalCatch {
  //保存本地缓存
  setCatch(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }
  // 获取缓存
  getCatch(key: string) {
    // 获取缓存的值
    const value = window.localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)    //JSON.parse将数据解析成js对象
    }
  }
  // 删除缓存
  deletCatch(key: string) {
    window.localStorage.removeItem(key)
  }
  // 清空缓存
  clearCatch() {
    window.localStorage.clear()
  }

}
export default new LocalCatch()