<script setup lang="ts">
const isOpen = ref(true)
const searchStore = useSearchStore()

const handleSortBy = (key: string) => {
  searchStore.setSortBy(key)
  searchStore.sortResults()
}

const handleSortOrder = (key: string) => {
  searchStore.setSortOrder(key)
  searchStore.sortResults()
}

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
    <div v-if="isOpen" class="px-3 pt-2 pb-4 space-y-3">
      <VListToggle label="Sort By"
                   :options="searchStore.sortOptions.by"
                   :active-key="searchStore.sort.by"
                   @toggle="handleSortBy"/>
      <VListToggle label="Sort Order"
                   :options="searchStore.sortOptions.order"
                   :active-key="searchStore.sort.order"
                   @toggle="handleSortOrder"
      />
    </div>
  </VCard>
</template>
