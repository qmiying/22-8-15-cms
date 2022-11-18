<template>
  <div class="app">
      <!-- <router-link to="/login">登录</router-link> | -->
      <!-- <router-link to="/main">注册</router-link> -->
  <!-- <el-config-provider :locale="locale"> -->
    <router-view />
  <!-- </el-config-provider> -->
  </div>
</template>

<script lang="ts">
 import { defineComponent } from 'vue'
 //elementplus国际化设置
  // import { ElConfigProvider } from 'element-plus'
  // import zhCn from 'element-plus/es/locale/lang/zh-cn.mjs'
  // import zhCn from 'element-plus/lib/locale/index.js'

  export default defineComponent({
    components: {
      // ElConfigProvider,
    },
    setup() {
      return {
      //  locale: zhCn,
      }
    }
  })
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
