<template>
  <div class="department">
    <h2>department</h2>
    <el-date-picker start-placeholder="开始时间" end-placeholder="结束时间" type="daterange"></el-date-picker>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'department',
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
