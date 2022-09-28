<template>
  <div class="">
    <el-form :label-width="labelWidth">
      <el-row >
        <template v-for="item in formItems" :key="item">
          <el-col v-bind="colLayout">
            <el-form-item :label="item.label" :style="itemStyle" >
              <template v-if="item.type === 'input' || item.type === 'password'">
                <el-input :placeholder="item.placeholder" :show-password="item.type === 'password'"></el-input>
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select :placeholder="item.placeholder" style="width: 100%">
                  <el-option v-for="option in item.options" :key="option.value" :value="option.value">{{option.title}}</el-option>
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker v-bind="item.otherOptions" style="width:100px"></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
   </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent ,PropType} from 'vue'
import { IFormItem } from '../types/index'

export default defineComponent({
  components:{
    
  },
  props:{
    // 模板配置项
    formItems:{
      type: Array as PropType<IFormItem[]>,
      default: () => []
    },
    labelWidth:{
      type: String ,
      default: '100px'
    },
    itemStyle:{
      type: Object,
      default: () => ({padding: '10px 40px'})
    },
    colLayout:{
      type: Object,
      default: () => ({
        xl: 6, //>1920px ，显示4个输入框
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24
      })
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
  
</style>