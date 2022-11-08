<script setup>
const apple = [1, 2, 3, 4, 53];
</script>
<template>
  <ul>
    <li v-for="item in apple">
      {{ item }}
    </li>
  </ul>
</template>
<style scoped></style>
