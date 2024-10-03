<script setup lang="ts">
import { setTheme } from '@/utils'
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
<div class="flex items-center justify-between border-b mb-2 py-3">
  <h1 class="text-2xl font-medium">{{ app.name }}</h1>
  <div class="flex space-x-1.5 md:space-x-2">
    <VIconButton :icon="viewIcon" @click="handleViewToggle" />
    <VIconButton :icon="themeIcon" @click="handleThemeToggle" />
    <VIconButton icon="uiw:github" link="https://github.com/BatuhanKorur" target="_blank" />
  </div>
</div>
</template>
