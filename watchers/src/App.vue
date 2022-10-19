<script setup>
import { ref, reactive, watch } from "vue";

const text = ref("");
const dynamicStyle = reactive({
  color: "black",
  fontSize: "14px",
});

watch(text, (data) => {
  console.log(data);
  if (data.length % 2 === 0) {
    dynamicStyle.color = "red";
    dynamicStyle.fontSize = "20px";
  } else {
    dynamicStyle.color = "black";
    dynamicStyle.fontSize = "14px";
  }
});
</script>

<template>
  123
  <input type="text" v-model="text" :style="dynamicStyle" />
</template>
