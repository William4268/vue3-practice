<script setup>
import { ref } from "vue";
import HelloWorldVue from "./components/HelloWorld.vue";

const apple = ref(0);

const book = () => {
  apple.value += 1;
};
</script>
<template>
  <h1>vue : {{ apple }}<HelloWorldVue /></h1>

  <button @click="book">拿著，照我 :{{ apple }}</button>
</template>
<style scoped></style>
