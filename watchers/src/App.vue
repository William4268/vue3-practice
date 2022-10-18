<script setup>
import { ref, watch } from "vue";

const x = ref(0);
const y = ref(0);

// watch(x, (newX) => {
//   console.log(`x is ${newX}`);
// });

// watch(
//   () => x.value + y.value,
//   (sum) => {
//     console.log(`sum of x = y is + ${sum}`);
//   }
// );

watch([x, () => y.value], ([newX, newY]) => {
  console.log(`x is ${newX} and y is ${newY}`);
});
</script>

<template>
  <input type="text" v-model="x" />
</template>
