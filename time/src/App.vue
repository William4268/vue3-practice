<script setup>
import MainProposal from "./ProposalResult/MainProposal.vue";
import JointProposal from "./ProposalResult/JointProposal.vue";
import OralQuestioning from "./ProposalResult/OralQuestioning.vue";
import OtherSpeeches from "./ProposalResult/OtherSpeeches.vue";
import OralInterpellation from "./ProposalResult/OralInterpellation.vue";
import { CountTo } from "vue3-count-to";
import { ref } from "vue";

// 各資料數量
import { GET } from "@/api/api.js";
const respond = await GET(
  "https://api.airtable.com/v0/app4NIZthoTlA3i05/%E5%90%84%E8%B3%87%E6%96%99%E6%95%B8%E9%87%8F?maxRecords=30&view=Grid%20view"
);

const data = respond.data.records;
const data1 = ref(data[7].fields.資料數量);
const data2 = ref(data[8].fields.資料數量);
const data3 = ref(data[9].fields.資料數量);
const data4 = ref(data[10].fields.資料數量);
const data5 = ref(data[11].fields.資料數量);

// const currentTab = ref("MainProposal");
const selected = ref("");

const tabs = {
  MainProposal,
  JointProposal,
  OralQuestioning,
  OtherSpeeches,
  OralInterpellation,
};

defineProps(["flag"]);

let book = ref(10);
</script>
<template>
  <div class="Side_nav_box">
    <nav class="navbar-expand-xl side_nav">
      <div class="side_nav-active">
        <!-- <a
          href="##"
          :class="{ active: currentTab === 'MainProposal' }"
          @click="currentTab = 'MainProposal'"
          ><span>法律主提案</span
          ><span
            ><countTo
              v-if="flag"
              :startVal="0"
              :endVal="data5"
              :duration="3000"
            ></countTo
          ></span>
        </a> -->
        <div class="side_nav_shell_sort_phone">
          <select
            class="side_nav_shell_select"
            @change="currentTab = 'JointProposal'"
            :class="{ active: currentTab === 'JointProposal' }"
          >
            <option value="JointProposal">法律主提案(19)</option>
            <option value="法律共同提案">法律共同提案(16)</option>
            <option value="書面質詢">書面質詢(18)</option>
            <option value="口頭質詢">口頭質詢(134)</option>
            <option @click="book = 20" value="其他國會發言">
              其他國會發言(5)
            </option>
          </select>
        </div>
        <!-- <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fa-solid fa-caret-down"></i>
        </button> -->
      </div>
      <div class="collapse" id="navbarText">
        <a
          href="##"
          :class="{ active: currentTab === 'JointProposal' }"
          @click="currentTab = 'JointProposal'"
          ><span>法律共同提案</span
          ><span
            ><countTo
              v-if="flag"
              :startVal="0"
              :endVal="data4"
              :duration="3000"
            ></countTo
          ></span>
        </a>
        <a
          href="##"
          :class="{ active: currentTab === 'OralInterpellation' }"
          @click="currentTab = 'OralInterpellation'"
          ><span>書面質詢</span
          ><span
            ><countTo
              v-if="flag"
              :startVal="0"
              :endVal="data3"
              :duration="3000"
            ></countTo
          ></span>
        </a>
        <a
          href="##"
          :class="{ active: currentTab === 'OralQuestioning' }"
          @click="currentTab = 'OralQuestioning'"
          ><span>口頭質詢</span
          ><span
            ><countTo
              v-if="flag"
              :startVal="0"
              :endVal="data2"
              :duration="3000"
            ></countTo
          ></span>
        </a>
        <a
          href="##"
          :class="[{ active: currentTab === 'OtherSpeeches' }]"
          @click="currentTab = 'OtherSpeeches'"
          ><span>其他國會發言</span
          ><span>
            <countTo
              v-if="flag"
              :startVal="0"
              :endVal="data1"
              :duration="3000"
            ></countTo>
          </span>
        </a>
      </div>
    </nav>
    <Suspense>
      <component :is="tabs[currentTab]"></component>
    </Suspense>
    <h1></h1>
  </div>
</template>
<style lang="scss" scoped>
.side_nav {
  width: 100%;
  background-color: $primary;
  @include breakpoint($xl) {
    max-width: 300px;
    height: 100%;
  }
}
.side_nav a,
.side_nav-active button {
  color: white;
  &:focus {
    color: $primary;
    background: white;
  }
}
.side_nav a {
  display: block;
  padding: 17.5px 16px;
  font-size: 17px;
  font-weight: bold;
  @include breakpoint($xl) {
    display: flex;
    justify-content: space-between;
    font-size: 24px;
    padding: 22.5px 30px;
  }
}
.side_nav div + div,
.side_nav a,
.side_nav-active button {
  border-bottom: 1px solid white;
}
.side_nav-active {
  display: flex;
  justify-content: space-between;
  a {
    flex-grow: 1;
  }
  i {
    padding: 16px;
  }
}
.side_nav a span + span {
  padding-left: 8px;
}
.collapse {
  @include breakpoint($xl) {
    display: block !important;
  }
}
.Side_nav_box {
  height: 100%;
  @include breakpoint($xl) {
    display: flex;
  }
}
.side_nav .active {
  color: $primary;
  background: white;
}

//  我測試的東西
.side_nav_shell_select {
  width: 100%;
  height: 100%;
  padding: 0 16px;
  background-color: $primary;
  font-size: 50px;
  color: #fff;

  @include breakpoint($xl) {
    display: none;
  }
}
</style>
