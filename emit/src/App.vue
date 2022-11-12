<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <h1>emit的練習</h1>
  <nav>
    <RouterLink to="/">觸發與事件監聽 範例01</RouterLink>
    <RouterLink to="/about">事件參數 範例02</RouterLink>
    <RouterView />
  </nav>
</template>

<style scope>
h1 {
  font-size: 50px;
}

nav {
  font-size: 50px;
  height: 5px;
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
}
</style>
