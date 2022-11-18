<template>
  <div class="roler">
    <h2>roler</h2>
    <page-search></page-search>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageSearch from '@/components/page-seacher'

export default defineComponent({
  name: 'roler',
  components:{
    PageSearch
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
