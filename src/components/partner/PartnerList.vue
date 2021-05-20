<template>
  <div class="partner">
    <div class="content">
      <div class="partner-box">
        <div class="partner-top">
          <a href="#">合作伙伴 Partner</a>
        </div>
        <p class="partner-text">先做朋友，再做业务！</p>
      </div>
      <ul class="partner-list">
        <partnerItem v-for="(pmg, index) in pimgs" :key="index" :pmg="pmg" :index="index"/>
      </ul>
    </div>
  </div>
</template>

<script>
import partnerItem from './PartnerItem'

export default {
  components: {
    partnerItem
  },
  props: {
    pimgs: Array
  }
}
</script>

<style scoped>

</style>
