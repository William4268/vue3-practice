<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <h1>emit的練習</h1>
  <div class="a">
    <RouterLink to="/">回到原點</RouterLink>
    <RouterLink to="/about">觸發與事件監聽 試做01</RouterLink>
    <RouterLink to="/t2">事件參數 試做02</RouterLink>
    <RouterLink to="/t3">聲明觸發的事件 試做03</RouterLink>
  </div>
  <div>
    <RouterView />
  </div>
</template>

<style scope>
h1 {
  font-size: 50px;
}

.a {
  font-size: 30px;

  display: flex;
  gap: 50px;
}
</style>
