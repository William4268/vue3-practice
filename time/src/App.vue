<script setup>
// 口頭質詢
import { reactive, computed } from "vue";
import { GET } from "@/api/api.js";

const respond = await GET(
  "/%E5%8F%A3%E9%A0%AD%E8%B3%AA%E8%A9%A2?maxRecords=200&view=Grid%20view"
);
const data = respond.data.records;
const Youtube = (s) => {
  if (!s) return;
  return s.includes("youtube");
};
const transfer = (s) => {
  if (s == undefined) {
    return;
  } else if (s.includes("youtube") == true) {
    return s.replace("watch", "embed");
  }
};
const breakLine = (s) => {
  if (s == undefined) {
    return;
  } else {
    return s.split("\n");
  }
};

const input = reactive({
  主辦單位: "主辦單位",
});

const input2 = reactive({
  質詢時間: "質詢時間",
});

const filterData = computed(() => {
  if (input.主辦單位 === "主辦單位" && input2.質詢時間 === "質詢時間") {
    return data;
  } else {
    return data.filter((item) => {
      return (
        item.fields.主辦單位 === input.主辦單位 &&
        item.fields.質詢時間 === input2.質詢時間
      );
    });
  }
});
</script>
<template>
  <select
    data-v-1ac660be=""
    data-v-670a9dc4=""
    class="base_select custom-select"
    data-v-5c945d6a=""
    id="__BVID__39"
  >
    <option data-v-1ac660be="" value="">陳情來源／區域</option>
    <option value="霧峰">霧峰</option>
    <option value="沙鹿">沙鹿</option>
    <option value="大肚">大肚</option>
    <option value="烏日">烏日</option>
    <option value="龍井">龍井</option>
    <option disabled="disabled" value="其他">其他</option>
  </select>
  <div class="main-proposal">
    <select v-model="input.主辦單位">
      <option value="主辦單位" disabled>主辦單位</option>
      <option value="院會">院會</option>
      <option value="財政委員會">財政委員會</option>
      <option value="內政委員會">內政委員會</option>
      <option value="交通委員會">交通委員會</option>
      <option value="經濟委員會">經濟委員會</option>
      <option value="外交及國防委員會">外交及國防委員會</option>
      <option value="司法及法制委員會">司法及法制委員會</option>
      <option value="教育及文化委員會">教育及文化委員會</option>
      <option value="社會福利及衛生環境委員會">社會福利及衛生環境委員會</option>
    </select>
    <select v-model="input2.質詢時間">
      <option value="質詢時間" disabled>質詢時間</option>
      <option value="2021/6/11">2021/6/11</option>
      <option value="2021/5/19">2021/5/19</option>
    </select>
    <div
      class="proposal_result_content"
      v-for="item in filterData"
      :key="item.id"
    >
      <div
        v-if="Youtube(item.fields?.['YT連結/資料連結']) == true"
        class="video_container"
      >
        <iframe
          class="youtube_container"
          width="100%"
          :src="transfer(item.fields?.['YT連結/資料連結'])"
        ></iframe>
      </div>
      <div
        class="other_link"
        v-else-if="item.fields?.['YT連結/資料連結'] != undefined"
      >
        <p>
          <span>相關資料連結：</span>
          <a :href="item.fields?.['YT連結/資料連結']">{{
            item.fields?.["YT連結/資料連結"]
          }}</a>
        </p>
      </div>
      <div class="case_container">
        <p class="case_name">
          {{ item.fields.title }}
        </p>
        <div class="case_info">
          <p>接案日期：{{ item.fields.質詢時間 }}</p>
          <p>質詢場：{{ item.fields.主辦單位 }}</p>
        </div>
        <div class="case_content">
          <p v-for="item in breakLine(item.fields.內容大綱)">
            {{ item }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.main-proposal {
  width: 100%;
  overflow: auto;
}
.proposal_result_content {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border-bottom: 20px solid #a63f24;
  @include breakpoint($xl) {
    flex-direction: row;
    padding: 50px 54px;
  }
  iframe {
    aspect-ratio: 2.02/1;
    @include breakpoint($xl) {
      width: 428px;
    }
  }
}
.case_container {
  display: flex;
  flex-direction: column;
  gap: 8px;
  @include breakpoint($xl) {
    flex-basis: 428px;
    flex-shrink: 0;
  }
  .case_name {
    font-size: 17px;
    font-weight: 700;
  }
  .case_info {
    font-size: 13px;
    color: #828282;
    font-weight: 400;
  }
  .case_content {
    font-size: 17px;
    font-weight: 400;
    line-height: 30.6px;
  }
}
.other_link {
  order: 2;
  a {
    color: $primary;
  }
}
</style>
