<script setup lang="ts">
import postUtils from "~/utils/postUtils";
interface Props {
  data: any
}
const props = defineProps<Props>()

const lol = postUtils.prepareTwitterPost(props.data)
console.log(lol)
</script>

<template>
<UCard shadowless>
  <div v-if="lol">
    <p>Post Item</p>
    <p>{{ lol }}</p>
  </div>
</UCard>
</template>
