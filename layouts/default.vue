<template>
  <div
    class="antialiased flex flex-col items-center justify-center min-h-screen place-content-center sm:text-base w-5/6 min-w-80 mx-auto"
  >
    <header>
      <div
        class="flex flex-grow-0 items-center justify-around bg-heroic-uranium dark:bg-heroic-graphite shadow-lg dark:shadow-cherenkov my-4"
      >
        <NuxtImg
          src="/images/logo/logo-cherenkov-clear-bg.png"
          alt="World of Nuclear Logo"
          class=""
        />
        <div class="ml-auto pr-4"><DarkToggle /></div>
      </div>
      <div>
        <nav
          class="flex justify-between items-center px-6 py-3 bg-heroic-uranium dark:bg-heroic-graphite text-heroic-lightgray"
        >
          <MenuItem
            v-for="item in menuItems"
            :icon="item.icon"
            :label="item.label"
            :route="item.route"
          />
        </nav>
      </div>
    </header>
    <div class="w-full col-span-4 col-start-2">
      <slot />
      <div class="grid grid-cols-2 mt-24 mb-28">
        <div class="text-center">
          <NuxtLink
            v-if="prev"
            :to="prev._path"
            class="dark:text-nuclear-400 dark:hover:text-nuclear-200"
            >⬅ {{ prev.title }}</NuxtLink
          >
        </div>
        <div class="text-center">
          <NuxtLink
            v-if="next"
            :to="next._path"
            class="dark:text-nuclear-400 dark:hover:text-nuclear-200"
          >
            {{ next.title }} ➡</NuxtLink
          >
        </div>
      </div>
    </div>
    <SimpleFooter />
  </div>
</template>

<script lang="ts" setup>
const { navigation, next, prev } = useContent()
const menuItems = computed(() => {
  return navigation.value.map((item) => ({
    icon: item.icon,
    label: item.title,
    route: item._path,
  }))
})
const isOpen = ref(false)
</script>

<style scoped>
.logo {
  position: relative;
  z-index: 1;
}

.title-bar {
  position: relative;
  z-index: 0;
}

.logo-above {
  position: absolute;
  top: -10px;
  left: 20px;
  z-index: 1;
}

.logo-container {
  position: relative;
}
</style>
