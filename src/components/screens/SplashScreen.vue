<script setup lang="ts">
import { useUserStore } from '@/store/user'
const userStore = useUserStore()
</script>

<template>
  <header>
    <h1>Welcome to Sudoku+</h1>
  </header>
  <main>
    <input type="text" v-model="userStore.firstName" />
    <router-link to="/play">Play Game</router-link>
  </main>
</template>

<style scoped>
header {
  padding: 16px 0;
}

input {
  width: 100%;
}

a {
  display: block;
  margin-top: 8px;
  text-align: center;
  width: 100%;
}
</style>
