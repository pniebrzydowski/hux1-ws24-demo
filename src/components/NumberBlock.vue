<script setup lang="ts">
const { squareIndex } = defineProps<{
  squareIndex: number
}>()
</script>

<template>
  <div class="number-block">{{ squareIndex }}</div>
</template>

<style scoped>
.number-block {
  border: 1px solid red;
  height: 24px;
  width: 24px;
}
</style>
