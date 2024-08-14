<template>
  <div class="grid grid-cols-4 gap-4 px-4 pb-4">
    <header class="pb-4 w-full rounded-xl col-span-4">
      <NuxtImg src="/images/WoN-title-banner-v3.jpg" />
    </header>
    <nav class="px-4 w-full rounded-xl">
      <div v-for="item in navigation" :key="item._path" class="font-bold mt-4">
        <NuxtLink :to="item._path">{{ item.title }}</NuxtLink>
      </div>
    </nav>
    <div class="p-4 w-full rounded-xl col-span-3">
      <slot />
      <div class="grid grid-cols-2 mt-24 mb-28">
        <div v-if="before" class="text-center">
          << <NuxtLink :to="before._path">{{ before.title }}</NuxtLink>
        </div>
        <div v-else></div>
        <div v-if="after" class="text-center">
          <NuxtLink :to="after._path">{{ after.title }}</NuxtLink> >>
        </div>
        <div v-else></div>
      </div>
    </div>
    <footer class="p-4 w-full rounded-xl col-span-4 mt-28 mb-16">
      <div class="text-center">©2024 Nuclear Ambitions LLC</div>
    </footer>
  </div>

</template>

<script lang="ts" setup>
const { navigation, page, surround } = useContent()

console.log('page\n', page.value)
console.log('navigation\n', navigation.value)
console.log('surround\n', surround.value)

const before = computed(() => {
  return surround.value ? surround.value[0] : null
})
const after = computed(() => {
  return surround.value ? surround.value[1] : null
})
</script>

<style>
h1 {
  margin-top: 1.0rem;
  margin-bottom: 0.5rem;
}

p {
  margin: 1.0rem 0;
}
</style>