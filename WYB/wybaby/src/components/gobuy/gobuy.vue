
<template>
  <div class="gobuy">
    <div class="buy1">请选择你的支付方式</div>
    <div class="buy4">
      <div class="buy41">
        <img :src="avv">
      </div>
      <div class="buy42" style="margin-top:-80px;margin-left:105px"> 
          {{description}}
      </div>
      <div style="margin-left:105px;margin-top:20px;"> ¥{{price}}</div>
    </div>
    <div class="buy2" @click="money()">
      <img src="../../../img/qq.png" alt>
      <img src="../../../img/zfb.png" alt>
      <img src="../../../img/wx.png" alt>
    </div>
    <div class="buy3" @click="goback()">
      <el-button type="danger" round>返回首页</el-button>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import { Toast } from "mint-ui";

export default {
  name: "gobuy",
  props: ["gobuy"],
  data() {
    return {
      xiangqing:{},
      avv:"",
      price:"",
      description:""

    };
  },
  methods: {
    goback() {
      this.$router.push({
        name: "home"
      });
      //   window.location.href='/home';
    },
    money() {
      Toast({
        message: "您还未绑定！",
        position: "middle",
        duration: 2000,
        className: "toasts"
      });
    }
  },
  mounted() {
    //   $(".tab").hide()
    var id = this.$route.query.id;
    var name = this.$route.query.name;
    console.log("id:", id);
    console.log("name:", name);
    const url = "http://localhost:3000/getdata";
    var params = new URLSearchParams();
    this.$axios({
      method: "post",
      url: url,
      data: params
    }).then(res => {
      if (name == "精品推荐") {
        this.home = res.data.home.supports[0];
        var array = this.home.miao;
        console.log(array[id]);
        this.xiangqing = array[id];
        this.avv=array[id].av;
        this.price=array[id].price;
        this.description=array[id].description
      } else if (name == "新品上架") {
        this.home = res.data.home.supports[1];
        var array = this.home.miao;
        console.log(array[id]);
        this.xiangqing = array[id];
        this.avv=array[id].av
        this.price=array[id].price;
        this.description=array[id].description

      } else if (name == "销量排行") {
        this.home = res.data.home.supports[2];
        var array = this.home.miao;
        console.log(array[id]);
        this.xiangqing = array[id];
        this.avv=array[id].av;
        this.price=array[id].price;
        this.description=array[id].description


      }
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.gobuy {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0px;
  right: 0px;
  /* margin-right: 100px; */
  border: 1px solid #f6f6f6;
  overflow: scroll;
  z-index: 999929999;
  margin-bottom: 50px;
}
.buy1 {
  width: 100%;
  height: 150px;
  background: #ec6240;
  color: white;
  text-align: center;
  line-height: 150px;
  font-size: 20px;
  font-weight: 700;
}
.buy2 img {
  width: 146px;
  height: 50px;
}
.buy2 {
  width: 59%;
  height: 200px;
  display: flex;
  flex-wrap: wrap;
  margin-left: 120px;
  margin-top: 20px;
  /* border:1px solid red; */
}
.buy3 {
  width: 20%;
  margin-left: 36%;
  margin-top: 90px;
}
.buy4 {
  width: 100%;
  height: 90px;
  border: 1px solid rgb(219, 217, 217);
}
.buy41 img{
  width: 90px;
  height: 90px;
}
</style>
