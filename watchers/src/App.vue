<script setup>
import { ref, watch } from "vue";
const text = ref({
  levels: {
    text: "",
  },
});

watch(
  () => text.value.levels.text,
  (newData, oddData) => {
    console.log(newData, oddData);
  },
  { deep: true }
);
</script>

<template>
  <input type="text" v-model="text.levels.text" />
</template>
