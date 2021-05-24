<template>
  <div class="case">
    <div class="content">
      <div class="case-box">
        <div class="case-top">
          <router-link to="/case" tag="a" target="_blank">案例 Case</router-link>
        </div>
        <p class="case-text">我们的承诺：不因任何条件、任务困难、任何理由降低标准或耽误工期！</p>
      </div>
      <ul class="case-list">
        <CaseItem v-for="(casein, index) in cases" :key="index" :casein="casein" :index="index"/>
      </ul>
      <div class="case-bottom">
        <router-link to="/case" tag="a" target="_blank">查询更多 MORE>>></router-link>
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
