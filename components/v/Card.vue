<template>
  <div class="border bg-card rounded flex flex-col">
    <div v-if="$slots.header" class="px-4 py-3 border-b">
      <slot name="header"></slot>
    </div>
    <slot></slot>
  </div>
</template>
