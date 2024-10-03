<template>
<div class="border bg-card rounded-md flex flex-col">
  <template v-if="$slots.header">
    <div class="px-4 py-3.5 border-b">
      <slot name="header"></slot>
    </div>
  </template>
  <slot></slot>
</div>
</template>
