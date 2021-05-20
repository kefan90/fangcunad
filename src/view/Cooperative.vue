<template>
<div>
  <!-- 大图部分 -->
  <div class="picture">
    <img src="../img/partner_banner.jpg" alt="">
  </div>
  <!-- 伙伴部分 -->
  <div class="partner">
    <div class="content">
      <div class="title1">
        合作伙伴 Service
        <span class="s1">+</span>
        <div class="box1">
          <p>我们最珍惜每个客户，我们秉承一贯的专业体系，我们拥有能为客户解决问题并创造无限价值的品牌设计中心，并始终铭记我们的专业团队服务“为客户的品牌/产品在市场竞争中迅速成功开辟平坦之路”。我司秉承着以优质的视觉效果向消费者传达完美的广告信息，通过科学、专业、真诚的优质服务来建立您和消费市场的最佳沟通桥梁，把有限的资金进行最经济的策划和设计，让您以最低的广告成本，达到最佳广告传播效果。为此我们整合公司所有专业资源针对不同的客户提供以下专业的服务。
          </p>
        </div>
        <ul class="partner-list">
          <li>
            <img src="../img/sxzwfw.jpg" alt="">
          </li>
          <li>
            <img src="../img/aqara.jpg" alt="">
          </li>
          <li>
            <img src="../img/sxzwfw.jpg" alt="">
          </li>
          <li>
            <img src="../img/bbndj.jpg" alt="">
          </li>
          <li>
            <img src="../img/sxzwfw.jpg" alt="">
          </li>
          <li>
            <img src="../img/djkt.jpg" alt="">
          </li>
          <li>
            <img src="../img/sxzwfw.jpg" alt="">
          </li>
          <li>
            <img src="../img/jiangxiaobai.jpg" alt="">
          </li>
          <li>
            <img src="../img/sxzwfw.jpg" alt="">
          </li>
          <li>
            <img src="../img/sxzwfw.jpg" alt="">
          </li>
          <li>
            <img src="../img/sxzwfw.jpg" alt="">
          </li>
          <li>
            <img src="../img/sxzwfw.jpg" alt="">
          </li>
          <li>
            <img src="../img/sxzwfw.jpg" alt="">
          </li>
          <li>
            <img src="../img/sxzwfw.jpg" alt="">
          </li>
          <li>
            <img src="../img/sxzwfw.jpg" alt="">
          </li>
          <li>
            <img src="../img/sxzwfw.jpg" alt="">
          </li>
          <li>
            <img src="../img/sxzwfw.jpg" alt="">
          </li>
          <li>
            <img src="../img/sxzwfw.jpg" alt="">
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Cooperative'
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

/* 设置合作伙伴的样式 */
.partner {
  width: 100%;
}

.partner .content {
  width: 80%;
  margin: 0 auto;
}

.partner .title1 {
  font-size: 28px;
  margin-bottom: 15px;
  margin-top: 40px;
  color: #333;
}

.partner .title1 .s1 {
  font-family: 宋体;
  font-size: 42px;
  color: #e6002e;
  vertical-align: middle;
  padding-left: 15px;
}

.partner .box1 {
  margin-bottom: 50px;
}

.partner .box1 p {
  font-family: 宋体;
  line-height: 2.5;
  font-size: 14px;
}

.partner .content .partner-list {
  text-align: center;
  margin-bottom: 80px;
}

.partner .content .partner-list li {
  display: inline-block;
  margin-top: 5px;
  margin-right: 2px;
  border: 1px solid #cccccc;
  border-radius: 8px;
}

/* 设置简介部分的样式 */
.partner {
  width: 100%;
}

.partner .content {
  width: 80%;
  margin: 0 auto;
}

.partner h2 {
  font-size: 28px;
  font-weight: normal;
}
</style>
