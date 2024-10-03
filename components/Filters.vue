<script setup lang="ts">
// const socialStore = useSocialStore();
// const searchStore = useSearchStore();
// const query = ref('')
//
// const handleSearch = async () => {
//   const opts = socialStore.getSearchOptions()
//   const resp = await useFetch('/api/search', { ...opts, query: query.value })
//   console.log(resp)
// }
</script>

<template>
<div>
  <UCard class="p-4">
    <ULabel size="lg">Filters</ULabel>
<!--    <PlatformToggle  />-->
<!--    <URadio label="Sort By"-->
<!--            :options="socialStore.sortOptions.by"-->
<!--            v-model="socialStore.sort.by"-->
<!--    />-->
<!--    <URadio label="Sort Order"-->
<!--            :options="socialStore.sortOptions.order"-->
<!--            v-model="socialStore.sort.order"-->
<!--    />-->
<!--  </UCard>-->
  </UCard>
</div>
</template>
