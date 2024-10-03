<script setup lang="ts">
const isOpen = ref(true)
const searchStore = useSearchStore()
const activeFilters = reactive({})

function handleSort(type: string, key: string) {
  searchStore.setFilters(type, key)
  searchStore.applyFilters()
  updateActiveFilters()
}

const updateActiveFilters = () => {
  activeFilters.sortBy = searchStore.getFilters.sortBy
  activeFilters.sortOrder = searchStore.getFilters.sortOrder
}

onMounted(() => {
  updateActiveFilters()
})

</script>

<template>
  <VCard>
    <template #header>
      <div class="flex items-center justify-between">
        <VLabel label="Filters" size="lg"/>
        <VIconButton size="sm"
                     icon="ph:arrow-circle-down"
                     :iconClass="isOpen ? 'rotate-180' : 'rotate-0'"
                     @click="isOpen = !isOpen"/>
      </div>
    </template>
    <div v-if="isOpen && activeFilters" class="px-3 pt-2 pb-4 space-y-3">
      <VListToggle label="Sort By"
                   :options="searchStore.getSortOptions.sortBy"
                   :active-key="activeFilters.sortBy"
                   @toggle="(key) => handleSort('sortBy', key)"/>
      <VListToggle label="Sort Order"
                   :options="searchStore.getSortOptions.sortOrder"
                   :active-key="activeFilters.sortOrder"
                   @toggle="(key) => handleSort('sortOrder', key)"
      />
    </div>
  </VCard>
</template>
