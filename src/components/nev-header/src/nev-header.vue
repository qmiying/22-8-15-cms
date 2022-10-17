<template>
  <div class="nev-header">
    <i class="fold" >
      <el-icon  size="35px" @click="handleFoldClick">
        <Fold  v-if="!isFold"/>
        <Expand v-else/>
      </el-icon>      
    </i>
    <div class="content">
      <div>
        <hy-breadcrumd :breadcrumbs="breadcrumbs"/>
      </div>
      <user-info/>
    </div>
  </div>
</template>

<script lang="ts">
import HyBreadcrumd,{IBreadcrumb} from '@/base-ui/breadcrumd'
import { defineComponent, ref } from 'vue'
import {Fold ,Expand} from '@element-plus/icons-vue'
import userInfo from './user-info.vue'


export default defineComponent({
  components:{
    HyBreadcrumd,
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

    // 面包屑中传入的数据[{name： ，path：}，{name：}]
    const breadcrumbs:IBreadcrumb[] = [{name:'首页', path:'/main/system'},{name:'用户管理'}]
    return {
      isFold,
      handleFoldClick,
      breadcrumbs
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