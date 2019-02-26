<template>
  <div>
    <headerBar :title="title"
               :desc="desc"></headerBar>
    <div class="content">
      <div class="desc">现今生活中，停车场作为一个使用率颇高的场所，停车场依旧缺少空余车位查询和车辆导航机制，且停车场空间环境相似度高，所以在偌大停车场如何停车场找车，是不少有车一族头疼的问题。</div>
      <div class="park">
        <div class="title">智慧停车场</div>
        <div class="function">对停车场管理系统，实现车位预定、停车引导和反向寻车服务，解决开车人的停车难问题。</div>
        <ul class="lists">
          <li class="item"
              v-for="(item,index) in park"
              :key="index">
            <i class="icon"></i>
            <div class="name">{{item.name}}</div>
            <div class="info">{{item.info}}</div>
          </li>
        </ul>
      </div>
      <div class="functional">
        <div class="title">功能详解</div>
        <ul class="lists">
          <li class="item"
              v-for="(item,index) in functional"
              :key="index">
            <i class="icon"></i>
            <div class="name">{{item.name}}</div>
            <div class="info">{{item.info}}</div>
          </li>
        </ul>
      </div>
      <div class="process">
        <div class="title">智能停车流程</div>
        <div class="desc">基于在蓝牙环境下，与固有停车场管理系统深度结合，为用户提供全方面的空余车位导航、记录停车场、反向寻车、查找路线、查找公共设施等服务。</div>
        <div class="park-process">停车流程</div>
        <ul class="park-process-detail">
          <li class="procedure">空车位查询</li>
          <li class="line"></li>
          <li class="procedure">预定空车位</li>
          <li class="line"></li>
          <li class="procedure">规划路线导航至空车位</li>
          <li class="line"></li>
          <li class="procedure">停车并标记停车位</li>
          <li class="line"></li>
          <li class="procedure">查找公共设施</li>
        </ul>
        <div class="park-process">寻车流程</div>
        <ul class="park-process-detail">
          <li class="procedure">点击反向寻车</li>
          <li class="line"></li>
          <li class="procedure">导航至停车位</li>
          <li class="line"></li>
          <li class="procedure">线上缴纳停车费</li>
          <li class="line"></li>
          <li class="procedure">出停车场</li>
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
      title: '智慧停车场',
      desc: '为民航行业客户提供先进的智慧商业和出行服务解决方案',
      park: [
        {
          icon: '',
          name: '车位状态',
          info: '以地图的形式，展示停车场车位空占状态，空占情况一目了然'
        },
        {
          icon: '',
          name: '车位预定',
          info: '可在地图上搜索到目的地附近有空闲车位的停车场，选好车位，提前预定车位。'
        },
        {
          icon: '',
          name: '室内导航',
          info: '迅速而准确的定位，帮您导航到停车位。'
        },
        {
          icon: '',
          name: '精准定位',
          info: '对当前停车的位置精准记录，保存到本地或服务器，便于找车。'
        },
        {
          icon: '',
          name: '智能寻车',
          info: '将本地或服务器记录的停车位置设置为目的地，实现反向寻车。'
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
          name: '高标准、高还原3d地图',
          info: '业内标准规范制图工艺、误差小于10CM;高度还原停车场真是环境'
        },
        {
          icon: '',
          name: '高精度停车场定位技术',
          info: '采用业内领先iBeacon定位技术，定位精度可达1-3米'
        },
        {
          icon: '',
          name: '语音+文字导航提示',
          info: '根据实时导航路径方向和距离进行语音及文字提示'
        },
        {
          icon: '',
          name: '偏航重新规划路径',
          info: '支持用户便宜既有路径时，自动重新规划路径，使停车导航更智能'
        },
        {
          icon: '',
          name: '多平台实现',
          info: '支持微信公众号/iOS/Android三大主流移动端应用'
        },
        {
          icon: '',
          name: '快速交付、便于维护',
          info: '一般的车位停车场，可快速完成产品交付，并定期Beacon巡检维护'
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
  width: 1920px;
  height: 1300px;
  padding-top: 101px;
  background: rgba(255, 255, 255, 1);
}
.content .functional .title {
  width: 182px;
  height: 44px;
  margin: 0 auto 98px;
  font-size: 44px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(53, 53, 53, 1);
  line-height: 30px;
}
.content .functional .lists {
  display: flex;
  flex-wrap: wrap;
  padding: 0 375px 0 360px;
}
.content .functional .lists .item {
  width: 33.333%;
  margin-bottom: 153px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.content .functional .lists .item .icon {
  width: 141px;
  height: 141px;
  margin-bottom: 93px;
  background: red;
}
.content .functional .lists .item .name {
  height: 28px;
  margin-bottom: 47px;
  font-size: 28px;
  font-family: MicrosoftYaHei-Bold;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  line-height: 28px;
}
.content .functional .lists .item .info {
  width: 325px;
  font-size: 28px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(87, 87, 87, 1);
  line-height: 36px;
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
.content .process .park-process {
  width: 116px;
  height: 27px;
  margin-left: 332px;
  margin-bottom: 29px;
  font-size: 28px;
  font-family: DengXian-Bold;
  font-weight: bold;
  color: rgba(85, 151, 101, 1);
  line-height: 30px;
}

.content .process .park-process-detail {
  margin-left: 312px;
  margin-bottom: 78px;
  font-size: 0;
}
.content .process .park-process-detail .procedure {
  display: inline-block;
  height: 50px;
  padding: 0 30px;
  background: rgba(255, 255, 255, 1);
  border-radius: 10px;
  text-align: center;
  line-height: 50px;
  font-size: 16px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(30, 30, 30, 1);
}
.content .process .park-process-detail .line {
  display: inline-block;
  width: 89px;
  height: 4px;
  background: rgba(255, 255, 255, 1);
}
</style>
