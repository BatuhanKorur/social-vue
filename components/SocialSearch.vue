<script setup lang="ts">
import {ApiStatus} from "~/types";
const appStore = useAppStore()
const searchStore = useSearchStore()
const error = ref(null)

const { isLoading, start, finish} = useLoadingIndicator({
  duration: 2000,
  throttle: 200,
})

async function fetchData(query: string) {
  start()
  error.value = null
  try {
    const res = await $fetch('/api/search', {
      method: 'POST',
      body: {
        query,
        options: searchStore.getSearchOptions,
      }
    })
    if(res.status === ApiStatus.OK){
      searchStore.setSearchResults(res.data)
    } else if(res.status === ApiStatus.ERROR) {
      error.value = res
      throw new Error(error.value.error)
    }
  } catch (e) {
    console.error(e)
  } finally {
    finish()
  }
}

</script>
<template>
  <div>
    <SearchBar :loading="isLoading" @search="fetchData" class="mb-2"/>
    <UAlert
      v-if="error"
      :title="error.message"
      :description="error.error?.message"
      class="bg-red-background border border-red text-red-foreground"
      icon="mdi:alert-octagon"
    />
    <div :class="{
      'grid grid-cols-1 md:grid-cols-2 gap-2': appStore.isGridView,
      'flex flex-col space-y-2': !appStore.isGridView
    }">
      <PostCard v-for="post in searchStore.searchResults"
                :key="post.id"
                :is-grid="appStore.isGridView"
                :data="post"
      />
    </div>
  </div>
</template>
