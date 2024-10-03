<script setup lang="ts">
import { demoTw } from '@/demo/tw'
const data = ref(demoTw)
async function fetchData() {}
</script>
<template>
  <div>
    <SearchBar @search="fetchData"/>
    <template v-if="data">
      <PostCard v-for="(item, index) in data"
                :key="index"
                :data="item"
      />
    </template>
  </div>
</template>

<style scoped>

</style>
