<template>
  <div class="address" >
    <div class="d1">
      <span @click="fn1()">
        <!-- <router-link :to="'/mine?t='+(new Date().getTime())">取消</router-link><router-view></router-view> -->
        返回
      </span>收货地址
    </div>
    编辑地址：<br>
    <textarea rows="6" cols="40" style="margin-left:70px;" class="t"></textarea>
    <button style="float:right" @click="bc()">保存</button>
    <div class="text-con" style="margin-top:60px;">

    </div>
    
  </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
  name: 'address',
//   props:["address"],
  data () {
    return {
       address:[]
    }
  },
  methods:{
    fn1(){
      this.$router.push({name:"mine"});
      // window.location.href='/mine';
     //   this.aa=false
    },
    bc(){
        // $(".t").val()="";
        $(".text-con").append('<p style="border:1px solid red;margin-left:10px">'+'地址：'+'<br>'+$(".t").val()+'</p>');
       
    }
  },
  created(){
    // var params = new URLSearchParams();

    //   this.$axios({
    //   method: "post",
    //   url: "http://localhost:3000/address",
    //   data:params
    // }).then(res => {
    //     console.log(res);
    //     this.address=res.data
    // })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* div.fenlei{
  background: #f6f6f6!important;
} */
.address {
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
  background: white;
  font-weight: 700;
}
.d1 span {
  position: absolute;
  top: 0px;
  left: 10px;
}

</style>