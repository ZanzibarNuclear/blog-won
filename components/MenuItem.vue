<template>
  <div>
    <!-- Main Menu Item -->
    <UButton
      @click="onClick"
      :label="label"
      :icon="icon"
      variant="outline"
      class="px-4 py-2 rounded-lg"
    >
    </UButton>
  </div>
</template>

<script setup>
const props = defineProps({
  icon: {
    type: String,
  },
  label: {
    type: String,
  },
  route: {
    type: String,
  },
})
const emit = defineEmits(['pickedItem'])

const onClick = () => {
  console.log('clicked menu item ' + props.route)
  emit('pickedItem')
  navigateTo(props.route)
}
</script>

<style scoped>
/* Add custom styles if needed */
</style>
