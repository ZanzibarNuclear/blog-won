<template>
  <div class="grid grid-cols-6 px-4 min-w-96">
    <header class="app-header fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-10">
      <div class="max-w-7xl mx-auto mt-4 px-4 py-3 flex items-center relative">
        <NuxtLink to="https://worldofnuclear.com">
          <NuxtImg src="/images/logo-sq-smooth.jpg" alt="World of Nuclear Logo" class="w-12 h-12 -mt-4" />
        </NuxtLink>
        <h1
          class="absolute left-1/2 -translate-x-1/2 text-x3l font-bold text-[nuclear-blue] bg-[#f6f2eb]/30 backdrop-blur-sm rounded-lg p-1">
          World of Nuclear
        </h1>
      </div>

      <nav>
        <div class="mt-7 ml-4">
          <UButton icon="i-ph-list" color="gray" variant="ghost" @click="isOpen = true" />
        </div>
        <UModal v-model="isOpen">
          <UCard>
            <div v-for="item in sections" :key="item._path" class="mx-5 p-2 hover:bg-blue-200 rounded-md">
              {{ item.icon }}
              <NuxtLink :to="item._path">{{ item.title }}</NuxtLink>
            </div>
          </UCard>
        </UModal>
      </nav>
    </header>
    <div class="w-full col-span-4 col-start-2 mt-[100px]">
      <slot />
      <div class="grid grid-cols-2 mt-24 mb-28">
        <div class="text-center">
          <NuxtLink v-if="prev" :to="prev._path">⬅ {{ prev.title }}</NuxtLink>
        </div>
        <div class="text-center">
          <NuxtLink v-if="next" :to="next._path"> {{ next.title }} ➡</NuxtLink>
        </div>
      </div>
    </div>
    <footer class="p-4 w-full rounded-xl col-span-6">
      <div class="text-center">©2024 Nuclear Ambitions LLC</div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
const { navigation, next, prev } = useContent()
const sections = computed(() => navigation.value)
const menuItems = computed(() => {
  return navigation.value.map((item) => ({
    icon: item.icon,
    label: item.title,
    to: item._path,
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

.app-header {
  transition: top 0.3s;
  position: fixed;
  top: 0;
  width: 100%;
  height: 75px;
  z-index: 10;

  background-image: url('/images/lush-landscape-1024x100.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>