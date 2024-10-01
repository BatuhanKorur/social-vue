<script setup lang="ts">
import type { Platform } from "@/types";
interface Props {
  platform: Platform
}
defineProps<Props>()
</script>

<template>
<div :class="[
  'flex items-center space-x-2 px-3 py-3 border rounded-md',
  'cursor-pointer transition-all duration-200 ease-in-out',
  {
    'bg-red-background text-red-foreground border-red': !platform.healthy,
    'bg-transparent text-foreground hover:bg-muted': !platform.active && platform.healthy,
    'bg-primary-background text-primary-foreground': platform.active,
  },
]">
  <Icon :name="platform.icon" class="size-5"/>
  <span class="text-base font-medium tracking-[0.1px]">{{ platform.label }}</span>
</div>
</template>
