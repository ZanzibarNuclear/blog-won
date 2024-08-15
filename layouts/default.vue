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
        <div class="text-center">
          <NuxtLink v-if="prev" :to="prev._path">⬅ {{ prev.title }}</NuxtLink>
        </div>
        <div class="text-center">
          <NuxtLink v-if="next" :to="next._path"> {{ next.title }} ➡</NuxtLink>
        </div>
      </div>
    </div>
    <footer class="p-4 w-full rounded-xl col-span-6">
      <div class="text-center">©2024 Nuclear Ambitions LLC</div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
const { navigation, page, surround, next, prev } = useContent()
const sections = computed(() => {
  return navigation.value
})
</script>

<style></style>