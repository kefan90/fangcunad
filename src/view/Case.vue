<template>
<div>
  <!-- 大图部分 -->
  <div class="picture">
    <img src="../img/case_banner.jpg" alt="">
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
      <li>
                <span class="pic">
                    <a href="../../case_module/case1.html" class="link" target="_blank">
                        <img src="../img/case1.jpg" alt="">
                    </a>
                </span>
        <span class="caset1">
                    <a href="../../case_module/case1.html">西安 | 仰望国际传媒</a>
                </span>
        <span class="caset2">
                    <a href="../../case_module/case1.html">门头设计制作</a>
                </span>
      </li>
      <li>
                <span class="pic">
                    <a href="../../case_module/case2.html" class="link" target="_blank">
                        <img src="../img/case1.jpg" alt="">
                    </a>
                </span>
        <span class="caset1">
                    <a href="../../case_module/case2.html">西安 | 仰望国际传媒</a>
                </span>
        <span class="caset2">
                    <a href="../../case_module/case2.html">门头设计制作</a>
                </span>
      </li>
      <li>
                <span class="pic">
                    <a href="../../case_module/case3.html" class="link" target="_blank">
                        <img src="../img/case1.jpg" alt="">
                    </a>
                </span>
        <span class="caset1">
                    <a href="../../case_module/case3.html">西安 | 仰望国际传媒</a>
                </span>
        <span class="caset2">
                    <a href="../../case_module/case3.html">门头设计制作</a>
                </span>
      </li>
      <li>
                <span class="pic">
                    <a href="../../case_module/case4.html" class="link" target="_blank">
                        <img src="../img/case1.jpg" alt="">
                    </a>
                </span>
        <span class="caset1">
                    <a href="../../case_module/case4.html">西安 | 仰望国际传媒</a>
                </span>
        <span class="caset2">
                    <a href="../../case_module/case4.html">门头设计制作</a>
                </span>
      </li>
      <li>
                <span class="pic">
                    <a href="../../case_module/case5.html" class="link" target="_blank">
                        <img src="../img/case1.jpg" alt="">
                    </a>
                </span>
        <span class="caset1">
                    <a href="../../case_module/case5.html">西安 | 仰望国际传媒</a>
                </span>
        <span class="caset2">
                    <a href="../../case_module/case5.html">门头设计制作</a>
                </span>
      </li>
      <li>
                <span class="pic">
                    <a href="../../case_module/case6.html" class="link" target="_blank">
                        <img src="../img/case1.jpg" alt="">
                    </a>
                </span>
        <span class="caset1">
                    <a href="../../case_module/case6.html">西安 | 仰望国际传媒</a>
                </span>
        <span class="caset2">
                    <a href="../../case_module/case6.html">门头设计制作</a>
                </span>
      </li>
      <li>
                <span class="pic">
                    <a href="../../case_module/case7.html" class="link" target="_blank">
                        <img src="../img/case1.jpg" alt="">
                    </a>
                </span>
        <span class="caset1">
                    <a href="../../case_module/case7.html">西安 | 仰望国际传媒</a>
                </span>
        <span class="caset2">
                    <a href="../../case_module/case7.html">门头设计制作</a>
                </span>
      </li>
      <li>
                <span class="pic">
                    <a href="../../case_module/case8.html" class="link" target="_blank">
                        <img src="../img/case1.jpg" alt="">
                    </a>
                </span>
        <span class="caset1">
                    <a href="../../case_module/case8.html">西安 | 仰望国际传媒</a>
                </span>
        <span class="caset2">
                    <a href="../../case_module/case8.html">门头设计制作</a>
                </span>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'Case'
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
  width: 80%;
  margin: 0 0 0 280px;
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

.case .case-list li .pic .link img {
  height: 181px;
  width: 307px;
}

.case .case-list li .caset1 {
  text-align: center;
  line-height: 24px;
  font-size: 16px;
  padding-top: 15px;
}

.case .case-list li .caset1 a {
  color: #666666;
}

.case .case-list li .caset1 a:hover {
  color: #000000;
}

.case .case-list li .caset2 {
  text-align: center;
  line-height: 24px;
  height: 40px;
}

.case .case-list li .caset2 a {
  color: #666666;
}

.case .case-list li .caset2 a:hover {
  color: #000000;
}
</style>
