<template>
  <div class="container">
    <div class="fullPageScroll">
      <MainVisual />
      <About />
      <Works />
      <!-- <Footer /> -->
    </div>
    <nav id="pagination" class="pagination">
      <a id="pagination1" href="#section1"></a>
      <a id="pagination2" href="#section2"></a>
      <a id="pagination3" href="#section3"></a>
      <!-- <a id="pagination4" href="#section4"></a>
    <a id="pagination5" href="#section5"></a> -->
    </nav>
  </div>
</template>

<script>
import MainVisual from "@/components/mainvisual.vue";
import About from "@/components/about.vue";
import Works from "@/components/works.vue";
import Footer from "@/components/footer.vue";
export default {
  components: {
    MainVisual,
    About,
    Works,
    Footer,
  },
  mounted() {
    // スムーススクロール
    const paginations = document.querySelectorAll(
      ".pagination a, .el-menu-item a, .menu-link"
    );
    paginations.forEach((pagination) => {
      pagination.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = e.target.hash;
        const target = document.querySelector(targetId);
        target.scrollIntoView({ behavior: "smooth" });
      });
      // Intersection Observer
      const sections = document.querySelectorAll(".section");
      const observerRoot = document.querySelector(".fullPageScroll");
      const options = {
        root: observerRoot,
        rootMargin: "-50% 0px",
        threshold: 0,
      };
      const observer = new IntersectionObserver(doWhenIntersect, options);
      sections.forEach((section) => {
        observer.observe(section);
      });
      /**
       * 交差したときに呼び出す関数
       * @param entries - IntersectionObserverEntry IntersectionObserverが交差したときに渡されるオブジェクトです。
       */
      function doWhenIntersect(entries) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activatePagination(entry.target);
          }
        });
      }
      /**
       * ページネーションの大きさを変える関数
       * @param element - HTMLElement 現在表示中のスライドのHTML要素を引数に取ります。
       */
      function activatePagination(element) {
        const currentActiveIndex = document.querySelector(
          "#pagination .active"
        );
        // const currentActiveHeader = document.querySelector(
        //   ".el-menu .is-active"
        // );
        const currentActiveNavi = document.querySelector(
          ".menu-item .is-active"
        );
        if (currentActiveIndex !== null) {
          currentActiveIndex.classList.remove("active");
        }
        // if (currentActiveHeader !== null) {
        //   currentActiveHeader.classList.remove("is-active");
        // }
        if (currentActiveNavi !== null) {
          currentActiveNavi.classList.remove("is-active");
        }
        const newActiveIndex = document.querySelector(
          `#pagination a[href='#${element.id}']`
        );
        // const newActiveHeader = document.querySelector(
        //   `.el-menu-item a[href='#${element.id}']`
        // );
        const newActiveNavi = document.querySelector(
          `.menu-item a[href='#${element.id}']`
        );
        newActiveIndex.classList.add("active");
        // newActiveHeader.parentNode.classList.add("is-active");
        newActiveNavi.classList.add("is-active");
      }
    });
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/_media.scss";
.fullPageScroll {
  width: 100%;
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none; /* IE, Edge 対応 */
  scrollbar-width: none; /* Firefox 対応 */
  &::-webkit-scrollbar {
    /* Chrome, Safari 対応 */
    display: none;
  }
}
.pagination {
  position: fixed;
  top: 50%;
  right: 32px;
  transform: translateY(-50%);
  display: none;
  @include media(md){
    display: block;
  }
  & a {
    display: block;
    width: 12px;
    height: 12px;
    margin: 24px 0;
    border-radius: 50%;
    background-color: black;
    transition: transform 0.2s;
  }
  & a.active {
    transform: scale(1.8);
  }
}
</style>
