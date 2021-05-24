<template>
  <div class="banner">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../assets/sildeshow/1.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../assets/sildeshow/2.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../assets/sildeshow/3.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../assets/sildeshow/4.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../assets/sildeshow/5.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../assets/sildeshow/6.jpg" alt="">
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'

export default {
  name: 'Banner',
  mounted () {
    //轮播图
    new Swiper('.swiper-container', {
      loop: true,
      // 如果需要分页器
      pagination: '.swiper-pagination',
      // 如果需要前进后退按钮
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev'
    })
  }
}
</script>

<style scoped>

</style>
