<template>
  <div>
    <!-- 大图部分 -->
    <div class="picture">
      <img src="../assets/case_banner.jpg" alt="">
    </div>
    <!-- 案例部分 -->
    <div class="case">
      <div class="case-box">
        <div class="case-top">
          <a>案例 Case</a>
        </div>
        <p class="case-text">我们的承诺：不因任何条件、任务困难、任何理由降低标准或耽误工期！</p>
      </div>
      <ul class="case-list">
        <RcaseItem v-for="(casein, index) in cases" :key="index" :casein="casein" :index="index"/>
      </ul>
    </div>
  </div>
</template>

<script>
import RcaseItem from './RcaseItem'
export default {
  name: 'Case',
  components: {
    RcaseItem
  },
  data() {
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
      ]
    }
  }
}
</script>

<style scoped>
/* 设置大图部分 */
.picture {
  width: 90%;
  margin: 40px auto 0;
}

.picture img {
  display: block;
  width: 90%;
  margin: 0 auto 50px;
}

/* 设置案例部分的样式 */
.case {
  width: 100%;
}

.case .case-box {
  margin-bottom: 50px;
}

.case .case-box .case-top {
  margin: 0 auto;
  width: 300px;
  height: 80px;
  line-height: 80px;
  border-bottom: 2px solid red;
  text-align: center;
}

.case .case-box .case-top a {
  color: #595757;
  font-size: 24px;
}

.case .case-box .case-top a:hover {
  color: #000000;
}

.case .case-box .case-text {
  margin-top: 10px;
  text-align: center;
}

.case .case-list {
  width: 90%;
  margin: 0 auto;
}

.case .case-list li {
  display: inline-block;
  margin-bottom: 15px;
  margin-right: 15px;
  transition: all .3s;
}

.case .case-list li span {
  display: block;
}

.case .case-list li:hover {
  transform: translateY(-10px);
}


</style>
