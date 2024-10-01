<script setup lang="ts">
interface Props {
  active: boolean
}
withDefaults(defineProps<Props>(), {
  active: false,
})
</script>

<template>
<div :class="`mx-1.5 size-4 rounded-full flex items-center justify-center ${active ? 'bg-primary/25': 'bg-transparent'}`">
  <div :class="`size-2.5 rounded-full ${active ? 'bg-primary' : 'bg-transparent'}`"></div>
</div>
</template>
