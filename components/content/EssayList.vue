<template>
  <div>
    <div v-for="essay in essays" :key="essay._path" class="p-2 my-2 border border-blue-800 hover:bg-blue-300">
      <NuxtLink :to="essay._path">{{ essay.title }}</NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { navigation } = useContent()
console.log(navigation.value);
const essayListIndex = navigation.value.findIndex(item => item._path === '/essays')
const essays = computed(() => {
  return navigation.value[essayListIndex].children
})
</script>

<style></style>