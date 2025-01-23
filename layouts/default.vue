<template>
  <div
    class="antialiased flex flex-col items-center justify-center min-h-screen place-content-center sm:text-base"
  >
    <div class="min-w-80 w-5/6 mx-auto">
      <SimpleHeader />
      <div class="w-full flex-grow col-span-4 col-start-2">
        <slot />
      </div>
      <SimpleFooter />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
