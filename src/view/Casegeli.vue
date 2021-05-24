<template>
  <div class="subject">
    <div class="content">
      <h2>西安 | 万国保税</h2>
      <p>服务项目：门头制作安装|吊旗制作安装|宣传物料制作安装</p>
      <h3>客户背景</h3>
      <p>西安万国保税进口商品贸易有限公司是一家主营全进口食品、乳制品、日用百货、保健品、服装鞋帽、针纺织品、箱包、床上用品、孕婴用品、家用电器、办公用品、电子产品。<br>通过和多家保税区、自贸区平台的合作能满足用户一站式购物的需求，达到客户的要求，让顾客满意，让消费者放心。
      </p>
      <h3>现场实拍</h3>
      <img src="../assets/case1.jpg">
      <div class="nextpre">
        <a style="pointer-events: none;">< 上一作品 </a>
        <span>|</span>
        <a>下一作品 ></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Casegeli'
}
</script>

<style scoped>
/* 主体样式 */
.subject {
  width: 100%;
}
.subject .content {
  width: 80%;
  margin: 0 auto;
}

.subject h2 {
  font-size: 24px;
  font-weight: bold;
  border-bottom: 1px solid #666;
  line-height: 3;
  margin-bottom: 30px;
}

.subject p {
  margin-bottom: 10px;
  box-sizing: border-box;
  color: #666;
  font-family: 'Microsoft YaHei', arial;
  font-size: 14px;
  line-height: 30px;
  white-space: nowrap;
}

.subject h3 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
}

.subject img {
  display: block;
  margin: 0 auto;
  margin-bottom: 20px;
}

.subject .nextpre {
  text-align: center;
  padding-bottom: 10px;
}

</style>
