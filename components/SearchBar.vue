<script setup lang="ts">
const searchStore = useSearchStore()
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
    <div class="flex items-center border rounded-md h-10">
      <input type="search"
             v-model="query"
             placeholder="Search a keyword"
             class="grow focus:outline-none bg-transparent px-3"
      />
      <div
        @click="handleSearch"
        :class="[
          'h-full w-10 flex items-center justify-center cursor-pointer rounded-r text-white',
          'transition duration-200 ease-in-out hover:opacity-90',
          canSubmit ? 'bg-accent' : 'bg-accent/30 [&>span]:opacity-50 cursor-not-allowed',
          ]">
        <UIcon :name="loading ? 'line-md:loading-twotone-loop' : 'ph:magnifying-glass-bold'"/>
      </div>
    </div>
    <div class="space-x-1 mt-2">
      <VBadge v-for="platform in searchStore.platforms"
              :icon="platform.icon"
              :label="platform.label"
              :active="searchStore.getActivePlatforms.includes(platform.key)"
              @click="searchStore.togglePlatform(platform.key)"/>
    </div>
  </VCard>
</template>
