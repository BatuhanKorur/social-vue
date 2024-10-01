<script setup lang="ts">
import {HealthStatus} from "~/types";

const loaded = ref(false)
const error = ref('')
const { setUnhealthyPlatforms } = useSocialStore()
onMounted(async() => {
  try {
    const { data } = await useAsyncData(() => $fetch('/api/health'))
    if(data.value.status === HealthStatus.ERROR) {
      error.value = data.value.message
    }
    if(data.value.status === HealthStatus.WARN) {
      setUnhealthyPlatforms(data.value.keys)
    }
  } catch (e) {
    error.value = e.message
  } finally {
    loaded.value = true
  }
})
</script>
<template>
  <div class="bg-background text-foreground">
    <NuxtRouteAnnouncer />
    <div class="container max-w-screen-lg min-h-svh w-full">
      <Navbar />
      <template v-if="loaded">
        <UAlert v-if="error" :error="error"/>
        <div class="flex space-x-3">
          <Filters class="w-[30%]"/>
          <PostsGrid class="w-[70%]"/>
        </div>
      </template>
      <template v-else>
        <div class="flex items-center justify-center py-24">
          <Icon name="eos-icons:loading" class="size-6"/>
        </div>
      </template>
    </div>
  </div>
</template>
