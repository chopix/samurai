<template>
  <div>
    <my-header></my-header>
    <my-hero></my-hero>
    <my-options></my-options>
    <my-catalog></my-catalog>
    <my-features></my-features>
  </div>
</template>

<script>
import MyHeader from "@/components/MyHeader";
import MyHero from "@/components/MyHero"
import MyOptions from "@/components/MyOptions";
import MyCatalog from "@/components/MyCatalog"
import MyFeatures from "@/components/MyFeatures"
export default {
  components: {MyHeader, MyHero, MyOptions, MyCatalog, MyFeatures}
}
</script>

<style scoped lang="scss">

</style>