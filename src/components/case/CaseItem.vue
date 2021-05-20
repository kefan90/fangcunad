<template>
  <li>
    <div class="pic">
      <a>
        <img :src=casein.imgSrc alt="">
      </a>
    </div>
    <div class="caset1">
      <a>{{ casein.name1 }}</a>
    </div>
    <div class="caset2">
      <a>{{ casein.name2 }}</a>
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
