<template>
  <div>
    <headerBar></headerBar>
    <div class="content">
      <div class="desc">智慧机场借助自助航显、自助导引、自助问询、自助行李托运、自助通关、自助登机等各种自助服务，让旅客享受服务更加便捷。机场运行信息数据的共享问题一直是机场管理的痛点。消除信息数据孤岛，实现信息数据协同共享，将对机场运行效率提升具有重要意义。</div>
      <div class="airport">
        <div class="title">智慧机场</div>
        <ul class="lists">
          <li class="item"
              v-for="(item,index) in airport"
              :key="index">
            <i class="icon"></i>
            <div class="name">{{item.name}}</div>
            <div class="info">{{item.info}}</div>
          </li>
        </ul>
      </div>
      <div class="platform">
        <div class="title">综合服务平台</div>
        <div class="desc">面向旅客提供多样化、场景化、个性化、智能化服务的综合平台，同时面向机场运营、商业转型提供与之协同的后台服务，以IT能力引领机场的新型服务模式创新。顺应机场客户完善自身经营能力、提升非航收入的发展需要，帮助其规划和构建机场会员业务体系及商业营销能力，利用信息化手段打通线下旅客和机场运营的阻隔。</div>
        <ul class="lists">
          <li class="item"
              v-for="(item,index) in platform"
              :key="index">
            <i class="icon"></i>
            <div class="info">{{item.info}}</div>
          </li>
        </ul>
      </div>
      <div class="structure">
        <div class="title">系统架构</div>
        <div class="avatar"><img class="image"
               src="@/assets/images/structure.png"></div>
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
      airport: [
        { icon: '',
          name: '个性化信息推送',
          info: '通过室内定位技术，确定用户当前位置，提供基于顾客位置的个性化内容推送' },
        { icon: '',
          name: '泊车寻车',
          info: '停车后，记录下停车位置，返程时，将该位置设置为目的地，一键导航，方便快速寻车，还有APP定制化服务' },
        { icon: '',
          name: '交互式查询',
          info: '偌大的飞机场，购物、休息、娱乐信息搜索分类，一键导航' },
        { icon: '',
          name: '建议路线规划指示',
          info: '给用户提供合理的优化线路，引导顾客到达目的地' },
        { icon: '',
          name: '位置营销',
          info: '通过分析消费者行为，进行营销广告定投，总体客流量分析、消费热点分析、商铺间分析等' },
        { icon: '',
          name: '智能管理',
          info: '掌握机场用户轨迹、停留时间，掌握用户流峰谷，更合理的疏通客流，调整布局疏导时段' }
      ],
      platform: [
        {
          icon: '',
          info: '航班服务模块'
        },
        {
          icon: '',
          info: '旅客服务模块'
        }, {
          icon: '',
          info: '综合交通模块'
        }, {
          icon: '',
          info: '信息查询模块'
        }, {
          icon: '',
          info: '消息推送模块'
        }, {
          icon: '',
          info: '室内位置服务模块'
        }, {
          icon: '',
          info: '在线支付模块'
        }, {
          icon: '',
          info: '数据存储系统'
        }, {
          icon: '',
          info: '设备管理系统'
        }, {
          icon: '',
          info: '内容发布系统'
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
  padding-top: 112px;
  background: rgba(255, 255, 255, 1);
}

.content .desc {
  width: 1077px;
  height: 120px;
  margin: 0 auto 68px;
  font-size: 24px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(56, 56, 56, 1);
  line-height: 48px;
  letter-spacing: 1.2px;
}

.content .airport {
  width: 100%;
  height: 730px;
  padding-top: 100px;
}

.content .airport .title {
  width: 181px;
  height: 44px;
  margin: 0 auto 86px;
  font-size: 44px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(53, 53, 53, 1);
  line-height: 30px;
}

.content .airport .lists {
  width: 100%;
  padding: 0 238px 0 312px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.content .airport .lists .item {
  width: 33.3333%;
  margin-bottom: 100px;
  padding-top: 20px;
  position: relative;
}

.content .airport .lists .item .icon {
  width: 58px;
  height: 58px;
  background: rgba(98, 151, 108, 1);
  position: absolute;
  top: 0;
  left: 0;
}

.content .airport .lists .item .name {
  margin-bottom: 42px;
  margin-left: 98px;
  font-size: 20px;
  font-family: DengXian-Bold;
  font-weight: bold;
  color: rgba(30, 30, 30, 1);
  line-height: 30px;
  /* letter-spacing: 0.1px; */
}

.content .airport .lists .item .info {
  width: 266px;
  margin-left: 91px;
  font-size: 14px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(87, 87, 87, 1);
  line-height: 28px;
  /* letter-spacing: 0.07px; */
}

.content .platform {
  width: 100%;
  height: 869px;
  padding-top: 97px;
  background: rgba(238, 238, 238, 1);
}

.content .platform .title {
  width: 275px;
  height: 44px;
  margin: 0 auto 71px;
  font-size: 44px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(58, 58, 58, 1);
  line-height: 30px;
}

.content .platform .desc {
  width: 1073px;
  margin: 0 auto 62px;
  font-size: 16px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(58, 58, 58, 1);
  line-height: 30px;
  /* letter-spacing: 0.08px; */
}

.content .platform .lists {
  width: 100%;
  padding: 0 335px 0 335px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.content .platform .lists .item {
  width: 20%;
  height: 196px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 1);
}

.content .platform .lists .item:nth-child(odd) {
  background: rgba(238, 238, 238, 1);
}

.content .platform .lists .item .icon {
  width: 58px;
  height: 57px;
  margin: 47px auto 38px;
  background: rgba(49, 49, 49, 1);
}

.content .platform .lists .item .info {
  font-size: 20px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(30, 30, 30, 1);
  line-height: 30px;
}

.content .structure {
  width: 100%;
  height: 600px;
  padding-top: 99px;
  background: rgba(255, 255, 255, 1);
}

.content .structure .title {
  width: 181px;
  height: 44px;
  margin: 0 auto 3px;
  font-size: 44px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(53, 53, 53, 1);
  line-height: 30px;
}

.content .structure .avatar {
  width: 1302px;
  height: 344px;
  margin: 0 auto;
  overflow: hidden;
}

.content .structure .avatar .image {
  width: 100%;
  height: 100%;
}
</style>
