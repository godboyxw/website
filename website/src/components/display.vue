<template>
  <div class="container">
    <!-- 背景图 -->
    <div class="back">
      <img src="./images/s_back.png"
           class="s_bac" />
      <div class="b_txt">
        <p class="bt_txt">会展博览解决方案</p>
        <p class="bt_txt1">推进展馆信息化、智能化建设提升展馆管理水平和展会服务</p>
      </div>
    </div>
    <div class="desc">
      <p class="d_txt">皆能时空基于“互联网+会展”的新会展经济模式，旨在推进展馆信息化、智能化建设，提升展馆的管理水平；同时，提升展馆服务品质，深度挖掘大数据时代下未开发的潜在商业价值，提升展馆核心竞争力。</p>
    </div>
    <!-- 传统展馆现状 -->
    <div class="advance">
      <div class="a_txt">传统展馆现状</div>
      <ul>
        <li class="item">
          <img src="./images/h_list1.png" />
          <p class="i_title">信息获取不高效</p>
          <p class="i_desc">参展观众想要了解展品信息时，还需要凑近展品查看展品介绍或者询问展品解说人员进行讲解。</p>
        </li>
        <li class="item">
          <img src="./images/h_list2.png" />
          <p class="i_title">室内方向感知差</p>
          <p class="i_desc">开展期间参观者在展馆复杂的空间内，依靠宣传手册或展商标识寻找展位和展馆公共设施,整体参展体验感差。</p>
        </li>
        <li class="item">
          <img src="./images/h_list3.png" />
          <p class="i_title">停车、寻车不便捷</p>
          <p class="i_desc">停车场缺少空余车位查询和车辆导航机制，停车场空间环境相似度高，参展观众停车后不能快速找到爱车。</p>
        </li>
      </ul>
    </div>
    <!-- 核心服务 -->
    <div class="core">
      <img src="./images/h_back2.png" />
    </div>
    <!-- 信息化平台架构 -->
    <div class="information">
      <div class="i_txt">信息化平台架构图</div>
      <img src="./images/h_m.png" />
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
  margin: 0px;
  padding: 0px;
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

.container .advance {
  width: 100%;
  height: auto;
  padding-bottom: 30px;
}

.container .advance .a_txt {
  font-size: 24px;
  font-family: "SourceHanSansCN-Bold";
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  text-align: center;
  padding: 30px 0;
}

.container .advance ul {
  width: 60%;
  margin: 0 auto;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.container .advance .item {
  width: 30%;
  height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0;
}

.container .advance .item img {
  width: 150px;
  height: 150px;
}

.container .advance .item .i_title {
  font-size: 18px;
  font-family: "SourceHanSansCN-Medium";
  font-weight: 700;
  color: #333333;
}

.container .advance .item .i_desc {
  font-size: 12px;
  font-family: "SourceHanSansCN-Medium";
  font-weight: 400;
  color: #999999;
  padding: 0 30px;
}

.container .core {
  width: 100%;
  height: 600px;
}

.container .core img {
  width: 100%;
  height: 100%;
}

.container .information {
  width: 100%;
  height: auto;
  padding-bottom: 30px;
}

.container .information .i_txt {
  font-size: 24px;
  font-family: "SourceHanSansCN-Bold";
  font-weight: bold;
  color: rgba(0, 0, 0, 1);
  padding: 30px 0;
  text-align: center;
}

.container .information img {
  height: 100%;
  display: block;
  margin: 0 auto;
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
