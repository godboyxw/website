<template>
  <div class="container">
    <!-- 背景图 -->
    <div class="back">
      <img src="./images/so_back.png"
           class="s_bac" />
      <div class="b_txt">
        <p class="bt_txt">社交联络解决方案</p>
        <p class="bt_txt1">实现体育场馆的智能化管理提高体育场馆的资源利用率</p>
      </div>
    </div>
    <div class="desc">
      <p class="d_txt">基于精准的室内定位技术，智能感知周围的人，打造一个新颖的近场场景化社交模式，包含商超、展馆、公共交通、旅游等多个领域。室内外定位+社交系统可以实现特定场景下的定位需求，又可以实现精准定位下陌生人社交，比微信附近的人更加精准。在相同场景下的用户多数拥有同一属性，社交破冰更加容易。</p>
    </div>
    <div class="so_list">
      <div class="box">
        <div class="b_left">
          <ul>
            <li class="item">
              <p class="i_title">现场互动</p>
              <p class="i_desc">用户打开蓝牙，进入社交圈，可基于室内定位系统发送聊天信息，与现场其他人进行实时交流。在同一场景下，更容易突破陌生人社交界限。</p>
            </li>
            <li class="item">
              <p class="i_title">场景关联互动</p>
              <p class="i_desc">可与同类型的其他场景的用户进行交流互动，例如同一个站点、同一条线路，不同商场的同一品牌店铺等场景，建立动态的聊天群组，用户可随进随退，基于平台进行沟通交流。</p>
            </li>
            <li class="item">
              <p class="i_title">互动营销</p>
              <p class="i_desc">通过移动应用平台开展如抢红包、送礼物、打招呼等系列营销活动等更多线上线下互动方式，提高场景化社交的互动乐趣。</p>
            </li>
          </ul>
        </div>
        <div class="b_right">
          <img src="./images/so_phone1.png"
               class="img1" />
          <img src="./images/so_phone2.png"
               class="img2" />
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <div class="footer">
      <div class="f_title">
        联系我们
      </div>
      <div class="f_box">
        <ul>
          <li class="item">
            <p class="i_txt1">友情链接</p>
            <p class="i_txt2">皆能时空关联科技有限公司</p>
          </li>
          <li class="item">
            <p class="i_txt1">联系方式</p>
            <p class="i_txt2">时间:周一至周五</p>
            <p class="i_txt2">9::00~12:00 14:00~18:00</p>
            <div class="i_box">
              <ul>
                <li class="i_item">
                  <img src="./images/icon.png" />
                  <span class="ii_txt">联系电话:123123123</span>
                </li>
                <li class="i_item">
                  <img src="./images/icon.png" />
                  <span class="ii_txt">邮箱:123123123@qq.com</span>
                </li>
                <li class="i_item">
                  <img src="./images/icon1.png" />
                  <span class="ii_txt">地址:武汉市东西湖区金银潭大道临空一号总部三栋六层</span>
                </li>
              </ul>
            </div>
          </li>
          <li class="item">
            <p class="i_txt1"
               style="margin-left: 10px;">留言信箱</p>
            <div class="i_top">
              <div class="i_left">
                <input type="text"
                       name="name" />
              </div>
              <div class="i_right">
                <input type="text"
                       name="namse" />
              </div>
            </div>
            <div class="i_middle">
              <div class="m_box">
                <input type="text"
                       name="name" />
              </div>
            </div>
            <div class="i_footer">
              <div class="f_left">
                发送邮箱
              </div>
              <div class="f_right">
                >
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 链接 -->
    <div class="hui">
      <ul>
        <li class="h_item">首页</li>
        <li class="h_item">产品中心</li>
        <li class="h_item">下载</li>
        <li class="h_item">动态</li>
      </ul>
      <div class="end">
        ©2009-2019皆能行 武汉皆能时空关联科技有限公司 鄂ICP备123123号-5 版权所有
      </div>
    </div>
  </div>
</template>

<script>
export default {

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

.container .back {
  width: 100%;
  height: 500px;
  position: relative;
}

.container .back .s_bac {
  width: 100%;
  height: 100%;
}

.container .back .b_txt {
  width: 220px;
  position: absolute;
  top: 330px;
  left: 250px;
}

.container .back .b_txt .bt_txt {
  font-size: 24px;
  font-family: "SourceHanSansCN-Medium";
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  padding: 10px;
}

.container .back .b_txt .bt_txt1 {
  font-size: 12px;
  font-family: "SourceHanSansCN-Normal";
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  padding: 10px;
}

.container .desc {
  padding: 30px 0;
}

.container .desc .d_txt {
  width: 600px;
  font-size: 16px;
  font-family: "MicrosoftYaHeiLight";
  font-weight: 300;
  color: rgba(51, 51, 51, 1);
  line-height: 22px;
  margin: 0 auto;
}

.container .so_list {
  width: 100%;
  height: 480px;
}

.container .so_list .box {
  width: 60%;
  height: 350px;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
}

.container .so_list .box .b_left {
  width: 50%;
  height: 350px;
}

.container .so_list .box .b_right {
  width: 50%;
  height: auto;
  position: relative;
}

.container .so_list .box .b_right .img1 {
  width: 190px;
  height: 340px;
  position: absolute;
  top: 40px;
  z-index: 999;
}

.container .so_list .box .b_right .img2 {
  width: 190px;
  height: 340px;
  position: absolute;
  top: 80px;
  left: 150px;
  z-index: 2;
}

.container .so_list .box .b_left ul {
  height: 350px;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.container .so_list .box .b_left .item {
  width: 80%;
  height: 110px;
}

.container .so_list .box .b_left .item .i_title {
  font-size: 14px;
  font-family: "SourceHanSansCN-Medium";
  font-weight: 700;
  color: rgba(51, 51, 51, 1);
  padding: 5px 0 15px 0;
}

.container .so_list .box .b_left .item .i_desc {
  font-size: 10px;
  font-family: "SourceHanSansCN-Normal";
  font-weight: 400;
  color: rgba(163, 150, 150, 1);
}

.container .footer {
  width: 100%;
  height: auto;
  background: rgba(50, 50, 50, 1);
  padding-bottom: 30px;
}

.container .footer .f_title {
  font-size: 20px;
  font-family: "MicrosoftYaHei";
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  padding: 30px 0;
  letter-spacing: 1px;
}

.container .footer .f_box {
  width: 60%;
  height: 300px;
  margin: 0 auto;
}

.container .footer .f_box ul {
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.container .footer .f_box .item {
  width: 30%;
  height: 300px;
}

.container .footer .f_box .item .i_txt1 {
  font-size: 16px;
  font-family: "MicrosoftYaHei";
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 30px;
  margin-bottom: 15px;
}

.container .footer .f_box .item .i_txt2 {
  font-size: 12px;
  font-family: "MicrosoftYaHei";
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 20px;
}

.container .footer .f_box .item .i_box {
  margin-top: 25px;
}

.container .footer .f_box .item .i_box ul {
  list-style: none;
  display: flex;
  flex-direction: column;
}

.container .footer .f_box .item .i_box .i_item {
  height: 60px;
  width: 200px;
  display: flex;
  align-items: center;
}

.container .footer .f_box .item .i_box .i_item img {
  width: 20px;
  height: 20px;
  vertical-align: middle;
}

.container .footer .f_box .item .i_box .i_item .ii_txt {
  font-size: 12px;
  font-family: "MicrosoftYaHei";
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  margin-left: 10px;
}

.container .footer .f_box .item .i_top {
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: space-between; */
}

.container .footer .f_box .item .i_top .i_left {
  width: 100px;
  height: 35px;
  background-color: #ffffff;
  margin-right: 30px;
}

.container .footer .f_box .item .i_top .i_left input {
  width: 100px;
  height: 35px;
  background-color: #ffffff;
}

.container .footer .f_box .item .i_top .i_right {
  width: 60px;
  height: 35px;
  background-color: #ffffff;
}

.container .footer .f_box .item .i_top .i_right input {
  width: 100px;
  height: 35px;
  background-color: #ffffff;
}

.container .footer .f_box .item .i_middle {
  padding: 10px;
}

.container .footer .f_box .item .i_middle .m_box {
  width: 280px;
  height: 120px;
  background-color: #ffffff;
}

.container .footer .f_box .item .i_middle .m_box input {
  width: 280px;
  height: 120px;
  background-color: #ffffff;
}

.container .footer .f_box .item .i_footer {
  width: 100px;
  height: 40px;
  padding-left: 10px;
  padding-top: 10px;
  display: flex;
  flex-direction: row;
}

.container .footer .f_box .item .i_footer .f_left {
  width: 60px;
  height: 40px;
  display: flex;
  background: #88abda;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-family: "MicrosoftYaHei";
  font-weight: 400;
  color: rgba(254, 254, 254, 1);
  line-height: 30px;
}

.container .footer .f_box .item .i_footer .f_right {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
}

.container .hui {
  width: 100%;
  height: 130px;
  background: #000000;
}

.container .hui ul {
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.container .hui .h_item {
  width: 6%;
  font-size: 12px;
  font-family: "MicrosoftYaHei";
  font-weight: 400;
  line-height: 80px;
  text-align: center;
  color: rgba(234, 234, 234, 1);
}

.container .hui .end {
  font-size: 10px;
  font-family: "MicrosoftYaHei";
  font-weight: 400;
  color: rgba(234, 234, 234, 1);
  opacity: 0.43;
  text-align: center;
}
</style>
