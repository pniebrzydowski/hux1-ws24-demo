<script setup lang="ts">
import { useUserStore } from '@/store/user'

// import { router } from '@/routing/router'
const userStore = useUserStore()
</script>

<template>
  <h1>Splash Screen</h1>
  <router-link to="/play/12345">Play Game</router-link>
  <!-- <button @click="router.push('/play')">Play Game</button> -->
  <ul>
    <input type="text" v-model="userStore.firstName" />
    <li>Last name: {{ userStore.lastName }}</li>
    <li>Full name: {{ userStore.fullName }}</li>
  </ul>
</template>

<style scoped></style>
