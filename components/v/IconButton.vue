<script setup lang="ts">
import { cva, type VariantProps } from 'cva'
const props = withDefaults(defineProps<{
  link?: string,
  size?: VariantProps<typeof iconButtonStyles>['size']
  variant?: VariantProps<typeof iconButtonStyles>['variant'],
  iconClass?: string
  icon: string
}>(), {
  link: '',
  size: 'md',
  variant: 'ghost'
})

const iconButtonStyles = cva({
  base: [
    'border rounded-md transition-all duration-200 ease-in-out',
    'flex items-center justify-center cursor-pointer',
    'disabled:opacity-75 disabled:cursor-not-allowed',
  ],
  variants: {
    size: {
      sm: 'size-8 [&>span]:size-[1.15rem]',
      md: 'size-10 [&>span]:size-5',
      lg: 'size-12 [&>span]:size-6',
    },
    variant: {
      ghost: 'bg-card text-foreground hover:bg-background',
      primary: 'bg-primary text-white hover:bg-primary-background',
    }
  }
})

const comp = computed(() => props.link ? 'a' : 'button')
</script>

<template>
  <Component :is="comp" :class="iconButtonStyles({ size, variant })">
    <UIcon :name="props.icon" :class="`transition-all duration-200 ease-in-out ${iconClass}`" />
  </Component>
</template>
