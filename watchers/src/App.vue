<script setup>
import { ref, watch } from "vue";
const text = ref("");

watch(text, (newData, oddData) => {
  console.log(newData, oddData);
});
</script>

<template>
  <input type="text" v-model="text" />
</template>
