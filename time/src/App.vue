<script setup>
import { reactive } from "vue";

//取得時間
let nowTime = reactive({
  data: "",
});
let myDate = new Date();
function setTime(myDate) {
  const year = myDate.getFullYear();
  const month =
    myDate.getMonth() + 1 < 10
      ? "0" + (myDate.getMonth() + 1)
      : myDate.getMonth() + 1;
  const date =
    myDate.getDate() < 10 ? "0" + myDate.getDate() : myDate.getDate();
  const h = myDate.getHours();
  const m =
    myDate.getMinutes() < 10 ? "0" + myDate.getMinutes() : myDate.getMinutes();
  const s =
    myDate.getSeconds() < 10 ? "0" + myDate.getSeconds() : myDate.getSeconds();
  nowTime.data =
    (year - 2020) * 365 +
    (month - 2) * 30 +
    (date - 1) +
    "天" +
    h +
    "時" +
    m +
    "分" +
    s +
    "秒";
}
function nowTimes() {
  setTime(myDate);
  setInterval(() => {
    myDate = new Date();
    setTime(myDate);
  }, 1000);
}
nowTimes();
</script>

<template>
  <h1>佳憲加油</h1>
  <h1>模擬的:上任第100天14時2分30秒</h1>
  <h3>什麼時候上任的？ 2020 2/1 00:00</h3>
  <h2>上任第{{ nowTime.data }}</h2>
</template>

<style scoped></style>
