const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
  // 官网上icon的按需自动引入配置，不管有
  // import Icons from 'unplugin-icons/webpack'
  //import IconsResolver from 'unplugin-icons/resolver'

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, // 关闭语法检查
  configureWebpack: {
    resolve: {
      extensions: [],
      alias: {
        assets: '@/assets',
        views: '@/views'
      },
    },
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ]
  },
  // 配置开发时跨域问题
  devServer: {
    proxy: {
      // 这里已经设置了baseurl，所以将service中的config-baseURL修改
      '^/api': {
        target: 'http://152.136.185.210:5000',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  }
})