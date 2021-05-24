<template>
  <li>
    <div class="pic">
      <router-link to="/casegeli" tag="a" class="link" target="_blank">
        <img :src=casein.imgSrc alt="">
      </router-link>
    </div>
    <div class="caset1">
      <router-link to="/casegeli" tag="a">{{ casein.name1 }}</router-link>
    </div>
    <div class="caset2">
      <router-link to="/casegeli" tag="a">{{ casein.name2 }}</router-link>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    casein: Object,
    index: Number
  }
}
</script>

<style scoped>
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
