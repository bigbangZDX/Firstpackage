<template>
  <div class="youhui">
    <div class="d1">
      <span @click="fn1()">
        <img src="http://www.51babies.com/h5/image/nav-left.png" class="jt"> 返回
      </span>优惠活动
    </div>
    <div class="hb">
      <img src="http://www.51babies.com/h5/image/pic_active@2x.png" alt>
      <div class="hb1">
        <div>四月优惠活动</div>
        <div style="color:red;font-size:15px">满¥5,00.0打9.5折</div>
        <div style="color:gray;font-size:13px;">部分品牌可用</div>
        <div style="color:gray;font-size:13px;">2018-11-8 至 2019-4-1</div>
      </div>
    </div>
    <div style="text-align:center;margin-top:20px;">全部加载完毕</div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
  name: "youhui",
  props: ["youhui"],
  data() {
    return {};
  },
  methods: {
    fn1() {
      this.$router.push({ name: "home" });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* div.fenlei{
  background: #f6f6f6!important;
} */
.youhui {
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
  height: 160px;
  border: 1px solid gray;
  background: white;
  margin-top: 65px;
}
.hb img {
  width: 160px;
  height: 160px;
}
.hb1{
    width: 40%;
    height:150px;
    /* border: 1px solid gray; */
    margin-top: -160px;
    margin-left: 170px;
    
}
</style>