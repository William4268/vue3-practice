<script setup>
import { ref } from "vue";
import add from "../components/Add.vue";

const see = ref(0);

const apple = () => {
  see.value += 1;
};
</script>

<template>
  <h1>下面是一個按鈕，按它。 目前的值：{{ see }}</h1>

  <button v-on:click="apple">按我會增加一</button>
  <add v-on:book="apple" />
</template>
