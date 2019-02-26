<template>
  <div class="header">
    <div class="avatar"><img class="image"
           src="@/assets/images/geogoon.png">
    </div>
    <navBar class="nav"></navBar>
    <div class="title">{{title}}</div>
    <div class="desc">{{desc}}</div>
  </div>
</template>

<script>
import navBar from './Nav'
export default {
  components: {
    navBar
  },
  props: {
    title: {
      type: String,
      default: '智慧机场'
    },
    desc: {
      type: String,
      default: '为民航行业客户提供先进的智慧商业和出行服务解决方案'
    }
  }
}
</script>

<style scoped>
.header {
  width: 100%;
  height: 699px;
  position: relative;
  background-color: #6e7db5;
}

.header .avatar {
  width: 214px;
  height: 75px;
  position: absolute;
  left: 466px;
  top: 8px;
  overflow: hidden;
  background-color: red;
}

.header .avater .image {
  width: 100%;
  height: 100%;
}

.header .nav {
  position: absolute;
  left: 694px;
  top: 0;
  overflow: hidden;
}

.header .title {
  height: 46px;
  position: absolute;
  left: 327px;
  top: 448px;
  font-size: 48px;
  font-family: DengXian-Bold;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  line-height: 24px;
  /* letter-spacing: 0.24px; */
}

.header .desc {
  width: 335px;
  height: auto;
  position: absolute;
  left: 249px;
  top: 525px;
  font-size: 24px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 36px;
}
</style>
