<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig"/>
    <page-content :contentTableConfig="contentTableConfig"></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent} from 'vue'
import { contentTableConfig } from './config/content.config'
import { searchFormConfig } from './config/search.config'
import PageSearch from '@/components/page-seacher'
import PageContent from '@/components/page-content' 

export default defineComponent({
  name: 'user',
  components:{
    PageSearch,
    PageContent
  },
  setup() {
    return {
      searchFormConfig,
      contentTableConfig
    }
  }
})
</script>

<style scoped >
 .page-content{
  padding: 20px;
  border-top: 20px solid #f5f5f5
 }

</style>
 