<template>
  <div id="app">
    <!-- 导航栏 -->
    <div class="nav">
      <div class="content">
        <div class="log">
          <a><img src="./img/log.jpg" alt=""></a>
        </div>
        <ul class="">
          <li><a>网站首页</a></li>
          <li><a>公司简介</a></li>
          <li><a>服务优势</a></li>
          <li><a>经典案例</a></li>
          <li><a>合作企业</a></li>
          <li><a>联系我们</a></li>
          <li><a>淘宝店铺</a></li>
        </ul>
        <div class="tel">
          <img src="./img/header_telbg.png" alt="">
          <p class="tel-1">
            <a href="tel:17030752000">170 3075 2000</a>
            <br>
            <a href="tel:029-86266300">029-8626 6300</a>
          </p>
        </div>
      </div>
    </div>
    <!-- 轮播图 -->
    <Banner/>
    <!-- 案例 -->
    <caseList :cases="cases"/>
    <!-- 服务范围 -->
    <Sever/>
    <!-- 服务流程 -->
    <Flow/>
    <!-- 关于页面 -->
    <About/>
    <!-- 合作伙伴 -->
    <partnerList :pimgs="pimgs"/>
    <!-- 页面底部 -->
    <div class="foot">
      <div class="content">
        <ul class="left">
          <li>备案号：<a style="color:#FFF" href="https://beian.miit.gov.cn/" target="_blank">陕ICP备16001930号-1</a>
          </li>
        </ul>
        <ul class="right">
          <li><a>网站首页</a></li>
          <li><a>公司简介</a></li>
          <li><a>服务优势</a></li>
          <li><a>联系我们</a></li>
          <li><a>淘宝店铺</a></li>
        </ul>
      </div>
    </div>
    <!-- 侧边部分 -->
    <div class="sidebar">
      <div id="goTop" @click="backTop">
        <img src="./img/gotop.png" alt="">
      </div>
      <div class="code">
        <img src="./img/wechat.png" alt="">
        <div class="qr">
          <img src="./img/QR_code.png" alt="">
          <p>微信扫一扫</p>
          <p>关注方寸广告</p>
        </div>
      </div>
      <div class="shop">
        <a><img src="./img/shop.png" alt=""></a>
      </div>
    </div>
  </div>
</template>

<script>
import caseList from './components/case/CaseList'
import partnerList from './components/partner/PartnerList'
import About from './components/About'
import Flow from './components/Flow'
import Sever from './components/Sever'
import Banner from './components/Banner'
import Swiper from 'swiper'

export default {
  data () {
    return {
      cases: [
        {
          imgSrc: require('./img/case1.jpg'),
          name1: '西安 | 仰望国际传媒',
          name2: '门头设计制作'
        },
        {
          imgSrc: require('./img/case1.jpg'),
          name1: '西安 | 仰望国际传媒',
          name2: '门头设计制作'
        }, {
          imgSrc: require('./img/case1.jpg'),
          name1: '西安 | 仰望国际传媒',
          name2: '门头设计制作'
        }, {
          imgSrc: require('./img/case1.jpg'),
          name1: '西安 | 仰望国际传媒',
          name2: '门头设计制作'
        }, {
          imgSrc: require('./img/case1.jpg'),
          name1: '西安 | 仰望国际传媒',
          name2: '门头设计制作'
        }, {
          imgSrc: require('./img/case1.jpg'),
          name1: '西安 | 仰望国际传媒',
          name2: '门头设计制作'
        }, {
          imgSrc: require('./img/case1.jpg'),
          name1: '西安 | 仰望国际传媒',
          name2: '门头设计制作'
        }, {
          imgSrc: require('./img/case1.jpg'),
          name1: '西安 | 仰望国际传媒',
          name2: '门头设计制作'
        }
      ],
      pimgs: [
        {
          pImgSrc: require('./img/sxzwfw.jpg'),
          name: '合作伙伴'
        }, {
          pImgSrc: require('./img/sxzwfw.jpg'),
          name: '合作伙伴'
        }, {
          pImgSrc: require('./img/sxzwfw.jpg'),
          name: '合作伙伴'
        }, {
          pImgSrc: require('./img/sxzwfw.jpg'),
          name: '合作伙伴'
        }, {
          pImgSrc: require('./img/sxzwfw.jpg'),
          name: '合作伙伴'
        }, {
          pImgSrc: require('./img/sxzwfw.jpg'),
          name: '合作伙伴'
        }, {
          pImgSrc: require('./img/sxzwfw.jpg'),
          name: '合作伙伴'
        }, {
          pImgSrc: require('./img/sxzwfw.jpg'),
          name: '合作伙伴'
        }, {
          pImgSrc: require('./img/sxzwfw.jpg'),
          name: '合作伙伴'
        }, {
          pImgSrc: require('./img/sxzwfw.jpg'),
          name: '合作伙伴'
        }, {
          pImgSrc: require('./img/sxzwfw.jpg'),
          name: '合作伙伴'
        }, {
          pImgSrc: require('./img/sxzwfw.jpg'),
          name: '合作伙伴'
        }, {
          pImgSrc: require('./img/sxzwfw.jpg'),
          name: '合作伙伴'
        }, {
          pImgSrc: require('./img/sxzwfw.jpg'),
          name: '合作伙伴'
        }, {
          pImgSrc: require('./img/sxzwfw.jpg'),
          name: '合作伙伴'
        }, {
          pImgSrc: require('./img/sxzwfw.jpg'),
          name: '合作伙伴'
        }
      ]
    }
  },
  components: {
    caseList,
    partnerList,
    About,
    Flow,
    Sever,
    Banner
  },
  mounted () {
    //返回顶部
    window.addEventListener('scroll', this.scrollToTop)

    //轮播图
    new Swiper('.swiper-container', {
      loop: true,
      // 如果需要分页器
      pagination: '.swiper-pagination',
      // 如果需要前进后退按钮
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev'
    })
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
