<template>
  <div>
    <p v-for="item in head">{{ item }}</p>
  </div>
</template>

<script setup lang="ts">
const { page } = useContent()
const head = useContentHead(page.value)
console.log(page.value)
</script>

<style scoped></style>