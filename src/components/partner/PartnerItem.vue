<template>
  <li>
    <img :src=pmg.pImgSrc>
  </li>
</template>

<script>
export default {
  props: {
    pmg: Object,
    index: Number
  }
}
</script>

<style scoped>

</style>
