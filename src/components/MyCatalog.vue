<template>
  <section class="catalog">
    <div class="container catalog-container">
      <h1 class="catalog-title">
        Каталог кресел
      </h1>
      <div class="catalog-select__group">
        <catalog-select
            :selectTitle="selectedName"
            :optionsArray="optionsOne"
            :selectImg="firstImgPath"
            @select="optionSelectGetValue"
            class="first-catalog__select"
        >
        </catalog-select>
      </div>
      <div class="catalog-products">
        <catalog-products

        ></catalog-products>
      </div>
    </div>
  </section>
</template>

<script>
import CatalogSelect from "./CatalogSelect"
import CatalogProducts from "./CatalogProducts"
import SitterImg from "@/../public/img/sitter.svg"
import SpinkaImg from "@/../public/img/spinka.svg"
export default {
  components: {CatalogSelect, CatalogProducts},
  name: "MyCatalog",
  data() {
    return {
      firstImgPath: SitterImg,
      secondImgPath: SpinkaImg,
      optionsOne: [
        {name: 'Показать все', value: 0},
        {name: 'Кожзам', value: 1},
        {name: 'Кожа', value: 2},
      ],
      selectedName: 'Сиденье',
    }
  },
  methods: {
    optionSelectGetValue(option) {
      if(option.value === 1 || option.value === 2 || option.value === 0) {
        this.selectedName = option.name;
      }
    },

  },
}
</script>

<style scoped>
.catalog-title {
  text-align: center;
  font-weight: 900;
  font-size: 44px;
  color: #2B3350;
  margin-top: 92px;
}
.catalog-select__group {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  padding-bottom: 200px;
}
.first-catalog__select {
  margin-right: 20px;
}
</style>