// 封装本地缓存
class LocalCache {
  //保存本地缓存
  setCache(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }
  // 获取缓存
  getCache(key: string) {
    // 获取缓存的值
    const value = window.localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)    //JSON.parse将数据解析成js对象
    }
  }
  // 删除缓存
  deletCache(key: string) {
    window.localStorage.removeItem(key)
  }
  // 清空缓存
  clearCache() {
    window.localStorage.clear()
  }

}
export default new LocalCache()