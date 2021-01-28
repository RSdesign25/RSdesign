<template>
  <section id="section3" class="section section3">
    <h2>My works</h2>
    <ul class="works-contaier innerScroll">
      <li v-for="item in items" :key="item.id" class="works-contents">
        <el-button @click="dialogVisible = true; contentVisible(item);">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <img :src="item.pic" class="thumbnail" />
          </el-card>
        </el-button>
      </li>
    </ul>
    <el-dialog :title="itemVisible.title" :visible.sync="dialogVisible" top="0" center>
      <figure ref="imageBox">
        <img :src="itemVisible.sitePic" class="image" />
      </figure>
      <el-link slot="footer" class="dialog-footer" :href="itemVisible.siteLink" target=”_blank”>Check<i class="el-icon-view el-icon--right"></i></el-link>
    </el-dialog>
  </section>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      itemVisible: {
        title: null,
        sitePic: null,
        siteLink: null,
      },
      items: [
        {
          // title: "税制改正 2021年度",
          title: null,
          pic: "/RSdesign/still/og_image-1.jpg",
          sitePic: "/RSdesign/still/zeisei2021.jpg",
          // siteLink: "https://www3.nhk.or.jp/news/special/zeisei2021/",
          siteLink: null,
        },
        {
          // title: "2021年度予算案",
          title: null,
          pic: "/RSdesign/still/og_image.jpg",
          sitePic: "/RSdesign/still/yosan2021.jpg",
          // siteLink: "https://www3.nhk.or.jp/news/special/yosan2021/",
          siteLink: null,
        },
      ],
    };
  },
  methods: {
    contentVisible(item) {
      this.itemVisible.title = item.title;
      this.itemVisible.sitePic = item.sitePic;
      this.itemVisible.siteLink = item.siteLink;
    },
    reScroll() {
      if(this.dialogVisible){
        this.$refs.imageBox.scrollTop = 0;
      }
    }
  },
  computed:{
    works(){
      return this.$store.state.works.works
    }
  },
  created(){
    this.$store.dispatch('works/init')
  },
  mounted(){
    // for(let i=0;i<this.items.length;i++){
    //   console.log(this.works)
    //   this.items[i].title = this.works[i].title;
    //   this.items[i].siteLink = this.works[i].siteLink;
    // }
    // this.items.forEach( (value,index) => {
    //   console.log(value)
    //   value.title = this.works[index].title;
    //   value.siteLink = this.works[index].siteLink;
    // });
  },
  updated() {
    this.reScroll();
  }
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
  scroll-snap-align: start;
  padding: 0 12px;
  @include media(md) {
    width: 960px;
    padding: 0;
  }
  h2 {
    font-size: 3.5rem;
    margin-bottom: 32px;
    @include media(xs){
      font-size: 2.5rem;
      margin-bottom: 16px;
    }
  }
  .works{
    &-contaier{
      display: flex;
      flex-flow: column nowrap;
      @include media(md){
        flex-flow: row wrap;
        justify-content: flex-start;
        align-items: flex-start;
        width: 720px;
      }
    }
    &-contents{
      @include media(md){
        width: calc(720px / 3);
      }
      .el-button {
        padding: 0;
      }
      .thumbnail{
        width: 100%;
        display: block;
      }
    }
  }
  .innerScroll{
    height: 70%;
    overflow-y: scroll;
    -ms-overflow-style: none; /* IE, Edge 対応 */
    scrollbar-width: none; /* Firefox 対応 */
    &::-webkit-scrollbar {
      /* Chrome, Safari 対応 */
      display: none;
    }
    @include media(md){
      height: max-content;
    }
  }
  /deep/.el-dialog {
    &__wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      .el-dialog {
        margin: 0;
        width: 90%;
        @include media(md){
          width: 720px;
        }
        &__title{
          width: 80%;
          display: inline-block;
        }
      }
    }
    &__body {
      padding: 0;
      & figure {
        height: 70vh;
        overflow-y: scroll;
        .image{
          width: 100%;
          display: block;
        }
      }
    }
  }
}
</style>