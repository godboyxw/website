<template>
  <div class="ads">
    <div class="header">
      <div class="title">皆能行</div>
      <ul class="nav">
        <li class="item"
            v-for="(item,index) in nav"
            :key="index">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nav: ['首页', '产品中心', '下载', '动态']
    }
  }
}
</script>

<style scoped>
.header {
  width: 1920px;
  height: 900px;
  position: relative;
  background: rgba(0, 0, 0, 0.6);
}
.header .title {
  width: 270px;
  height: 90px;
  position: absolute;
  top: 0;
  left: 426px;
  font-size: 56px;
  font-family: Adobe Heiti Std R;
  font-weight: normal;
  color: rgba(255, 255, 255, 1);
  line-height: 90px;
}
.header .nav {
  position: absolute;
  top: 0;
  left: 696px;
}
.header .nav .item {
  display: inline-block;
  width: 200px;
  height: 90px;
  text-align: center;
  line-height: 90px;
  font-size: 18px;
  font-family: SourceHanSansCN-Medium;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
}
</style>
