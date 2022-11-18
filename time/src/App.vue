<script setup>
import { CountTo } from "vue3-count-to";
import { ref } from "vue";

const apple = ref(19);
</script>
<template>
  <count-to :startVal="0" :endVal="apple" :duration="4000"></count-to>
</template>
<style scoped></style>
