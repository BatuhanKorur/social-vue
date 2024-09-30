<script setup lang="ts">
import {cva, cx, type VariantProps} from "cva";

const btnStyles = cva({
  base: [
    'bg-card text-foreground border rounded-md',
    'transition-all duration-200 hover:bg-muted-background',
    'flex items-center justify-center [&>label]:leading-none',
  ],
  variants: {
    size: {
      sm: 'h-8 [&>.iconify]:min-w-8 [&>.iconify]:size-4 [&>label]:px-4 [&>label]:text-sm',
      md: 'h-10 [&>.iconify]:min-w-10 [&>.iconify]:size-5 [&>label]:px-5 [&>label]:text-base',
      lg: 'h-12 [&>.iconify]:min-w-12 [&>.iconify]:size-6 [&>label]:px-6 [&>label]:text-lg',
    }
  },
  defaultVariants: {
    size: 'md'
  }
})

const props = defineProps<{
  size?: VariantProps<typeof btnStyles>['size']
  label?: string
  icon?: string
}>()
</script>

<template>
<button :class="btnStyles({ size })">
  <label v-if="label">{{ label }}</label>
  <Icon v-else-if="icon" :name="icon" />
  <slot v-else />
</button>
</template>
