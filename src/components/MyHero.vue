<template>
  <section class="hero">
    <div class="slider-nav">
      <button class="nav-indicator prevArrow">
        <img src="~/../../public/img/sliderArrowPrev.svg" alt="#" class="prevArrowImg">
      </button>
      <button class="nav-indicator nextArrow">
        <img src="~/../../public/img/sliderArrowNext.svg" alt="#" class="nextArrowImg">
      </button>
      <div class="swiper-pagination"></div>
    </div>
    <div class="container hero-container">
      <swiper
          :modules="modules"
          :slides-per-view="1"
          :space-between="500"
          :autoplay='{"delay": 3500}'
          :navigation="{nextEl:'.nextArrow', prevEl:'.prevArrow'}"
          :loop="true"
          :pagination="{clickable: true, el: '.swiper-pagination'}"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          class="swiper"
      >
        <swiper-slide>
          <h1 class="hero-title">Кресла Samurai
            на выгодных условиях
            по всей стране
            <div class="hero-title__decoration"></div>
            <img src="~/../../public/img/ukraine.png" alt="UKRAINE_FLAG" class="ukraine_flag">
          </h1>
          <p class="hero-subtitle">Здесь вам не придется покупать товар в слепую — проведите тест-драйв перед покупкой</p>
          <my-btn class="hero-btn">Запись на тест-драйв</my-btn>
        </swiper-slide>
        <swiper-slide>
          <h1 class="hero-title">Лучшие кресла в стране по лучшим ценам! <div class="hero-title__decoration slider_two_decor"></div>
            <img src="../../public/img/ukraine.png" alt="UKRAINE_FLAG" class="ukraine_flag"></h1>
          <p class="hero-subtitle">Не хотите потратить много денег на стул?<br> Вам к нам!</p>
          <my-btn class="hero-btn">Запись на тест-драйв</my-btn>
        </swiper-slide>
        <swiper-slide>

          <h1 class="hero-title slide-title_three">Надоел ваш старый стул? У нас вы можете найти новый!
            <img src="../../public/img/ukraine.png" alt="UKRAINE_FLAG" class="ukraine_flag"></h1>
          <p class="hero-subtitle">Просто кликните на каталог, и выбирите новый стул!</p>
          <my-btn class="hero-btn">Запись на тест-драйв</my-btn>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, A11y, Autoplay} from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import MyBtn from "@/components/UIComp/MyBtn";

export default {
  name: "MyHero",
  components: {
    MyBtn,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {

    }
  },

  setup() {
    const onSwiper = (swiper) => {
    };
    const onSlideChange = () => {
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, A11y, Autoplay],
    };
  }
}
</script>

<style scoped lang="scss">
.hero {
  background: url('~/public/img/hero-bg.jpg');
  height: 641px;
  margin-top: 80px;
  border-radius: 0px 0px 50px 0px;
  background-repeat: no-repeat;
}
.hero-title {
  margin-top: 116px;
  font-weight: 900;
  font-size: 54px;
  line-height: 120%;
  letter-spacing: -0.03em;
  color: #2B3350;
  max-width: 611px;
  position: relative;
}
.slide-title_three {
  max-width: 800px;
}
.hero-title__decoration {
  background-color: #ABF7A1;
  width: 435px;
  height: 15px;
  position: absolute;
  bottom: 5px;
  left: 0px;
  z-index: -20;
  border-radius: 2px;
}
.slider_two_decor {
  width: 200px;
}
.slider_three_decor {
  width: 385px;
}
.hero-subtitle {
  width: 544px;
  font-size: 21px;
  line-height: 160%;
  color: #2B3350;
  margin-top: 21px;
}
.hero-btn {
  margin-top: 32px;
}
.nextArrow {
  position: absolute;
  right: 0px;
  top: 50%;
  background: none;
}
.prevArrow {
  position: absolute;
  left: 0px;
  top: 50%;
  background: none;
}
.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-horizontal > .swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal {
  bottom: 100px;
}
@media screen and (max-width: 1300px) {
  .hero-container {
    max-width: 1100px;
  }
}
@media screen and (max-width: 1189px) {
  .nextArrow {
    display: none;
  }
  .prevArrow {
    display: none;
  }
  .hero {
    background-size: 1700px 100%;
    background-repeat: no-repeat;
    max-width: 100%;
  }
}
@media screen and (max-width: 991.98px) {
  .hero {
    background-size: 1450px 85%;
  }
  .hero-title {
    font-size: 45px;
    margin-top: 80px;
  }
  .hero-subtitle {
    font-size: 17px;
  }
  .hero-title__decoration {
    width: 365px;
  }
  .slider_two_decor {
    width: 445px;
  }
  .slider_three_decor {
    width: 475px;
  }
  .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-horizontal > .swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal {
    bottom: 120px;
  }
  .perenos {
    display: none;
  }
}
@media screen and (max-width: 767.98px) {
  .hero {
    background-size: 1100px 65%;
  }
  .hero-title {
    font-size: 30px;
    margin-top: 40px;
    width: 400px;
  }
  .hero-subtitle {
    font-size: 15px;
    margin-top: 10px;
  }
  .hero-title__decoration {
    width: 195px;
  }
  .slider_two_decor {
    width: 298px;
  }
  .slider_three_decor {
    width: 215px;
  }
  .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-horizontal > .swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal {
    bottom: 310px;
  }
  .ukraine_flag {
    width: 45px;
  }
  .hero-btn {
    width: 200px;
    height: 60px;
    font-size: 15px;
  }

}
@media screen and (max-width: 479.98px) {
  .hero-subtitle {
    display: none;
  }
  .hero-title {
    max-width: 320px;
    font-size: 25px;
  }
  .ukraine_flag {
    width: 30px;
  }
  .hero {
    background-size: 700px 50%;
  }
  .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-horizontal > .swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal {
    bottom: 400px;
  }
  .hero-title__decoration {
    display: none;
  }
}
</style>