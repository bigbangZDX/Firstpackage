<template>
  <div class="deng" v-show="aa">
    <div class="d1">
      <span @click="fn1()">
        <!-- <router-link :to="'/mine?t='+(new Date().getTime())">取消</router-link><router-view></router-view> -->
        取消
      </span>用户登录
    </div>

    <input type="text" placeholder="请输入用户名或手机号" class="in1">
    <img src="../../../img/gr.png" alt class="t1">
    <img src="../../../img/ss.png" alt class="t2">
    <input type="password" name id placeholder="请输入密码" class="in2">
    <p style="color:white" @click="login()">登录</p>
    <div class="kuai">快速注册</div>
    <div class="wang">忘记密码？</div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
  name: 'deng',
  props:["deng"],
  data () {
    return {
      aa:true
    }
  },
  methods:{

    fn1(){
      this.$router.push({name:"mine"});
      // window.location.href='/mine';
      this.aa=false
    },
    login(){
        var in1=$(".in1").val()
        var in2=$(".in2").val()
        console.log(in1)
        console.log(in2)
        document.cookie='phone='+in1+';password='+in2+';'
const url = "http://localhost:3000/login";
      // var params = new URLSearchParams();
      this.$axios({
        method: "post",
        url: url,
        data: {
         num:in1,
         pass:in2
        },
        headers: {
          "Content-Type": "application/json; charset=UTF-8"
        }
      }).then(res => {
        console.log(res)
        console.log(res.data.code)
        if(res.data.code==0){
              Toast({
          message: "登录成功！",
          position: "middle",
          duration: 2000,
          className: "toasts"
        });
                      this.$router.push({ name: "mine",query: { user: in1}
         
         
    
                      })
       
        }else if(res.data.code==1){
                Toast({
          message: "用户名或密码错误",
          position: "middle",
          duration: 2000,
          className: "toasts"
        });
        }
      })

    }
    
     
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* div.fenlei{
  background: #f6f6f6!important;
} */
.deng {
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
  background: #404245;
  margin: 20px auto;
  text-align: center;
  line-height: 40px;
  border-radius: 10px;
}
.kuai {
  color: black;
  /* font-size: 13px; */
  /* float: left; */
  margin-top: -10px;
}
.wang {
  float: right;
  margin-top: -21px;
  color: black;
}
</style>