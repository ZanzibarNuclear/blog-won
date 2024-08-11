<template>
  <header><p class="text-center font-bold text-slate-400">Basic Layout</p></header>
  <nav class="w-1/3 mx-auto">
    <div v-for="item in navigation" :key="item._path" class="font-bold">{{item.title}}
      <ul v-if="item.children" class="font-normal">
        <li v-for="child in item.children"><NuxtLink :to="child._path">{{ child.title }}</NuxtLink></li>
      </ul>
    </div>
  </nav>
  <div>
    <slot />
  </div>
  <div class="grid grid-cols-2 mt-24 mb-28">
    <div v-if="before" class="text-center"><< <NuxtLink :to="before._path">{{ before.title }}</NuxtLink></div>
    <div v-else></div>
    <div v-if="after" class="text-center"><NuxtLink :to="after._path">{{ after.title }}</NuxtLink> >></div>
    <div v-else></div>
  </div>
  <footer>
    <div class="text-center">©2024 Nuclear Ambitions LLC</div>
  </footer>
</template>

<script lang="ts" setup>
const { navigation, page, surround } = useContent()

console.log('page\n', page.value)
console.log('navigation\n', navigation.value)
console.log('surround\n', surround.value)

const before = computed(() => {
  return surround.value[0]
})
const after = computed(() => {
  return surround.value[1]
})
</script>

<style>
h1 {
  font-size: 2.0rem;
}
ul {
  list-style: disc inside;
}
</style>