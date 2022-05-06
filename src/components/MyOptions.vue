<template>
  <section class="options">
    <div class="container options-container">
      <div class="options-wrapper">
        <div class="option-card">
          <img src="~/../../public/img/firstoption.svg" alt="trolley" class="option-card__img">
          <h5 class="option-card__title"><strong>Бесплатная доставка</strong> по Киеву<br class="hidden"> и Харькову — от 3 шт.</h5>
        </div>
        <div class="option-card">
          <img src="~/../../public/img/secondoption.svg" alt="trolley" class="option-card__img">
          <h5 class="option-card__title"><strong>Индивидуальные скидки</strong><br> при заказе от 3 шт.</h5>
        </div>
        <div class="option-card">
          <img src="~/../../public/img/thirdoption.svg" alt="trolley" class="option-card__img">
          <h5 class="option-card__title">Для юридических лиц<br> действуют <strong>особые условия</strong></h5>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MyOptions"
}
</script>

<style scoped>
.options {
  margin-top: 98px;
}
.options-wrapper {
  display: flex;
  justify-content: space-between;
}
.option-card__title {
  text-align: center;
  font-weight: 300;
  font-size: 22px;
  line-height: 150%;
  color: #2B3350;
  margin-top: 18px;
}
.option-card {
  display: flex;
  flex-direction: column;
  align-items: center;
}
@media screen and (max-width: 991.98px) {
  .options {
    margin-top: 0px;
  }
}
@media screen and (max-width: 767.98px) {
  .options {
    margin-top: -150px;
  }
  .option-card {
    flex-direction: row;
    align-items: center;
  }
  .option-card__title {
    text-align: left;
    margin-bottom: 20px;
    justify-content: center;
    margin-left: 90px;
  }
  .options-wrapper {
    flex-direction: column;
  }
}
@media screen and (max-width: 550px) {
  .option-card__title {
    margin-left: 10px;
  }
}
@media screen and (max-width: 479.98px) {
  .options {
    margin-top: -280px;
  }
  .option-card__img {
    width: 70px;
  }
  .option-card__title {
    font-size: 17px;
  }
  .hidden {
    display: none;
  }
}
</style>