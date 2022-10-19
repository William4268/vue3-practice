<script setup>
import { ref } from "vue";

const view = ref(1);

const change = (data) => {
  view.value = data;
};
</script>

<template>
  <button v-on:click="change(1)">顯示A區塊</button>
  <button v-on:click="change(2)">顯示B區塊</button>
  <div>
    <p class="container1" v-show="view === 1">A區塊 <input type="text" /></p>

    <p class="container2" v-show="view === 2">B區塊<input type="text" /></p>
  </div>
</template>
ㄉ

<style scoped>
p {
  display: inline-block;
}
.container1 {
  padding: 20px;
  border: 5px solid red;
}
.container2 {
  padding: 20px;
  border: 5px solid blue;
}
</style>
