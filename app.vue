<script setup lang="ts">
</script>
<template>
  <div class="bg-background text-foreground">
    <NuxtRouteAnnouncer />
    <div class="container max-w-screen-lg min-h-svh w-full">
      <Navbar />
      <UiAlert />
      <div class="flex">
        <Filters class="w-[30%]"/>
        <PostsGrid class="w-[70%]"/>
      </div>
    </div>
  </div>
</template>
