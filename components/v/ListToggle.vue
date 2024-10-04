<script setup lang="ts">
import {Option} from "@/types";

withDefaults(defineProps<{
  label?: string
  options: Option[]
  activeKey?: string
}>(), {
  label: 'Select an option',
  options: []
})
const emits = defineEmits(['toggle'])
</script>

<template>
  <div>
    <VLabel :label="label" size="sm"/>
    <div class="space-y-1">
      <div v-for="opt in options"
           :key="opt.key"
           @click="emits('toggle', opt.key)"
           :class="{
           'px-2.5 py-1.5 border rounded-md transition duration-200 cursor-pointer': true,
           'bg-accent/20 border-accent/20 text-accent dark:text-foreground/80': opt.key === activeKey,
           'text-foreground/35 hover:text-foreground/70': opt.key !== activeKey
         }"
      >
        <span class="text-sm font-medium">{{ opt.label }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
