<template>
  <div class="advantage">
    <div class="content">
      <div class="title1">
        服务范围 Service
        <span class="s1">+</span>
        <div class="box1">
          <p>我们最珍惜每个客户，我们秉承一贯的专业体系，我们拥有能为客户解决问题并创造无限价值的品牌设计中心，并始终铭记我们的专业团队服务“为客户的品牌/产品在市场竞争中迅速成功开辟平坦之路”。我司秉承着以优质的视觉效果向消费者传达完美的广告信息，通过科学、专业、真诚的优质服务来建立您和消费市场的最佳沟通桥梁，把有限的资金进行最经济的策划和设计，让您以最低的广告成本，达到最佳广告传播效果。为此我们整合公司所有专业资源针对不同的客户提供以下专业的服务。</p>
        </div>
        <ul class="sever-list">
          <li>
            <a href="#">
              <div class="img">
                <img src="../img/1432546650.png" alt="">
              </div>
              <span>发光字 | 灯箱</span>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="img">
                <img src="../img/1432546624.png" alt="">
              </div>
              <span>门头店招</span>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="img">
                <img src="../img/1432546611.png" alt="">
              </div>
              <span>标识 | 标牌导视</span>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="img">
                <img src="../img/1432546637.png" alt="">
              </div>
              <span>形象展示</span>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="img">
                <img src="../img/1432546660.png" alt="">
              </div>
              <span>量化施工</span>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="img">
                <img src="../img/1432546596.png" alt="">
              </div>
              <span>喷绘印制</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="title2">
        方寸的核心价值 Core value
        <span>+</span>
      </div>
      <div class="box2">
        <h2>【1】11年的老字号品牌</h2>
        <p>方寸广告从xxxx年x月初创，经历不断探索、创新和完整，到如今经历11年风雨，我们始终如一，潜心研究各类店招门头的广告设计制作。</p>
        <h2>【2】专业设计团队、专业施工团队</h2>
        <p>方寸广告拥有数10专业设计团队，数10组专业施工团队，凝聚xx年案例经验，为顾客您提供优质的服务。</p>
        <h2>【3】优质服务、品质保证</h2>
        <p>无论风雨晦晴，还是千难万险，我们的工程团队都会竭诚为您服务，不会因任何条件、任务困难、任何理由降低标准或耽误工期，保证工程质量！</p>
        <h2>【4】同等质量、全市低价</h2>
        <p>知名工厂，从设计、制作到安装一站式服务，同等质量广告产品，全市低价！</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Adv'
}
</script>

<style scoped>
/* 设置简介部分的样式 */
.advantage {
  width: 100%;
}

.advantage .content {
  width: 80%;
  margin: 0 auto;
}

.advantage .title1 {
  font-size: 28px;
  margin-bottom: 15px;
  margin-top: 40px;
  color: #333;
}

.advantage .title1 .s1 {
  font-family: 宋体;
  font-size: 42px;
  color: #e6002e;
  vertical-align: middle;
  padding-left: 15px;
}

.advantage .box1 {
  margin-bottom: 50px;
}
.advantage .box1 p {
  font-family: 宋体;
  line-height: 2.5;
  font-size: 14px;
}

.advantage .content .sever-list {
  width: 80%;
  height: 140px;
  text-align: center;
  margin: 0 auto 50px;
}

.advantage .content .sever-list span {
  font-size: 14px;
}

.advantage .content .sever-list li {
  display: inline-block;
  width: 105px;
  text-align: center;
  margin-right: 30px;
}

.advantage .content .sever-list li div {
  transition: all .2s;
}

.advantage .content .sever-list li div:hover {
  transform: translateY(-15px);
}

.advantage .content .sever-list .img {
  width: 100px;
  height: 100px;
  border: 2px solid #b01f24;
  border-radius: 50%;
}

.advantage .content .sever-list .img img {
  margin-top: 20px;
}

.advantage .title2 {
  font-size: 28px;
  margin-bottom: 15px;
  margin-top: 20px;
  color: #333;
}

.advantage .title2 span {
  font-family: 宋体;
  font-size: 42px;
  color: #e6002e;
  vertical-align: middle;
  padding-left: 15px;
}

.advantage .box2 {
  margin-bottom: 30px;
}
.advantage .box2 h2 {
  font-size: 16px;
  color: #b01f24;
  font-weight: bold;
  line-height: 2;
  margin-top: 20px;
  margin-bottom: 10px;
}

.advantage .box2 p {
  font-family: 'Microsoft YaHei',arial;
  font-size: 14px;
}
</style>
