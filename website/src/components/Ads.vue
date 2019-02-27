<template>
  <div class="ads">
    <div class="header">
      <div class="title">皆能行</div>
      <ul class="nav">
        <li class="item"
            v-for="(item,index) in nav"
            :key="index">{{item}}</li>
      </ul>
      <ul class="desc">
        <li class="text1">让感兴趣的客户</li>
        <li class="text2">看到您的广告</li>
        <li class="text3"></li>
        <li class="text4">根据搜索意图和意图准备推荐,让高潜用户立即找到你.</li>
      </ul>
      <div class="btn">查看详情</div>
    </div>
    <div class="content">
      <div class="core">
        <ul class="desc">
          <li>数据+流量 两手抓</li>
          <li>产品+运营 双驱动</li>
          <li>构建线下实体商业生态；应用多源大数据，发挥生态中数据、产品、流量的价值；</li>
          <li>为实体商业，提供运营整体解决方案，驱动实体商业客流经营的数字化。</li>
        </ul>
        <div class="title">核心服务</div>
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
      </div>
      <goodsService></goodsService>
      <div class="solution">
        <div class="title">方案架构</div>
        <div class="main"></div>
      </div>
    </div>
  </div>
</template>

<script>
import goodsService from '../Common/goodsService'
export default {
  components: {
    goodsService
  },
  data () {
    return {
      nav: ['首页', '产品中心', '下载', '动态']
    }
  }
}
</script>

<style scoped>
.header {
  width: 100%;
  height: 900px;
  position: relative;
  background-color: rgba(0, 0, 0, 0.6);
  background-image: url("../assets/images/ads-header.png");
  background-size: cover;
  overflow: hidden;
  /* border-top: 1px solid transparent; */
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
.ads .header .desc {
  margin: 344px 0 83px 360px;
}
.ads .header .desc .text1 {
  margin-bottom: 29px;
  font-size: 40px;
  font-family: HYYakuHei-EEW;
  font-weight: normal;
  color: rgba(255, 255, 255, 1);
  line-height: 67px;
}
.ads .header .desc .text2 {
  margin-bottom: 29px;
  font-size: 80px;
  font-family: HYXiaoBoZheZhiTiJ;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  line-height: 67px;
}
.ads .header .desc .text3 {
  width: 56px;
  height: 4px;
  margin-bottom: 48px;
  background: rgba(255, 255, 255, 1);
}
.ads .header .desc .text4 {
  font-size: 32px;
  font-family: SourceHanSansCN-Regular;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 48px;
}
.ads .header .btn {
  width: 208px;
  height: 59px;
  margin: 0 0 0 370px;
  border-width: 1px;
  border-color: rgba(255, 255, 255, 1);
  border-style: solid;
  font-size: 30px;
  font-family: SourceHanSansCN-Regular;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  padding-bottom: 15.5px;
  text-align: center;
}
.content .core {
  overflow: hidden;
}
.content .core .desc {
  width: 1190px;
  height: 276px;
  margin: 161px 0 255px 366px;
  font-size: 36px;
  font-family: MicrosoftYaHeiLight;
  font-weight: bold;
  color: rgba(53, 53, 53, 1);
  line-height: 60px;
}
.content .core .title {
  width: 287px;
  height: 70px;
  margin: 0 814px 64px 819px;
  font-size: 70px;
  font-family: MicrosoftYaHei;
  font-weight: bold;
  color: rgba(64, 31, 6, 1);
  line-height: 40px;
}
.content .core .detail {
  width: 1920px;
  height: 740px;
  padding: 98px 0 82px 336px;
  font-size: 0;
  background: rgba(41, 43, 56, 1);
}
.content .core .detail .location {
  display: inline-block;
  width: 600px;
  height: 560px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.6);
  background-image: url("../assets/images/ads-core-location.png");
  background-size: cover;
}
.content .core .detail .location .name {
  margin: 380px 0 30px 43px;
  font-size: 37px;
  font-family: MicrosoftYaHei;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  line-height: 43px;
}
.content .core .detail .location .info {
  width: 525px;
  height: 87px;
  margin: 0 44px 0 31px;
  font-size: 24px;
  font-family: SourceHanSansCN-Regular;
  font-weight: bold;
  color: rgba(238, 238, 238, 1);
  line-height: 31px;
}
.content .core .detail .others {
  display: inline-block;
  width: 600px;
  height: 560px;
  background: rgba(0, 0, 0, 0.6);
}
.content .core .detail .others .wrapper {
  width: 600px;
  height: 270px;
  background: rgba(0, 0, 0, 0.6);
  font-size: 0;
}
.content .core .detail .others .wrapper .car,
.content .core .detail .others .wrapper .news {
  display: inline-block;
  width: 300px;
  height: 270px;
  background: rgba(0, 0, 0, 0.6);
  overflow: hidden;
}
.content .core .detail .others .wrapper .car {
  background-image: url("../assets/images/ads-core-car.png");
  background-size: cover;
}
.content .core .detail .others .wrapper .news {
  background-image: url("../assets/images/ads-core-news.png");
  background-size: cover;
}
.content .core .detail .others .wrapper .car .name {
  margin: 123px 0 13px 30px;
  font-size: 30px;
  font-family: MicrosoftYaHei;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  line-height: 21px;
}
.content .core .detail .others .wrapper .car .info {
  width: 247px;
  height: 85px;
  margin-left: 33px;
  font-size: 24px;
  font-family: MicrosoftYaHei;
  font-weight: bold;
  color: rgba(238, 238, 238, 1);
  line-height: 30px;
}
.content .core .detail .others .wrapper .news .name {
  margin: 124px 0 28px 31px;
  font-size: 30px;
  font-family: MicrosoftYaHei;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  line-height: 21px;
}
.content .core .detail .others .wrapper .news .info {
  width: 247px;
  height: 57px;
  margin-left: 24px;
  font-size: 24px;
  font-family: MicrosoftYaHei;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  line-height: 32px;
}
.content .core .detail .others .service {
  width: 600px;
  height: 290px;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.6);
  background-image: url("../assets/images/ads-core-service.png");
  background-size: cover;
}
.content .core .detail .others .service .name {
  margin: 134px 0 22px 45px;
  font-size: 30px;
  font-family: MicrosoftYaHei;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  line-height: 21px;
}
.content .core .detail .others .service .info {
  margin-left: 27px;
  width: 505px;
  height: 87px;
  font-size: 24px;
  font-family: SourceHanSansCN-Regular;
  font-weight: bold;
  color: rgba(238, 238, 238, 1);
  line-height: 31px;
}
.content .solution {
  width: 100%;
  height: 892px;
  background: rgba(30, 76, 112, 1);
  overflow: hidden;
}
.content .solution .title {
  margin: 33px 0 86px 367px;
  font-size: 60px;
  font-family: MicrosoftYaHei;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  line-height: 40px;
}
.content .solution .main {
  width: 1190px;
  height: 577px;
  margin-left: 364px;
  background-image: url("../assets/images/ads-structure.png");
  background-size: cover;
}
</style>
