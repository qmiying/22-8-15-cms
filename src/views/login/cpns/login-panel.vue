<template>
  <div class="login-panel">
    <h1>后台管理系统</h1>
    <!-- 登录方式 -->
    <el-tabs type="border-card" class="demo-tabs" :stretch="true" v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon>
              <avatar />
            </el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon>
              <iphone />
            </el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <login-phone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>
    <!-- 记住密码 -->
    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="login-button" @click="handleLoginClick">立即登录</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Avatar, Iphone } from '@element-plus/icons-vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'

export default defineComponent({
  components: {
    Avatar,
    Iphone,
    LoginAccount,
    LoginPhone
  },
  setup() {
    // 1.定义属性
    // checkbox保存密码
    const isKeepPassword = ref(true)
    // 绑定到account模块中的登录请求
    const accountRef = ref<InstanceType<typeof LoginAccount>>()   //<>转化对象类型
    const phoneRef = ref<InstanceType<typeof LoginPhone>>()
    // 区分选中的是账号登录还是手机登录,v-moel绑定到tab中，结合name属性使用
    const currentTab = ref<string>('account')

    // 2.定义方法
        // 监听按钮登录请求，绑定到account和phone模块中各自完成登录和验证
    const handleLoginClick = () => {
      if(currentTab.value === 'account'){
        // loginAction为account模块中的登录操作属性
      accountRef.value?.loginAction(isKeepPassword.value)
      console.log('执行account里的登录')
      }else{
        // loginAction为phone模块中的登录操作属性
      console.log('执行phone里的登录操作')
      }
    }
    return {
      isKeepPassword,
      handleLoginClick,
      accountRef,
      phoneRef,
      currentTab
    }
  }
})
</script>

<style scoped>
.login-panel {
  margin-bottom: 150px;
  width: 320px;
}

.account-control {
  display: flex;
  margin-top: 2px;
  justify-content: space-between;
}

.login-button {
  width: 320px;
}
</style>
