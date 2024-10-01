<script setup lang="ts">
import { KeyLabel } from "@/types";

interface Props {
  label?: string
  options: KeyLabel[]
}

withDefaults(defineProps<Props>(), {
  label: 'Select an option',
})

const model = defineModel()
</script>

<template>
  <div>
    <ULabel>{{ label }}</ULabel>
    <div class="flex flex-col space-y-1">
      <div v-for="opt in options"
           :key="opt.key"
           @click="model = opt.key"
           :class="[
             'border rounded-md flex items-center py-3.5 pl-1.5 cursor-pointer transition-all duration-200 ease-in-out',
              model === opt.key ? 'opacity-100' : 'opacity-50 hover:opacity-65'
           ]">
        <UBullet :active="model === opt.key" />
        <span class="text-foreground text-sm leading-none font-[420]">{{ opt.label }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
