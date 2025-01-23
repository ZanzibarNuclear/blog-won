<template>
  <div>
    <div
      v-for="page in posts"
      :key="page.path"
      class="p-2 my-2 border border-nuclear-800 bg-heroic-uranium hover:bg-nuclear-300"
    >
      <NuxtLink class="item-plain-anchor" :to="page.path">{{ page.title }}</NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps(['sectionName'])

const { data: posts } = await useAsyncData('section-content', () =>
  queryCollection('content').path(props.sectionName).all(),
)
</script>
