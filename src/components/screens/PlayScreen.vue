<script setup lang="ts">
import { useGameStore } from '@/store/game'
import ButtonLink from '../ButtonLink.vue'
import GameBoard from '../GameBoard.vue'
import GameInfo from '../GameInfo.vue'
import UserInfo from '../UserInfo.vue'
import { reverseTransformArray } from '@/utils/transformArray'
import { router } from '@/routing/router'

const gameStore = useGameStore()

const boardHasEmptyInputs = () => {
  console.log(gameStore.boardInput.map((a) => a))
  return gameStore.boardInput.some((row) => row.some((column) => !column))
}

const onSubmit = async () => {
  if (boardHasEmptyInputs()) {
    alert('You have not entered a number in all squares')
    return
  }

  // we can assert the type as number[][] since our validation above confirms there are no null values
  const submission = reverseTransformArray(gameStore.boardInput as number[][])
  const url = 'https://sugoku.onrender.com/validate'
  const res = await fetch(url, { method: 'POST', body: JSON.stringify(submission) })
  const { status } = await res.json()
  if (status === 'solved') {
    router.push('/game-over')
  } else {
    alert('Sorry, this solution is not correct')
  }
}
</script>

<template>
  <div class="container">
    <header>
      <h1>Sudoku</h1>
      <UserInfo />
      <GameInfo />
      <ButtonLink @click="onSubmit" label="Submit Puzzle"></ButtonLink>
    </header>
    <main>
      <Suspense>
        <GameBoard />
      </Suspense>
    </main>
  </div>
</template>

<style scoped>
main {
  margin-left: 16px;
}
@media (min-width: 1024px) {
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  main {
    margin-top: 16px;
  }
}
</style>
