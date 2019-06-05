<template>
  <div class="dingdan" >
    <div class="d1">
      <span @click="fn1()">
        <!-- <router-link :to="'/mine?t='+(new Date().getTime())">取消</router-link><router-view></router-view> -->
        返回
      </span>我的订单({{dingdan.length}})
    </div>
    <div class="acon">
    <div class="acon1">
    <div class="con" v-for="(item,index) in dingdan" :key="index">
        <div>订单号：000000{{index+1}}<span style="float:right">待付款</span></div>
         <div>
            <img :src="item.pic" alt style="border-radius:10px">
          </div>
          <div style="margin-top:-85px;margin-left:120px;">{{item.description}}</div>
          <div style="margin-left:120px;margin-top:30px;">价格总计：{{item.price}}元</div>
          <button style="float:right;margin-top:55px;margin-right:10px;" @click="remove(index,item)">删除</button><br>
          <div>购买数量：1</div>
          <div>下单时间：{{item.time}}</div>
          <div>支付方式：支付宝支付</div>
    </div>

    </div></div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
  name: 'dingdan',
//   props:["dingdan"],
  data () {
    return {
       dingdan:[],
    }
  },
  methods:{
    fn1(){
      this.$router.push({name:"home"});
      // window.location.href='/mine';
     //   this.aa=false
    },
    remove(index,item){
      console.log(index);
      console.log(item._id)
      var params = new URLSearchParams();
      this.$axios({
      method: "post",
      url: "http://localhost:3000/removedingdan",
      data:{
          _id:item._id
        },
    }).then(res => {
        // console.log(res.data);
        // this.dingdan=res.data;
    this.reload()
        
    })
    }
  },
  inject:['reload'],//注入reload方法

  created(){
    var params = new URLSearchParams();

      this.$axios({
      method: "post",
      url: "http://localhost:3000/showdingdan",
      data:params
    }).then(res => {
        console.log(res.data);

        this.dingdan=res.data;
        if(res.data.length==0){
             Toast({
        message: "订单为空",
        position: "middle",
        duration: 3000,
        className: "toasts"
      });
        }

    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* div.fenlei{
  background: #f6f6f6!important;
} */
.dingdan {
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
.tab .mine {
  opacity: 0;
}
.d1 {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid gray;
  color: black;
  text-align: center;
  line-height: 50px;
  background: rgb(247, 119, 60);
  font-weight: 700;
  position: absolute;
  top: 0px;
}
.d1 span {
  position: absolute;
  top: 0px;
  left: 10px;
}
.con{
    width: 100%;
    height: 200px;
    border: 1px solid gray;
    background-color: #fff;

}
.con img{
    width: 100px;
    height: 100px;
    border: 1px solid rgb(211, 211, 248);
}
.acon{
  width: 100%;
  height: 1000px;
  position: absolute;
  top: 50px;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  
}
.acon1{
   height: 3000px;
    width: 100%;
    /* background: skyblue; */
    z-index: 99;
}
.di{
  position: absolute;
  bottom: 0px;

}
</style>