<script setup lang="ts">
defineProps({
  icon: String,
  count: Number,
  tip: String,
})
</script>

<template>
  <div class="flex items-center">
    <UTooltip :text="tip">
      <Icon :name="icon" class="size-[1.2rem] text-muted"/>
      <p class="font-medium text-sm leading-4">{{ count }}</p>
    </UTooltip>
  </div>
</template>

<style scoped>

</style>
