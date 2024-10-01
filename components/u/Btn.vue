<script setup lang="ts">
import {cva, cx, type VariantProps} from "cva";

const btnStyles = cva({
  base: [
    'border rounded-md transition-all duration-200 flex items-center justify-center',
    '[&>label]:leading-none',
  ],
  variants: {
    size: {
      sm: 'h-8 [&>.iconify]:min-w-8 [&>.iconify]:size-4 [&>label]:px-4 [&>label]:text-sm',
      md: 'h-10 [&>.iconify]:min-w-10 [&>.iconify]:size-5 [&>label]:mx-5 [&>label]:text-base',
      lg: 'h-12 [&>.iconify]:min-w-12 [&>.iconify]:size-6 [&>label]:px-6 [&>label]:text-lg',
    },
    variant: {
      ghost: 'bg-card text-foreground border-border hover:bg-muted-background',
      primary: 'bg-primary text-primary-foreground border-transparent'
    }
  },
  defaultVariants: {
    size: 'md',
    variant: 'ghost'
  }
})

const props = defineProps<{
  size?: VariantProps<typeof btnStyles>['size']
  variant?: VariantProps<typeof btnStyles>['variant']
  label?: string
  icon?: string
}>()
</script>

<template>
<button :class="btnStyles({ size, variant })">
  <label v-if="label">{{ label }}</label>
  <Icon v-else-if="icon" :name="icon" />
  <slot v-else />
</button>
</template>
