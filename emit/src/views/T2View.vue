<script setup>
import { ref } from "vue";
import Two from "../components/Two.vue";

const now = ref(0);

const twoWork = (n) => {
  now.value += n;
};
</script>

<template>
  目前數值：{{ now }}
  <Two @two="twoWork" />
</template>
