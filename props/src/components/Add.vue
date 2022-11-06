<script setup>
const emit = defineEmits(["AddInt"]);

const handleAddClick = () => {
  emit("AddInt", "vic");
};
</script>
<template>
  <button @click="handleAddClick">拿著，照我</button>
</template>
<style scoped></style>
