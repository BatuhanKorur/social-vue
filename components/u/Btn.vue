<script setup lang="ts">
import {cva, cx, type VariantProps} from "cva";

const btnStyles = cva({
  base: [
    'border rounded-md transition-all duration-200 ease-in-out',
    'flex items-center justify-center cursor-pointer',
    'disabled:opacity-50 disabled:cursor-not-allowed [&>label]:leading-none',
  ],
  variants: {
    size: {
      sm: 'h-9 [&>.iconify]:min-w-9 [&>.iconify]:size-5 [&>label]:px-4 [&>label]:text-sm',
      md: 'h-10 [&>.iconify]:min-w-10 [&>.iconify]:size-5 [&>label]:px-5 [&>label]:text-base',
      lg: 'h-12 [&>.iconify]:min-w-12 [&>.iconify]:size-6 [&>label]:px-6 [&>label]:text-lg',
    },
    variant: {
      ghost: 'bg-card text-foreground hover:bg-muted-background',
      primary: 'bg-primary text-background border-transparent'
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
  link?: string
}>()

const comp = computed(() => props.link ? 'a' : 'button')
</script>

<template>
<Component :is="comp"
           :class="btnStyles({ size, variant })"
           :href="link"
>
  <label v-if="label">{{ label }}</label>
  <Icon v-else-if="icon" :name="icon" />
  <slot v-else />
</Component>
</template>
