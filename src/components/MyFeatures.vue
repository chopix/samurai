<template>
  <section class="features">
    <div class="container features-container">
      <h3 class="features-title">Особенности кресел Самурай</h3>
      <p class="features-subtitle">Здесь будет более подробно развернуто ключевое преимущество. Четвертое поколение Samurai, выпускаемое с сентября 2020 года. <b>Исправлены десятки недочетов</b> предыдущих поколений</p>
      <div class="features-content">
        <div class="hidden">
          <div class="features-left__text">
            <div class="features-text first-block">
              <h5 class="features-text__title">Индивидуальные настройки</h5>
              <p class="features-text__subtitle">Учитывая ключевые сценарии поведения, высокое качество позиционных
                исследований способствует повышению</p>
            </div>
            <div class="features-text">
              <h5 class="features-text__title">Индивидуальные настройки</h5>
              <p class="features-text__subtitle">Учитывая ключевые сценарии поведения, высокое качество позиционных
                исследований способствует повышению</p>
            </div>
            <div class="features-text">
              <h5 class="features-text__title">Индивидуальные настройки</h5>
              <p class="features-text__subtitle">Учитывая ключевые сценарии поведения, высокое качество позиционных
                исследований способствует повышению</p>
            </div>
            <div class="features-text">
              <h5 class="features-text__title">Индивидуальные настройки</h5>
              <p class="features-text__subtitle">Учитывая ключевые сценарии поведения, высокое качество позиционных
                исследований способствует повышению</p>
            </div>
          </div>
        </div>
        <div class="features-background">
        </div>
        <div class="hidden">
          <div class="features-right__text">
            <div class="features-text first-block">
              <h5 class="features-text__title">Индивидуальные настройки</h5>
              <p class="features-text__subtitle">Учитывая ключевые сценарии поведения, высокое качество позиционных
                исследований способствует повышению</p>
            </div>
            <div class="features-text">
              <h5 class="features-text__title">Индивидуальные настройки</h5>
              <p class="features-text__subtitle">Учитывая ключевые сценарии поведения, высокое качество позиционных
                исследований способствует повышению</p>
            </div>
            <div class="features-text">
              <h5 class="features-text__title">Индивидуальные настройки</h5>
              <p class="features-text__subtitle">Учитывая ключевые сценарии поведения, высокое качество позиционных
                исследований способствует повышению</p>
            </div>
            <div class="features-text">
              <h5 class="features-text__title">Индивидуальные настройки</h5>
              <p class="features-text__subtitle">Учитывая ключевые сценарии поведения, высокое качество позиционных
                исследований способствует повышению</p>
            </div>
          </div>
        </div>
      </div>
      <swiper
          :modules="modules"
          :slides-per-view="1"
          :space-between="500"
          :autoplay='{"delay": 3500}'
          :loop="true"
          :pagination="{clickable: true}"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          class="swiper"
      >
        <swiper-slide>
          <div class="mobile-slide">
            <h6 class="mobile-slide__title">Индивидуальные настройки</h6>
            <p class="mobile-slide__subtitle">Учитывая ключевые сценарии поведения, высокое качество позиционных исследований способствует повышению</p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="mobile-slide">
            <h6 class="mobile-slide__title">Индивидуальные настройки</h6>
            <p class="mobile-slide__subtitle">Учитывая ключевые сценарии поведения, высокое качество позици-онных исследований способствует повышению</p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="mobile-slide">
            <h6 class="mobile-slide__title">Индивидуальные настройки</h6>
            <p class="mobile-slide__subtitle">Учитывая ключевые сценарии поведения, высокое качество позици-онных исследований способствует повышению</p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="mobile-slide">
            <h6 class="mobile-slide__title">Индивидуальные настройки</h6>
            <p class="mobile-slide__subtitle">Учитывая ключевые сценарии поведения, высокое качество позици-онных исследований способствует повышению</p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="mobile-slide">
            <h6 class="mobile-slide__title">Индивидуальные настройки</h6>
            <p class="mobile-slide__subtitle">Учитывая ключевые сценарии поведения, высокое качество позици-онных исследований способствует повышению</p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="mobile-slide">
            <h6 class="mobile-slide__title">Индивидуальные настройки</h6>
            <p class="mobile-slide__subtitle">Учитывая ключевые сценарии поведения, высокое качество позици-онных исследований способствует повышению</p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="mobile-slide">
            <h6 class="mobile-slide__title">Индивидуальные настройки</h6>
            <p class="mobile-slide__subtitle">Учитывая ключевые сценарии поведения, высокое качество позици-онных исследований способствует повышению</p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="mobile-slide">
            <h6 class="mobile-slide__title">Индивидуальные настройки</h6>
            <p class="mobile-slide__subtitle">Учитывая ключевые сценарии поведения, высокое качество позици-онных исследований способствует повышению</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
import {Swiper, SwiperSlide} from "swiper/vue";
import {A11y, Autoplay, Navigation, Pagination} from "swiper";

export default {
  name: "MyFeatures",
  components: {Swiper, SwiperSlide,},
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
.features {
  margin-top: 108px;
  min-height: 1065px;
  background: url("@/../public/img/features-bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
.features-title {
  font-weight: 900;
  font-size: 44px;
  color: #2B3350;
  text-align: center;
  margin-top: 94px;
}
.features-subtitle {
  font-weight: 400;
  font-size: 23px;
  text-align: center;
  color: #576077;
  margin-top: 14px;
}
.features-content {
  margin-top: 50px;
  height: 757px;
  display: flex;
  justify-content: space-between;
}
.features-background {
  background: url("@/../public/img/kreslo.png") top no-repeat;
  width: 495px;
  height: 757px;
  position: relative;
  z-index: 50;
}
.features-text {
  margin-top: 28px;
  max-width: 388px;
  transition: all .3s;
  &:hover {
    transform: scale(1.1);
    .features-text__title {
      opacity: 1;
    }
    .features-text__subtitle {
      opacity: 1;
    }
  }
}
.first-block {
  margin-top: 120px;
}
.features-text__title {
  font-weight: 600;
  font-size: 22px;
  color: #2B3350;
  opacity: 0.5;
}
.features-text__subtitle {
  font-weight: 400;
  font-size: 15px;
  line-height: 160%;
  color: #576077;
  opacity: 0.5;
  margin-top: 3px;
}
.swiper {
  display: none;
}
@media screen and (max-width: 1189px) {

}
@media screen and (max-width: 991.98px) {
  .hidden {
    display: none;
  }
  .features-content {
    flex-direction: column;
    align-items: center;
  }
  .swiper {
    width: 288px;
    margin-top: -20px;
    display: block;
  }
  .mobile-slide {
    align-self: center;
    width: 288px;
    height: 142px;
    background: #FFFFFF;
    border: 1px solid #F3F4F7;
    box-shadow: 0 20px 52px -8px rgba(0, 0, 0, 0.15);
    border-radius: 16px;
    padding: 23px 0 21px 21px;
  }
  .mobile-slide__title {
    font-weight: 600;
    font-size: 17px;
    line-height: 140%;
    width: 243px;
    color: #2B3350;
    margin-bottom: 2px;
  }
  .mobile-slide__subtitle {
    font-weight: 400;
    font-size: 13px;
    line-height: 140%;
    color: #576077;
    width: 259px;
  }

}
@media screen and (max-width: 767.98px) {

}
@media screen and (max-width: 479.98px) {

}
</style>