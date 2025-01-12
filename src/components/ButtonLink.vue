<script setup lang="ts">
defineProps<{
  url?: string
  label: string
}>()
</script>

<template>
  <router-link v-if="url" class="button" :to="url">{{ label }}</router-link>
  <button v-else class="button">{{ label }}</button>
</template>

<style scoped>
.button {
  cursor: pointer;
  color: white;
  display: inline-block;
  background-color: darkslategrey;
  text-decoration: none;
  font-size: 1em;
  padding: 0.5em 1em;
  width: 100%;
}
</style>
