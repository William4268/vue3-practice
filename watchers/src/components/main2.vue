<script setup>
import { watch, ref, watchEffect } from "vue";
const enemyHP = ref(40);
const myHP = ref(10);
const msg = ref("");
const button = ref("");
const attack = () => {
  enemyHP.value = enemyHP.value - Math.floor(Math.random() * 5);
  myHP.value = myHP.value - Math.floor(Math.random() * 4);
  msg.value = "";
};

const add = () => {
  myHP.value = 100;
  msg.value = "睡飽了(滿血)";
};

const noWude = () => {
  enemyHP.value = 0;
  setTimeout(() => {
    alert("打贏了boss很棒");
    location.reload();
  }, 400);
  msg.value = "你很棒";
};
const GG = watch(myHP, (currHP, prevHP) => {
  console.log(currHP, prevHP);
  if (currHP < 5) {
    msg.value = "血量不到一半";
  }
  if (prevHP - currHP > 2) {
    msg.value = "被重重的打了一拳了";
  }
  if (currHP <= 0) {
    msg.value = "敗北";
    GG();
    alert("你已經輸了");
    location.reload();
  }
  if (enemyHP.value <= 0) {
    alert("你打敗了boss");
    location.reload();
  }
});
watchEffect(() =>
  myHP.value === 10
    ? (button.value = "blue")
    : myHP.value <= 5
    ? (button.value = "red")
    : myHP.value === 100
    ? (button.value = "yellow")
    : ""
);
</script>

<template>
  <img
    src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgx031uyt2_eUH_9KdRfuPy2XDW-J4TISnrWtxbPBH7Nnwz_w9ezaS6tC9E54f4QHOLUoCl2N1yW-AyXiBcfd_Ox4OjcQ6Jp231D-SaBF-nsKEVgPpBjSJvmE86OCQZiGZKNeA2g1Fbyd2SLascdzRRDGyaJIA8XcOUjU8E1XFkdsGN1blmj4ruV9XS-A/s853/figure_mask_hazusu.png"
    alt=""
  />
  <p class="boss">boss的血量:{{ enemyHP }}</p>
  <img
    src="https://blogger.googleusercontent.com/img/a/AVvXsEgKBwkHZysAQhY2sJ2bgdiWqlRB5BkqN2chrnU-I0iUqogN2gGTh7LLJ0SrXONJ_2vR9gRvf7eReD59-MtFSL2STmsUPXhZ4WQJ49RK1tt3VNVnwIIs8DigtRa1niHSpZIPymlt2dh05DH9ioRd4afAqmtwficNmj6eegQCb0TCfs9NsPFuDBi8OwgEow=s843"
    alt=""
  />
  <p class="vic">vic的血量:{{ myHP }}</p>
  <div style="display: flex; justify-content: space-between">
    <button :class="button" @click.prevent="attack">攻撃</button>
    <button :class="button" @click.prevent="add">睡覺加血</button>
    <button :class="button" @click.prevent="noWude">偷襲</button>
  </div>

  <p class="msg">{{ msg }}</p>
</template>
<style>
.boss {
  border: 2px solid red;

  padding: 20px;
  text-align: center;
}
.vic {
  border: 2px solid blue;
  padding: 20px;
  text-align: center;
}
button {
  margin-top: 100px;
  width: 100px;
  height: 30px;
  font-size: 20px;
}
.blue {
  color: blue;
}
.red {
  color: red;
}
.yellow {
  color: rgb(176, 176, 81);
}

img {
  display: block;
  width: 30%;
  margin: 50px auto;
}

.msg {
  font-size: 30px;
  text-align: center;
  margin-top: 20px;
}
</style>
