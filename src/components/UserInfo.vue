<script setup lang="ts">
import { useUserStore } from '@/store/user'

const userStore = useUserStore()
</script>

<template>
  <p>{{ userStore.fullName }}</p>
</template>

<style scoped></style>
