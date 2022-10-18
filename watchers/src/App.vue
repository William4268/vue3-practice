<script setup>
import { ref, reactive, watch } from "vue";

const text = ref("");
const dynamicStyle = reactive({
  color: "red",
  fontSize: "14px",
});

watch(text, (data) => {
  console.log(data);
  if (data.length % 2 === 0) {
    dynamicStyle.color = "black";
    dynamicStyle.fontSize = "20px";
  } else {
    dynamicStyle.color = "red";
    dynamicStyle.fontSize = "14px";
  }
});
</script>

<template>
  <input type="text" :style="dynamicStyle" v-model="text" />
</template>
