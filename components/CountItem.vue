<script setup lang="ts">
defineProps({
  icon: String,
  count: Number,
  tip: String,
})
</script>

<template>
  <UTooltip :text="tip">
    <div class="flex items-center space-x-0.5">
      <Icon :name="icon" class="size-[1.25rem] text-muted"/>
      <p class="font-medium text-xs leading-4 text-foreground/90">{{ count }}</p>
    </div>
  </UTooltip>
</template>

<style scoped>

</style>
