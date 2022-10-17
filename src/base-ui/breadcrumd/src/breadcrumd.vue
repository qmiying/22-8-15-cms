<template>
  <div class="nev-breadcrumd">
      <el-breadcrumb separator="/" >
      <template v-for="item in breadcrumbs" :key="item">
        <el-breadcrumb-item :to="{ path: item.path }">{{item.name}}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent , PropType} from 'vue'
import { IBreadcrumb} from '../types'

export default defineComponent({
  components:{  
  },
  props:{
    breadcrumbs:{
      type: Array as PropType<IBreadcrumb[]>,
      default: () => []
    }
  },
  setup() {
    return {

    }
  }
})
</script>

<style scoped lang="less">
</style>