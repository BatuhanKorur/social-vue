<script setup lang="ts">
const socialStore = useSocialStore()
</script>

<template>
  <div>
    <pre>
      {{ socialStore.platforms }}
    </pre>
  </div>
</template>

<style scoped>

</style>
