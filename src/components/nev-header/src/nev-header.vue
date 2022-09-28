<template>
  <div class="nev-header">
    <i class="fold" >
      <el-icon  size="35px" @click="handleFoldClick">
        <Fold  v-if="!isFold"/>
        <Expand v-else/>
      </el-icon>      
    </i>
    <div class="content">
      <div>面包屑</div>
      <div>
        <user-info/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import {Fold ,Expand} from '@element-plus/icons-vue'
import userInfo from './user-info.vue'


export default defineComponent({
  components:{
    Fold,
    Expand,
    userInfo
  },
  emit:['foldChange'],
  setup(props,{emit}) {
    const isFold = ref(false)
    const handleFoldClick =() => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)   //点击图标后将事件发送到main中
    }
    return {
      isFold,
      handleFoldClick
    }
  }
})
</script>

<style scoped lang="less">
  // .fold{
  //   height: 30px;
  //   width: 30px;

  // }
  .nev-header{
    display: flex;
    width: 100%;
  }
  .content{
    display: flex;
    justify-content: space-between;
    align-items:center;
    flex: 1;
    padding: 0 20px;
  }
</style>