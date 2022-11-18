<template>
  <div class="hy-table" >
    <!-- 表头插槽 -->
    <div class="header">
      <slot name="header">
        <div class="title" :title="title">{{ title }}</div>
        <div class="handler">
          <slot name="headerHandler"></slot>
        </div>
      </slot>
    </div>
    <!-- 监听表单选中事件 -->
      <el-table :data="listData" border style="width: 100%" @selection-change="handleSelectionChange">
        <el-table-column v-if="showSelectColumn" type="selection" align="center" width="60" ></el-table-column>
        <el-table-column v-if="showIndexColumn" type="index" label="序号" align="center" width="80"></el-table-column>
        <template v-for="propItem in propList" :key="propItem.prop" >
          <el-table-column v-bind="propItem" align="center">
            <!-- 作用域插槽 -->
            <template #default="scope">
              <!-- 动态绑定插槽名字：name ；  :row="scope.row"--将插槽属性传出-->
              <slot :name="propItem.slotName" :row="scope.row">
                {{scope.row[propItem.prop]}}
              </slot>
            </template>
          </el-table-column> 
        </template>
      </el-table>
      <!-- 表末插槽 -->
      <div class="footer">
        <slot name="footer">
          <div class="qqq">
            <el-pagination
            small= true
            background= true
            layout="total, sizes, prev, pager, next, jumper"
            :total="400"          
          />
          </div>
        </slot>
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  components:{
    
  },
  props:{
    listData:{
      type: Array,
      default: ''
    },
    propList: {
      type: Array,
      require: true
    },
    showIndexColumn: {
      type: Boolean,
      default: false
    },
    showSelectColumn: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      require: true
    }
  },
  emits: ['selectionChange'],
  setup(peops, {emit}) {  
    // 获取表单选中事件的数据
    const handleSelectionChange = (value: any) => {
      emit('selectionChange', value)   //将表单选中事件发出去
      console.log(value)
    }    
    return {
      handleSelectionChange
    }
  }
})
</script>

<style scoped lang="less">
.header{
  display: flex;
  justify-content: space-between;
  height: 45px;
  padding: 0 5px 10px 5px;
  align-items: center;
}
.title{
  font-size: 28px;
  font-weight: 700;
}
.handler{
  align-items: center;
}
.footer{
  margin-top: 15px;
}
.el-pagination{
  text-align: right;
}

</style>