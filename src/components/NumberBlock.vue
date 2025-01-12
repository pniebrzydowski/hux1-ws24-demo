<script setup lang="ts">
import { useGameStore } from '@/store/game'
import { isValidSudokuNumber } from '@/utils/isValidSudokuNumber'
const gameStore = useGameStore()
const props = defineProps<{
  sudokuBlockNumber: number
  numberBlockNumber: number
}>()
const x = props.sudokuBlockNumber - 1
const y = props.numberBlockNumber - 1
const blockNumber = gameStore.initialBoard?.[x][y] ?? ''

/**
 * <input type="number"> allows . and - for negative and decimal numbers
 * this prevents anything other than valid sudoku numbers (1-9) from being entered
 * Backspace is preserved to allow removal; arrows to allow cycling through numbers
 */
const preventSpecialChars = ($event: KeyboardEvent) => {
  if (['Backspace', 'ArrowUp', 'ArrowDown', 'Tab'].includes($event.key)) return
  if ($event.key === '.' || $event.key === '-' || !isValidSudokuNumber(+$event.key)) {
    $event.preventDefault()
  }
}

/**
 * if the input is an invalid Sudoku entry, convert it to empty
 * if the input is a valid number, replace the previous entry with it
 */
const adjustNumber = ($event: Event) => {
  const inputValue = ($event.target as HTMLInputElement).value
  const lastNumber = Number(inputValue[inputValue.length - 1])
  gameStore.boardInput[x][y] = isValidSudokuNumber(lastNumber) ? lastNumber : null
}
</script>

<template>
  <div class="number-block">
    <span class="static-number" v-if="blockNumber">{{ blockNumber }}</span>
    <input
      v-else
      type="number"
      min="1"
      max="9"
      v-model="gameStore.boardInput[x][y]"
      @input="adjustNumber"
      @keydown="preventSpecialChars"
    />
  </div>
</template>

<style scoped>
.number-block {
  border: 1px solid #444;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

input,
.static-number {
  display: block;
  text-align: center;
  font-size: 2em;
}

input {
  background: transparent;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 0;
  appearance: none;
  color: #077;
  font-weight: bold;
}

.input:focus {
  background-color: rgb(228, 255, 255);
}
input::-webkit-inner-spin-button,
input::-webkit-outer-spin-button {
  -webkit-appearance: none;
}
</style>
