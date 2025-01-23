<template>
  <nav
    class="dark:bg-heroic-graphite bg-heroic-uranium text-heroic-navy dark:text-nuclear-600 px-4 py-2"
  >
    <!-- Desktop Navigation -->
    <div class="flex justify-between items-center">
      <UButton
        class="md:hidden block pt-2"
        @click="toggleMenu"
        aria-label="Toggle Menu"
        icon="i-ph-list-duotone"
        variant="ghost"
        size="xl"
      />
      <div
        class="hidden md:flex md:items-center mx-auto justify-between space-x-4"
        v-if="!isMobileMenuOpen"
      >
        <MenuItem
          v-for="item in navigation"
          :icon="item.icon"
          :label="item.title"
          :route="item.path"
        />
        <DarkToggle />
      </div>
    </div>

    <!-- Mobile Navigation -->
    <transition name="fade">
      <div
        v-show="isMobileMenuOpen"
        class="md:hidden flex flex-col mt-4 space-y-2 dark:bg-heroic-graphite bg-heroic-uranium p-4 rounded"
      >
        <MenuItem
          v-for="item in navigation"
          :icon="item.icon"
          :label="item.title"
          :route="item.path"
          @picked-item="closeMenu"
        />
        <DarkToggle />
      </div>
    </transition>
  </nav>
</template>

<script setup lang="ts">
const isMobileMenuOpen = ref(false)

function toggleMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

function closeMenu() {
  isMobileMenuOpen.value = false
}

const { data: navigation } = await useAsyncData('navigation', () => {
  return queryCollectionNavigation('content')
})
</script>

<style scoped></style>
