<template>
  <header>
    <div class="menu-container">
      <div class="menu-container-inner">
        <input type="checkbox" name="menu" class="hidden-checkbox" id="menu" v-model="checked">
        <label for="menu" class="menu-icon"></label>
        <h2 class="menu-header"><a href="">RSdesign</a></h2>
      </div>
      <nav class="menu" :class="{'is-active': checked}">
        <ul class="menu-list">
          <li class="menu-item"><a href="#section1" class="menu-link" @click="checked = false">HOME</a></li>
          <li class="menu-item"><a href="#section2" class="menu-link" @click="checked = false">ABOUT</a></li>
          <li class="menu-item"><a href="#section3" class="menu-link" @click="checked = false">WORKS</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return{
      checked: '',
    }
  }
}
</script>

<style lang="scss" scoped>
$size-MenuIcon: 30px;
$width-MenuIcon: 6px;
$color-MenuIcon: #999;

.menu-container {
  .hidden-checkbox {
    display: none;
    &:checked + .menu-icon{
      &::before{
        box-shadow: transparent 0 0 0;
        transform: rotate(45deg) translate3d($width-MenuIcon, -$width-MenuIcon / 2, 0);
      }
      &::after{
        transform: rotate(-45deg)  translate3d($width-MenuIcon, $width-MenuIcon / 2, 0);
      }
    }
    &:checked ~ .menu-header a{
      opacity: 1;
      transform: none;
    }
  }
  &-inner{
    position: fixed;
    display: flex;
    align-items: center;
    padding: 20px;
    z-index: 2;
    .menu-icon {
      cursor: pointer;
      position: relative;
      height: $size-MenuIcon;
      width: $size-MenuIcon;  
      z-index: 2;
      &::before {
        content: "";
        position: absolute;
        box-shadow: 0 ($width-MenuIcon * 2) 0 $color-MenuIcon;
        height: $width-MenuIcon;
        transform-origin: left top;
        width: $size-MenuIcon;
        background: $color-MenuIcon;
        transition: box-shadow 0.2s linear, transform 0.4s 0.2s;
      }
      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        height: $width-MenuIcon;
        transform-origin: left bottom;
        width: $size-MenuIcon;
        background: $color-MenuIcon;
        transition: box-shadow 0.2s linear, transform 0.4s 0.2s;
      }
    }
    .menu-header a{
      color: $color-MenuIcon;
      font-weight: 100;
      line-height: $size-MenuIcon;
      margin: 0 0 0 $size-MenuIcon / 2;
      opacity: 0;
      position: relative;
      text-decoration: none;
      display: block;
      transform: translate3d(0, -$size-MenuIcon / 2, 0);
      transition: transform 0.6s, opacity 0.5s;
      z-index: 2;
    }
  }
  .menu {
    background: #333;
    opacity: .85;
    position: absolute;
    top: 0;
    bottom: 0;
    transform: translateX(-100vw);
    height: 100vh;
    width: 60%;
    transition: transform 1.5s;
    &-list{
      list-style-type: none;
      margin: $size-MenuIcon + 30px 0 0;
      padding: 0;
    }
    &-item{
      margin: 0;
    }
    &-link {
      color: #fff;
      display: block;
      overflow: hidden;
      padding: 8px 22px;
      position: relative;
      text-decoration: none;
      z-index: 1;
      &::before {
        background: #444;
        bottom: 0;
        content: '';
        left: 0;
        position: absolute;
        right: 100%;
        top: 0;
        transition: right .4s;
        z-index: -1;
      }
      // &::after {
      //   content: attr(href);
      //   color: #fff;
      //   float: right;
      //   opacity: 0;
      //   transition: opacity 0.8s, transform 0.4s;
      //   transform: translate3d(100%, 0, 0);
      // }
      // &:hover::before {
      //   right: 0;
      // }
      // &:hover::after {
      //   opacity: 0.5;
      //   transform: translate3d(0, 0, 0);
      // }
    }
  }
  .is-active.menu{
      transform: translateX(0);
      position: fixed;
      overflow: hidden;
      transition: transform .4s;
    }
  .is-active.menu-link{
      &::before{
        right: 0;
      }
    }
}
</style>