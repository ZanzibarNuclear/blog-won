<template>
  <div>
    <div v-for="page in justPosts" :key="page.path" class="p-2 my-2 border border-heroic-black">
      {{ page.date }}
      <NuxtLink :to="page.path">{{ page.title }}</NuxtLink>
      <div class="text-sm py-2 text-uranium-orange dark:text-uranium-ore-bright">
        {{ page.description }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()

console.log(route)
const { data: posts } = await useAsyncData(route.path, () =>
  queryCollection('content')
    .select('title', 'description', 'path', 'id', 'date')
    .where('path', 'LIKE', route.path + '%')
    .order('date', 'DESC')
    .all(),
)
const justPosts = computed(() => {
  return posts.value?.filter((post) => post.path != route.path)
})
</script>
