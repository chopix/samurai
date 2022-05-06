<template>
  <div class="product-card__wrapper" :key="productId">
    <img :src="imgUrlPath" alt="#" class="product-card__img">
    <div class="product-card__info">
      <h5 class="product-card__name">{{productName}}</h5>
      <p class="product-card__new-price">{{productPriceNew}}</p>
      <div class="product-card__old-price">
        <div class="old-price__decor"></div>
        {{productPriceOld}}
      </div>
    </div>
    <my-btn @click="addToBasket" class="hover_btn">Добавить в корзину</my-btn>
  </div>
</template>

<script>
import MyBtn from "./UIComp/MyBtn"
import { useToast } from "vue-toastification";
import {mapMutations, mapGetters} from 'vuex'
export default {
  name: "ProductCard",
  components: {MyBtn},
  props: {
    imgUrlPath: String,
    productName: String,
    productPriceNew: String,
    productPriceOld: String,
    productId: Number,
  },
  setup() {
    // Get toast interface
    const toast = useToast();
    return { toast }
  },
  methods: {
    ...mapMutations({
      BASKET_ADD_NUMBER: 'BASKET_ADD_NUMBER'
    }),
    addToBasket() {
      this.BASKET_ADD_NUMBER();
      this.toast.success(`Товар успешно добавлен в корзину. В корзине: ${this.getBasketCounterValue} `, {
        timeout: 3500,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 1.66,
        showCloseButtonOnHover: false,
        hideProgressBar: false,
      });
    }
  },
  computed: {
    ...mapGetters({
      getBasketCounterValue: 'getBasketCounterValue'
    })
  }

}
</script>

<style scoped lang="scss">
.product-card__wrapper {
  width: 281px;
  margin-right: 7px;
  margin-bottom: 100px;
  cursor: pointer;
  transition: all .2s;
  position: relative;
  &:hover {
    top: 0;
    left: 0;
    background: #FFFFFF;
    border: 1px solid #F3F4F7;
    box-shadow: 0 20px 52px -8px rgba(0, 0, 0, 0.15);
    border-radius: 16px;
    transform: scale(1.1);
    padding-bottom: 25px;
    .hover_btn {
      display: block;
    }
  }
}
.product-card__img {
  width: 278px;
  height: 333px;
}
.product-card__info {
  text-align: center;
  margin-top: 51px;
}
.product-card__name {
  font-weight: 400;
  font-size: 20px;
  color: #2B3350;
  width: 273px;
}
.product-card__new-price {
  font-weight: 900;
  font-size: 28px;
  text-align: center;
  letter-spacing: -0.05em;
  color: #2B3350;
}
.product-card__old-price {
  font-weight: 700;
  font-size: 20px;
  letter-spacing: -0.05em;
  color: #2B3350;
  margin-top: 4px;
  position: relative;
}
.old-price__decor {
  width: 100px;
  height: 1px;
  border: 1px solid #F54D35;
  transform: rotate(-3.77deg);
  background-color: #F54D35;
  position: absolute;
  bottom: 10px;
  left: 90px;
}
.hover_btn {
  display: none;
  width: 236px;
  height: 63px;
  margin: auto;
  margin-top: 20px;
}
</style>