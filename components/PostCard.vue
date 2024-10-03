<script setup lang="ts">
import {Post} from '@/types'
import { time } from '@/utils'
const props = defineProps<{
  data: Post,
  isGrid: boolean
}>()

const platformIcon = computed(() => {
  switch (props.data.platform) {
    case 'twitter':
      return 'logos:twitter'
    case 'facebook':
      return 'logos:facebook'
    case 'instagram':
      return 'skill-icons:instagram'
  }
})

const cardMenu = [
  [
    {
      label: 'Source',
      icon: 'majesticons:external-link-line',
    },
    {
      label: 'User',
      icon: 'ic:outline-account-circle',
    }
  ]
]
</script>

<template>
  <VCard>
    <div class="flex items-center justify-between p-2.5">
      <div class="flex items-center space-x-2">
        <UAvatar :src="data.user.profile_image"
                 :alt="data.user.name"/>
        <div>
          <p class="text-base font-[450]">{{ data.user.name }}</p>
          <p class="text-sm text-muted font-[450]">{{ data.user.handle }}</p>
        </div>
      </div>
      <UDropdown :items="cardMenu" :popper="{ placement: 'bottom-start' }">
        <VIconButton icon="tabler:dots" class="text-muted" size="sm"/>
      </UDropdown>
    </div>
    <div :class="['px-4', {
      'grow': isGrid,
    }]">
      <p class="text-base mb-2">{{ data.content }}</p>
      <UCarousel v-slot="{ item }" :items="data.media" arrows>
        <div class="h-72">
          <video v-if="item.type === 'video'"
                 :src="item.url"
                 class="w-full h-72"
                 controls
          />
          <img v-if="item.type === 'photo'"
               :src="item.url"
               alt="media"
               class="w-full h-72"
               draggable="false"
          />
        </div>
      </UCarousel>
    </div>
    <div class="flex items-center justify-between bg-muted-background/50 text-sm p-2 border-t mt-2">
      <div class="flex items-center space-x-1">
        <UIcon :name="platformIcon"/>
        <p>{{ time.pretty(data.created_at) }}</p>
      </div>
      <div class="flex space-x-3">
        <CountItem tip="Likes" icon="iconamoon:like-duotone" :count="data.likes"/>
        <CountItem tip="Replies" icon="iconamoon:comment-duotone" :count="data.comments"/>
        <CountItem tip="Shares / Retweets" icon="iconamoon:arrow-top-left-5-circle-duotone" :count="data.shares"/>
      </div>
    </div>
  </VCard>
</template>
