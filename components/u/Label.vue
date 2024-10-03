<script setup lang="ts">
import {cva, type VariantProps} from "cva";

const labelStyles = cva({
  base: [
    'text-foreground/90 mb-0.5',
  ],
  variants: {
    size: {
      sm: 'text-sm font-[450]',
      md: 'text-base font-[500]',
      lg: 'text-md font-[550]',
    },
  }
})

interface Props {
  size?: VariantProps<typeof labelStyles>['size']
}

withDefaults(defineProps<Props>(), {
  size: 'sm',
})
</script>

<template>
  <span :class="labelStyles({ size })"><slot /></span>
</template>

<style scoped>

</style>
