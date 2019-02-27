<template>
  <div class="goods-service">
    <div class="title">产品服务</div>
    <ul class="lists">
      <li class="item"
          v-for="(item,index) in goodsService"
          :key="index">
        <div class="avatar">
          <img :src='item.img'
               class="img"
               alt="">
        </div>
        <div class="name">{{item.name}}</div>
        <div class="desc">{{item.desc}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      goodsService: [
        {
          img: require('@/assets/images/ads-goods-service-1.png'),
          name: 'ADS精准营销广告平台',
          desc: '依托于先进的RTB（实时竞价）技术、DMP（数据管理平台）强大的数据处理能力，提供全渠道广告触达精准投放。'
        },
        {
          img: require('@/assets/images/ads-goods-service-2.png'),
          name: '位置观景台',
          desc: '对平台汇聚的各种位置数据进行汇聚、整合、清洗、标签化，实现对用户的线下行为分析和画像，用于基于精准场景的信息投放和场景服务。'
        },
        {
          img: require('@/assets/images/ads-goods-service-3.png'),
          name: '客流经营平台——场景客',
          desc: '全面提升实体商业“数字化客流经营能力”。'
        },
        {
          img: require('@/assets/images/ads-goods-service-1.png'),
          name: 'ADS精准营销广告平台',
          desc: '依托于先进的RTB（实时竞价）技术、DMP（数据管理平台）强大的数据处理能力，提供全渠道广告触达精准投放。'
        },
        {
          img: require('@/assets/images/ads-goods-service-2.png'),
          name: '位置观景台',
          desc: '对平台汇聚的各种位置数据进行汇聚、整合、清洗、标签化，实现对用户的线下行为分析和画像，用于基于精准场景的信息投放和场景服务。'
        },
        {
          img: require('@/assets/images/ads-goods-service-3.png'),
          name: '客流经营平台——场景客',
          desc: '全面提升实体商业“数字化客流经营能力”。'
        }
      ]
    }
  }
}
</script>

<style scoped>
.goods-service {
  width: 100%;
  padding-top: 240px;
}
.goods-service .title {
  width: 247px;
  height: 60px;
  margin: 0 0 120px 370px;
  font-size: 60px;
  font-family: MicrosoftYaHei;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  line-height: 40px;
}
.goods-service .lists {
  padding: 0 360px 110px 360px;
  display: flex;
  flex-wrap: wrap;
}
.goods-service .lists .item {
  width: 33.333%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.goods-service .lists .item .avatar {
  width: 378px;
  height: 407px;
  overflow: hidden;
}
.goods-service .lists .item .avatar .img {
  width: 100%;
  height: 100%;
}
.goods-service .lists .item .name {
  width: 380px;
  height: 160px;
  margin-bottom: 29px;
  background: rgba(10, 122, 209, 1);
  font-size: 32px;
  font-family: SourceHanSansCN-Regular;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  line-height: 160px;
  text-align: center;
}
.goods-service .lists .item .desc {
  height: 278px;
  margin-left: 13px;
  margin-right: 20px;
  font-size: 24px;
  font-family: SourceHanSansCN-Regular;
  font-weight: bold;
  color: rgba(53, 53, 53, 1);
  line-height: 40px;
}
</style>
