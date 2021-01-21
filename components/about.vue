<template>
  <section id="section2" class="section section2">
    <h2>My skills and favourites</h2>
    <el-carousel
      direction="vertical"
      :autoplay="true"
      indicator-position="none"
    >
      <el-carousel-item
        v-for="item in items"
        :key="item.id"
        :style="item.styleObject"
      >
        <h3 class="headLine">{{ item.head }}</h3>
      </el-carousel-item>
    </el-carousel>
    <el-collapse v-model="activeNames" @change="handleChange" accordion>
      <el-collapse-item title="CODING" name="1">
        <div>
          Nuxt.js/Vue.js/JavaScript/HTML/CSS
          などが使えます。最近はライブラリを使うのにハマってます。
        </div>
      </el-collapse-item>
      <el-collapse-item title="TOURING" name="2">
        <div>
          z900rs
          cafeのライムグリーンに乗ってます。歴は5年くらいです。群馬にいくのが好きです。
        </div>
      </el-collapse-item>
      <el-collapse-item title="SWIMMING" name="3">
        <div>
          小学生のころから習っていました。いまでも週一ペースで通ってます。クロールが得意です。
        </div>
      </el-collapse-item>
    </el-collapse>
  </section>
</template>

<script>
export default {
  data() {
    return {
      activeNames: ["1"],
      items: [
        {
          head: "CODING",
          id: 1,
          styleObject: {
            backgroundImage: 'url("/coding.jpg")',
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          },
        },
        {
          head: "TOURING",
          id: 2,
          styleObject: {
            backgroundImage: 'url("/bike.jpg")',
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          },
        },
        {
          head: "SWIMMING",
          id: 3,
          styleObject: {
            backgroundImage: 'url("/swim.jpg")',
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          },
        },
      ],
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/_media.scss";
.section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0 auto;
  padding: 0 12px;
  scroll-snap-align: start;
  @include media(md) {
    width: 960px;
    padding: 0;
  }
  & h2 {
    font-size: 3.5rem;
    margin-bottom: 32px;
    @include media(xs){
      font-size: 2.5rem;
      margin-bottom: 16px;
    }
  }
  /deep/.el-carousel {
    width: 100%;
    height: 200px;
    margin-bottom: 32px;
    position: relative;
    @include media(md){
      width: 720px;
      height: 320px;
    }
    @include media(xs) {
      height: 150px;
      margin-bottom: 16px;
    }
    &__container{
      height: 320px;
      @include media(sm){
        position: unset;
        height: 200px;
      }
    }
    &__item {
      @include media(sm) {
        background-size: cover;
      }
      > h3 {
        position: absolute;
        top: 50%;
        right: 32px;
        transform: translateY(-50%);
        color: white;
        font-size: 3rem;
        margin: 0;
        @include media(xs){
          font-size: 2.5rem;
        }
      }
    }
  }
}

/deep/.el-collapse {
  width: 100%;
  @include media(md) {
    width: 720px;
  }
  &-item__header {
    color: #333;
    font-weight: bold;
    font-size: 1.2rem;
    height: 32px;
    line-height: 32px;
    @include media(md){
      font-size: 1.5rem;
      height: 48px;
      line-height: 48px;
    }
  }
  &-item__content{
    color: #333;
    font-size: .8rem;
    @include media(md){
      font-size: 1rem;
    }
  }
}
</style>
