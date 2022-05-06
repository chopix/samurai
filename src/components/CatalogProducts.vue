<template>
  <div class="catalog-products">
    <product-card
        v-if="getSelectValue === 0 || getSelectValue === 1"
        :imgUrlPath="$store.state.main.productFirstCardProperties.imgUrlPath"
        :productName="$store.state.main.productFirstCardProperties.productName"
        :productPriceNew="$store.state.main.productFirstCardProperties.productPriceNew"
        :productPriceOld="$store.state.main.productFirstCardProperties.productPriceOld"
        :productId="$store.state.main.productFirstCardProperties.id"
    ></product-card>
    <product-card
        v-if="getSelectValue === 0 || getSelectValue === 2"
        :imgUrlPath="$store.state.main.productSecondCardProperties.imgUrlPath"
        :productName="$store.state.main.productSecondCardProperties.productName"
        :productPriceNew="$store.state.main.productSecondCardProperties.productPriceNew"
        :productPriceOld="$store.state.main.productSecondCardProperties.productPriceOld"
        :productId="$store.state.main.productSecondCardProperties.id"
    ></product-card>
    <product-card
        v-if="getSelectValue === 0 || getSelectValue === 1"
        :imgUrlPath="$store.state.main.productFirstCardProperties.imgUrlPath"
        :productName="$store.state.main.productFirstCardProperties.productName"
        :productPriceNew="$store.state.main.productFirstCardProperties.productPriceNew"
        :productPriceOld="$store.state.main.productFirstCardProperties.productPriceOld"
        :productId="$store.state.main.productFirstCardProperties.id"
    ></product-card>
    <product-card
        v-if="getSelectValue === 0 || getSelectValue === 2"
        :imgUrlPath="$store.state.main.productSecondCardProperties.imgUrlPath"
        :productName="$store.state.main.productSecondCardProperties.productName"
        :productPriceNew="$store.state.main.productSecondCardProperties.productPriceNew"
        :productPriceOld="$store.state.main.productSecondCardProperties.productPriceOld"
        :productId="$store.state.main.productSecondCardProperties.id"
    ></product-card>
    <product-card
        v-if="getSelectValue === 0 || getSelectValue === 1"
        :imgUrlPath="$store.state.main.productFirstCardProperties.imgUrlPath"
        :productName="$store.state.main.productFirstCardProperties.productName"
        :productPriceNew="$store.state.main.productFirstCardProperties.productPriceNew"
        :productPriceOld="$store.state.main.productFirstCardProperties.productPriceOld"
        :productId="$store.state.main.productFirstCardProperties.id"
    ></product-card>
    <product-card
        v-if="getSelectValue === 0 || getSelectValue === 2"
        :imgUrlPath="$store.state.main.productSecondCardProperties.imgUrlPath"
        :productName="$store.state.main.productSecondCardProperties.productName"
        :productPriceNew="$store.state.main.productSecondCardProperties.productPriceNew"
        :productPriceOld="$store.state.main.productSecondCardProperties.productPriceOld"
        :productId="$store.state.main.productSecondCardProperties.id"
    ></product-card>
    <product-card
        v-if="getSelectValue === 0 || getSelectValue === 1"
        :imgUrlPath="$store.state.main.productFirstCardProperties.imgUrlPath"
        :productName="$store.state.main.productFirstCardProperties.productName"
        :productPriceNew="$store.state.main.productFirstCardProperties.productPriceNew"
        :productPriceOld="$store.state.main.productFirstCardProperties.productPriceOld"
        :productId="$store.state.main.productFirstCardProperties.id"
    ></product-card>
    <product-card
        v-if="getSelectValue === 0 || getSelectValue === 2"
        :imgUrlPath="$store.state.main.productSecondCardProperties.imgUrlPath"
        :productName="$store.state.main.productSecondCardProperties.productName"
        :productPriceNew="$store.state.main.productSecondCardProperties.productPriceNew"
        :productPriceOld="$store.state.main.productSecondCardProperties.productPriceOld"
        :productId="$store.state.main.productSecondCardProperties.id"
    ></product-card>
    <Transition name="slide-fade">
      <div v-if="isHiddenBlockVisible === true" class="products-line third-line">
        <product-card
            v-if="getSelectValue === 0 || getSelectValue === 2"
            :imgUrlPath="$store.state.main.productSecondCardProperties.imgUrlPath"
            :productName="$store.state.main.productSecondCardProperties.productName"
            :productPriceNew="$store.state.main.productSecondCardProperties.productPriceNew"
            :productPriceOld="$store.state.main.productSecondCardProperties.productPriceOld"
            :productId="$store.state.main.productSecondCardProperties.id"
        ></product-card>
        <product-card
            v-if="getSelectValue === 0 || getSelectValue === 1"
            :imgUrlPath="$store.state.main.productFirstCardProperties.imgUrlPath"
            :productName="$store.state.main.productFirstCardProperties.productName"
            :productPriceNew="$store.state.main.productFirstCardProperties.productPriceNew"
            :productPriceOld="$store.state.main.productFirstCardProperties.productPriceOld"
            :productId="$store.state.main.productFirstCardProperties.id"
        ></product-card>
        <product-card
            v-if="getSelectValue === 0 || getSelectValue === 2"
            :imgUrlPath="$store.state.main.productSecondCardProperties.imgUrlPath"
            :productName="$store.state.main.productSecondCardProperties.productName"
            :productPriceNew="$store.state.main.productSecondCardProperties.productPriceNew"
            :productPriceOld="$store.state.main.productSecondCardProperties.productPriceOld"
            :productId="$store.state.main.productSecondCardProperties.id"
        ></product-card>
        <product-card
            v-if="getSelectValue === 0 || getSelectValue === 1"
            :imgUrlPath="$store.state.main.productFirstCardProperties.imgUrlPath"
            :productName="$store.state.main.productFirstCardProperties.productName"
            :productPriceNew="$store.state.main.productFirstCardProperties.productPriceNew"
            :productPriceOld="$store.state.main.productFirstCardProperties.productPriceOld"
            :productId="$store.state.main.productFirstCardProperties.id"
        ></product-card>
      </div>
  </Transition>
    <button @click='showHiddenBlock' class="catalog-products__btn">{{textButtonState}}</button>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard";
import {mapState, mapGetters} from "vuex"
export default {
  name: "CatalogProducts",
  components: {ProductCard},
  // TODO: мб начать копать корзину
  data() {
    return {
      textButtonState: 'Показать все',
      buttonState: false,
      isHiddenBlockVisible: false,
    }
  },
  methods: {
    showHiddenBlock() {
      this.isHiddenBlockVisible = !this.isHiddenBlockVisible;
      this.buttonState = !this.buttonState;
      if (this.buttonState === false) {
        this.textButtonState = "Показать все";
      } else if (this.buttonState === true) {
        this.textButtonState = "Скрыть все";
      }
      this.allState = "Скрыть все";
    },
  },
  computed: {
    ...mapGetters({
      getSelectValue: 'getSelectValue'
    })
  }
}
</script>

<style scoped lang="scss">
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
.catalog-products {
  margin-top: -80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.products-line {
  width: 1172px;
}
.first-line {
  display: flex;
}
.second-line {
  display: flex;
  margin-top: 150px;
}
.third-line {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.catalog-products__btn {
  width: 100%;
  height: 73px;
  padding: 24px 30px 26px;
  background: #F3F4F7;
  border-radius: 8px;
  font-weight: 600;
  font-size: 18px;
  color: #191E32;
  transition: all .5s;
  &:hover {
    background: #cfcfd0;
  }
}
@media screen and (max-width: 1189px) {

}
@media screen and (max-width: 991.98px) {

}
@media screen and (max-width: 767.98px) {

}
@media screen and (max-width: 479.98px) {

}
</style>