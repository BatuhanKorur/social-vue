<script setup lang="ts">
defineProps({
  error: String
})
</script>

<template>
  <div class="bg-red-background text-red-foreground flex space-x-4 p-4 rounded-md border-2 border-red/50 mt-1 mb-2">
    <Icon name="ri:alert-line" class="size-5"/>
    <div class="flex flex-col">
      <p class="text-base font-medium leading-none">Error!</p>
      <p class="text-sm">{{ error }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>
