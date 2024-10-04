<script setup lang="ts">
defineProps<{
  icon: string
  label: string
  active: boolean
}>()
</script>

<template>
<div :class="{
  'inline-flex items-center space-x-1 px-2 py-1.5 rounded-md border transition duration-200 ease-in-out cursor-pointer': true,
  'bg-accent/20 text-accent border-accent/40 hover:opacity-80': active,
  'bg-muted/15 text-foreground/40 border-muted/30 hover:bg-muted/30': !active
}">
  <UIcon :name="icon" class="size-4"/>
  <p class="text-xs font-medium leading-4">{{ label }}</p>
</div>
</template>
