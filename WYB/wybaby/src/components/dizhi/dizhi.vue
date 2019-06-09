<template>
  <div class="dizhi" >
    <div class="d1">
      <span @click="fn1()">
        <!-- <router-link :to="'/mine?t='+(new Date().getTime())">取消</router-link><router-view></router-view> -->
        返回
      </span>收货地址
    </div>
    <span style="margin-left:20px;">编辑地址</span>：<br>
    <textarea rows="6" cols="40" style="margin-left:70px;" class="t"></textarea>
    <button style="float:right;margin-right:120px;" @click="BCdizhi()">新建收货地址</button>
    <div class="text-con" style="margin-top:60px;">

    </div>
    
  </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
  name: 'dizhi',
//   props:["dizhi"],
  data () {
    return {
       dizhi:[]
    }
  },
  methods:{
    fn1(){
      this.$router.push({name:"mine"});
      // window.location.href='/mine';
     //   this.aa=false
    },
    BCdizhi(){
        // $(".t").val()="";
      var m=100;
      m++
        $(".text-con").append('<p style="margin-left:10px;background-color:white;height:110px">'+'用户:'+m+'<br>'+$(".t").val()+'<span style="float:right;color:gray">15601536982<br>删除<br>设置为默认地址</span>'+'</p>');
      
    }
  },
  created(){
    // var params = new URLSearchParams();

    //   this.$axios({
    //   method: "post",
    //   url: "http://localhost:3000/dizhi",
    //   data:params
    // }).then(res => {
    //     console.log(res);
    //     this.dizhi=res.data
    // })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* div.fenlei{
  background: #f6f6f6!important;
} */
.dizhi {
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