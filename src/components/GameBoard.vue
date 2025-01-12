<script setup lang="ts">
import { transformArray } from '@/utils/transformArray'
import SudokuBlock from './SudokuBlock.vue'
import { useGameStore } from '@/store/game'

const gameStore = useGameStore()
const url = 'https://sugoku.onrender.com/board?difficulty=easy'
const res = await fetch(url)
const data = await res.json()
gameStore.initialBoard = transformArray(data.board)
gameStore.boardInput = gameStore.initialBoard.map((row) =>
  row.map((column) => (column === 0 ? null : column)),
)
</script>

<template>
  <div class="board">
    <SudokuBlock v-for="n in 9" :key="n" :block-number="n" />
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
