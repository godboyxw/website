<template>
  <div class="footer">
    <div class="left">
      <div class="logo">logo</div>
      <div class="phone">
        <i class="icon"></i>
        <font class="detail">联系电话：123123123</font>
      </div>
      <div class="address">
        <i class="icon"></i>
        <font class="
             detail">地址：武汉市东西湖区金银潭大道临空一号总部三栋六层</font>
      </div>
    </div>
    <div class="right">
      <div class="qrcode"></div>
      <div class="android"></div>
      <div class="ios"></div>
    </div>
    <div class="text">联系我们</div>
    <div class="line"></div>
    <div class="copyright">&copy;2009-2019皆能行 &nbsp;武汉皆能时空关联科技有限公司&nbsp;&nbsp; 鄂ICP备123123号-5 版权所有</div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer {
  width: 100%;
  height: 430px;
  position: relative;
  background: #202020;
}

.footer .left {
  float: left;
  width: 50%;
  border-top: 1px solid transparent;
}

.footer .left .logo {
  margin-left: 400px;
  margin-top: 78px;
  font-size: 38px;
  font-family: MicrosoftYaHei;
  font-weight: bold;
  color: #d6d6d6;
  line-height: 40px;
}

.footer .left .phone {
  margin: 40px 0 0 366px;
}
.footer .left .phone .icon {
  display: inline-block;
  width: 39px;
  height: 29px;
  vertical-align: middle;
  background-image: url("../assets/images/footer-phone-icon.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.footer .left .phone .detail {
  display: inline-block;
  margin-left: 20px;
  font-size: 18px;
  font-family: MicrosoftYaHei;
  font-weight: bold;
  color: #d6d6d6;
  line-height: 40px;
}
.footer .left .address {
  margin: 30px 0 0 366px;
  font-size: 0;
  /* display: flex; */
}
.footer .left .address .icon {
  display: inline-block;
  width: 39px;
  height: 34px;
  vertical-align: top;
  background-image: url("../assets/images/footer-address-icon.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.footer .left .address .detail {
  width: 280px;
  display: inline-block;
  margin-left: 20px;
  font-size: 18px;
  font-family: MicrosoftYaHei;
  font-weight: bold;
  color: #d6d6d6;
  line-height: 40px;
}
.footer .right {
  float: left;
  width: 50%;
  position: relative;
}
.footer .right .qrcode {
  width: 121px;
  height: 126px;
  position: absolute;
  top: 182px;
  left: 165px;
  background-image: url("../assets/images/footer-qrcode-icon.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.footer .right .android {
  width: 129px;
  height: 52px;
  position: absolute;
  top: 193px;
  left: 296px;
  background-image: url("../assets/images/footer-android-icon.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.footer .right .ios {
  width: 129px;
  height: 52px;
  position: absolute;
  top: 255px;
  left: 296px;
  background-image: url("../assets/images/footer-ios-icon.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.footer .line {
  width: 6px;
  height: 200px;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 140px;
  background: #696969;
}

.footer .text {
  height: 50px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 60px;
  font-size: 28px;
  font-family: MicrosoftYaHei;
  font-weight: bold;
  color: #d6d6d6;
  line-height: 40px;
}
.footer .copyright {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 16px;
  font-family: MicrosoftYaHei;
  font-weight: bold;
  color: #5e5d5d;
  line-height: 40px;
}
</style>
