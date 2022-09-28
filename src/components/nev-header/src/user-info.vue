<template>
  <div class="user-info">
    <el-dropdown>
        <span class="el-dropdown-link">
          <el-avatar :size="25" />
          <span>{{name}}</span>
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>账户信息</el-dropdown-item>
            <el-dropdown-item>用户权限</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import {ArrowDown} from '@element-plus/icons-vue'
import {useStore} from '@/store'

export default defineComponent({
  components:{
    ArrowDown
  },
  setup() {
    const store = useStore()
    const name = computed(() => store.state.login.userInfo.name)
    return {
      name




      
    }
  }
})
</script>

<style scoped lang="less">
</style>