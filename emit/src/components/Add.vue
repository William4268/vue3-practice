<script setup>
import { ref } from "vue";
</script>

<template>
  <h1>元件的按鈕</h1>
  <button @click="$emit('book')">按什麼還不知道</button>
</template>
