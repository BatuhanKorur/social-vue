<script setup lang="ts">
const { platforms, togglePlatform } = useSocialStore();
interface Props {
  label?: string
}

withDefaults(defineProps<Props>(), {
  label: 'Platforms',
})

const handleClick = (e) => {
  if(e.healthy) {
    togglePlatform(e.key)
  }
  return
}
</script>

<template>
<div>
  <ULabel>{{ label }}</ULabel>
  <div class="flex flex-col space-y-1.5">
    <PlatformItem v-for="platform in platforms"
                  :key="platform.id"
                  :platform="platform"
                  @click="handleClick(platform)"
    />
  </div>
</div>
</template>
