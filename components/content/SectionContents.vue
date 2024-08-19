<template>
  <div>
    <div v-for="page in sectionPages" :key="page._path" class="p-2 my-2 border border-blue-800 hover:bg-blue-300">
      <NuxtLink class="item-plain-anchor" :to="page._path">{{ page.title }}</NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { navigation } = useContent()
const props = defineProps(['sectionName'])

console.log(navigation.value);

const pagesListIndex = navigation.value.findIndex(item => item.title === props.sectionName)
const sectionPages = computed(() => {
  return navigation.value[pagesListIndex].children.filter(page => page.title !== props.sectionName)
})
</script>
