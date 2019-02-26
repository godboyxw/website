<template>
  <div>
    <ul>
      <li class="item"
          v-for="(item,index) in nav"
          :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nav: ['首页', '产品中心', '客户案例', '合作与服务', '动态']
    }
  }
}
</script>

<style scoped>
.item {
  float: left;
  width: 200px;
  height: 90px;
  font-size: 18px;
  font-family: MicrosoftYaHeiUI;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 90px;
  text-align: center;
}
</style>
