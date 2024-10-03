<script setup lang="ts">
defineProps<{
  icon: string
  label: string
  active: boolean
}>()
</script>

<template>
<div :class="{
  'inline-flex items-center space-x-1 px-2 py-[0.4rem] rounded-md border transition duration-200 ease-in-out cursor-pointer': true,
  'bg-accent/20 text-accent border-accent/25 hover:opacity-80': active,
  'bg-muted/50 text-foreground/25 border-muted/50 hover:text-foreground/40': !active
}">
  <UIcon :name="icon" class="size-4"/>
  <p class="text-xs font-medium">{{ label }}</p>
</div>
</template>
