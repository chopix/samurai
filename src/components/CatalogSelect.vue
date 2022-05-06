<template>
  <div class="catalog-select">
    <div class="title-wrapper" @click="areOptionsVisible = !areOptionsVisible">
      <img :src="selectImg" alt="#" class="select-img">
      <p class="title">{{selectTitle}}</p>
      <img src="~/../../public/img/arrow.svg" alt="#" class="select-arrow">
    </div>
    <div
        class="options"
        v-if="areOptionsVisible"
    >
      <p
          v-for="option in optionsArray"
          :key="option.value"
          @click="selectOption(option)"
      >{{option.name}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CatalogSelect",
  props: {
    selectTitle: String,
    selectImg: String,
    optionSelectedName: String,
    optionSecondName: String,
    optionsArray: Array,
  },
  data() {
    return {
      areOptionsVisible: false
    }
  },
  methods: {
    selectOption(option) {
      this.$emit('select', option)
      this.areOptionsVisible = false;
      this.$store.commit('SET_SELECT_VALUE', option.value)
    },
    selectHide() {
      this.areOptionsVisible = false;
    }
  },
  mounted() {
    document.addEventListener('click', this.selectHide.bind(this), true)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.selectHide, true)
  },
}
</script>

<style scoped lang="scss">
.catalog-select {
  position: relative;
  cursor: pointer;
  background: #FFFFFF;
  border: 1px solid #E7EAEF;
  border-radius: 8px;
  width: 281px;
  height: 50px;
  font-family: 'Inter', sans-serif;
  z-index: 50;
  transition: all .5s;
}
.title-wrapper {
  display: flex;
  padding: 12px 0 23px 15px;
  align-items: center;
  position: relative;

}
.select-img {
  margin-right: 10px;
}
.select-arrow {
  margin-left: 20px;
  position: absolute;
  right: 8px;
  top: 18px;
}
.catalog-select p {
  margin: 0;
  display: flex;
}
.title {
  font-weight: 400;
  font-size: 18px;
  color: #2B3350;
}
.options {
  position: absolute;
  top: 48px;
  right: 0;
  width: 100%;
  background: #FFFFFF;
  border: 1px solid #E7EAEF;
  border-radius: 8px;
  font-weight: 400;
  font-size: 17px;
  line-height: 230%;
  padding-left: 20px;
  z-index: -50;
  & p:hover {
    color: #0AA6FE;
  }
}
</style>