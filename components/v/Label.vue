<script setup lang="ts">
import { cva, type VariantProps } from 'cva'
const labelStyles = cva({
  base: 'text-foreground mb-0.5',
  variants: {
    size: {
      sm: 'text-sm',
      default: 'text-base',
      md: 'text-md',
      lg: 'text-lg font-[525] tracking-[0.005em]'
    }
  }
})

withDefaults(defineProps<{
  label?: string
  size?: VariantProps<typeof labelStyles>['size']
}>(), {
  label: '',
  size: 'default'
})
</script>

<template>
  <span :class="labelStyles({ size })">
    <template v-if="label">{{ label }}</template>
    <slot v-else></slot>
  </span>
</template>
