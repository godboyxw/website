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
      <div class="details">查看详情</div>
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
        <coreService></coreService>
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
import coreService from '../Common/coreService'
export default {
  components: {
    goodsService,
    coreService
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
.ads .header .details {
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
  text-align: center;
  line-height: 61px;
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
