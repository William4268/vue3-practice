<script setup>
import { ref } from "vue";
const props = defineProps({
  msg: String,
});
// const emit = defineEmits("apple");

const emit = defineEmits({
  // 没有校验
  click: null,

  // 校验 submit 事件
  submit: ({ email, password }) => {
    if (email && password) {
      return true;
    } else {
      console.warn("aaaaaaaaaaaaaaaaaaa!");
      return false;
    }
  },
});

function submitForm(email, password) {
  emit("submit", { email, password });
}

const count = ref(0);

const check = () => {
  count.value++;
  emit("apple");
};
</script>

<template>
  <h1>{{ msg }}</h1>

  <div>
    <button type="button" @click="submitForm('1', '2')">
      現在已經按到 {{ count }}
    </button>
  </div>
</template>
