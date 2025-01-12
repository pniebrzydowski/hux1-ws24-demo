import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

const initialBoardArray = Array.from({ length: 9 }).map(() =>
  Array.from({ length: 9 }).map(() => null),
)

type BoardNumbers = (number | null)[][]

export const useGameStore = defineStore('game', () => {
  const initialBoard = ref<BoardNumbers>(initialBoardArray)
  const boardInput = ref<BoardNumbers>(initialBoardArray)
  const difficultyLevel = ref(1)
  const difficultyLabel = computed(() => {
    switch (difficultyLevel.value) {
      case 1:
        return 'easy'
      case 2:
        return 'medium'
      case 3:
        return 'hard'
      default:
        return 'unknown'
    }
  })

  return {
    initialBoard,
    boardInput,
    difficultyLevel,
    difficultyLabel,
  }
})
