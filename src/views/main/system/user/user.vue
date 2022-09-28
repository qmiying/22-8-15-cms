<template>
  <div class="user">
    <div class="search">
      <hy-form v-bind="searchFormConfig"/>
    </div>
    <div class="content">content</div>
  </div>
</template>

<script lang="ts">
import { defineComponent} from 'vue'
import HyForm from '@/base-ui/form';
import {searchFormConfig} from './config/search.config'
export default defineComponent({
  name: 'user',
  components:{
    HyForm
  },
  setup() {
    return {
      searchFormConfig
    }
  }
})
</script>

<style scoped>
  .search{
    padding-top: 18px;
  }

</style>
 