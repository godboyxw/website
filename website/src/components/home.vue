<template>
  <div class="container">
    <!-- top -->
    <div class="top">
      <ul class="t_list">
        <li class="logos">
          <img src="./images/logo.png"
               style="width: 80%;height: 90%;" />
        </li>
        <li class="item">首页</li>
        <li class="item"
            @click="slider">产品中心</li>
        <li class="item">客户案例</li>
        <li class="item">最新动态</li>
        <li class="item">公司官网</li>
        <li class="item">关于我们</li>
        <li class="item">
          <div class="i_box">
            <span class="r_txt txt1">中</span>
            <span class="r_txt txt2">|</span>
            <span class="r_txt txt3">En</span>
          </div>
        </li>
      </ul>
      <transition name="fade">
        <ul class="slider"
            v-if="isShow">
          <router-link class="link"
                       to="/sports">
            <li class="item">体育场馆</li>
          </router-link>
          <router-link class="link"
                       to="/social">
            <li class="item">社交联络</li>
          </router-link>
          <router-link class="link"
                       to="/display">
            <li class="item">会展博览</li>
          </router-link>
          <router-link class="link"
                       to="/tour">
            <li class="item">旅游观光</li>
          </router-link>
          <router-link class="link"
                       to="/ads">
            <li class="item">广告营销</li>
          </router-link>
          <router-link class="link"
                       to="/airport">
            <li class="item">智慧机场</li>
          </router-link>
          <router-link class="link"
                       to="/park">
            <li class="item">泊车寻车</li>
          </router-link>
          <router-link class="link"
                       to="/mall">
            <li class="item">智慧商场</li>
          </router-link>
        </ul>
      </transition>
    </div>
    <img src="./images/back.png"
         style="width: 100%; height: 100%;" />
    <!-- 平台优势 -->
    <div class="advantage">
      <div class="a_txt">平台优势</div>
      <div class="a_list">
        <ul>
          <li class="item1">
            <img src="./images/list1.png"
                 style="width: 100%; height: 100%;" />
          </li>
          <li class="item2">
            <img src="./images/list2.png"
                 class="i_img" />
            <div class="offset">
              <img src="./images/daohang1.png"
                   class="icon" />
              <span class="o_txt">室内导航</span>
            </div>
          </li>
          <li class="item3">
            <img src="./images/list3.png"
                 class="i_img" />
            <div class="offset">
              <img src="./images/daohang2.png"
                   class="icon" />
              <span class="o_txt">车辆定位导航</span>
            </div>
          </li>
          <li class="item4"
              style="margin-right: -20px;">
            <img src="./images/list4.png"
                 class="i_img" />
            <div class="offset">
              <img src="./images/daohang3.png"
                   class="icon" />
              <span class="o_txt">室内位置数据分析</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 开放平台 -->
    <div class="platform">
      <div class="p_txt txt1">开放平台</div>
      <div class="p_txt txt2">室内定位导航</div>
      <div class="p_txt txt3">SDK一步集成、海量位置共享</div>
      <div class="box">
        <div class="left">
          <img src="./images/box1.png" />
        </div>
        <div class="right">
          <div class="box1">
            <p class="b_txt1">智能硬件</p>
            <p class="b_txt2">提供先进的物联网硬件解决方案</p>
          </div>
          <div class="box2">
            <p class="b_txt1">开发者SDK</p>
            <p class="b_txt2">提供ios/Android/Web SDK,通过调用地图SDK接口可实现丰富地图交互服务</p>
          </div>
          <div class="box3">
            <p class="b_txt1">解决方案</p>
            <p class="b_txt2">全面室内外定位组合方案，构建一体化位置服务平台</p>
          </div>
        </div>
      </div>
      <div class="btn">立即体验</div>
    </div>
    <!-- 业务范畴 -->
    <div class="yewu">
      <div class="y_title">
        业务范畴
      </div>
      <div class="y_line"></div>
      <div class="bac">
        <img src="./images/back1.png" />
      </div>
    </div>
    <!-- 产品用例展示 -->
    <div class="product">
      <div class="p_title">
        产品用例展示
      </div>
      <div style="width: 1000px;margin: 0 auto;display: flex;flex-direction: row;">
        <div class="p_left">
          <div class="box">
            <div class="b_left"></div>
            <div class="b_right">
              <div class="b_title">自由定位导航</div>
              <div class="b_desc">泊车寻车泊车寻车泊车寻车泊车寻车泊车寻车泊车寻车泊车寻车泊车寻车</div>
            </div>
          </div>
          <div class="box">
            <div class="b_left"></div>
            <div class="b_right">
              <div class="b_title">泊车寻车</div>
              <div class="b_desc">泊车寻车泊车寻车泊车寻车泊车寻车泊车寻车</div>
            </div>
          </div>
          <div class="box">
            <div class="b_left"></div>
            <div class="b_right">
              <div class="b_title">感知周边资源</div>
              <div class="b_desc">泊车寻车泊车寻车泊车寻车泊车寻车泊车寻车泊车寻车泊车寻车泊车寻车</div>
            </div>
          </div>
          <div class="box">
            <div class="b_left"></div>
            <div class="b_right">
              <div class="b_title">后台数据采集</div>
              <div class="b_desc">泊车寻车泊车寻车泊车寻车泊车寻车泊车寻车泊车寻车泊车</div>
            </div>
          </div>
        </div>
        <div class="p_right">
          <video width="100%"
                 height="340"
                 controls>
            <source src="http://t.cn/E53tNOU"
                    type="video/mp4">
            <source src="http://t.cn/E53tNOU"
                    type="video/ogg">
            您的浏览器不支持 HTML5 video 标签。
          </video>
          <div class="bac_txt">
            <div class="b_text">
              自由定位导航
            </div>
            <div class="b_desc">
              泊车寻车泊车寻车泊车寻车泊车寻车泊车寻车泊车寻车泊车寻车泊车寻车泊车寻车泊车寻车泊车寻车泊车寻车泊车寻车泊车寻车泊车寻车泊车寻车泊车寻车泊车寻车泊车寻车泊车寻车泊车寻车泊车寻车泊车寻车泊车寻车泊车寻车泊车寻车泊车寻车泊车寻车泊车寻车泊车寻车泊车寻车泊车寻车泊车寻车泊
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 解决方案 -->
    <div class="resolve">
      <div class="r_title">
        解决方案
      </div>
      <div class="r_list">
        <ul>
          <li class="item">
            <img src="./images/img1.png"
                 style="width: 100%;" />
            <div class="r_title">
              飞机场
            </div>
            <div class="r_desc">
              面向旅客提供多样化、场景化、个性化、智能化服务的综合平台，同时面向机场运营、商业转型提供与之协同的后台服务，以IT能力引领机场的新型服务模式创新。
            </div>
          </li>
          <li class="item">
            <img src="./images/img2.png"
                 style="width: 100%;" />
            <div class="r_title">
              停车场
            </div>
            <div class="r_desc">
              全自动识别并记录客户爱车停放车位，无需其他操作，更加智能和便捷。找车时，一键导航到停车位。不仅可以获取用户精准画像信息展示。当然，我们也可以将此类场景借鉴到人员管控的场景内，通过图像识别与Beacon结合，获取精准人员信息及行为轨迹。
              在场景内不断产生的精准位置大数据，能够让场景更加有趣。
            </div>
          </li>
          <li class="item">
            <img src="./images/img3.png"
                 style="width: 100%;" />
            <div class="r_title">
              会展展馆
            </div>
            <div class="r_desc">
              融合室内外定位技术、人工智能（AI）、物联网技术，自主研发多源智能感知服务平台，实现会议展馆内对线下用户的数字化识别和空间场景感知。
            </div>
          </li>
          <li class="item">
            <img src="./images/img4.png"
                 style="width: 100%;" />
            <div class="r_title">
              大型商场
            </div>
            <div class="r_desc">
              利用在地理空间分析的核心技术优势对线下数据进行机器挖掘，构建用户线下行为画像，实现个性化信息精准投放和场景服务。
            </div>
          </li>
          <li class="item">
            <img src="./images/img5.png"
                 style="width: 100%;" />
            <div class="r_title">
              体育场馆
            </div>
            <div class="r_desc">
              融合室内外定位技术、人工智能（AI）、物联网技术，自主研发多源智能感知服务平台，实现体育场馆内对线下用户的数字化识别和空间场景感知。
            </div>
          </li>
          <li class="item">
            <img src="./images/img6.png"
                 style="width: 100%;" />
            <div class="r_title">
              旅游景点
            </div>
            <div class="r_desc">
              针对旅游的场景化服务，获取景点信息图，系统自动定位游客的位置信息，将周边的景点信息推送到手机上，游客可以通过文字和语音来更全面的了解景点，景区运营方安保人员巡更系统，资产管理更加完备。
            </div>
          </li>
          <li class="item">
            <img src="./images/img7.png"
                 style="width: 100%;" />
            <div class="r_title">
              城市交通
            </div>
            <div class="r_desc">
              面向地面交通枢纽等室内空间，构建符合地面交通行业特点的场景化位置服务解决方案。将传感器与大型交通的结合打造智能交通，与建筑结合构建智能、节能、绿色建筑，与营销结合，产生精准人物画像，ibeacon传感器构建整个智慧城市可视化管理及运维。
            </div>
          </li>
          <li class="item">
            <img src="./images/img8.png"
                 style="width: 100%;" />
            <div class="r_title">
              广告营销
            </div>
            <div class="r_desc">
              线下优惠活动宣传，通过LBS识别附近目标客群，利用多渠道优质线上资源及海量媒体的DMP标签系统，人群包、关键词定向筛选，精准投放，将“对”的广告展示给“对”的人。
            </div>
          </li>
          <li class="item">
            <img src="./images/img9.png"
                 style="width: 100%;" />
            <div class="r_title">
              社交联络
            </div>
            <div class="r_desc">
              利用在地理空间分析的核心技术优势对线下数据进行机器挖掘，构建用户线下行为画像，实现个性化信息精准投放和场景服务。
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="jieshao">
      <div class="j_english">
        Bridging things in context
      </div>
      <div class="j_en">
        皆能时空，关联万物
      </div>
      <div class="j_box">
        <div class="jb_left">
          <div class="t_txt">
            公司简介
          </div>
          <div class="t_title">
            武汉皆能时空关联科技有限公司
          </div>
          <div class="t_desc">
            一个场景关联的生态系统平台——Geonoon,一个新颖的Web平台映射和应用现实世界中的动态和随机的场景属性关系，以支持普通公众和第三方使用、开发和提供各种创新性的应用和服务，由此可形成一个基于Genoon平台的应用服务和产业的生态系统。
          </div>
        </div>
        <div class="jb_right">
          <img style="width: 60%;height: 90%;"
               src="./images/map.png" />
        </div>
      </div>
    </div>
    <div class="bai"></div>
    <div class="footer">
      <div class="f_title">
        联系我们
      </div>
      <div class="f_box">
        <div class="fb_left">
          <div>
            <div class="fb_box">
              <img src="./images/icon.png"
                   style="width: 20px;height: 20px;margin-right: 10px;vertical-align: middle;" />
              <span class="fb_txt">联系电话:123123123</span>
            </div>
            <div class="fb_box">
              <img src="./images/icon1.png"
                   style="width: 20px;height: 20px;margin-right: 10px;vertical-align: middle;" />
              <span class="fb_txt">
                地址:武汉市东西湖区金银潭大道临空一号总部三栋六层
              </span>
            </div>
          </div>
        </div>
        <div class="fb_right">
          <img src="./images/qrcode.png" />
        </div>
      </div>
      <div class="fb_footer">
        ©2009-2019皆能行 武汉皆能时空关联科技有限公司 鄂ICP备123123号-5 版权所有
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    slider () {
      this.isShow = !this.isShow
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.container .top {
  width: 100%;
  height: 50px;
  position: relative;
  background: rgb(54, 80, 116);
  display: flex;
  flex-direction: row;
  align-items: center;
}
.container .top .slider {
  width: 160px;
  position: absolute;
  background: rgba(107, 160, 199, 0.6);
  left: 28%;
  top: 50px;
  font-size: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s linear;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.container .top .slider .link {
  display: inline-block;
  width: 160px;
  border-bottom: 1px solid #fff;
}
.container .top .slider .item {
  width: 160px;
  letter-spacing: 3px;
}
.container .top .slider .link:last-child {
  border-bottom: none;
}
.container .top .slider .item:hover {
  color: #000000;
  background: rgba(107, 160, 199, 0.8);
}
.container .top .t_list {
  width: 70%;
  margin: 0 15%;
  height: 50px;
  list-style-type: none;
  display: flex;
  align-items: center;
  position: relative;
}

.container .top .t_list .logos {
  width: 6%;
  height: 40px;
  border: 1px solid rgba(255, 255, 255, 1);
  border-radius: 5px;
}

.container .top ul li {
  width: 12%;
  height: 50px;
  float: left;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.container .top ul .item {
  font-size: 0.8rem;
  font-family: "MicrosoftYaHeiUI";
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}

.container .top ul .item .i_box {
  padding: 2px;
  background: rgba(255, 255, 255, 1);
  opacity: 0.62;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  right: 0;
}

.container .top ul .item .i_box .r_txt {
  font-size: 0.7rem;
  font-family: "SourceHanSansCN-Bold";
  font-weight: bold;
  opacity: 0.61;
  margin-right: 2px;
  padding: 2px;
}

.container .top ul .item .i_box .txt1 {
  color: rgba(255, 92, 92, 1);
}

.container .top ul .item .i_box .txt2 {
  color: #000000;
}

.container .top ul .item .i_box .txt3 {
  color: #666666;
}

.container .advantage {
  width: 100%;
  height: auto;
  background: rgba(255, 255, 255, 1);
}

.container .advantage .a_txt {
  text-align: center;
  padding: 70px 0 50px 0;
  font-size: 24px;
  font-family: "MicrosoftYaHei";
  font-weight: 400;
  color: rgba(46, 46, 46, 1);
}

.container .advantage .a_list {
  width: 60%;
  height: 320px;
  margin: 0 auto;
}

.container .advantage .a_list ul {
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}

.container .advantage .a_list ul li {
  width: 23%;
  height: 320px;
  box-shadow: 0px 4px 8px 0px rgba(30, 82, 132, 0.17);
}

.container .advantage .a_list ul .i_img {
  width: 100%;
  height: 240px;
}

.container .advantage .a_list ul .offset {
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.container .advantage .a_list ul .offset .icon {
  width: 30px;
  height: 30px;
}

.container .advantage .a_list ul .offset .o_txt {
  font-size: 14px;
  font-family: "MicrosoftYaHei";
  font-weight: 400;
  color: rgba(47, 47, 47, 1);
  margin-bottom: 5px;
}

.container .platform {
  width: 100%;
  height: auto;
  background: rgba(255, 255, 255, 1);
}

.container .platform .p_txt {
  font-family: "MicrosoftYaHei";
  font-weight: 400;
  text-align: center;
  color: rgba(46, 46, 46, 1);
}

.container .platform .txt1 {
  font-size: 24px;
  padding: 70px 0 20px 0;
}

.container .platform .txt2 {
  font-size: 12px;
  padding-bottom: 10px;
}

.container .platform .txt3 {
  font-size: 12px;
  margin-bottom: 30px;
}

.container .platform .box {
  width: 1000px;
  height: auto;
  margin: 0 auto;
}

.container .platform .box .left {
  width: 50%;
  height: auto;
  float: left;
}

.container .platform .box .left img {
  margin-left: 100px;
  margin-top: 100px;
}

.container .platform .box .right {
  width: 50%;
  height: auto;
  float: right;
  margin-bottom: 15px;
}

.container .platform .box .right .box1 {
  width: 170px;
}

.container .platform .box .right .box2 {
  width: 170px;
  margin-top: 60px;
}

.container .platform .box .right .box3 {
  width: 170px;
  margin-top: 60px;
}

.container .platform .box .right .b_txt1 {
  font-size: 14px;
  font-family: "DengXian-Bold";
  font-weight: bold;
  color: rgba(27, 27, 27, 1);
  margin-bottom: 10px;
}

.container .platform .box .right .b_txt2 {
  font-size: 12px;
  font-family: "MicrosoftYaHei";
  font-weight: 400;
  color: rgba(46, 46, 46, 1);
  line-height: 20px;
}

.container .platform .btn {
  width: 130px;
  height: 40px;
  background: rgba(33, 113, 181, 1);
  border-radius: 14px;
  font-size: 14px;
  font-family: "MicrosoftYaHei";
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  line-height: 40px;
  clear: both;
  margin: 0 auto;
  margin-top: 15px;
}

.container .yewu {
  width: 100%;
  height: auto;
  background: rgba(238, 238, 238, 1);
}

.container .yewu .y_title {
  font-size: 24px;
  font-family: "MicrosoftYaHeiUI";
  font-weight: 400;
  color: rgba(34, 34, 34, 1);
  text-align: center;
  margin: 50px 0 15px 0;
  padding-top: 50px;
}

.container .yewu .y_line {
  width: 50px;
  height: 3px;
  background: rgba(8, 81, 156, 1);
  margin: 0 auto;
}

.container .yewu .bac {
  text-align: center;
  padding: 40px 0 40px 0;
  margin-bottom: 40px;
}

.container .product {
  width: 100%;
  height: 520px;
  background: rgba(255, 255, 255, 1);
}

.container .product .p_title {
  font-size: 24px;
  font-family: "MicrosoftYaHei";
  font-weight: 400;
  color: rgba(53, 53, 53, 1);
  text-align: center;
  margin-bottom: 60px;
}

.container .product .p_left {
  width: 50%;
}
.container .product .p_left .box {
  width: 200px;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 0 auto;
}
.container .product .p_left .box .b_left {
  width: 10px;
  height: 10px;
  border: 2px solid rgba(33, 113, 181, 1);
  border-radius: 50%;
  margin-top: 15px;
}
.container .product .p_left .box .b_right {
  width: 150px;
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.container .product .p_left .box .b_right .b_title {
  font-size: 14px;
  font-family: "DengXian-Bold";
  font-weight: bold;
  color: rgba(33, 113, 181, 1);
}
.container .product .p_left .box .b_right .b_desc {
  font-size: 9px;
  font-family: "DengXian";
  font-weight: 400;
  color: rgba(91, 91, 91, 1);
}
.container .product .p_right {
  width: 49%;
  float: right;
}
.container .product .p_right .bac_txt {
  background: rgba(238, 238, 238, 1);
}
.container .product .p_right .bac_txt .b_text {
  font-size: 14px;
  font-family: "DengXian-Bold";
  font-weight: bold;
  color: rgba(35, 35, 35, 1);
  padding: 10px 0 10px 15px;
}
.container .product .p_right .bac_txt .b_desc {
  font-size: 9px;
  font-family: "DengXian";
  font-weight: 400;
  color: rgba(91, 91, 91, 1);
  padding: 5px 0 15px 10px;
}

.container .resolve {
  width: 100%;
  height: auto;
  background: rgba(255, 255, 255, 1);
  margin-top: 100px;
  margin-bottom: 30px;
}

.container .resolve .r_title {
  font-size: 24px;
  font-family: "MicrosoftYaHei";
  font-weight: 400;
  color: rgba(50, 50, 50, 1);
  text-align: center;
}
.container .resolve .r_list {
  width: 65%;
  height: auto;
  margin: 0 auto;
  margin-top: 50px;
}
.container .resolve .r_list ul {
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
}
.container .resolve .r_list ul .item {
  width: 26%;
  height: auto;
}

.container .resolve .r_list ul .item .r_title {
  font-size: 20px;
  font-family: "DengXian-Bold";
  font-weight: bold;
  color: rgba(53, 53, 53, 1);
}

.container .resolve .r_list ul .item .r_desc {
  font-size: 8px;
  font-family: "MicrosoftYaHei";
  font-weight: 400;
  color: rgba(47, 47, 47, 1);
  margin-top: 5px;
  padding: 15px;
}

.container .jieshao {
  width: 100%;
  height: 220px;
  background: rgba(33, 113, 181, 1);
  position: relative;
}

.container .jieshao .j_english {
  font-size: 20px;
  font-family: "CenturySchoolbook-Italic";
  font-weight: bold;
  font-style: italic;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  padding: 30px 0 15px 0;
}
.container .jieshao .j_en {
  font-size: 20px;
  font-family: "MicrosoftYaHei";
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  text-align: center;
}
.container .jieshao .j_box {
  width: 40%;
  height: 220px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 5px 4px 0px rgba(114, 114, 114, 0.13);
  position: absolute;
  left: 50%;
  top: 112px;
  transform: translateX(-50%);
  display: flex;
  flex-direction: row;
}

.container .jieshao .j_box .jb_left {
  width: 60%;
}
.container .jieshao .j_box .jb_left .t_txt {
  font-size: 21px;
  font-family: "MicrosoftYaHei";
  font-weight: 400;
  color: rgba(47, 47, 47, 1);
  text-align: right;
  padding: 15px 0;
}
.container .jieshao .j_box .jb_left .t_title {
  font-size: 14px;
  font-family: "MicrosoftYaHei";
  font-weight: 400;
  color: rgba(190, 131, 47, 1);
  padding: 5px 0 15px 60px;
}
.container .jieshao .j_box .jb_left .t_desc {
  width: 70%;
  font-size: 10px;
  font-family: "MicrosoftYaHei";
  font-weight: 400;
  color: rgba(47, 47, 47, 1);
  padding: 5px 0 15px 60px;
}
.container .jieshao .j_box .jb_right {
  width: 40%;
  text-align: center;
  padding-top: 25px;
}

.container .bai {
  width: 100%;
  height: 200px;
  background-color: #ffffff;
}

.container .footer {
  width: 100%;
  height: 250px;
  background: rgba(32, 32, 32, 1);
}

.container .footer .f_title {
  font-size: 22px;
  font-family: "MicrosoftYaHei";
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  padding: 30px 0;
}

.container .footer .f_box {
  display: flex;
  flex-direction: row;
}

.container .footer .f_box .fb_left {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-right: 2px solid rgba(255, 255, 255, 0.33);
}
.container .footer .f_box .fb_left .fb_box {
  margin-top: 15px;
}
.container .footer .f_box .fb_left .fb_box .fb_txt {
  font-size: 11px;
  font-family: "MicrosoftYaHei";
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 15px;
}
.container .footer .f_box .fb_right {
  width: 50%;
  border-left: 2px solid rgba(255, 255, 255, 0.33);
  text-align: center;
  padding: 5px 0;
}

.container .footer .fb_footer {
  width: 100%;
  background-color: #000000;
  text-align: center;
  font-size: 9px;
  font-family: "MicrosoftYaHei";
  font-weight: 400;
  color: rgba(234, 234, 234, 0.43);
  line-height: 50px;
  margin-top: 5px;
}
</style>
