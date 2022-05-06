<template>
  <header ref="headerEl" class="header">
    <div class="container header-container">
      <div class="mobile-header">
        <div class="mobile-header__visible">
          <button @click="isVisibleHeader" class="burger-btn">
            <img src="~/../../public/img/menu-btn.svg" alt="#" class="burger-btn__img">
          </button>
          <router-link class="header-logo" to="/">
            <img src="~/../../public/img/header-logo.png" alt="HEADER_LOGO">
            <p class="header-subtitle">кресла samurai</p>
          </router-link>
          <router-link to="/basket" class="lower-header__store">
            <img src="~/../../public/img/store.svg" alt="STORE_ICON" class="header-store__img">
            <div class="store-count" v-if="$store.state.main.basketCounter > 0">
              +{{$store.state.main.basketCounter}}
            </div>
          </router-link>
        </div>
        <transition name="fade">
          <div class="mobile-header__hidden" v-if="visibleHeader === true">
            <div class="mobile-header__content">
              <div class="lower-header__left">
                <button class="header-catalog">
                  <img src="~/../../public/img/catalog.svg" alt="CATALOG">
                  Каталог
                </button>
                <nav class="header-navbar">
                  <ul class="header-list">
                    <li class="header-list__item">
                      <a href="#" class="header-list__link">
                        О продукте
                      </a>
                    </li>
                    <li class="header-list__item">
                      <a href="#" class="header-list__link">
                        Отзывы
                      </a>
                    </li>
                    <li class="header-list__item">
                      <a href="#" class="header-list__link">
                        Контакты
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div class="header-input__group">
                <input type="text" class="header-input" placeholder="Название модели или артикул">
                <img src="~/../../public/img/search.svg" alt="search" class="header-input__img">
              </div>
              <button class="toper-header__button">Заказать звонок</button>
              <div class="bottom-header">
                <div class="header-tel">
                  <img src="~/../../public/img/phone.svg" alt="PHONE_ICON" class="header-tel__img">
                  <a class="header-tel__text" href="tel:+74952210675">
                    +380 111 111-11-11
                  </a>
                </div>
                <div class="lower-header__city">
                  <img src="~/../../public/img/city.svg" alt="CITY_ICON" class="header-city__img">
                  <div class="lower-header__cities">
                    <p class="header-city__text">{{$store.state.main.headerCity}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <div ref="burgerMenu" class="burger">
        <div class="toper-header">
          <router-link class="header-logo" to="/">
            <img src="~/../../public/img/header-logo.png" alt="HEADER_LOGO">
            <p class="header-subtitle">кресла samurai</p>
          </router-link>
          <div class="header-input__group">
            <input type="text" class="header-input" placeholder="Название модели или артикул">
            <img src="~/../../public/img/search.svg" alt="search" class="header-input__img">
          </div>
          <div class="header-tel">
            <img src="~/../../public/img/phone.svg" alt="PHONE_ICON" class="header-tel__img">
            <a class="header-tel__text" href="tel:+74952210675">
              +380 111 111-11-11
            </a>
          </div>
          <button class="toper-header__button">Заказать звонок</button>
        </div>
        <div class="lower-header">
          <div class="lower-header__left">
            <button class="header-catalog">
              <img src="~/../../public/img/catalog.svg" alt="CATALOG">
              Каталог
            </button>
            <nav class="header-navbar">
              <ul class="header-list">
                <li class="header-list__item">
                  <a href="#" class="header-list__link">
                    О продукте
                  </a>
                </li>
                <li class="header-list__item">
                  <a href="#" class="header-list__link">
                    Отзывы
                  </a>
                </li>
                <li class="header-list__item">
                  <a href="#" class="header-list__link">
                    Контакты
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="lower-header__right">
            <div class="lower-header__city">
              <img src="~/../../public/img/city.svg" alt="CITY_ICON" class="header-city__img">
              <div class="lower-header__cities">
                <p class="header-city__text">{{$store.state.main.headerCity}}</p>
              </div>
            </div>
            <router-link to="/basket" class="lower-header__store">
              <img src="~/../../public/img/store.svg" alt="STORE_ICON" class="header-store__img">
              <p>Моя корзина</p>
              <div class="store-count" v-if="$store.state.main.basketCounter > 0">
                +{{$store.state.main.basketCounter}}
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>

export default {
  name: "MyHeader",
  data() {
    return {
      visibleHeader: false
    }
  },
  methods: {
    isVisibleHeader() {
      this.visibleHeader = !this.visibleHeader;
      if(this.visibleHeader === true) {
        this.$refs.headerEl.style.height='280px';
      }
      else {
        this.$refs.headerEl.style.height='20px';
      }
    }
  }
}
</script>

<style scoped lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
.mobile-header__hidden {
  position: relative;
  z-index: 50;
}
.header {
  height: 89px;
  padding-top: 21px;
}
.header-logo {
  max-width: 184px;
}
.header-subtitle {
  color: #959AAE;
  font-size: 10px;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.toper-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-input {
  width: 510px;
  height: 51px;
  background: #F7F7F8;
  border-radius: 8px;
  padding: 15px 0px 17px 50px;
  &:focus {
    box-shadow: 0px 5px 10px 5px #2F80ED;
  }
}
.header-input__group {
  position: relative;
}
.header-input__img {
  position: absolute;
  top: 16px;
  left: 28px;
}
.header-tel {
  display: flex;
  align-items: center;
}
.header-tel__img {
  width: 30px;
}
.header-tel__text {
  font-weight: 500;
  font-size: 19px;
  color: #2B3350;
}
.toper-header__button {
  background: #F3F4F7;
  border-radius: 8px;
  padding: 13.5px 28.5px 15.5px 28.5px;
  font-weight: 500;
  font-size: 16px;
  color: #2B3350;
  transition: all .2s;
  &:hover {
    background: #d9d9d9;
  }
}
.lower-header {
  margin-top: 21px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.lower-header__left {
  display: flex;
  align-items: center;
}
.lower-header__right {
  display: flex;
  align-items: center;
}
.header-catalog {
  background: #2B3350;
  border-radius: 0px 12px 12px 12px;
  width: 158px;
  height: 47px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 17px;
  color: #FFFFFF;
  transition: all .2s;
  img {
    margin-right: 11px;
  }
  &:hover {
    background: #151928;
  }
}
.header-navbar {
  margin-left: 10px;
}
.header-list {
  display: flex;
}
.header-list__item {
  margin-left: 34px;
}
.header-list__link {
  color: #2B3350;
  font-weight: 500;
  font-size: 16px;
  transition: all .2s;
  &:hover {
    color: #c2c2c2;
  }
}
.lower-header__city {
  display: flex;
  align-items: center;
  .header-city__img {
    margin-right: 8px;
  }
  font-weight: 500;
  font-size: 16px;
  color: #2B3350;
}
.lower-header__store {
  margin-left: 25px;
  display: flex;
  font-weight: 500;
  font-size: 16px;
  color: #2B3350;
  img {
    margin-right: 8px;
  }
}
.store-count {
  font-family: Arial, sans-serif;
  background: #0074D4;
  border-radius: 27px;
  padding: 1px 6px;
  color: #FFFFFF;
  font-weight: 700;
  font-size: 12px;
  display: flex;
  align-items: center;
  margin-left: 6.5px;
}
.mobile-header {
  display: none;
}
@media screen and (max-width: 1189px) {
  .header-tel__text {
    font-size: 12px;
  }
  .header-tel__img {
    width: 25px;
  }
  .toper-header__button {
    padding: 0px 7px 0px 7px;
    font-size: 12px;
    height: 40px;
  }
  .header-input {
    width: 480px;
  }
  .header-list__link {
    font-size: 14px;
  }
}
@media screen and (max-width: 991.98px) {
  .header-input {
    width: 310px;
  }
}
@media screen and (max-width: 767.98px) {
  .burger {
    display: none;
    position: relative;
    z-index: 50;
  }
  .header {
    height: 20px;
    background-color: white;
  }
  .mobile-header {
    display: block;
  }
  .mobile-header__visible {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .mobile-header__content {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .header-logo {
    display: flex;
    flex-direction: column;
  }
  .lower-header__store {
    margin-left: 0;
    position: relative;
  }
  .store-count {
    width: 19px;
    height: 13px;
    font-weight: 700;
    font-size: 9px;
    justify-content: center;
    align-items: center;
    padding: 0px 4px;
    position: absolute;
    right: -2px;
    top: -4px;
  }
  .burger-btn {
    background: none;
  }
  .visible-flex__group {
    display: flex;
    justify-content: space-between;
  }
  .header-input__group {
    margin-top: 20px;
  }
  .toper-header__button {
    padding: 9px 22px 11px;
    font-weight: 500;
    margin-top: 15px;
    font-size: 16px;
  }
  .bottom-header {
    margin-top: 35px;
    display: flex;
  }
  .lower-header__city {
    margin-left: 20px;
  }
  .header-tel__img {
    width: 24px;
    height: 24px;
  }
  .header-tel__text {
    font-weight: 500;
    font-size: 19px;
  }
  .header-city__img {
    width: 20px;
    height: 20px;
  }
  .header-city__text {
    font-weight: 500;
    font-size: 16px;
  }
}
@media screen and (max-width: 479.98px) {}
</style>