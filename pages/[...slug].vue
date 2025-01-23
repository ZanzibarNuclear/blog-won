<script lang="ts" setup>
const route = useRoute()
const { data: post } = await useAsyncData(() => {
  return queryCollection('content').path(route.path).first()
})
const { data: surround } = await useAsyncData('surround', () => {
  return queryCollectionItemSurroundings('content', route.path)
})
const prev = computed(() => {
  if (surround.value && surround.value[0]) {
    return surround.value[0]
  } else {
    return null
  }
})
const next = computed(() => {
  if (surround.value && surround.value[1]) {
    return surround.value[1]
  } else {
    return null
  }
})
</script>

<template>
  <div v-if="post">
    <h1>{{ post.title }}</h1>
    <ContentRenderer :value="post" />
  </div>
  <div v-else>
    <h2 class="text-center my-16 text-uranium-orange dark:text-uranium-orange">
      Post not found. Try another.
    </h2>
  </div>
  <div class="grid grid-cols-2 mt-24 mb-12">
    <UButton
      v-if="prev"
      variant="ghost"
      block
      :to="prev.path"
      icon="i-ph-arrow-left"
      :label="prev.title"
    />
    <div v-else class="text-center">
      <UIcon name="i-ph-hand-waving-duotone" class="text-2xl text-heroic-cherenkov" />
    </div>
    <UButton
      v-if="next"
      variant="ghost"
      block
      :to="next.path"
      trailing-icon="i-ph-arrow-right"
      :label="next.title"
    />
    <div v-else class="text-center">
      <UIcon name="i-ph-hand-waving-duotone" class="text-2xl text-heroic-cherenkov" />
    </div>
  </div>
</template>
