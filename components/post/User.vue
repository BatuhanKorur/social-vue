<script setup lang="ts">
interface Props {
  user: {
    name: string
    username: string
    photoUrl: string
  }
}
defineProps<Props>()
</script>

<template>
<div class="flex items-center space-x-1.5">
  <NuxtImg :src="user.photoUrl"
           :alt="user.username"
           class="rounded-full size-9 border border-primary" />
  <div class="text-sm -space-y-0.5">
    <p class="font-medium">{{ user.name }}</p>
    <p class="text-muted">{{ user.username }}</p>
  </div>
</div>
</template>

<style scoped>

</style>
