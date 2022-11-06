<script setup>
console.log("組件 init");
const props = defineProps({
  msg: {
    type: String,
    default: "123",
  },
});
</script>
<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>
<style scoped></style>
