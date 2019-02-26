<template>
  <div class="example">
    <div class="title">应用案例</div>
    <ul class="lists">
      <li class="item">
        <div class="avatar"><img class="img"
               src=""
               alt=""></div>
        <div class="name">案例1</div>
        <div class="triangle triangle1"></div>
      </li>
      <li class="item"></li>
      <li class="item">
        <div class="triangle triangle2"></div>
      </li>
      <li class="item"></li>
      <li class="item">
        <div class="triangle triangle3"></div>
      </li>
      <li class="item"></li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {

  }
}
</script>

<style scoped>
.example {
  width: 100%;
  height: 1222px;
  padding-top: 99px;
  background: rgba(255, 255, 255, 1);
}

.example .title {
  width: 178px;
  height: 44px;
  margin: 0 auto 119px;
  font-size: 44px;
  font-family: MicrosoftYaHei;
  font-weight: bold;
  color: rgba(53, 53, 53, 1);
  line-height: 40px;
}

.example .lists {
  padding: 0 300px 0 361px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
}

.example .lists .item {
  width: 33.333%;
  height: 380px;
  position: relative;
}

.example .lists .item:nth-child(odd) {
  background: rgba(127, 170, 137, 1);
}

.example .lists .item:nth-child(even) {
  background: #eeeeee;
}

.example .lists .item .avatar {
  width: 112px;
  height: 90px;
  margin: 139px 0 0 149px;
  overflow: hidden;
  background: #202020;
}

.example .lists .item .img {
  width: 100%;
  height: 100%;
}

.example .lists .item .name {
  height: 37px;
  position: absolute;
  bottom: 42px;
  left: 43px;
  font-size: 36px;
  font-family: MicrosoftYaHei;
  font-weight: bold;
  color: rgba(64, 31, 6, 1);
  line-height: 21px;
}

.example .triangle {
  width: 0;
  height: 0;
  border-top: 28px solid transparent;
  border-right: 28px solid transparent;
  border-bottom: 28px solid transparent;
  border-left: 28px solid rgba(127, 170, 137, 1);
}

.example .triangle1 {
  position: absolute;
  z-index: 99;
  right: -55.5px;
  top: 182px;
}

.example .triangle2 {
  transform: rotate(90deg);
  position: absolute;
  z-index: 99;
  bottom: -55.5px;
  left: 182px;
}

.example .triangle3 {
  transform: rotate(180deg);
  position: absolute;
  z-index: 99;
  left: -55.5px;
  top: 182px;
}
</style>
