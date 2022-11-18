<template>
  <div class="page-search">
    <hy-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h3>高级搜索</h3>
      </template>
      <template #footer>
        <div class="handel-btns">
          <el-button>重置</el-button>
          <el-button type="primary">搜索</el-button>
        </div>
      </template>
    </hy-form>
  </div>
</template>

<script lang="ts">
import { defineComponent ,ref} from 'vue'
import HyForm from '@/base-ui/form'

export default defineComponent({
  props:{
    // 传入各页面搜索表单的配置信息
    searchFormConfig:{
      type: Object,
      require: true
    }
  },
  components:{
    HyForm
  },
  setup() {
    // 表单绑定到表单项上,v-model绑定实现双向绑定
    const formData = ref({
        id: '',
        name: '',
        password: '',
        sport: '',
        ceateTime: ''
      })
    return {
      formData
    }
  }
})
</script>

<style scoped lang="less">
 .search{
    padding-top: 18px;
  }
  .handel-btns{
    text-align: right;
    padding: 0 50px 20px 0;
  }
</style>