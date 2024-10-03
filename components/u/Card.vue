<script setup lang="ts">
interface Props {
  shadowless?: boolean
}
withDefaults(defineProps<Props>(), {
  shadowless: false
})
</script>

<template>
<div :class="[
  'bg-card text-foreground border rounded-md',
  shadowless ? 'shadow-none' : 'shadow-sm']">
  <slot></slot>
</div>
</template>
