<template>
  <div class="updatePass" >
    <div class="d1">
      <span @click="fn1()">
        <!-- <router-link :to="'/mine?t='+(new Date().getTime())">取消</router-link><router-view></router-view> -->
        返回
      </span>修改密码
    </div>
    <div class="z-con">
        <span>手机号：</span><input type="text" class="jiu" placeholder="请输入手机号"><br><br>
        <span>旧密码：</span><input type="text" class="jiu" placeholder="请输入旧密码"><br><br>
        <span>新密码：</span><input type="password" class="xin" placeholder="请输入新密码"><br><br>
        <span style="padding-left:45px;">确认密码：</span><input type="password" class="que" placeholder="请确认新密码">
    </div>
    <input type="button" value="修改密码" style="margin-left:150px;margin-top:20px;" @click="save()">
  </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
  name: 'updatePass',
//   props:["updatePass"],
  data () {
    return {
    //    updatePass:[]
    // username:""
    phh:""
    }
  },
  methods:{
    fn1(){
      this.$router.push({name:"mine"});
      // window.location.href='/mine';
     //   this.aa=false
    },
    save(){
      if($(".jiu").val().length==6&&$(".xin").val().length==6&&$(".que").val().length==6){
   var params = new URLSearchParams();
      this.$axios({
      method: "post",
      url: "http://localhost:3000/updatePass",
      data:{
          phh:this.phh,
         oldpass:$(".jiu").val(),
         newpass:$(".xin").val(),
         uppass:$(".que").val()
      }
    }).then(res => {
        console.log(res);
        // this.updatePass=res.data
         Toast({
          message: "修改成功！",
          position: "middle",
          duration: 2000,
          className: "toasts"
        });
    })
      }else{
        Toast({
            message: "字符长度均为六位！",
            position: "middle",
            duration: 2000,
            className: "toasts"
          });
      }
     
    }
  },
  created(){
    // var username = this.$route.query.username;
    // this.username=username;
    // console.log(username)
    console.log(document.cookie)
    var mes=document.cookie;
         var phh=mes.split("=")[1];
         this.phh=phh
         console.log(phh)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* div.fenlei{
  background: #f6f6f6!important;
} */
.updatePass {
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
/* .tab .mine {
  opacity: 0;
} */
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
.z-con{
    width: 100%;
    height: 200px;
    border-radius: 11px;
    padding-top: 40px;
    background: #b1bdf1;
}
.z-con span{
    padding-left: 60px;
}
.z-con input{
    width: 200px;
}
</style>