<script setup>
import { ref } from "vue";
import Three from "../components/Three.vue";
let count = 1;
const msg = ref("還沒開始按，初始預設狀態");
const click = () => {
  msg.value = `按一下就+1:${count++}`;
};
</script>

<template>
  <Three :msg="msg" @change="click" />
</template>
