<template>
  <NuxtImg :src="src" :alt="alt" :title="title" :width="width" :sizes="sizes" :class="imageClass" />
  <div style="clear"></div>
</template>

<script lang="ts" setup>
const props = defineProps(['src', 'alt', 'title', 'width', 'sizes', 'float'])
const imageClass = computed(() => {
  if (props.float === 'left') {
    return { left: true }
  } else if (props.float === 'right') {
    return { right: true }
  }
})
</script>

<style scoped>
.left {
  float: left;
  margin-right: 2rem;
}

.right {
  float: right;
  margin-left: 2rem;
}
</style>