<script setup lang="ts">
import { useGameStore } from '@/store/game'

const gameStore = useGameStore()
</script>

<template>
  <p>Difficulty: {{ gameStore.difficultyLabel }}</p>
</template>

<style scoped></style>
