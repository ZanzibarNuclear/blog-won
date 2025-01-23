<script lang="ts" setup>
const { data: posts } = await useAsyncData(() => {
  return queryCollection('content')
    .select('title', 'description', 'path', 'id', 'date')
    .order('date', 'DESC')
    .all()
})
</script>

<template>
  <div>
    <h1>Table of Contents</h1>
    <div class="italic">In no particular order...</div>
    <p v-for="post in posts" :key="post.id">
      <nuxt-link :to="post.path">
        <strong>{{ post.title }}</strong>
      </nuxt-link>

      &nbsp;{{ post.description }}
    </p>
  </div>
</template>
