<template>
  <section id="section1" class="section section1">
    <div class="square">
      <h1 class="Headline"><a href="">RSdesign</a></h1>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~assets/scss/_media.scss";
.section {
  display: flex;
  justify-content: center;
  align-items: center;
  scroll-snap-align: start;
  height: 100vh;
  margin: 0 auto;
  padding: 0 12px;
  @include media(md) {
    width: 960px;
    padding: 0;
  }
  .square {
    width: auto;
    height: auto;
    background-image: linear-gradient(00deg, black, black),
      linear-gradient(00deg, black, black), linear-gradient(00deg, black, black),
      linear-gradient(00deg, black, black);
    background-repeat: no-repeat;
    background-size: 2px 100%, 100% 2px, 2px 100%, 100% 2px;
    background-position: left bottom, left top, right top, right bottom;
    animation: square_anim 2s linear forwards;
    &:hover {
      transition: 0.5s;
      background-color: #333;
    }
    .Headline {
      animation: SlideIn 1.6s linear 2s forwards;
      font-size: 4rem;
      opacity: 0;
      @include media(xs){
        font-size: 3rem;
      }
      > a {
        text-decoration: none;
        color: #333;
        display: block;
        padding: 1rem;
        &:hover {
          transition: 0.5s;
          color: white;
        }
      }
    }
  }
}

@keyframes square_anim {
  00% {
    background-size: 2px 0, 0 2px, 2px 0, 0 2px;
  }
  25% {
    background-size: 2px 100%, 0 2px, 2px 0, 0 2px;
  }
  50% {
    background-size: 2px 100%, 100% 2px, 2px 0, 0 2px;
  }
  75% {
    background-size: 2px 100%, 100% 2px, 2px 100%, 0 2px;
  }
  100% {
    background-size: 2px 100%, 100% 2px, 2px 100%, 100% 2px;
  }
}

@keyframes SlideIn {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>