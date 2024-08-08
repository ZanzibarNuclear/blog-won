<template>
  <ContentNavigation v-slot="{ navigation }" />
  <div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
</script>

<style>

</style>