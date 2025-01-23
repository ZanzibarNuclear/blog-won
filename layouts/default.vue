<template>
  <div
    class="antialiased flex flex-col items-center justify-center min-h-screen place-content-center sm:text-base w-5/6 min-w-80 mx-auto"
  >
    <SimpleHeader />
    <div class="w-full flex-grow col-span-4 col-start-2">
      <slot />
    </div>
    <div class="grid grid-cols-2 mt-24 mb-28">
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
    <SimpleFooter />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const { data: surround } = await useAsyncData('surround', () => {
  return queryCollectionItemSurroundings('content', route.fullPath)
})
console.log('surround: ', surround.value)
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

<style scoped></style>
