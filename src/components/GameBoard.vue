<script setup lang="ts">
import SudokuBlock from './SudokuBlock.vue'
</script>

<template>
  <SudokuBlock v-for="n in 9" :key="n" />
</template>

<style scoped></style>
