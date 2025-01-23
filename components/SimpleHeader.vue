<template>
  <header>
    <div
      class="flex flex-grow-0 items-center justify-around bg-heroic-uranium dark:bg-heroic-graphite shadow-lg dark:shadow-cherenkov my-4"
    >
      <NuxtImg src="/images/logo/logo-cherenkov-clear-bg.png" alt="World of Nuclear Logo" />
      <div class="ml-auto pr-4"><DarkToggle /></div>
    </div>
    <div>
      <nav
        class="flex justify-between space-x-2 items-center px-6 py-3 bg-heroic-uranium dark:bg-heroic-graphite text-heroic-lightgray"
      >
        <MenuItem
          v-for="item in navigation"
          :icon="item.icon"
          :label="item.title"
          :route="item.path"
        />
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
const { data: navigation } = await useAsyncData('navigation', () => {
  return queryCollectionNavigation('content')
})
</script>
