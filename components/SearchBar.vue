<script setup lang="ts">
const {platforms, togglePlatform} = useSearchStore()
const props = defineProps<{
  loading: boolean
}>()

const query = ref('lego')
const emits = defineEmits(['search'])
const handleSearch = () => {
  if (query.value.trim() === '' && loading) return
  emits('search', query.value)
}

const canSubmit = computed(() => query.value.trim() !== '')
</script>

<template>
  <VCard class="p-3">
    <div class="flex items-center border rounded-md">
      <input type="search"
             v-model="query"
             placeholder="Search a keyword"
             class="grow focus:outline-none bg-transparent mr-4 px-4 py-2"
      />
      <div
        @click="handleSearch"
        :class="[
          'size-7 rounded-full flex items-center justify-center cursor-pointer',
          'transition duration-200 mr-2 hover:opacity-80',
          '[&>span]:text-foreground',
          canSubmit ? 'bg-accent' : 'bg-accent/30 [&>span]:opacity-50 cursor-not-allowed',
          ]">
        <UIcon :name="loading ? 'line-md:loading-twotone-loop' : 'ph:magnifying-glass-bold'"/>
      </div>
    </div>
    <div class="space-x-1">
      <VBadge v-for="platform in platforms"
              :icon="platform.icon"
              :label="platform.label"
              :active="platform.active"
              @click="togglePlatform(platform.key)"/>
    </div>
  </VCard>
</template>
