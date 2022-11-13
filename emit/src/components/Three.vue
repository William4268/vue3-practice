<script setup>
import { ref } from "vue";
const props = defineProps({
  msg: String,
});
const emit = defineEmits(["change"]);
const count = ref(0);

const check = () => {
  count.value++;
  emit("change");
};
</script>

<template>
  <h1>{{ msg }}</h1>

  <div>
    <button type="button" @click="check()">現在已經按到 {{ count }}</button>
  </div>
</template>
