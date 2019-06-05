<template>
  <div class="home" >
    <div class="lun1">
    <div class="swiper-container">
      <div class="swiper-wrapper sw">
          <div class="swiper-slide" v-for="(item,index) in home.picc" :key="index"><img :src="item" /></div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
      <!-- 如果需要导航按钮 -->
      <!-- <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div> -->
      
      <!-- 如果需要滚动条 -->
      <!-- <div class="swiper-scrollbar"></div> -->
    </div>
    </div>
    <div class="si">
      <div class="si1"  @click="youhui()"><img src="../../../img/sq.png" alt=""><p>优惠</p></div>
      <div class="si1" @click="dingdan()"><img src="../../../img/zyap.png" alt=""><p>订单</p></div>
      <div class="si1" @click="hb()"><img src="../../../img/q.png" alt=""><p>红包</p></div>
      <div class="si1" @click="hehe()"><img src="../../../img/sc.png" alt=""><p>收藏</p></div>
    </div>
    <div class="tu">
      <div class="tu1">
        <img src="../../../img/lb.png" alt="">
        <div class="swiper-container">
          <div class="swiper-wrapper">
              <div class="swiper-slide"  v-for="(item1,index) in home.wy" :key="index">{{item1}}</div>
          </div>
        </div>
      </div>
      <div class="tu2">
         <div class="xun" v-for="(item2,index) in home.supports" :key="index">
         <div class="tu21">{{item2.name}}</div>
         <div class="tu22" >
            <div  class="tu23" @click="showmes(index,item2)"   v-for="(item3,index) in item2.miao" :key="index"> <img :src="item3.av" style="box-shandow:5px 5px black">
            <div>{{item3.description}}</div>
            <div>¥{{item3.price}}</div>
           
            </div>
            </div>
         </div>

      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  name: 'home',
  props:["home"],
  data () {
    return {
    }
  },
  methods:{

    showmes(index,item2){
      this.$router.push(
        { name:'show',
          query:{
             id:index,
             name:item2.name
          }
        })
     console.log("index:",index)
     console.log("item2:",item2.name)

    },
    youhui(){
      this.$router.push({
        name:'youhui'
      })
    },
    hehe(){
       this.$router.push(
        { name:'aixin'})
    },
    dingdan(){
                      this.$router.push({ name: "dingdan",})

    },
    hb(){
                      this.$router.push({ name: "money",})

    }
  },
  mounted(){
    new Swiper ('.lun1 .swiper-container', {
      autoplay : {
        delay:1000
      }, //可选选项，自动滑
      loop: true,
      initialSlide: 0, //设定初始化时slide的索引
      direction: 'horizontal', //滑动方向，可设置水平(horizontal)或垂直(vertical)
      speed: 400,//滑动速度，即slider自动滑动开始到结束的时间，也是触摸滑动时释放至贴合的时间。
      // stopOnLastSlide:true,
      pagination: {
      el: '.swiper-pagination',
      },
      observer: true,
      preloadImages: true,
      updateOnImagesReady: true,
      centeredSlides: true,
      spaceBetween: 0
    //  autoplayDisableOnInteraction: false// 循环一次
      }),
      new Swiper ('.tu .tu1 .swiper-container', {
      autoplay :{delay:1000},//可选选项，自动滑
      loop: true,//循环
      initialSlide: 0, //设定初始化时slide的索引
      direction: 'vertical', //滑动方向，可设置水平(horizontal)或垂直(vertical)
      speed: 1000,//滑动速度，即slider自动滑动开始到结束的时间，也是触摸滑动时释放至贴合的时间。
      stopOnLastSlide:true,
      observer: true,
      preloadImages: true,
      updateOnImagesReady: true,
      centeredSlides: true,
      spaceBetween: 0
    //  autoplayDisableOnInteraction: true// 循环一
      })
      
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.home{
 width: 100%;
overflow-x: hidden;
overflow-y: scroll;

};
div.swiper-container{
  position: fixed;
  top: 800px;
  background: pink;
  width: 100%;
  height: 200px;
  z-index: 14444;
}
.sw{
  border: 1px solid rgb(238, 241, 238);
  width: 100%;
  height: 160px;
}

.si{
  width: 100%;
  height:75px;
  border: 1px solid rgb(199, 194, 194);
  display: flex;
  justify-content: space-around;

}
.si .si1 img{
    width: 25px;
    height: 25px;
    display: block;
    margin:0 auto;
    margin-top: 7px;
}
.si .si1{
      
       width: 40px;
       border-radius: 40px;
       background: rgb(248, 244, 244);
       margin-top: 6px;
       height: 40px;
    text-align:center;
  
   
}
.si1 p{
    font-size: 13px;
}
.tu{
  width: 100%;
  /* height: 1700px; */
  border: 1px solid rgb(248, 242, 242);
  position: absolute;
  background: #f6f6f6;

}
.tu .tu1{
  width: 100%;
  height: 40px;
  border: 1px solid rgb(238, 234, 234);
  background: white;
  margin-top: 15px;
}
.tu1 img{
  width: 30px;
  height: 30px;
  padding-top: 5px;
}
.tu .tu1 .swiper-container{
  /* display: inline-block; */
  border-left: 1px solid gray;
  padding-left: 10px;
  margin-top: -29px;
  margin-left: 38px;
  height: 25px;
}
.tu2{
  width: 100%;
  height: 1600px;
  border: 1px solid rgb(190, 189, 189);
  background: white;
  margin-top: 15px;
}
.sw img{
  width: 100%;
  height: 100%;
}
.tu21{
  width: 100%;
  height: 40px;
  border: 1px solid rgb(238, 234, 234);
  line-height: 40px;
  text-align: center;
}
.tu22{
  width: 100%;
  /* height:500px; */
  display: flex;
  justify-content:space-between;
  flex-wrap: wrap;
}
.tu23{
  width: 49.3%;
  height: 230px;
  border: 1px solid rgb(214, 214, 214);
}
.tu23 img{
      width: 97%;
      height: 180px;
      padding: 3px;
}
.tu23 div{
  font-size: 12px;
  text-align: center;
}
</style>
