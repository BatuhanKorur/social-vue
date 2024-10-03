<script setup lang="ts">
const query = ref('')
const emits = defineEmits(['search'])
const handleSearch = () => {
  if(query.value.trim() === '') return
  emits('search', query.value)
}
</script>

<template>
  <UCard class="flex items-center p-2 h-14">
    <input type="search"
           v-model="query"
           placeholder="Search a keyword"
           class="grow pl-2 focus:outline-none pr-2"
    />
    <UBtn icon="ph:magnifying-glass"
          variant="primary"
          :disabled="query.trim() === ''"
          @click="handleSearch"
    />
  </UCard>
</template>
