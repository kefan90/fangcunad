<template>
  <div id="app">
    <!-- 导航栏 -->
    <div class="nav">
      <div class="content">
        <div class="log">
          <a><img src="./assets/log.jpg" alt=""></a>
        </div>
        <ul class="">
          <li><router-link to="/" tag="a">网站首页</router-link></li>
          <li><router-link to="/profile" tag="a">公司简介</router-link></li>
          <li><router-link to="/adv" tag="a">服务优势</router-link></li>
          <li><router-link to="/case" tag="a">经典案例</router-link></li>
          <li><router-link to="/cooperative" tag="a">合作企业</router-link></li>
          <li><router-link to="/contactus" tag="a">联系我们</router-link></li>
          <li><a href="https://fangcunad.taobao.com/" target="_blank">淘宝店铺</a></li>
        </ul>
        <div class="tel">
          <img src="./assets/header_telbg.png" alt="">
          <p class="tel-1">
            <a href="tel:17030752000">170 3075 2000</a>
            <br>
            <a href="tel:029-86266300">029-8626 6300</a>
          </p>
        </div>
      </div>
    </div>
    <router-view></router-view>
    <!-- 页面底部 -->
    <div class="foot">
      <div class="content">
        <ul class="left">
          <li>备案号：<a style="color:#FFF" href="https://beian.miit.gov.cn/" target="_blank">陕ICP备16001930号-1</a>
          </li>
        </ul>
        <ul class="right">
          <li><router-link to="/" tag="a">网站首页</router-link></li>
          <li><router-link to="/profile" tag="a">公司简介</router-link></li>
          <li><router-link to="/adv" tag="a">服务优势</router-link></li>
          <li><router-link to="/contactus" tag="a">联系我们</router-link></li>
          <li><a href="https://fangcunad.taobao.com/" target="_blank">淘宝店铺</a></li>
        </ul>
      </div>
    </div>
    <!-- 侧边部分 -->
    <div class="sidebar">
      <div id="goTop" @click="backTop">
        <img src="./assets/gotop.png" alt="">
      </div>
      <div class="code">
        <img src="./assets/wechat.png" alt="">
        <div class="qr">
          <img src="./assets/QR_code.png" alt="">
          <p>微信扫一扫</p>
          <p>关注方寸广告</p>
        </div>
      </div>
      <div class="shop">
        <a><img src="./assets/shop.png" alt=""></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    //返回顶部
    window.addEventListener('scroll', this.scrollToTop)
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollToTop)
  },
  methods: {
    // 点击图片回到顶部方法，加计时器是为了过渡顺滑
    backTop () {
      const that = this
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
        if (that.scrollTop === 0) {
          clearInterval(timer)
        }
      }, 16)
    },

    scrollToTop () {
      const that = this
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      that.scrollTop = scrollTop
    }
  }
}
</script>

<style>

</style>
