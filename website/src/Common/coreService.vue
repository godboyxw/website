<template>
  <div class="detail">
    <div class="location">
      <div class="name">智能导航</div>
      <div class="info">提供高精度室内外定位、2D/3D地图展示、全楼层的POI检索、路径规划及导航等功能，提供灵活、易用的软件开发包（SDK、API）。</div>
    </div>
    <div class="others">
      <div class="wrapper">
        <div class="car">
          <div class="name">智能寻车</div>
          <div class="info">基于蓝牙环境下，智能车位查找，反向寻车、查找路线等智能服务。</div>
        </div>
        <div class="news">
          <div class="name">周边信息推送</div>
          <div class="info">根据用户兴趣推送有价值的周边服务。</div>
        </div>
      </div>
      <div class="service">
        <div class="name">智能融合感知服务</div>
        <div class="info">融合室内外定位技术、人工智能（AI）、物联网技术，自主研发多源智能感知服务平台，实现对线下用户的数字化识别和空间场景感知。</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.detail {
  width: 100%;
  height: 740px;
  padding: 98px 0 82px 336px;
  font-size: 0;
  background: rgba(41, 43, 56, 1);
}
.detail .location {
  display: inline-block;
  width: 600px;
  height: 560px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.6);
  background-image: url("../assets/images/ads-core-location.png");
  background-size: cover;
}
.detail .location .name {
  margin: 380px 0 30px 43px;
  font-size: 37px;
  font-family: MicrosoftYaHei;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  line-height: 43px;
}
.detail .location .info {
  width: 525px;
  height: 87px;
  margin: 0 44px 0 31px;
  font-size: 24px;
  font-family: SourceHanSansCN-Regular;
  font-weight: bold;
  color: rgba(238, 238, 238, 1);
  line-height: 31px;
}
.detail .others {
  display: inline-block;
  width: 600px;
  height: 560px;
  background: rgba(0, 0, 0, 0.6);
}
.detail .others .wrapper {
  width: 600px;
  height: 270px;
  background: rgba(0, 0, 0, 0.6);
  font-size: 0;
}
.detail .others .wrapper .car,
.detail .others .wrapper .news {
  display: inline-block;
  width: 300px;
  height: 270px;
  background: rgba(0, 0, 0, 0.6);
  overflow: hidden;
}
.detail .others .wrapper .car {
  background-image: url("../assets/images/ads-core-car.png");
  background-size: cover;
}
.detail .others .wrapper .news {
  background-image: url("../assets/images/ads-core-news.png");
  background-size: cover;
}
.detail .others .wrapper .car .name {
  margin: 123px 0 13px 30px;
  font-size: 30px;
  font-family: MicrosoftYaHei;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  line-height: 21px;
}
.detail .others .wrapper .car .info {
  width: 247px;
  height: 85px;
  margin-left: 33px;
  font-size: 24px;
  font-family: MicrosoftYaHei;
  font-weight: bold;
  color: rgba(238, 238, 238, 1);
  line-height: 30px;
}
.detail .others .wrapper .news .name {
  margin: 124px 0 28px 31px;
  font-size: 30px;
  font-family: MicrosoftYaHei;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  line-height: 21px;
}
.detail .others .wrapper .news .info {
  width: 247px;
  height: 57px;
  margin-left: 24px;
  font-size: 24px;
  font-family: MicrosoftYaHei;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  line-height: 32px;
}
.detail .others .service {
  width: 600px;
  height: 290px;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.6);
  background-image: url("../assets/images/ads-core-service.png");
  background-size: cover;
}
.detail .others .service .name {
  margin: 134px 0 22px 45px;
  font-size: 30px;
  font-family: MicrosoftYaHei;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  line-height: 21px;
}
.detail .others .service .info {
  margin-left: 27px;
  width: 505px;
  height: 87px;
  font-size: 24px;
  font-family: SourceHanSansCN-Regular;
  font-weight: bold;
  color: rgba(238, 238, 238, 1);
  line-height: 31px;
}
</style>
