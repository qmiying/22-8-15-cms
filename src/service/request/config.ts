// 配置不同环境变量的调用

let BASE_URL = ''
//let BASE_URL = 'http://localhost:8080/'
const TIME_OUT = 10000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = '/api'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://biying.com'
} else {
  BASE_URL = 'http://goole.com'
}

export { BASE_URL, TIME_OUT }