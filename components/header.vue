<template>
  <header>
    <el-row type="flex" align="middle" class="el-row" justify="center">
      <el-col
        ><h1><a href="">RSdesign</a></h1></el-col
      >
      <el-col>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          id="override"
        >
          <el-menu-item index="1"
            ><a href="#section1"
              ><i class="el-icon-house"></i>HOME</a
            ></el-menu-item
          >
          <el-menu-item index="2"
            ><a href="#section2"
              ><i class="el-icon-user"></i>ABOUT</a
            ></el-menu-item
          >
          <el-menu-item index="3"
            ><a href="#section3"
              ><i class="el-icon-folder-opened"></i>WORKS</a
            ></el-menu-item
          >
        </el-menu>
      </el-col>
    </el-row>
    <div class="line"></div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/_media.scss";
header {
  border-bottom: solid 1px #e6e6e6;
  .el-row {
    @include media(md) {
      width: 960px;
      margin: 0 auto;
    }
    h1 {
      margin: auto 0;
      > a {
        text-decoration: none;
        color: #333;
        cursor: pointer;
        &:hover {
          opacity: 0.8;
          transition: 0.5s;
        }
      }
    }
    .el-menu {
      display: flex;
      flex-flow: row wrap;
      justify-content: flex-end;
      border-bottom: none;
      &-item {
        padding: 0;
        > a {
          display: flex;
          align-items: center;
          text-decoration: none;
          padding: 0 20px;
        }
      }
    }
  }
}
/deep/#override{
  .el-menu-item[style]{
    border-bottom-color: none!important;
  }
}
</style>