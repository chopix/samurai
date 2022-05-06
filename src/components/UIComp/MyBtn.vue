<template>
  <button class="my-btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "MyBtn"
}
</script>

<style scoped>
.my-btn {
  background: #0074D4;
  box-shadow: 0px 12.9632px 15.375px rgba(0, 116, 212, 0.241), 0px 5.38427px 6.38599px rgba(0, 116, 212, 0.15), 0px 1.94738px 2.30969px rgba(0, 116, 212, 0.059);
  border-radius: 8px;
  width: 297px;
  height: 78px;
  color: #FFFFFF;
  font-weight: 600;
  font-size: 18px;
  transition: all .2s;
}
.my-btn:hover {
  background: #015aa2;
}
</style>