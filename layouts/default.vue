<template>
  <div class="grid grid-cols-6 px-4">
    <header class="p-4 w-full rounded-xl col-span-6">
      <div class="text-center font-bold text-3xl text-slate-400 border-t-2 border-b-2">World of Nuclear Blog & News
      </div>
      <nav class="text-center my-6">
        <span v-for="item in sections" :key="item._path" class="mx-5 p-2 hover:bg-blue-200 rounded-md">
          {{ item.icon }}
          <NuxtLink :to="item._path">{{ item.title }}</NuxtLink>
        </span>
      </nav>
    </header>
    <div class="w-full col-span-4 col-start-2">
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
    <footer class="p-4 w-full rounded-xl col-span-6">
      <div class="text-center">©2024 Nuclear Ambitions LLC</div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
const { navigation, page, surround } = useContent()

console.log('page\n', page.value)
console.log('navigation\n', navigation.value)
console.log('surround\n', surround.value)

const sections = computed(() => {
  return navigation.value
})
const before = computed(() => {
  return surround.value ? surround.value[0] : null
})
const after = computed(() => {
  return surround.value ? surround.value[1] : null
})
</script>

<style></style>