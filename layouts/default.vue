<template>
  <div class="wrap">
    <!-- <Header /> -->
    <Nav />
    <Nuxt />
  </div>
</template>

<script>
import Header from "@/components/header.vue";
import Nav from "@/components/nav.vue";
export default {
  components: {
    Header,
    Nav,
  },
};
</script>

<style lang="scss">
@import "~assets/scss/_media.scss";
* {
  margin: 0;
  padding: 0;
}
.wrap {
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN",
    "Hiragino Sans", Meiryo, sans-serif;
  font-size: 1rem;
  color: #333;
}
header{
  position: relative;
  z-index: 99999;
  @include media(md){
    display: none;
  }
}
ul,ol{
  list-style: none;
}
</style>
