<script setup lang="ts">
// import { HealthStatus } from "@/types";
// const { setUnhealthyPlatforms } = useSocialStore()
// const loaded = ref(false)
// const error = ref('')
//
// onMounted(async() => {
//   try {
//     const { data } = await useAsyncData(() => $fetch('/api/health'))
//     if(data.value.status === HealthStatus.ERROR) {
//       error.value = data.value.message
//     }
//     if(data.value.status === HealthStatus.WARN) {
//       setUnhealthyPlatforms(data.value.keys)
//     }
//   } catch (e) {
//     error.value = e.message
//   } finally {
//     loaded.value = true
//   }
// })
import SocialSearch from "~/components/SocialSearch";
</script>
<template>
  <NuxtLoadingIndicator/>
  <div class="bg-background text-foreground">
    <NuxtRouteAnnouncer/>
    <div class="container max-w-screen-xl min-h-svh w-full">
      <Navbar/>
      <div class="flex space-x-2">
        <Filters class="w-[30%]"/>
        <SocialSearch class="w-[70%]"/>
      </div>
    </div>
    <!--    <div class="container max-w-screen-xl min-h-svh w-full">-->
    <!--      <Navbar />-->
    <!--      <template v-if="loaded">-->
    <!--        <UAlert v-if="error" :error="error"/>-->
    <!--        <div class="flex space-x-2">-->
    <!--          <Filters class="w-1/4"/>-->
    <!--          <PostsGrid class="w-3/4"/>-->
    <!--        </div>-->
    <!--      </template>-->
    <!--      <template v-else>-->
    <!--        <div class="flex items-center justify-center py-24">-->
    <!--          <Icon name="eos-icons:loading" class="size-6"/>-->
    <!--        </div>-->
    <!--      </template>-->
    <!--    </div>-->
  </div>
</template>
