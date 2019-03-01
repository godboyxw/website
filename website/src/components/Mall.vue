<template>
  <div>
    <headerBar :title="title"
               :backgroundImage="backgroundImage"
               :desc="desc"></headerBar>
    <div class="content">
      <div class="desc">“智慧商城”就是在传统商城和文化商城的基础上，运用物联网、云计算、移动商务和电子商务等新兴科技手段对传统商城进行数字化、智能化的一种嵌入和复合，就是让人与人、物与物更智能、更便捷地交流，它将给每个人的生活采购方式带来改变。</div>
      <div class="mall">
        <div class="title">智慧商场</div>
        <div class="function">为消费者提供有价值的信息，为商场、购物中心、家具广场、大型超市提供位置营销服务解决方案</div>
        <ul class="lists">
          <li class="item"
              v-for="(item,index) in mall"
              :key="index">
            <div class="img"
                 :style="{backgroundImage:'url('+item.img+')'}"></div>
            <div class="name">{{item.name}}</div>
            <div class="info">{{item.info}}</div>
          </li>
        </ul>
      </div>
      <div class="functional">
        <div class="title">产品优势</div>
        <ul class="lists">
          <li class="item"
              v-for="(item,index) in functional"
              :key="index">
            <div class="icon"
                 :style="{backgroundImage:'url('+item.icon+')'}"></div>
            <div class="name">{{item.name}}</div>
            <div class="info">{{item.info}}</div>
          </li>
        </ul>
      </div>
      <div class="manage">
        <div class="title">智能管理</div>
        <div class="info">基于在WiFi或蓝牙环境下收集的商业中心用户位置数据，快速实现商超的只会商城、精准分析和科学管理</div>
        <ul class="lists">
          <li class="item"
              v-for="(item,index) in manage"
              :key="index">
            <div class="avatar"
                 :style="{backgroundImage:'url('+item.avatar+')'}"></div>
            <div class="title">{{item.title}}</div>
            <ul class="analyse">
              <li class="key"
                  v-for="(key,value) in item.analyse"
                  :key="value">{{key}}</li>
            </ul>
          </li>
        </ul>
      </div>
      <example></example>
      <footerBar></footerBar>
    </div>
  </div>
</template>

<script>
import headerBar from '../Common/Header'
import footerBar from '../Common/Footer'
import example from '../Common/Example'
export default {
  components: {
    headerBar,
    footerBar,
    example
  },
  data () {
    return {
      backgroundImage: require('../assets/images/mall-header.png'),
      backgroundColor: 'rgba(181, 181, 181, 0.2)',
      title: '大型商场',
      desc: '为民航行业客户提供先进的智慧商业和出行服务解决方案',
      mall: [
        { img: require('../assets/images/airport-img1.png'),
          name: '个性化信息推送',
          info: '通过室内定位技术，确定用户当前位置，提供基于顾客位置的个性化内容推送' },
        { img: require('../assets/images/airport-img2.png'),
          name: '泊车寻车',
          info: '停车后，记录下停车位置，返程时，将该位置设置为目的地，一键导航，方便快速寻车，还有APP定制化服务' },
        { img: require('../assets/images/airport-img3.png'),
          name: '交互式查询',
          info: '偌大的飞机场，购物、休息、娱乐信息搜索分类，一键导航' },
        { img: require('../assets/images/airport-img4.png'),
          name: '建议路线规划指示',
          info: '给用户提供合理的优化线路，引导顾客到达目的地' },
        { img: require('../assets/images/airport-img5.png'),
          name: '位置营销',
          info: '通过分析消费者行为，进行营销广告定投，总体客流量分析、消费热点分析、商铺间分析等' },
        { img: require('../assets/images/airport-img6.png'),
          name: '智能管理',
          info: '掌握机场用户轨迹、停留时间，掌握用户流峰谷，更合理的疏通客流，调整布局疏导时段' }
      ],
      functional: [
        {
          icon: require('../assets/images/mall-ai-icon.png'),
          name: '智能融合感知服务',
          info: '融合室内外定位技术、人工智能（AI）、物联网技术，自主研发多源智能感知服务平台，实现线下用户的数字化识别和空间场景感知'
        },
        {
          icon: require('../assets/images/mall-ar-icon.png'),
          name: '地图与AR导航',
          info: '提供高精度室内外定位、2D/3D地图展示、全楼层的检索、路径规划及导航等功能，提供灵活、易用的软件开发包（SDK、API）'
        },
        {
          icon: require('../assets/images/mall-auto-icon.png'),
          name: '地图数据可视化',
          info: '提供数据的动态空间信息分析与可视化展示，全面支持招商数据、经营数据、商管数据等核心业务数据'
        },
        {
          icon: require('../assets/images/mall-map-icon.png'),
          name: '位置大数据',
          info: '利用在地理空间分析的核心技术优势对线下数据进行机器挖掘，构建用户线下行为画像，实现个性化信息精准头放和场景服务'
        },
        {
          icon: require('../assets/images/mall-location-icon.png'),
          name: '营销自动化',
          info: '商场、商户、券、广告的投放渠道，统一平台管控；打通线上线下营销网络，通过丰富的营销活动，针对周边潜客、场内客流、历史访客进行场景化营销，全面触达客群'
        },
        {
          icon: require('../assets/images/mall-manage-icon.png'),
          name: '客流经营',
          info: '提供客流量按时间、空间、商业、客户属性等维度进行综合分析，包括：进店率分析；驻留量、驻留对比及驻留时间分析；客流区域热度分析；店铺关联分析及店铺组合排名；顾客实时位置等'
        }
      ],
      manage: [
        {
          avatar: require('../assets/images/mall-manage-constume.png'),
          title: '消费者',
          analyse: [
            '行动轨迹分析',
            '活动范围分析',
            '消费记录分析',
            '消费偏好分析'
          ]
        },
        {
          avatar: require('../assets/images/mall-manage-seller.png'),
          title: '商家',
          analyse: [
            '总体客流量分析',
            '消费者活动热点分析',
            '商铺间关系分析',
            '营销方向分析'
          ]
        },
        {
          avatar: require('../assets/images/mall-manage-manager.png'),
          title: '商超管理员',
          analyse: [
            '商城布局分析',
            '商城人流分析',
            '商城安全系统管理'
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.content {
  width: 100%;
  height: 300px;
  padding-top: 111px;
  background: rgba(255, 255, 255, 1);
}

.content .desc {
  width: 900px;
  height: 121px;
  margin: 0 auto 68px;
  font-size: 24px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(56, 56, 56, 1);
  line-height: 48px;
  letter-spacing: 1.2px;
}

.content .mall {
  width: 100%;
  height: 800px;
  padding-top: 98px;
}

.content .mall .title {
  width: 227px;
  height: 44px;
  margin: 0 auto 50px;
  font-size: 44px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(53, 53, 53, 1);
  line-height: 30px;
}

.content .mall .function {
  width: 722px;
  height: 16px;
  margin: 0 auto 119px;
  font-size: 16px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(58, 58, 58, 1);
  line-height: 30px;
}

.content .mall .lists {
  width: 100%;
  padding: 0 238px 0 312px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.content .mall .lists .item {
  width: 33.3333%;
  margin-bottom: 100px;
  padding-top: 20px;
  position: relative;
}

.content .mall .lists .item .img {
  width: 58px;
  height: 58px;
  background-size: 100% 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.content .mall .lists .item .name {
  margin-bottom: 42px;
  margin-left: 98px;
  font-size: 20px;
  font-family: DengXian-Bold;
  font-weight: bold;
  color: rgba(30, 30, 30, 1);
  line-height: 30px;
  /* letter-spacing: 0.1px; */
}

.content .mall .lists .item .info {
  width: 266px;
  margin-left: 91px;
  font-size: 14px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(87, 87, 87, 1);
  line-height: 28px;
  /* letter-spacing: 0.07px; */
}
.content .functional {
  width: 100%;
  height: 1200px;
  padding-top: 100px;
  background: rgba(255, 255, 255, 1);
}
.content .functional .title {
  width: 182px;
  height: 44px;
  margin: 0 auto 89px;
  font-size: 44px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(53, 53, 53, 1);
  line-height: 30px;
}
.content .functional .lists {
  display: flex;
  flex-wrap: wrap;
  padding: 0 335px 0 335px;
}
.content .functional .lists .item {
  width: 33.333%;
  height: 467px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.content .functional .lists .item .icon {
  width: 300px;
  height: 180px;
  border-radius: 10px;
  margin-bottom: 42px;
  background-size: 100% 100%;
}
.content .functional .lists .item .name {
  height: 20px;
  margin-bottom: 35px;
  font-size: 20px;
  font-family: DengXian-Bold;
  font-weight: bold;
  color: rgba(57, 57, 57, 1);
  line-height: 30px;
}
.content .functional .lists .item .info {
  width: 342px;
  font-size: 18px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(92, 92, 92, 1);
  line-height: 30px;
}
.content .manage {
  height: 750px;
  padding-top: 70px;
  background: rgba(238, 238, 238, 1);
}
.content .manage .title {
  width: 182px;
  margin: 0 auto 50px;
  font-size: 44px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(53, 53, 53, 1);
  line-height: 30px;
}
.content .manage .info {
  width: 775px;
  margin: 0 auto 71px;
  font-size: 16px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(58, 58, 58, 1);
  line-height: 30px;
}
.content .manage .lists {
  width: 100%;
  padding: 0 492px 0 494px;
  box-sizing: border-box;
  overflow: hidden;
}
.content .manage .lists:after {
  display: block;
  clear: both;
  content: "";
  visibility: hidden;
  height: 0;
}
.content .manage .lists .item {
  width: 33.333%;
  height: 499px;
  float: left;
}
.content .manage .lists .item .avatar {
  width: 150px;
  height: 150px;
  margin: 0 auto 37px;
  background-size: 100% 100%;
}
.content .manage .lists .item .title {
  margin-bottom: 38px;
  font-size: 24px;
  font-family: DengXian-Bold;
  font-weight: bold;
  color: rgba(65, 65, 65, 1);
  line-height: 30px;
  text-align: center;
}
.content .manage .lists .item .analyse {
  overflow: hidden;
}
.content .manage .lists .item .analyse .key {
  margin-bottom: 14px;
  font-size: 16px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(92, 92, 92, 1);
  line-height: 30px;
  text-align: center;
}
</style>
