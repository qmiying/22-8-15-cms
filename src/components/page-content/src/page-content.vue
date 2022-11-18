<template>
  <div class="page-content">
    <hy-table 
      :listData="userList" v-bind="contentTableConfig">
       <!-- --1.header中的插槽-- -->
       <template #headerHandler>
        <el-button>刷新用户</el-button>
        <el-button type="primary">新增用户</el-button>
      </template>
      <!-- --2.列的插槽- -->
        <template #status="scope">
          <el-button plain size="small" :type="scope.row.enable ? 'success' : 'danger'"> 
            {{ scope.row.enable ? "启用" : "禁用" }}
          </el-button>
        </template>
        <template #createAt="scope">
          <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
        </template>
        <template #updateAt="scope">
          <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
        </template>
        <template #handler>
          <div class="handle-btns">
            <el-button type="primary" size="small" >编辑</el-button>
            <el-button type="primary" size="small">删除</el-button>
          </div>
        </template>
        <!-- 3.footer插槽 -->
        <template #footer>
          
        </template>
    </hy-table>
  </div>
</template>

<script lang="ts">
import { defineComponent , computed} from 'vue'
import { useStore } from '@/store'
import HyTable from '@/base-ui/table'

export default defineComponent({
  components:{
    HyTable
  },
  props:{
    contentTableConfig: {
      type: Object,
      require: true
    }
  },
  setup() {
    const store = useStore()
    // 页面请求用户数据：执行的实际代码位置store里 system/getPageListAction方法
      store.dispatch( 'system/getPageListAction', {
        pageUrl: 'users/list',  //请求跳转url
        queryInfo: {    //传入的请求参数
          offset: 0,
          size: 10
        }
      })
      const userList = computed(() => store.state.system.userList)
      const userCount = computed(() => store.state.system.userCount)   
    return {
      userList
    }
  }
})
</script>

<style scoped lang="less">
</style>