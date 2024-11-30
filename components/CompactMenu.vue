<template>
  <nav>
    <div class="mt-7 ml-4">
      <UButton icon="i-ph-list" color="gray" variant="ghost" @click="isOpen = true" />
    </div>
    <UModal v-model="isOpen">
      <UCard>
        <UVerticalNavigation :links="links" @click="isOpen = false" />
      </UCard>
    </UModal>
  </nav>
</template>

<script setup lang="ts">
const isOpen = ref(false)

defineProps<{
  links: { label: string; icon: string; to: string }[]
}>()
</script>

<style scoped></style>