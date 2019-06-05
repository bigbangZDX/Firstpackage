<template>
  <div class="money">
    <div class="d1" style="font-weight:700">
      <span @click="fn1()">
        <img src="http://www.51babies.com/h5/image/nav-left.png" class="jt"> 返回
      </span>红包
    </div>
    <div class="lll" @click="hb()">
    <div class="hb">
      <img src="../../../img/timg.jpg" alt>
     <div class="hb1">10元</div>
    </div>
     <div class="hb">
      <img src="../../../img/timg.jpg" alt>
     <div class="hb1">50元</div>
    </div></div>
    <div style="text-align:center;margin-top:20px;">全部加载完毕</div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
  name: "money",
  props: ["money"],
  data() {
    return {};
  },
  methods: {
    fn1() {
      this.$router.push({ name: "home" });
    },
    hb(){
        Toast({
        message: "红包已过期！",
        position: "middle",
        duration: 1000,
        className: "toasts"
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* div.fenlei{
  background: #f6f6f6!important;
} */
.money {
  width: 100%;
  height: 100%;
  background: #f3efef;
  position: fixed;
  top: 0px;
  right: 0px;
  /* margin-right: 100px; */
  border: 1px solid #f6f6f6;

  z-index: 999929999;
}
.d1 {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid gray;
  color: black;
  text-align: center;
  line-height: 50px;
  position: fixed;
  top: 0px;
  z-index: 1000;
  background: #f3efef;
}
.d1 span {
  position: absolute;
  top: 0px;
  left: 10px;
}
.jt {
  width: 10px;
  height: 12px;
}
.hb {
  width: 100%;
  height: 100px;
  border-bottom: 1px solid gray;
  background: white;
  /* margin-top: 65px; */
  display: flex;
  justify-content:flex-start;
}
.lll{
  margin-top: 65px;

}
.hb img {
  width:135px;
  height: 100px;
  border-radius: 10px;
}
.hb1{
    width: 100px;
    height: 100px;
    /* border: 1px solid red; */
    text-align: center;
    line-height: 170px;

}
</style>