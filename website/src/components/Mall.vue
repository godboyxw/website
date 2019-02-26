<template>
  <div>
    <headerBar :title="title"
               :desc="desc"></headerBar>
    <div class="content">
      <div class="desc">“智慧商城”就是在传统商城和文化商城的基础上，运用物联网、云计算、移动商务和电子商务等新兴科技手段对传统商城进行数字化、智能化的一种嵌入和复合，就是让人与人、物与物更智能、更便捷地交流，它将给每个人的生活采购方式带来改变。</div>
      <div class="park">
        <div class="title">智慧停车场</div>
        <div class="function">对停车场管理系统，实现车位预定、停车引导和反向寻车服务，解决开车人的停车难问题。</div>
        <ul class="lists">
          <li class="item"
              v-for="(item,index) in mall"
              :key="index">
            <i class="icon"></i>
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
            <div class="img"></div>
            <div class="name">{{item.name}}</div>
            <div class="info">{{item.info}}</div>
          </li>
        </ul>
      </div>
      <div class="process">
        <div class="title">智能停车流程</div>
        <div class="desc">基于在蓝牙环境下，与固有停车场管理系统深度结合，为用户提供全方面的空余车位导航、记录停车场、反向寻车、查找路线、查找公共设施等服务。</div>
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
      title: '大型商场',
      desc: '为民航行业客户提供先进的智慧商业和出行服务解决方案',
      mall: [
        {
          icon: '',
          name: '个性化信息推送',
          info: '通过室内定位技术，确定用户当前位置，提供基于顾客位置的个性化内容推送'
        },
        {
          icon: '',
          name: '泊车寻车',
          info: '停车后，记录下停车位置，返程时，将该位置设置为目的地，一键导航，方便快速寻车，还有APP定制化服务'
        },
        {
          icon: '',
          name: '交互式查询',
          info: '购物、休息、娱乐信息搜索分类，一键导航'
        },
        {
          icon: '',
          name: '建议路线规划指示',
          info: '给用户提供合理的优化线路，引导顾客到达目的地'
        },
        {
          icon: '',
          name: '位置营销',
          info: '通过分析消费者行为，进行营销广告定投，总体客流量分析、消费热点分析、商铺间分析等'
        },
        {
          icon: '',
          name: '智能管理',
          info: '掌握机场用户轨迹、停留时间，掌握用户流峰谷，更合理的疏通客流，调整布局疏导时段'
        }
      ],
      functional: [
        {
          icon: '',
          name: '智能融合感知服务',
          info: '融合室内外定位技术、人工智能（AI）、物联网技术，自主研发多源智能感知服务平台，实现线下用户的数字化识别和空间场景感知'
        },
        {
          icon: '',
          name: '地图与AR导航',
          info: '提供高精度室内外定位、2D/3D地图展示、全楼层的检索、路径规划及导航等功能，提供灵活、易用的软件开发包（SDK、API）'
        },
        {
          icon: '',
          name: '地图数据可视化',
          info: '提供数据的动态空间信息分析与可视化展示，全面支持招商数据、经营数据、商管数据等核心业务数据'
        },
        {
          icon: '',
          name: '位置大数据',
          info: '利用在地理空间分析的核心技术优势对线下数据进行机器挖掘，构建用户线下行为画像，实现个性化信息精准头放和场景服务'
        },
        {
          icon: '',
          name: '营销自动化',
          info: '商场、商户、券、广告的投放渠道，统一平台管控；打通线上线下营销网络，通过丰富的营销活动，针对周边潜客、场内客流、历史访客进行场景化营销，全面触达客群'
        },
        {
          icon: '',
          name: '客流经营',
          info: '提供客流量按时间、空间、商业、客户属性等维度进行综合分析，包括：进店率分析；驻留量、驻留对比及驻留时间分析；客流区域热度分析；店铺关联分析及店铺组合排名；顾客实时位置等'
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

.content .park {
  width: 100%;
  height: 800px;
  padding-top: 98px;
}

.content .park .title {
  width: 227px;
  height: 44px;
  margin: 0 auto 50px;
  font-size: 44px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(53, 53, 53, 1);
  line-height: 30px;
}

.content .park .function {
  width: 661px;
  height: 16px;
  margin: 0 auto 119px;
  font-size: 16px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(58, 58, 58, 1);
  line-height: 30px;
}

.content .park .lists {
  width: 100%;
  padding: 0 238px 0 312px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.content .park .lists .item {
  width: 33.3333%;
  margin-bottom: 100px;
  padding-top: 20px;
  position: relative;
}

.content .park .lists .item .icon {
  width: 58px;
  height: 58px;
  background: rgba(98, 151, 108, 1);
  position: absolute;
  top: 0;
  left: 0;
}

.content .park .lists .item .name {
  margin-bottom: 42px;
  margin-left: 98px;
  font-size: 20px;
  font-family: DengXian-Bold;
  font-weight: bold;
  color: rgba(30, 30, 30, 1);
  line-height: 30px;
  /* letter-spacing: 0.1px; */
}

.content .park .lists .item .info {
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
  margin-bottom: 82px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.content .functional .lists .item .img {
  width: 300px;
  height: 180px;
  border-radius: 10px;
  margin-bottom: 42px;
  background: red;
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
.content .process {
  width: 1920px;
  height: 700px;
  padding-top: 101px;
  background: rgba(238, 238, 238, 1);
}
.content .process .title {
  width: 275px;
  height: 44px;
  margin: 0 auto 48px;
  font-size: 44px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(58, 58, 58, 1);
  line-height: 30px;
}
.content .process .desc {
  width: 564px;
  height: 47px;
  margin: 0 auto 94px;
  font-size: 16px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(58, 58, 58, 1);
  line-height: 30px;
}
</style>
