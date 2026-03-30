<script setup lang="ts">
import { inject, type Ref } from 'vue'

const count = inject<Ref<number>>('count')!
</script>

<template>
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>

  <div id="app">
  <button @click="count++">
    Count is: {{ count }}
  </button>
</div>

</template>

<style scoped></style>
