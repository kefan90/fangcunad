<template>
  <div>
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
  </div>
</template>

<script>
import caseList from '../components/case/CaseList'
import partnerList from '../components/partner/PartnerList'
import About from '../components/About'
import Flow from '../components/Flow'
import Sever from '../components/Sever'
import Banner from '../components/Banner'

export default {
  data () {
    return {
      cases: [
        {
          imgSrc: require('../assets/case1.jpg'),
          name1: '西安 | 仰望国际传媒',
          name2: '门头设计制作'
        },
        {
          imgSrc: require('../assets/case1.jpg'),
          name1: '西安 | 仰望国际传媒',
          name2: '门头设计制作'
        }, {
          imgSrc: require('../assets/case1.jpg'),
          name1: '西安 | 仰望国际传媒',
          name2: '门头设计制作'
        }, {
          imgSrc: require('../assets/case1.jpg'),
          name1: '西安 | 仰望国际传媒',
          name2: '门头设计制作'
        }, {
          imgSrc: require('../assets/case1.jpg'),
          name1: '西安 | 仰望国际传媒',
          name2: '门头设计制作'
        }, {
          imgSrc: require('../assets/case1.jpg'),
          name1: '西安 | 仰望国际传媒',
          name2: '门头设计制作'
        }, {
          imgSrc: require('../assets/case1.jpg'),
          name1: '西安 | 仰望国际传媒',
          name2: '门头设计制作'
        }, {
          imgSrc: require('../assets/case1.jpg'),
          name1: '西安 | 仰望国际传媒',
          name2: '门头设计制作'
        }
      ],
      pimgs: [
        {
          pImgSrc: require('../assets/sxzwfw.jpg'),
          name: '合作伙伴'
        }, {
          pImgSrc: require('../assets/sxzwfw.jpg'),
          name: '合作伙伴'
        }, {
          pImgSrc: require('../assets/sxzwfw.jpg'),
          name: '合作伙伴'
        }, {
          pImgSrc: require('../assets/sxzwfw.jpg'),
          name: '合作伙伴'
        }, {
          pImgSrc: require('../assets/sxzwfw.jpg'),
          name: '合作伙伴'
        }, {
          pImgSrc: require('../assets/sxzwfw.jpg'),
          name: '合作伙伴'
        }, {
          pImgSrc: require('../assets/sxzwfw.jpg'),
          name: '合作伙伴'
        }, {
          pImgSrc: require('../assets/sxzwfw.jpg'),
          name: '合作伙伴'
        }, {
          pImgSrc: require('../assets/sxzwfw.jpg'),
          name: '合作伙伴'
        }, {
          pImgSrc: require('../assets/sxzwfw.jpg'),
          name: '合作伙伴'
        }, {
          pImgSrc: require('../assets/sxzwfw.jpg'),
          name: '合作伙伴'
        }, {
          pImgSrc: require('../assets/sxzwfw.jpg'),
          name: '合作伙伴'
        }, {
          pImgSrc: require('../assets/sxzwfw.jpg'),
          name: '合作伙伴'
        }, {
          pImgSrc: require('../assets/sxzwfw.jpg'),
          name: '合作伙伴'
        }, {
          pImgSrc: require('../assets/sxzwfw.jpg'),
          name: '合作伙伴'
        }, {
          pImgSrc: require('../assets/sxzwfw.jpg'),
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
  }
}
</script>

<style scoped>

</style>
