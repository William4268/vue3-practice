<script>
import { ref } from "vue";

export default {
  setup() {
    const apple = ref(0);

    const book = () => {
      apple.value += 1;
    };

    return { apple, book };
  },
};
</script>
<template>
  <h1>vue : {{ apple }}</h1>

  <button @click="book">拿著，照我 :{{ apple }}</button>
</template>
<style scoped></style>
