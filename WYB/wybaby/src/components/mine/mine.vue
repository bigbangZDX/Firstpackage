<template>
  <div class="mine">
    <div class="w1">个人中心</div>
    <div class="w2"><div class="w21" title="上传图片"><img :src="imgurl" alt="" ></div><p>{{ph}}  欢迎您！</p><p @click="zhuce" >
      <!-- <router-link to="/deng">注册用户</router-link><router-view></router-view> -->
      登录用户
      </p></div>
    <div class="w3"><img src="../../../img/zyap.png"><p>我的订单</p><span>查看全部订单></span></div>
    <div class="w4">
      <div class="w41" @click="gobuy()"><img src="../../../img/yw.png" alt=""><p>待付款</p></div>
      <div class="w41"><img src="../../../img/xc.png" alt=""><p>待发货</p></div>
      <div class="w41"><img src="../../../img/qc.png" alt=""><p>待收货</p></div>
      <div class="w41"><img src="../../../img/xx.png" alt=""><p>待评价</p></div>



    </div>
    <div class="w5">
      <div class="w51" @click="shou()"><img src="../../../img/xq.png" ><span class="s1">我的收藏</span> <span class="s2">></span></div>
      <div class="w51" @click="address()"><img src="../../../img/dz.png" ><span class="s1">收货地址</span> <span class="s2">></span> </div>
      <div class="w51"><img src="../../../img/jf.png" ><span class="s1">我的积分</span> <span class="s2">></span> </div>
      
      <div class="w51"><img src="../../../img/hb.png" ><span class="s1">我的红包</span> <span class="s2">></span> </div>

      <!-- <div class="w51"><img src="../../../img/sj.png" ><span class="s1">我的推荐</span> <span class="s2">></span> </div> -->

      <!-- <div class="w51"><img src="../../../img/hbdh.png" ><span class="s1">我的资金</span> <span class="s2">></span> </div> -->
      <div class="w51" @click="help()"> <img src="../../../img/wd.png" ><span class="s1">使用帮助</span> <span class="s2">></span></div>

      <div class="w51" @click="xiugai()"> <img src="../../../img/zyap.png" ><span class="s1">修改密码</span><span class="s2">></span></div>
      <p @click="back()">退出登录</p>
   

    </div>
    



  </div>
</template>

<script>
export default {
  name: 'mine',
  props:["mine"],
  data () {
    return {
      user:"",
      ph:"",
      imgurl:''
     
    }
  },
  methods:{
    zhuce(){
      console.log("注册！"),
      this.$router.push({name:"deng"})
    },
    back(){
                      this.$router.push({ name: "deng",})

    },
    help(){
                      this.$router.push({ name: "help",})
    },
    xiugai(){
                      this.$router.push({ name: "updatePass",query:{username:this.user}})
    },
    gobuy(){
                      this.$router.push({ name: "gobuy",})

    },
    address(){
                      this.$router.push({ name: "address",})

    },
    shou(){
                      this.$router.push({ name: "aixin",})

    }
  },
  mounted(){
    var user = this.$route.query.user;
         this.user=user
        //  console.log(document.cookie)
        //  var mes=document.cookie;
        //  var ph=mes.split("=")[1];
        //  this.ph=ph
        //  console.log(ph)
        var ph=localStorage.getItem("phone")
        this.ph=ph
        console.log(ph)
        var imgurl=localStorage.getItem("imgUrl")
        console.log(imgurl)
        this.imgurl=imgurl
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* div.mine{
  position: relative;
  top: 0px;
  overflow: scroll; 

 } */
/* div.tab{
  position: fixed;
  bottom: 0px;
 
} */

div.mine{
  width: 100%;
  height: 573px;
  background: white;
  position: absolute;
  top:-574px;
  left: -2px;
  z-index: 99;
  overflow-x: hidden;
  /* border: 1px solid green; */
  /* overflow: scroll; */
}
.w1{
  width: 100%;
  height: 50px;
  border: 1px solid rgb(228, 222, 222);
  position:fixed;
  top: 0px;
  background: white;
  text-align: center;
  line-height: 50px;
  z-index: 4;
  border-top: none;
  font-weight: 700;
  font-size: 18px;
}
.mine .w2{
  width: 100%;
  height: 100px;
  background: #225aaf;
  position: absolute;
  top: 0px;
  color: white;
  text-align: center;
}
.mine .w3{
  width: 100%;
  height: 50px;
  border: 1px  solid rgb(238, 236, 236);
  position: absolute;
  top: 100px;
}
.w2 .w21{
  width: 55px;
  height: 55px;
  border-radius: 55px;
  /* border: 1px solid red; */
  border: none;
  position:  absolute;
  top: 20px;
  left: 20px;
 
  
}
.w2 .w21 img{
   width: 55px;
  height: 55px;
  border-radius: 55px;
}
.w2 p{
  text-align: left;
  margin-left: 90px;
}
.w3 img{
  width: 25px;
  height: 25px;
  margin-left: 15px;
  padding-top: 13px;
}
.w3 p{
  margin-top: -25px;
  margin-left: 55px;
  font-size: 12px;
}
.w3 span{
  float: right;
  margin-top: -30px;
  margin-right: 10px;
  font-size: 13px;
  color: gray;
}
.mine div.w4{
  width: 100%;
  height: 70px;
  /* border: 1px solid red; */
  position: absolute;
  top: 152px;
  display: flex;
  justify-content: space-between;
  position: relative;
  /* background: red; */

}
.mine div.w4 div{
  width: 25%;
  height: 70px;
  border:1px solid rgb(238, 236, 236);
  float: left;
  border-left: none;
  border-right: none;
}
.w41 img{
  width: 25px;
  height: 25px;
 padding-left: 30px;
 padding-top: 14px;
}
.w41 p{
  font-size: 13px;
  color: gray;
  padding-left: 25px;
  margin-top: -2px;
}
.w5{
  width: 100%;
  height: 480px;
  /* border: 1px solid red; */
  position: absolute;
  background: #f6f6f6;
  top: 224px;
}
.w51{
  width: 100%;
  border-bottom: 1px solid rgb(238, 236, 236);
  height: 50px;
  background: white;
}
.w51 img{
  width: 20px;
  height: 20px;
  padding-top: 14px;
  padding-left: 15px;
}
.w51 .s1{
  padding-left: 50px;
  font-size: 13px;
  color: gray;
  line-height: -15px;
  display: block;
  margin-top: -22px;
 
}
.w51 .s2{
  padding-left: 50px;
  font-size: 13px;
  color: gray;
  line-height: -15px;
  float: right;
  display: block;
  margin-top: -16px;
  margin-right: 12px;
 
}
.w5 p{
  width: 96%;
  height: 40px;
  background: #1a51a3;
  border-radius: 8px;
  margin: 10px auto;
  color: white;
  line-height: 40px;
  text-align: center;
}
</style>
