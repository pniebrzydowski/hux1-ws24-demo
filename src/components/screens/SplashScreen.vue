<script setup lang="ts">
import ButtonLink from '../ButtonLink.vue'
import StartForm from '../StartForm.vue'
</script>

<template>
  <header>
    <h1>Welcome to Sudoku+</h1>
  </header>
  <main>
    <StartForm />
    <section class="buttons">
      <ButtonLink url="/play" label="Start Game"></ButtonLink>
    </section>
  </main>
</template>

<style scoped>
header {
  padding: 16px 0;
}

.buttons {
  margin-top: 1rem;
}
</style>
