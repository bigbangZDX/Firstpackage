<template>
  <div class="loginPage">
    <div class="loginBox flexCenter">
      <h2>高端母婴产品销售App后台管理系统</h2>
      <div class="flexBox w350">
        <el-input placeholder="请输入用户名" v-model="admin" :clearable="true" style="width:80%;margin-bottom:10px;margin-left:50px;margin-top:35px;"></el-input>
        <el-input placeholder="请输入密码" v-model="pass" :clearable="true" style="width:80%;margin-bottom:20px;margin-left:50px"></el-input>
        <el-button @click="login()" type="primary" style="margin-left:220px">登陆</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from "mint-ui";

export default {
  name: "login",
//   props:["login"],
  data() {
    return {
      admin: "",
      pass: ""
    };
  },
  methods: {
    //登陆方法
    login() {
      // this.$http.login({
      //     admin_name:this.admin,
      //     admin_pwd:this.pass
      // }).then(res=>{
      //     console.log(res);
      //     let data = res.data;
      //     localStorage.admin_name=data.admin_name;
      //     localStorage.admin_ID=data.admin_ID;
      //     localStorage.admin_jsID=data.admin_jsID;
      //     localStorage.admin_jsName=data.admin_jsName;
      //     localStorage.admin_tokenID=data.admin_tokenID;
      //     this.$router.push({
      //         path:"/"
      //         // name:"head"
      //     })
      // })
      var params = new URLSearchParams();

      this.$axios({
        method: "post",
        url: "http://localhost:3000/adminlogin",
        data: {
            admin_name:this.admin,
            admin_pwd:this.pass
        }
      }).then(res => {
        console.log(res);
        if(res.data.code==0){
              Toast({
          message: "登录成功！",
          position: "middle",
          duration: 2000,
          className: "toasts"
        });
                      this.$router.push({ name: "home"
         
         
    
                      })
       
        }else if(res.data.code==1){
                Toast({
          message: "用户名或密码错误",
          position: "middle",
          duration: 2000,
          className: "toasts"
        });
        }
      });
    }
  }
};
</script>
<style>
.loginPage {
  height: 100%;
  width: 100%;
  position: relative;
}
.loginBox {
  position: absolute;
  width: 500px;
  height: 350px;
  box-shadow: 2px 2px 5px black;
  top: 550px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  background: floralwhite;
}
.loginBox h2 {
  box-shadow: 0px 2px 2px black;
  background: #409eff;
  height: 80px;
  color: white;
  width: 100%;
  line-height: 80px;
  text-indent: 30px;
  margin-top:0px;
}
</style>