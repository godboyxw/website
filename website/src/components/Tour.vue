<template>
  <div class="tour">
    <div class="header">
      <div class="title">皆能行</div>
      <ul class="nav">
        <li class="item"
            v-for="(item,index) in nav"
            :key="index">{{item}}</li>
      </ul>
      <ul class="desc">
        <li class="text1">旅游观光</li>
        <li class="text2">做一个安静的人，读书，旅行，等待爱情。</li>
      </ul>
      <div class="details">查看详情</div>
    </div>
    <div class="content">
      <div class="info">
        <div class="text">旅游观光为全球用户提供游记，室内导航，泊车寻车，交通查询，周边娱乐，酒店等一体化服务，为用户打造贴近及满足用户体验的产品。</div>
        <div class="phone"></div>
      </div>
      <div class="core">
        <div class="title">核心服务</div>
        <coreService></coreService>
      </div>
      <div class="whole">
        <div class="title">综合服务</div>
        <ul class="lists">
          <li class="item"
              v-for="(item,index) in whole"
              :key="index">
            <div class="img"
                 :style="{backgroundImage:'url('+item.img+')'}"></div>
            <div class="desc">{{item.desc}}</div>
          </li>
        </ul>
      </div>
      <div class="structure">
        <div class="title">方案架构</div>
        <div class="main">
          <ul class="lists">
            <li class="item"
                v-for="(item,index) in main"
                :key="index">
              <div class="text">{{item}}</div>
            </li>
          </ul>
          <div class="position">定位平台</div>
          <div class="application">应用平台</div>
          <div class="text text1">智能终端应用</div>
          <div class="text text2">数据分析平台</div>
          <div class="circle circle1">CRM</div>
          <div class="circle circle2">POS</div>
          <ul class="analysis">
            <li class="item">客户统计分析</li>
            <li class="item">用户喜好分析</li>
            <li class="item">消费行为分析</li>
          </ul>
          <div class="arrow arrow1"></div>
          <div class="arrow arrow2"></div>
          <div class="arrow arrow3"></div>
          <div class="arrow arrow4"></div>
          <div class="arrow-italic1"></div>
          <div class="arrow-italic2"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import coreService from '../Common/coreService'
export default {
  components: {
    coreService
  },
  data () {
    return {
      nav: ['首页', '产品中心', '下载', '动态'],
      whole: [
        {
          img: require('../assets/images/tour-whole-location.png'),
          desc: '智能导航'
        },
        {
          img: require('../assets/images/tour-whole-voice.png'),
          desc: '语音播报'
        },
        {
          img: require('../assets/images/tour-whole-car.png'),
          desc: '泊车寻车'
        },
        {
          img: require('../assets/images/tour-whole-entertainment.png'),
          desc: '景区交通'
        },
        {
          img: require('../assets/images/tour-whole-transport.png'),
          desc: '周边娱乐'
        },
        {
          img: require('../assets/images/tour-whole-trick.png'),
          desc: '精选攻略'
        },
        {
          img: require('../assets/images/tour-whole-story.png'),
          desc: '精彩游记'
        },
        {
          img: require('../assets/images/tour-whole-accompany.png'),
          desc: '旅行约伴'
        },
        {
          img: require('../assets/images/tour-whole-tickets.png'),
          desc: '特惠门票'
        },
        {
          img: require('../assets/images/tour-whole-tool.png'),
          desc: '常用工具'
        }
      ],
      main: ['景区导航', '智能停车', '景区介绍', '景点讲解', '景区攻略', '内容分享', '景区商城', '景区搜索']
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
  background-image: url("../assets/images/tour-header.png");
  background-size: cover;
  overflow: hidden;
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
.header .desc {
  margin: 387px 0 0 361px;
}
.header .desc .text1 {
  margin-bottom: 36px;
  font-size: 60px;
  font-family: HYXiaoBoZheZhiTiJ;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  line-height: 50px;
}
.header .desc .text2 {
  margin-bottom: 40px;
  font-size: 30px;
  font-family: HYYakuHei-EEW;
  font-weight: normal;
  color: rgba(255, 255, 255, 1);
  line-height: 50px;
}
.header .details {
  width: 208px;
  height: 59px;
  margin: 0 0 0 370px;
  border-width: 1px;
  border-color: rgba(255, 255, 255, 1);
  border-style: solid;
  font-size: 22px;
  font-family: SourceHanSansCN-Regular;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 61px;
  text-align: center;
}
.content .info {
  width: 100%;
  padding: 157px 0 370px 361px;
  position: relative;
}
.content .info .text {
  width: 678px;
  height: 215px;
  font-size: 36px;
  font-family: MicrosoftYaHeiLight;
  font-weight: bold;
  color: rgba(53, 53, 53, 1);
  line-height: 60px;
}
.content .info .phone {
  width: 434px;
  height: 866px;
  position: absolute;
  right: 361px;
  top: -348px;
  /* box-shadow: 0px 1px 21px 0px rgba(35, 35, 89, 0.58); */
  background-image: url("../assets/images/IPhoneX.png");
  background-size: 100% 100%;
}
.content .core .title {
  width: 287px;
  height: 70px;
  margin: 0 auto 64px;
  font-size: 70px;
  font-family: MicrosoftYaHei;
  font-weight: bold;
  color: rgba(64, 31, 6, 1);
  line-height: 40px;
}
.content .core .detail {
  width: 100%;
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
.content .whole {
  width: 100%;
  overflow: hidden;
}
.content .whole .title {
  width: 286px;
  height: 71px;
  margin: 199px auto 144px;
  font-size: 70px;
  font-family: MicrosoftYaHei;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  line-height: 40px;
}
.content .whole .lists {
  padding: 0 341px 82px 341px;
  overflow: hidden;
}
.content .whole .lists :after {
  display: block;
  clear: both;
  content: "";
  visibility: hidden;
  height: 0;
}
.content .whole .lists .item {
  width: 20%;
  height: 307px;
  float: left;
}
.content .whole .lists .item .img {
  width: 160px;
  height: 110px;
  margin: 0 auto 37px;
  background-size: 100% 100%;
}
.content .whole .lists .item .desc {
  font-size: 30px;
  font-family: SourceHanSansCN-Regular;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 40px;
  text-align: center;
}
.content .structure .title {
  width: 284px;
  height: 70px;
  margin: 0 auto 59px;
  font-size: 70px;
  font-family: MicrosoftYaHei;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  line-height: 40px;
}
.content .structure .main {
  width: 100%;
  height: 1056px;
  position: relative;
  background-color: rgba(0, 0, 0, 0.5);
  background-image: url("../assets/images/tour-structure-main.png");
}
.content .structure .main .lists {
  padding: 85px 533px 39px 385px;
  box-sizing: border-box;
  overflow: hidden;
}
.content .structure .main .lists :after {
  display: block;
  clear: both;
  content: "";
  visibility: hidden;
  height: 0;
}
.content .structure .main .lists .item {
  width: 25%;
  height: 66px;
  float: left;
}
.content .structure .main .lists .item .text {
  width: 200px;
  height: 66px;
  float: left;
  background: rgba(10, 122, 209, 0.6);
  border-radius: 10px;
  font-size: 30px;
  font-family: SourceHanSansCN-Regular;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  line-height: 66px;
  text-align: center;
}
.content .structure .main .lists .item:nth-child(1),
.content .structure .main .lists .item:nth-child(2),
.content .structure .main .lists .item:nth-child(3),
.content .structure .main .lists .item:nth-child(4) {
  margin-bottom: 53px;
}
.content .structure .main .position,
.content .structure .main .application {
  width: 144px;
  height: 144px;
  position: absolute;
  top: 503px;
  background: rgba(10, 122, 209, 0.6);
  font-size: 30px;
  font-family: SourceHanSansCN-Regular;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  line-height: 144px;
  text-align: center;
}
.content .structure .main .position {
  left: 409px;
}
.content .structure .main .application {
  right: 748px;
}
.content .structure .main .analysis {
  position: absolute;
  top: 842px;
  left: 385px;
  font-size: 0;
}
.content .structure .main .analysis .item {
  width: 280px;
  height: 66px;
  margin-right: 24px;
  display: inline-block;
  background: rgba(10, 122, 209, 0.6);
  border-radius: 10px;
  font-size: 30px;
  font-family: SourceHanSansCN-Regular;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  line-height: 66px;
  text-align: center;
}
.content .structure .main .text {
  width: 196px;
  height: 32px;
  position: absolute;
  font-size: 32px;
  font-family: SourceHanSansCN-Regular;
  font-weight: bold;
  font-style: italic;
  color: rgba(238, 238, 238, 0.71);
  line-height: 40px;
}
.content .structure .main .text1 {
  top: 309px;
  left: 768px;
}
.content .structure .main .text2 {
  top: 951px;
  left: 737px;
}
.content .structure .main .circle {
  width: 156px;
  height: 156px;
  position: absolute;
  background: rgba(10, 122, 209, 0.6);
  border-radius: 50%;
  font-size: 30px;
  font-family: SourceHanSansCN-Regular;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  line-height: 156px;
  text-align: center;
}
.content .structure .main .circle1 {
  top: 535px;
  right: 393px;
}
.content .structure .main .circle2 {
  top: 739px;
  right: 363px;
}
.content .structure .main .arrow {
  width: 66px;
  height: 132px;
  position: absolute;
  background-image: url("../assets/images/tour-arrow.png");
  background-size: 100% 100%;
}
.content .structure .main .arrow1 {
  top: 335px;
  left: 442px;
}
.content .structure .main .arrow2 {
  top: 335px;
  left: 1061px;
}
.content .structure .main .arrow3 {
  top: 669px;
  left: 442px;
}
.content .structure .main .arrow4 {
  top: 697px;
  left: 1061px;
}
.content .structure .main .arrow-italic1 {
  width: 108px;
  height: 110px;
  position: absolute;
  background-image: url("../assets/images/tour-arrow-italic1.png");
  background-size: 100% 100%;
  position: absolute;
  top: 664px;
  right: 530px;
}
.content .structure .main .arrow-italic2 {
  width: 99px;
  height: 65px;
  position: absolute;
  background-image: url("../assets/images/tour-arrow-italic2.png");
  background-size: 100% 100%;
  position: absolute;
  top: 813px;
  right: 520px;
}
</style>
