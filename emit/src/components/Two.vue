<script setup>
import { ref } from "vue";
</script>

<template>
  <button @click="$emit('two', 5, 5)">一次加上五的按紐</button>
</template>
