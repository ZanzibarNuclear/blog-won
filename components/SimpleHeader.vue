<template>
  <header>
    <div
      class="flex flex-grow-0 items-center justify-around bg-heroic-uranium dark:bg-heroic-graphite shadow-lg dark:shadow-cherenkov my-4"
    >
      <NuxtImg src="/images/logo/logo-cherenkov-clear-bg.png" alt="World of Nuclear Logo" />
      <div class="ml-auto pr-4">
        <UButton
          icon="i-ph-globe-hemisphere-west-duotone"
          to="https://worldofnuclear.com"
          square
          variant="ghost"
          size="xl"
        />
      </div>
    </div>
    <NavigationMenu />
  </header>
</template>

<script setup lang="ts"></script>
