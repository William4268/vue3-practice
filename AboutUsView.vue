<script setup>
import { ref, watch, onMounted } from "vue";
import BannerArea from "@/components/BannerArea.vue";
import SdgLocalization from "@/components/SdgLocalization.vue";
import SdsnTaiwan from "@/components/SdsnTaiwan.vue";
import FooterArea from "../components/FooterArea.vue";
import BoardMembers from "../components/BoardMembers.vue";

const scopes = ref([
  {
    id: 0,
    title: "Scope 1",
    subTitle: "Integrating Global Resources of SDGs",
    icon: "https://picsum.photos/50/50",
    article:
      "The SDGs are people-centered, indivisible, universal, and transformative. Within the Project framework, ‘localizing’, is seen not merely as a technical or predefined process, but as a process that is sensitive to local opportunities, priorities, and ideas. It goes beyond adjusting global goals to the local level and calls for co-creating solutions through the generation of genuine partnerships, resulting in more inclusive, needs-driven, local-level responses to global challenges and objectives.",
    intro: [
      "The following platforms provide more information on SDGs and SDG Localization.",
    ],
    list: [
      {
        image: "https://picsum.photos/285/93",
        imageTitle: "Asia-Pacific Knowledge Management Hub",
        imageIntro:
          "The Knowledge Management Hub pools together policy expertise by and across sectors, allowing countries to easily identify the expertise available and facilitate a response to emerging national needs to accelerate the implementation of the 2030 Agenda.",
      },
      {
        image: "https://picsum.photos/285/93",
        imageTitle: "SDG Gateway",
        imageIntro:
          "The Asia-Pacific SDG Gateway is a window to data and analysis at regional, subregional and country levels on Sustainable Development Goals statistics for Asia and the Pacific.",
      },
      {
        image: "https://picsum.photos/285/93",
        imageTitle: "The SDG Help Desk",
        imageIntro:
          "The SDG Help Desk is a one-stop online service providing access to SDG-related tools, knowledge products, data portals, expertise, advice and opportunities for peer-learning and regional South-South cooperation through thematic areas, covering a multitude of topics.",
      },
      {
        image: "https://picsum.photos/285/93",
        imageTitle: "Localizing the SDGs",
        imageIntro:
          "Via this online platform, Local2030 partners are sharing tools, experiences, new solutions and guides to support SDG localization. A core feature is the toolbox, which contains a range of concrete, practical and adaptable mechanisms and instruments that support the development, implementation, monitoring and review of appropriate SDG actions.",
      },
      {
        image: "https://picsum.photos/285/93",
        imageTitle: "Urban SDG Knowledge Platform",
        imageIntro:
          "UN ESCAP, the Seoul Metropolitan Government and CityNet have established this Urban SDG Knowledge Platform to promote and support knowledge sharing and city-to-city cooperation for sustainable urban development.",
      },
    ],
  },
  {
    id: 1,
    title: "Scope 2",
    subTitle: "Research and Knowledge Transfer",
    icon: "https://picsum.photos/50/50",
    article:
      "Sound metrics and data are critical for turning the SDGs into practical tools for problem-solving. The SDSN Taiwan partners with a variety of organizations to assess progress toward SDG achievement at the national level and local levels. Both official and unofficial metrics are used to measure the distance to targets for each of the SDGs to identify priorities for action, understand key implementation challenges, track progress, ensure accountability, and identify gaps that must be closed in order to achieve the SDGs by 2030.",
    intro: [],
    list: [
      {
        image: "https://picsum.photos/285/93",
        imageTitle: "Research NCKU !",
        imageIntro:
          "Showcases National Cheng Kung University’s researchers and their publications. This innovative information technology should promote the development of intramural and extramural collaborations, enabling NCKU researchers to identify new funding opportunities and potential partnerships with academia, industry, or broader science communities. National Cheng Kung University was established in 1931. With a core value of “Pursuit of truth through exhaustive reasoning”, NCKU has had substantial success in interdisciplinary research that has promoted national development and strengthened the application of science in daily life.",
      },
    ],
  },
  {
    id: 2,
    title: "Scope 3",
    icon: "https://picsum.photos/50/50",
    subTitle: "Engagement and Action",
    article:
      "SDSN Taiwan adopts Sustainable Urban Resource Management (SURM) to strengthen the capacities of local governments and other key urban stakeholders to adopt policies and take action that minimizes the negative and maximizes the positive environmental, social, and economic impacts of urban consumption and production systems. The SURM approach supports moving from wasteful and harmful ‘take-make-dispose’ linear models to more circular approaches that use resources more equitably.",
    intro: [
      "Collaborative and adaptive urban governance through multi-stakeholder coalitions.",
      "Integrated analysis and planning through a systems approach.",
      "Evidence-based decision-making using data, information, analysis, and dissemination.",
    ],
    list: [
      {
        image: "https://picsum.photos/285/93",
        imageTitle: "Gender Gap Analysis Tool",
        imageIntro:
          "The Women’s Empowerment Principles Gender Gap Analysis Tool (WEPs Tool) is a business-driven tool designed to help companies from around the world assess gender equality performance across the workplace, marketplace, and community.",
      },
    ],
  },
]);

const goals = ref({
  goal1: {
    id: 1,
    topic: "Traffic deaths (per 100,000 population)",
    topic_chinese: "運輸事故死亡",
    image: "47c1cd53-8c86-4bc3-bd79-c4af242be54f",
    article:
      "The statistics indicate the slight growth in the past 20 years. However, in 2019 the female labor force reached 51.4%. In the past 10 years, the raise has been twice growing over male labor force participation. The difference gap between male and female labor force participation is 14.2% in 2019, which shrieked by 3.7% compared to 10 years ago. \n\nMore significant overall changes are from 2001 to 2011 which is just about 10 years after the Act of Gender Equality in Employment was officially announced and enforced in 2002. The fact of growth implies the possibility of The Act contributing to the labor force participation of women due to less discrimination and a friendly working environment. \n\nIn comparison to the latest 2019 Gender Inequality Index (GII) compiled by the United Nations Development Programme (UNDP). Data from Taiwan is substituted into the calculation, and the gender equality performance has improved by 3 places compared with the previous year, ranking 6th in the world.",
    article_chinese:
      "統計數據表明過去 20 年略有增長。然而，2019 年女性勞動力達到 51.4%。在過去的 10 年中，加薪幅度是男性勞動力參與率的兩倍。 2019 年男女勞動力參與率的差距為 14.2%，與 10 年前相比縮小了 3.7%。\n\n更顯著的總體變化是從 2001 年到 2011 年，這距離《就業中的性別平等法》於 2002 年正式宣布和實施僅 10 年左右。增長的事實意味著該法有可能促進婦女的勞動力參與，因為減少歧視和友好的工作環境。\n\n與聯合國開發計劃署 (UNDP) 編制的最新 2019 年性別不平等指數 (GII) 相比。將台灣數據代入計算，兩性平等表現較上年提升3位，位列全球第6位。",
    article_image: "87862ae0-887a-41f1-9d7f-8b2890ecbfb1",
    data_source: null,
  },
  goal2: {
    id: 2,
    topic: "Ratio of female-to-male labor force participation rate (%)",
    topic_chinese: "女性與男性勞動力參與率的比率",
    image: "130ae041-98f1-4d51-a97a-7832aae2a498",
    article: null,
    article_chinese: null,
    article_image: null,
    data_source: null,
  },
});

const cards = {
  card1: {
    id: 1,
    img: "",
    title: "Company Name CEO1",
    subtitle: "Your Name1",
    article:
      "1Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil accusantium odit maiores necessitatibus",
  },
  card2: {
    id: 2,
    img: "",
    title: "Company Name CEO",
    subtitle: "Your Name",
    article:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil accusantium odit maiores necessitatibus",
  },
  card3: {
    id: 3,
    img: "",
    title: "Company Name CEO",
    subtitle: "Your Name",
    article:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil accusantium odit maiores necessitatibus",
  },
  card4: {
    id: 4,
    img: "",
    title: "Company Name CEO",
    subtitle: "Your Name",
    article:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil accusantium odit maiores necessitatibus",
  },
  card5: {
    id: 5,
    img: "",
    title: "Company Name CEO",
    subtitle: "Your Name",
    article:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil accusantium odit maiores necessitatibus",
  },
  card6: {
    id: 6,
    img: "",
    title: "Company Name CEO",
    subtitle: "Your Name",
    article:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil accusantium odit maiores necessitatibus",
  },
};

const localizationData = ref([
  {
    img: "",
    english:
      "In 2015, UN Member States agreed on 17 Sustainable Development Goals (SDGs). Each of the 17 SDGs has corresponding targets and indicators to help measure progress and generate data to support evidence-based decision-making. Governments need to set their own national targets corresponding to their national contexts and priorities, which should be incorporated into national planning, policies, and strategies.SDSN Taiwan goes beyond adjusting global goals to the local level and calls for co-creating solutions through the generation of genuine partnerships, resulting in more inclusive, needs-driven, local-level responses to global challenges and objectives.",
    chinese:
      "2015 年，聯合國成員國就 17 項可持續發展目標 (SDG) 達成一致。 17 個可持續發展目標中的每一個都有相應的目標和指標，以幫助衡量進展並生成數據以支持基於證據的決策。政府需要根據本國國情和優先事項製定自己的國家目標，並將其納入國家規劃、政策和戰略。SDSN台灣超越將全球目標調整到地方層面，並呼籲通過一代人共同創造解決方案建立真正的伙伴關係，從而對全球挑戰和目標做出更具包容性、以需求為導向的地方層面的應對措施。",
  },
]);

const SdsnTaiwanData = ref([
  {
    img: "https://picsum.photos/106/106",
    english:
      "In response to the Sustainable Development Solutions Network (SDSN) launched by UN Secretary-General Ban Ki-moon in 2012, the NCKU Office of Strategic Planning, with the vision of NCKU 2030, launched SDSN Taiwan to accelerate the implementation of SDGs. SDSN TAIWAN aims to mobilize universities, research centers, civil society organizations, businesses, and other knowledge centers to focus on practical problem-solving for sustainable development. We will continue to synthesize knowledge for sustainable development and will continue to do so for the decade ahead through our work on SDG pathways, data, policies, and financing on innovative projects to realize sustainable solutions.",
    chinese:
      "為響應聯合國秘書長潘基文於2012年發起的可持續發展解決方案網絡（SDSN），成大戰略規劃辦公室以成大2030的願景，啟動了SDSN台灣，以加速SDGs的實施。SDSN TAIWAN 旨在動員大學、研究中心、民間社會組織、企業和其他知識中心專注於解決可持續發展的實際問題。我們將繼續為可持續發展綜合知識，並將在未來十年繼續通過我們在可持續發展目標路徑、數據、政策和創新項目融資方面的工作來實現可持續解決方案。",
  },
]);

// 監測現在螢幕高度是多，讓他可以去scroll
const windowHeight = ref(window.innerHeight);

onMounted(() => {
  window.addEventListener("resize", () => {
    windowHeight.value = window.innerHeight;
  });
});

watch(windowHeight, (newHeight, oldHeight) => {
  windowHeight.value = newHeight;
});

function scrollToMain() {
  window.scroll(0, windowHeight.value);
}
</script>

<template>
  <main class="translate-down">
    <div class="priorities-sdsn-taiwan">
      <h2>Priorities<span> of SDSN Taiwan</span></h2>

      <div class="priorities-sdsn-taiwan-container">
        <div class="img-box">
          <figure>
            <a href="##"><img src="../assets/images/goals/goal1_icon.png" /></a>
          </figure>
          <figure>
            <a href="##"><img src="../assets/images/goals/goal3_icon.png" /></a>
          </figure>
          <figure>
            <a href="##"><img src="../assets/images/goals/goal4_icon.png" /></a>
          </figure>
          <figure>
            <a href="##"><img src="../assets/images/goals/goal7_icon.png" /></a>
          </figure>
          <figure>
            <a href="##"><img src="../assets/images/goals/goal9_icon.png" /></a>
          </figure>
          <figure>
            <a href="##"
              ><img src="../assets/images/goals/goal13_icon.png"
            /></a>
          </figure>
        </div>

        <div class="text-box">
          <p class="english">
            Prior to the adoption of the SDGs, we gained useful knowledge about
            our socio-economic impact with the National Cheng Kung University.
            We recognized that the SDGs provided the opportunity to complement
            this work and to assess and inform our sustainability approach more
            holistically with regard to our strategy, measurement, and alignment
            of our actions and investments with local, national, and
            international priorities.SDSN Taiwan focuses resources on actionable
            and solution-based goals that would lead to tangible, sustainable
            deliverables and sees the following SDGs as our network priorities.
          </p>
          <p class="chinese">
            在採用可持續發展目標之前，我們通過國立成功大學獲得了有關我們對社會經濟影響的有用知識。我們認識到，可持續發展目標提供了補充這項工作的機會，並在我們的戰略、衡量以及我們的行動和投資與地方、國家和國際優先事項的一致性方面更全面地評估和告知我們的可持續發展方法。SDSN
            Taiwan
            將資源集中在可操作和基於解決方案的目標上，這些目標將帶來切實的、可持續的可交付成果，並將以下可持續發展目標視為我們的網絡優先事項。
          </p>
        </div>
      </div>
    </div>
    <SdsnTaiwan
      :english="SdsnTaiwanData[0].english"
      :chinese="SdsnTaiwanData[0].chinese"
      :img="SdsnTaiwanData[0].img"
    />
    <SdgLocalization
      :english="localizationData[0].english"
      :chinese="localizationData[0].chinese"
      disabled
    />
    <div class="BoardMembers-box">
      <BoardMembers v-bind="cards" />
    </div>
  </main>

  <footer>
    <FooterArea />
  </footer>
</template>

<style lang="scss" scoped>
.BoardMembers-box {
  margin-top: 1rem;
}

footer {
  margin-top: 4rem;
}

.english {
  color: $font-200;
  font-size: 16px;

  @include breakpoint($md) {
    font-size: 18px;
  }
  @include breakpoint($xl) {
    font-size: 30px;
  }
}

.chinese {
  color: #666464;
  font-size: 13.5px;

  @include breakpoint($md) {
    font-size: 15px;
  }
  @include breakpoint($md) {
    font-size: 25px;
  }
}
.priorities-sdsn-taiwan {
  background-color: $bg-grey;
  padding: 2rem 1rem 3rem 1rem;

  @include breakpoint($md) {
    padding: 3rem 3rem 5rem 3rem;
  }
  h2 {
    padding-bottom: 0.5rem;
    color: $primary-green;
    text-align: center;
    font-size: 30px;
    border-bottom: 3px solid #279d77;

    span {
      color: $font-200;
    }
    @include breakpoint($md) {
      font-size: 50px;
    }
    @include breakpoint($xl) {
      font-size: 117px;
      border: 0;
    }
  }

  .img-box {
    display: flex;
    justify-content: space-between;
    margin: 1rem 0;

    @include breakpoint($xxl) {
      display: block;
    }

    figure {
      display: inline-block;
      margin: 0;
      width: 54px;
      height: 54px;
      @include breakpoint($md) {
        width: 109px;
        height: 109px;
      }
      @include breakpoint($xxl) {
        width: 100px;
        height: 100px;
        margin: 0 0 1rem 1rem;
      }
      @include breakpoint($xxl) {
        width: 207px;
        height: 207px;
        margin: 0 0 1.5rem 1.5rem;
      }

      img {
        object-fit: contain;
        width: 100%;
        height: 100%;
      }
    }
  }
}

// for 桌機版
.priorities-sdsn-taiwan-container {
  @include breakpoint($xxl) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    margin-top: 2rem;
    .img-box {
      margin: 0;

      @include breakpoint($xxl) {
        min-width: 40%;
      }
    }
    .text-box {
      width: 52rem;

      @include breakpoint($xxl) {
        width: 90%;
      }
      .english {
        padding-bottom: 0.5rem;
        border-bottom: 3px solid $primary-green;
      }
      .chinese {
        padding-top: 0.5rem;
      }
    }
  }
}
</style>
