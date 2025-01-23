<template>
  <div
    class="antialiased flex flex-col items-center justify-center min-h-screen place-content-center sm:text-base w-5/6 min-w-80 mx-auto"
  >
    <SimpleHeader />
    <div class="w-full flex-grow col-span-4 col-start-2">
      <slot />
    </div>
    <SimpleFooter />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
