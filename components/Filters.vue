<script setup lang="ts">
const socialStore = useSocialStore();
const searchStore = useSearchStore();
const query = ref('')
</script>

<template>
<div class="bg-white border rounded-md shadow-sm p-4">
  <ULabel size="lg">Filters</ULabel>
  <div class="pt-1 space-y-2">
    <USearch v-model="query"/>
    <PlatformToggle  />
    <URadio label="Sort By"
            :options="socialStore.sortOptions.by"
            v-model="socialStore.sort.by"
    />
    <URadio label="Sort Order"
            :options="socialStore.sortOptions.order"
            v-model="socialStore.sort.order"
    />
  </div>
  <UBtn variant="primary" size="lg" class="w-full mt-4">
    <div class="flex items-center space-x-2">
      <span class="text-base text-background font-semibold">Search</span>
      <Icon name="formkit:submit" class="text-background" />
    </div>
  </UBtn>
</div>
</template>
