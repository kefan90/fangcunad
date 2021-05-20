<template>
<div>
  <!-- 大图部分 -->
  <div class="picture">
    <img src="../img/picture.jpg" alt="">
  </div>
  <!-- 设置联系电话部分 -->
  <div class="contact">
    <div class="content">
      <div class="left">
        <h1>西安方寸广告有限公司</h1>
        <h2>联系方式:</h2>
        <div class="list">
          <p>电话：<a href="tel:029-86266300">029-86266300</a>&nbsp;&nbsp;&nbsp;<a
            href="tel:65667687">65667687</a>
          </p>
          <p>Q&nbsp;Q：<a href="#">819727828</a>&nbsp;&nbsp;&nbsp;<a href="#">321229969</a></p>
          <p>手机：<a href="tel:17030752000">17030752000</a> (同微信)</p>
          <p>地址：西安市未央区常青路与永徽路十字凤城铭苑2-1201</p>
        </div>
      </div>
      <div class="right">
        <img src="../img/Large.png" alt="">
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ContactUs'
}
</script>

<style scoped>
/* 设置大图部分 */
.picture {
  width: 90%;
  margin: 0 auto;
}

.picture img {
  display: block;
  width: 90%;
  margin: 0 auto 50px;
}


/* 设置联系电话部分的样式 */
.contact {
  width: 100%;
}

.contact .content {
  width: 80%;
  margin: 0 auto;
}

.contact .left {
  display: inline-block;
  width: 50%;
  margin-bottom: 50px;
}

.contact .left h1 {
  font-size: 26px;
  color: #333;
  margin-bottom: 20px;
  margin-left: 50px;
}

.contact .left h2 {
  font-size: 20px;
  color: #333;
  margin-left: 50px;
  margin-bottom: 15px;
}

.contact .list {
  margin-left: 90px;
}

.contact .list p {
  font-size: 16px;
  line-height: 2.5;
}

.contact .list p a {
  color: #666;
}

.contact .right {
  display: inline-block;
  width: 40%;
  margin-top: 20px;
}
</style>
