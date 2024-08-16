<template>
  <nav class="mt-20">
    <div class="font-bold text-slate-600">On this page</div>
    <ul v-if="toc && toc.links" class="mx-auto">
      <li v-for="link in toc.links" :key="link.text" class="my-4 list-none">
        <a :href="`#${link.id}`">
          {{ link.text }}
        </a>
        <ul v-if="link.children">
          <li v-for="child in link.children" :key="child.text" class="list-none ml-4 my-0">{{ child.text }}</li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const { toc } = useContent()
console.log('toc', toc.value)
</script>
<style></style>
