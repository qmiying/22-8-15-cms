<template>
  <div class="login-phone">
    <el-form label-width="80px" :model="phone" :rules="phoneRules" ref="formRef">
      <el-form-item label="手机号" prop="num" :rules="phoneRules.num">
        <el-input v-model="phone.num" />
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="get-code">
          <el-input v-model="phone.code" />
          <el-button class="get-button" type="primary">请输入验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { phoneRules } from '../config/phone-config'
import { ElForm } from 'element-plus'

export default defineComponent({
  setup() {
    const phone = reactive({
      num: '',
      code: ''
    })
    const fromRef = ref<InstanceType<typeof ElForm>>()
    const loginAction = () => {

    }
    return {
      phone,
      phoneRules,
      fromRef
    }
  }
})
</script>

<style scoped>
.get-code {
  display: flex;
}

.get-code .get-button {
  margin-left: 15px;
}
</style>
