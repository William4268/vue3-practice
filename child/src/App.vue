<script setup>
import { ref } from "vue";
import child from "./components/child.vue";

const msg = ref("");
</script>

<template>
  <input type="text" v-model="msg" />
  <br />
  <child :data="msg" />
</template>

<style scoped></style>
