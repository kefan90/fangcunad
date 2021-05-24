<template>
  <li>
    <div class="pic">
      <router-link to="/casegeli" tag="a" target="_blank">
        <img :src=casein.imgSrc alt="">
      </router-link>
    </div>
    <div class="caset1">
      <router-link to="/casegeli" tag="a" target="_blank">{{ casein.name1 }}</router-link>
    </div>
    <div class="caset2">
      <router-link to="/casegeli" tag="a" target="_blank">{{ casein.name2 }}</router-link>
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

</style>
