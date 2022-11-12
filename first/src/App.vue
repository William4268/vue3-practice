<script setup>
import { ref } from "vue";
const data = ref({
  data1: [
    {
      img: "",
      english:
        "In 2012, the UN Sustainable Development Solutions Network (SDSN) was launched under the auspices of the UN Secretary-General.SDSN promotes integrated approaches to implementing the Sustainable Development Goals (SDGs) and the Paris Agreement on Climate Change, through education, research, policy analysis, and global cooperation.",
      chinese:
        "2012 年，聯合國可持續發展解決方案網絡 (SDSN) 在聯合國秘書長的主持下成立。SDSN 通過教育、研究、政策分析和全球合作。",
    },
  ],
  data2: [
    {
      img: "",
      english:
        "In response to the Sustainable Development Solutions Network (SDSN) launched by UN Secretary-General Ban Ki-moon in 2012, the NCKU Office of Strategic Planning, with the vision of NCKU 2030, launched SDSN Taiwan to accelerate the implementation of SDGs. SDSN TAIWAN aims to mobilize universities, research centers, civil society organizations, businesses, and other knowledge centers to focus on practical problem-solving for sustainable development. We will continue to synthesize knowledge for sustainable development and will continue to do so for the decade ahead through our work on SDG pathways, data, policies, and financing on innovative projects to realize sustainable solutions.",
      chinese:
        "為響應聯合國秘書長潘基文於2012年發起的可持續發展解決方案網絡（SDSN），成大戰略規劃辦公室以成大2030的願景，啟動了SDSN台灣，以加速SDGs的實施。SDSN TAIWAN 旨在動員大學、研究中心、民間社會組織、企業和其他知識中心專注於解決可持續發展的實際問題。我們將繼續為可持續發展綜合知識，並將在未來十年繼續通過我們在可持續發展目標路徑、數據、政策和創新項目融資方面的工作來實現可持續解決方案。",
    },
  ],
  data3: [
    {
      img: "",
      english:
        "In 2015, UN Member States agreed on 17 Sustainable Development Goals (SDGs). Each of the 17 SDGs has corresponding targets and indicators to help measure progress and generate data to support evidence-based decision-making. Governments need to set their own national targets corresponding to their national contexts and priorities, which should be incorporated into national planning, policies, and strategies.SDSN Taiwan goes beyond adjusting global goals to the local level and calls for co-creating solutions through the generation of genuine partnerships, resulting in more inclusive, needs-driven, local-level responses to global challenges and objectives.",
      chinese:
        "2015 年，聯合國成員國就 17 項可持續發展目標 (SDG) 達成一致。 17 個可持續發展目標中的每一個都有相應的目標和指標，以幫助衡量進展並生成數據以支持基於證據的決策。政府需要根據本國國情和優先事項製定自己的國家目標，並將其納入國家規劃、政策和戰略。SDSN台灣超越將全球目標調整到地方層面，並呼籲通過一代人共同創造解決方案建立真正的伙伴關係，從而對全球挑戰和目標做出更具包容性、以需求為導向的地方層面的應對措施。",
    },
  ],
});

const apple = ref({
  a: [
    {
      c: 30,
      d: 40,
    },
    20,
  ],
  b: 20,
});

console.log("在此", apple);
</script>

<template>
  <h1>{{ apple.a[0].c }}</h1>
  <h2>{{ data.data1[0].english }}</h2>
</template>
