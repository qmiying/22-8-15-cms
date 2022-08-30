<template>
  <div class="login-account">
    <!-- 绑定表单规则，prop绑定具体输入框规则 ;model用于绑定elform的输入数据-->
    <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name" :rules="rules.name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
// 导入的是ts类型
import { ElForm } from 'element-plus'
import { rules } from '../config/account-config'
import localCache from '@/utils/cache'
// 导入vuex使用
import {useStore} from 'vuex'
export default defineComponent({
  setup() {
    const store = useStore()
    // 保存账户数据，并动态绑定到input中
    // reactive 显示的创建响应式数据
    const account = reactive({
      // 打开页面有缓存默认显示缓存，否则空
      name: localCache.getCache('name') ?? '',
      password: localCache.getCache('password') ?? ''
    })
    const formRef = ref<InstanceType<typeof ElForm>>()
    // account模块的登录操作
    const loginAction = (isKeepPassword: boolean) => {
      // 验证登录信息是否正确，valid为true进行登录操作
      formRef.value?.validate((valid) => {
        if (valid) {
          // 1.是否需要登录验证
          if (isKeepPassword) {
            // 本地缓存,调用utils中封装饿缓存方法
            localCache.setCache('name', account.name)
            localCache.setCache('password', account.password)
            console.log('bao')
          } else {
            localCache.deletCache('name')
            localCache.deletCache('password')
          }
          // 2.开始进行登录验证
          store.dispatch('login/accountLoginAction',{...account})

        }
      })
    }
    return {
      account,
      rules,
      loginAction,
      formRef
    }
  }
})
</script>

<style scoped>
</style>
