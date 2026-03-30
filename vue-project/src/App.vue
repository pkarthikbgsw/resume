<script setup lang="ts">
import { ref } from 'vue'

/* Variable declaration */
const count = ref(0)

/* Function declaration */
function set_value() {
  count.value++
}

function get_value() {
  return count.value
}

</script>

<template>

  <!-- Header -->
  <h1>You did it!</h1>

  <!-- Paragraph -->
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>

  <!-- Rendering logic -->
  <div id="app">
  <button @click="set_value">
    Count is: {{ get_value() }}
  </button>
  </div>

</template>

<style scoped></style>
