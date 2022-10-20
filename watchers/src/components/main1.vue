<script setup>
import { ref, reactive, watch, watchEffect } from "vue";
const textA = ref("");
const textB = ref({
  inner: {
    text: "",
  },
});
const textC = ref({
  inner1: {
    text: "",
  },
  inner2: {
    text: "",
  },
});
const textD = ref("");
const textE = ref("");
const textF = ref("");

const style = reactive({
  fontSize: "12px",
  color: "red",
});

// watch: 舊新值(字串）
watch(textA, (newData, oldData) => {
  console.log(`新的值:å${newData}`);
  console.log(`舊的值：${oldData}`);
});

//watch: 舊新值(物件）
watch(
  () => textB.value.inner.text,
  (newData, oldData) => {
    console.log(`新的值:${newData}`);
    console.log(`舊的值：${oldData}`);
  }
  // { deep: true }
);

//watch:多屬性監聽

// 法一
watch(
  () => textC.value.inner1.text,
  (Data) => {
    console.log(`C1:${Data}`);
  }
);
watch(
  () => textC.value.inner2.text,
  (Data) => {
    console.log(`C2:${Data}`);
  }
);

// 法二
// watch(
//   [() => textC.value.inner1.text, () => textC.value.inner2.text],
//   (Data) => {
//     console.log(Data);
//   }
// );

//watchEffect
watchEffect(() => {
  console.log(textD.value);
});

//停止監看apple
const apple = watch(textE, (Data) => {
  console.log(Data);
  if (Data === "apple") apple();
});

// 小功能
watch(textF, (data) => {
  if (data.length % 2 === 0) {
    style.fontSize = "50px";
    style.color = "blue";
  } else {
    style.fontSize = "12px";
    style.color = "red";
  }
});
</script>

<template>
  <div>
    <h1>watch: 舊新值(字串）</h1>
    <input type="text" v-model="textA" />
  </div>

  <div>
    <h1>watch: 舊新值(物件）</h1>
    <input type="text" v-model="textB.inner.text" />
  </div>

  <div>
    <h1>watch:多屬性監聽</h1>
    C1:<input type="text" v-model="textC.inner1.text" /><br />
    C2:<input type="text" v-model="textC.inner2.text" />
  </div>

  <div>
    <h1>watchEffect:</h1>
    <input type="text" v-model="textD" />
  </div>
  <div>
    <h1>停止監看:apple</h1>
    <input type="text" v-model="textE" />
  </div>
  <div>
    <h1>小功能</h1>
    <input type="text" :style="style" v-model="textF" />
  </div>
</template>

<style scoped>
div:nth-child(1) {
  padding: 30px;
  text-align: center;
  border: 3px solid red;
}
div:nth-child(2) {
  padding: 30px;
  margin-top: 20px;
  text-align: center;
  border: 3px solid blue;
}
div:nth-child(3) {
  padding: 30px;
  margin-top: 20px;
  text-align: center;
  border: 3px solid red;
}
div:nth-child(4) {
  padding: 30px;
  margin-top: 20px;
  text-align: center;
  border: 3px solid blue;
}
div:nth-child(5) {
  padding: 30px;
  margin-top: 20px;
  text-align: center;
  border: 3px solid red;
}
div:nth-child(6) {
  padding: 30px;
  margin-top: 20px;
  text-align: center;
  border: 3px solid blue;
}
</style>
