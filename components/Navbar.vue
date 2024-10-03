<script setup lang="ts">
import { setTheme } from '@/utils/helpers'
const app = useAppStore()
const themeIcon = ref('ph:sun')
const viewIcon = ref('ph:grid-four')

onMounted(() => {
  setTheme(app.isDark)
  setThemeIcon()
  setViewIcon()
})

const handleThemeToggle = () => {
  app.toggleTheme()
  setTheme(app.isDark)
  setThemeIcon()
}

const handleViewToggle = () => {
  app.toggleView()
  setViewIcon()
}

const setThemeIcon = () => themeIcon.value = app.isDark ? 'ph:moon' : 'ph:sun'
const setViewIcon = () => viewIcon.value = app.isGridView ? 'ph:grid-four' : 'ph:list-bullets'
</script>
<template>
<div class="flex items-center justify-between pt-4 pb-2 border-b mb-2">
  <h1 class="text-2xl font-medium">{{ app.name }}</h1>
  <div class="flex space-x-2">
    <UBtn :icon="viewIcon" @click="handleViewToggle" />
    <UBtn :icon="themeIcon" @click="handleThemeToggle" />
    <UBtn icon="uiw:github" link="https://github.com/BatuhanKorur" target="_blank" />
  </div>
</div>
</template>
