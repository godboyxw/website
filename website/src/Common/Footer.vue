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
        <font class="detail">地址：武汉市东西湖区金银潭大道临空一号总部三栋六层</font>
      </div>
    </div>
    <div class="right"></div>
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
  margin-left: 370px;
  margin-top: 80px;
  font-size: 18px;
  font-family: MicrosoftYaHei;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  line-height: 40px;
}

.footer .left .phone {
  width: 300px;
  margin: 40px 0 0 360px;
  font-size: 18px;
  font-family: MicrosoftYaHei;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  line-height: 40px;
}

.footer .left .address {
  width: 350px;
  margin: 30px 0 0 360px;
  font-size: 18px;
  font-family: MicrosoftYaHei;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  line-height: 40px;
}

.footer .right {
  float: left;
  width: 50%;
}

.footer .line {
  width: 4px;
  height: 200px;
  position: absolute;
  left: 50%;
  top: 140px;
  background: rgba(255, 255, 255, 1);
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
  color: rgba(255, 255, 255, 1);
  line-height: 40px;
}
.footer .copyright {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 14px;
  font-family: MicrosoftYaHei;
  font-weight: bold;
  color: #767676;
  line-height: 40px;
}
</style>
