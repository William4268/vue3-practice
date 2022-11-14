<script>
// Import Swiper Vue.js components
import { reactive } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "@/swiper/style.scss";
// import required modules
import { Navigation } from "swiper";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: ["card1", "card2", "card3", "card4", "card5", "card6"],
  setup() {
    const slides = reactive([1, 2, 3, 4, 5]);
    return {
      modules: [Navigation],
      slides,
    };
  },
};
</script>

<template>
  <h2>Board<span>Members</span></h2>
  <div class="card_area">
    <div class="card_container">
      <div class="item_container">
        <div class="item_img">
          <p class="item_title">{{ card1.title }}</p>
          <p class="item_subtitle">{{ card1.subtitle }}</p>
        </div>
        <div class="item_text">
          <p>
            {{ card1.article }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="card_slide">
    <swiper
      class="swiper"
      :slides-per-view="4"
      :centered-slides="false"
      :space-between="30"
      :navigation="true"
      :modules="modules"
      :initial-slide="1"
    >
      <swiper-slide class="slide">
        <div class="item_container">
          <div class="item_img">
            <p class="item_title">{{ card1.title }}</p>
            <p class="item_subtitle">{{ card1.subtitle }}</p>
          </div>
          <div class="item_text">
            <p>
              {{ card1.article }}
            </p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/utility/breakpoints.scss";
@import "@/assets/scss/utility/reset.scss";
h2 {
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: 000;
  span {
    color: $primary-green;
  }

  @include breakpoint($md) {
    font-size: 50px;
  }
  @include breakpoint($xxl) {
    font-size: 117px;
  }
}

template {
  background: white;
}
.card_area {
  display: flex;
  flex-wrap: wrap;
  .card_container {
    flex: 1 1 50%;
    padding: 0.5rem;
    height: 229px;
  }
}
.item {
  &_container {
    text-align: start;
    height: 100%;
    box-shadow: 5px 5px 15px 0 rgba(51, 51, 51, 0.16);
    border-radius: 1rem;
    align-items: unset;
    background: white;
  }
  &_img {
    box-sizing: border-box;
    padding: 1rem;
    height: 50%;
    border-radius: 1rem 1rem 0 0;
    background-image: url(https://picsum.photos/300);
    background-size: cover;
    background-repeat: no-repeat;
  }
  &_title {
    font-size: 0.8rem;
    font-weight: bold;
    color: white;
    text-shadow: 1px 1px 2px grey;
  }
  &_subtitle {
    font-size: 1.1rem;
    font-weight: bold;
    color: rgba(35, 142, 99);
  }
  &_text {
    height: 50%;
    padding: 1rem;
    font-size: 0.9rem;
    font-weight: normal;
    & p {
      height: 95%;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
}
.card_slide {
  display: none;
  .swiper {
    margin: 0;
    height: 340px;
  }
}
@include breakpoint($sm) {
  .card_area {
    .card_container {
      height: 300px;
    }
  }
}
@include breakpoint($md) {
  .card_area {
    display: none;
  }
  .card_slide {
    display: block;
    position: relative;
    :deep(.swiper-button-disabled) {
      display: none;
    }
    :deep(.swiper-wrapper) {
      align-items: center;
      height: 100%;
    }
    .swiper {
      height: 380px;
      padding: 1rem;
    }
  }
  .swiper-slide {
    background: unset;
  }
  .card_container {
    padding: 0;
  }
  .item {
    &_title {
      font-size: 1.1rem;
    }
    &_subtitle {
      font-size: 1.5rem;
    }
    &_text {
      font-size: 1.1rem;
    }
  }
  :deep(.swiper-button-prev) {
    z-index: 999;
    position: absolute;
    transform: translate(0, 0%);
    border-radius: 0 10px 10px 0;
    background-color: white;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    color: #707070;
    text-align: center;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    font-size: 1.5rem;
    width: 30px;
    height: 60px;
    line-height: 80px;
    left: 0;
    &:after {
      content: "prev";
      font-size: 1.5rem;
    }
  }
  :deep(.swiper-button-next) {
    z-index: 999;
    position: absolute;
    transform: translate(0, 0%);
    border-radius: 10px 0 0 10px;
    background-color: white;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    color: #707070;
    text-align: center;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    font-size: 1.5rem;
    width: 30px;
    height: 60px;
    line-height: 80px;
    &:after {
      content: "next";
      font-size: 1.5rem;
    }
  }
}
@include breakpoint($lg) {
  .card_slide {
    .swiper {
      margin: 0;
      height: 400px;
    }
  }
}
@include breakpoint($xl) {
  .card_slide {
    .swiper {
      height: 636px;
    }
  }
  .item {
    &_img {
      padding: 2rem;
    }
    &_title {
      font-size: 2rem;
    }
    &_subtitle {
      font-size: 2.5rem;
    }
    &_text {
      font-size: 2rem;
      padding: 2rem;
    }
  }
  :deep(.swiper-button-prev) {
    font-size: 2rem;
    width: 50px;
    height: 100px;
    line-height: 100px;
    &:after {
      content: "prev";
      font-size: 1.5rem;
    }
  }
  :deep(.swiper-button-next) {
    font-size: 2rem;
    width: 50px;
    height: 100px;
    line-height: 100px;
    &:after {
      content: "next";
      font-size: 1.5rem;
    }
  }
}
</style>
