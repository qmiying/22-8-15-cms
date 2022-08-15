const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
// 官网上icon的按需自动引入配置，不管有
// import Icons from 'unplugin-icons/webpack'
//import IconsResolver from 'unplugin-icons/resolver'

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,// 关闭语法检查
  configureWebpack: {
    resolve: {
      extensions: [],
      alias: {
        assets: '@/assets',
        views: '@/views'
      }
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
})
