<template>
  <div class="case">
    <div class="content">
      <div class="case-box">
        <div class="case-top">
          <a href="">案例 Case</a>
        </div>
        <p class="case-text">我们的承诺：不因任何条件、任务困难、任何理由降低标准或耽误工期！</p>
      </div>
      <ul class="case-list">
        <CaseItem v-for="(casein, index) in cases" :key="index" :casein="casein" :index="index"/>
      </ul>
      <div class="case-bottom">
        <a>查询更多 MORE>>></a>
      </div>
    </div>
  </div>
</template>

<script>
import CaseItem from './CaseItem'

export default {
  components: {
    CaseItem
  },
  props: {
    cases: Array
  }
}
</script>

<style scoped>

</style>
