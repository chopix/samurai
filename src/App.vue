<template>
  <div id="app">
    <router-view>
    </router-view>
  </div>
</template>

<style lang="scss">
body {
  font-family: 'Inter', sans-serif;
}
.container {
  max-width: 1189px;
  margin: 0 auto;
  padding: 15px;
}
@media screen and (max-width: 1189px) {
  .container {
    max-width: 1050px;
  }
}
@media screen and (max-width: 991.98px) {
  .container {
    max-width: 850px;
  }
}
@media screen and (max-width: 767.98px) {
  .container {
    max-width: 650px;
  }
}
@media screen and (max-width: 479.98px) {
  .container {
    max-width: 350px;
  }
}

</style>
