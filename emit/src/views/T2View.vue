<script setup>
import { ref } from "vue";
import Two from "../components/Two.vue";

const now = ref(0);

const twoWork = (n) => {
  now.value += n;
};
</script>

<template>
  <h1>目前數值：{{ now }}</h1>
  <Two @two="twoWork" />
</template>
