<template>
  <div class="show" v-show="bb">
    <div class="d1">
      <span @click="fn1()">
        <img src="http://www.51babies.com/h5/image/nav-left.png" class="jt"> 返回
      </span>商品详情
    </div>
    <!-- 商品详情轮播图展示 -->
    <div class="lun1">
      <div class="swiper-container">
        <div class="swiper-wrapper sw">
          <div class="swiper-slide" v-for="(item,index) in images" :key="index">
            <img :src="item">
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        <!-- 如果需要导航按钮 -->
        <!-- <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>-->

        <!-- 如果需要滚动条 -->
        <!-- <div class="swiper-scrollbar"></div> -->
      </div>
    </div>
    <!-- 价格详情 -->
    <div class="jgxq">
      <div class="jgxq1">
        <div class="jg">{{mingzi}}</div>
        <div class="aixin">
          <img src="../../../img/kong.png" alt v-show="kong" @click="aixin()">
          <img
            v-show="!kong"
            src="../../../img/aixin.png"
            alt
            @click="aixin1()"
            style="width:30px;height:30px;margin-top:10px;margin-left:10px;"
          >
        </div>
        <div class="jjg">¥{{price}}</div>
        <div class="oldp">{{oldprice}}</div>
      </div>
    </div>
    <!-- 评论 -->
      <div class="pl1" style="font-weight:700;width:100%;height:50px;text-align:center;line-height:50px;background:white;border:1px solid gray;">评论区</div>

    <div class="pl" v-for="(item1,index) in Comments" :key="index" style="padding-left:15px;">
      <div class="pl2" style="color:red">用户ID{{index}}:</div>
      <div class="pl3">
        <!-- 加减 -->
        <!-- <div class="jian">
          <img src="../../../img/ind-sub.png" alt @click="sub()">
        </div>
        <input type="text" value="1" class="text">
        <div class="jia">
          <img src="../../../img/ind-add.png" alt @click="add()">
        </div> -->
           {{item1}}
      </div>
    </div>
    <div class="xiepl">
      <input type="text" class="pl-text" placeholder="写评论..." style="width:300px"><input type="button" value="发表评论" @click="submit()">
    </div>
    <!-- 商品介绍 -->
    <div class="sp">
      <div class="sp1" style="font-weight:700;margin-top:5px;" >商品介绍</div>
      <div class="sp2">
        <img :src="item" v-for="(item,index) in shopimages" :key="index">
      </div>
    </div>
    <!-- 底部固定 -->
    <div class="wc">
      <div class="wc1">
        <img src="../../../img/ind-cart.png" alt>
      </div>
      <div class="wc2" @mousedown="md()" @mouseleave="md1()">加入购物车</div>
      <div class="wc3" @click="buy(suo,mingzi)">立即购买</div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import { Toast } from "mint-ui";

export default {
  inject:['reload'],//注入reload方法

  name: "show",
  props: ["show"],
  data() {
    return {
      bb: true,
      suo: this.$route.query.id,
      mingzi: this.$route.query.name.description,
      images: this.$route.query.name.imgs,
      price:this.$route.query.name.price,
      oldprice:this.$route.query.name.oldprice,
      shopimages: this.$route.query.name.shopimgs,
      xiangqing: {},
      kong: true,
      
      Comments:[]
    };
  },

  methods: {
    submit(){
     
    var params = new URLSearchParams();
    this.$axios({
      method: "post",
      url: "http://localhost:3000/insertComments",
      data: {
        value:$(".pl-text").val(),
        description:this.mingzi

      }
    }).then(res => {
              console.log(res)
      this.reload()//直接调用

    });

    },
     

    fn1() {
      this.$router.push({ name: "home" });
      //   window.location.href='/home';
      this.bb = false;
    },
    aixin() {
      this.kong = false;
    },
    aixin1() {
      this.kong = true;
    },
    md() {
      $(".wc2")
        .css("background", "red")
        .css("color", "white");
        Toast({
          message: "已加入购物车！",
          position: "middle",
          duration: 2000,
          className: "toasts"
        });
      const url = "http://localhost:3000/insertshopcarList";
      // var params = new URLSearchParams();
      this.$axios({
        method: "post",
        url: url,
        data: {
          price:this.xiangqing.price,
          oldprice:this.xiangqing.oldprice,
          description:this.xiangqing.description,
          av:this.xiangqing.av,
          number:this.xiangqing.number
        },
         headers: {
                 'Content-Type': 'application/json; charset=UTF-8'  
            }
      }).then(res => {
          console.log("shopcarres:",res.data)
      });
    },
    md1() {
      $(".wc2")
        .css("background", "#f3efef")
        .css("color", "black");
    },
    
    buy(suo, mingzi) {
      this.$router.push({
        name: "gobuy",
        query: {
          id: suo,
          name: mingzi
        }
      });
      console.log("suo:", suo);
      console.log("mingzi:", mingzi);
    }
  },
  mounted() {
    //轮播图展示
    new Swiper(".lun1 .swiper-container", {
      autoplay: {
        delay: 1000
      }, //可选选项，自动滑
      loop: true,
      initialSlide: 0, //设定初始化时slide的索引
      direction: "horizontal", //滑动方向，可设置水平(horizontal)或垂直(vertical)
      speed: 400, //滑动速度，即slider自动滑动开始到结束的时间，也是触摸滑动时释放至贴合的时间。
      // stopOnLastSlide:true,
      pagination: {
        el: ".swiper-pagination"
      },
      observer: true,
      preloadImages: true,
      updateOnImagesReady: true,
      centeredSlides: true,
      spaceBetween: 0
      //  autoplayDisableOnInteraction: false// 循环一次
    });
    
    
    var comment;
    const url1 = "http://localhost:3000/showComments";
    var params = new URLSearchParams();
    this.$axios({
      method: "post",
      url: url1,
      data: params
      }).then(res =>{
        console.log("comments",res.data);
        for(var k=0;k<res.data.length;k++){
          if(this.mingzi==res.data[k].description){
            console.log(res.data[k])
            comment=res.data[k]
            console.log(comment.comments)
          }
        };
        this.Comments=comment.comments;

      })
      // this.reload()//直接调用

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* div.fenlei{
  background: #f6f6f6!important;
} */
.show {
  width: 100%;
  height: 100%;
  background: #f3efef;
  position: fixed;
  top: 0px;
  right: 0px;
  /* margin-right: 100px; */
  border: 1px solid #f6f6f6;
  overflow: scroll;
  z-index: 999929999;
  margin-bottom: 50px;
}
/* .tab .home{
  opacity: 0;
} */
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
div.swiper-container {
  width: 100%;
  height: 350px;
  /* border: 1px solid gray; */
}
.show .swiper-slide img {
  width: 100%;
  height: 350px;
}
.show .jgxq1 {
  /* border: 1px solid red; */
  display: flex;
  flex-wrap: wrap;
  height: 50px;
}
.show .jgxq {
  background: #fff;
  padding: 15px 15px;
  border: 1px solid rgb(184, 181, 181);
  border-bottom: none;
}

.show .sp {
  width: 100%;
  height: 1050px;
  border: 1px solid rgb(184, 181, 181);
  background: #fff;
  /* overflow: scroll; */
  margin-bottom: 50px;
}
.show .oldp {
  color: gray;
  text-decoration-line: line-through;
  font-size: 13px;
  width: 30%;
  line-height: 20px;
  margin-top: -30px;
}
.jgxq1 .jg {
  width: 80%;
}
.jgxq1 .aixin {
  width: 19%;
  height: 50px;
}
.jgxq1 .jjg {
  width: 30%;
  margin-top: -30px;
}
.jgxq1 .aixin img {
  width: 50px;
  height: 50px;
}

.sp .sp1 {
  text-align: center;
  border-bottom: 1px solid #e2e2e2;
  width: 100%;
  height: 50px;
  line-height: 50px;
}
.sp img {
  width: 95%;
  height: 300px;
}
.wc {
  border: 1px solid #e2e2e2;
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0px;
  background: #f3efef;
  display: flex;
  justify-content: space-between;
  line-height: 50px;
}
.sp {
  text-align: center;
}
.sp2 {
  margin-top: 10px;
}
.wc1 {
  border: 1px solid rgb(224, 221, 221);
  width: 20%;
  padding-top: 5px;
}
.wc1 img {
  width: 50px;
  height: 40px;
  margin-left: 12px;
}
.wc2 {
  width: 40%;
  text-align: center;
  line-height: 50px;
  border: 1px solid rgb(224, 221, 221);
}
.wc3 {
  width: 40%;
  text-align: center;
  line-height: 50px;
  border: 1px solid rgb(224, 221, 221);
  background: red;
  color: white;
}
.pl{
  width: 95%;
  height: 50px;
  border: 1px solid rgb(209, 207, 207);
}
</style>