<script setup lang="ts">
</script>
<template>
  <div class="bg-background text-foreground">
    <NuxtLoadingIndicator />
    <NuxtRouteAnnouncer/>
    <div class="container max-w-screen-xl min-h-svh w-full">
      <Navbar/>
      <div :class="[
        'flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2',
        'md:[&>#filters]:w-[30%] lg:[&>#filters]:w-[25%]',
        'md:[&>#search]:w-[70%] lg:[&>#search]:w-[75%]',
      ]">
        <div id="filters">
          <Filters class="flex"/>
        </div>
        <SocialSearch id="search"/>
      </div>
    </div>
  </div>
</template>
