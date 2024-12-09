<script setup lang="ts">
import SudokuBlock from './SudokuBlock.vue'
const { gameId } = defineProps<{
  gameId: number
}>()
</script>

<template>
  <h2>Game Id: {{ gameId }}</h2>
  <div class="board">
    <SudokuBlock v-for="n in 9" :key="n" />
  </div>
</template>

<style scoped>
.board {
  display: grid;
  width: calc(100vmin - 4rem);
  height: calc(100vmin - 4rem);
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
}
</style>
