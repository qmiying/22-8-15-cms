<template>
  <div class="hy-form">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form :label-width="labelWidth">
      <el-row >
        <template v-for="item in formItems" :key="item">
          <el-col v-bind="colLayout">
            <el-form-item :label="item.label" :style="itemStyle" >
              <template v-if="item.type === 'input' || item.type === 'password'">
                <el-input :placeholder="item.placeholder" :show-password="item.type === 'password'" v-model="formData[`${item.field}`]"></el-input>
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select :placeholder="item.placeholder" style="width: 100%" v-model="formData[`${item.field}`]">
                  <el-option v-for="option in item.options" :key="option.value" :value="option.value" >{{option.title}}</el-option>
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker v-bind="item.otherOptions" style="width:100px" v-model="formData[`${item.field}`]"></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
   </el-form>
   <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent ,PropType, ref, watch} from 'vue'
import { IFormItem } from '../types/index'

export default defineComponent({
  components:{  
  },
  props:{
    modelValue:{
      type: Object,
      required:true
    }, 
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
  // 绑定表单数据双向绑定
  emits:['update:modelValue'],
  setup(props,{emit}) {
    const formData = ref({...props.modelValue})
    watch(
      formData, 
      (newValue) => {
        emit('update:modelValue',newValue)
      }, 
      {
        deep: true
      })  
    return {
      formData
    }
  }
})
</script>

<style scoped lang="less">
  
</style>