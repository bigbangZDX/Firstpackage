<template>
  <div class="deng" v-show="aa">
    <div class="d1" style="background-color:white;font-weight:700">
      <span @click="fn1()">
        <!-- <router-link :to="'/mine?t='+(new Date().getTime())">取消</router-link><router-view></router-view> -->
        取消
      </span>用户登录
    </div>

    <input type="text" placeholder="请输入用户名或手机号" class="in1">
    <img src="../../../img/gr.png" alt class="t1">
    <img src="../../../img/ss.png" alt class="t2">
    <input type="password" name id placeholder="请输入密码" class="in2">
    <el-upload
      class="avatar-uploader"
      action="http://localhost:3000/login"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
    >
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>上传用户头像
    </el-upload>

    <p style="color:white" @click="login()">登录</p>
    <div class="ge_pic_icon_Infor">
      <img src class="img">
    </div>
    <!-- <div class="kuai">快速注册</div> -->
    <!-- <div class="wang">忘记密码？</div> -->
  </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
  name: "deng",
  props: ["deng"],
  data() {
    return {
      aa: true,
      imageUrl: ""
    };
  },
  methods: {
    fn1() {
      this.$router.push({ name: "mine" });
      // window.location.href='/mine';
      this.aa = false;
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      console.log(this.imageUrl)
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    login() {
      var in1 = $(".in1").val();
      var in2 = $(".in2").val();
      // console.log(in1);
      // console.log(in2);
//       document.cookie = "phone=" + in1 + ";"
//       //获取当前时间
// var date=new Date();
// //将date设置为过去的时间
// date.setTime(date.getTime()-10000);
// //将userId这个cookie删除
// document.cookie="phone=;expire="+date.toGMTString();
  localStorage.setItem("phone",in1)
  localStorage.setItem("imgUrl",this.imageUrl)
      console.log(localStorage.phone)
      console.log(localStorage.imgUrl)

      const url = "http://localhost:3000/login";
      // var params = new URLSearchParams();
      if(this.imageUrl!=""){
                     this.$axios({
        method: "post",
        url: url,
        data: {
          num: in1,
          pass: in2,
          imageUrl:this.imageUrl
        },
        headers: {
          "Content-Type": "application/json; charset=UTF-8"
        }
      }).then(res => {
        console.log(res);
        console.log(res.data.code);
        if (res.data.code == 0) {
          Toast({
            message: "登录成功！",
            position: "middle",
            duration: 2000,
            className: "toasts"
          });
          this.$router.push({ name: "mine", query: { user: in1 } });
        } else if (res.data.code == 1) {
          Toast({
            message: "用户名或密码错误",
            position: "middle",
            duration: 2000,
            className: "toasts"
          });
        }
      });
      }else {
         Toast({
            message: "请设置您的头像！",
            position: "middle",
            duration: 2000,
            className: "toasts"
          });
      }
     
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* div.fenlei{
  background: #f6f6f6!important;
} */
.deng {
  width: 100%;
  height: 100%;
  background: #f3f0f0;
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
}
.d1 span {
  position: absolute;
  top: 0px;
  left: 10px;
}
.deng input {
  width: 316px;
  display: block;
  height: 40px;
  margin: 3px auto;
  padding-left: 50px;
}
.deng .t1 {
  width: 20px;
  height: 20px;
  position: fixed;
  top: 67px;
  left: 15px;
}
.deng .t2 {
  width: 20px;
  height: 20px;
  position: fixed;
  top: 115px;
  left: 15px;
}
.deng p {
  width: 95%;
  height: 40px;
  background: #558de0;
  margin: 20px auto;
  text-align: center;
  line-height: 40px;
  border-radius: 10px;
  font-weight: 500;
}
.avatar-uploader .el-upload {
  border: 2px solid #271bce!important;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}

</style>