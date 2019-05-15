<template>
  <div class="help" >
    <div class="d1">
      <span @click="fn1()">
        <!-- <router-link :to="'/mine?t='+(new Date().getTime())">取消</router-link><router-view></router-view> -->
        返回
      </span>帮助说明
    </div>
    <div class="con" v-for="(item,index) in help" :key="index">
         <div style="width:100%;height:50px;text-align:center;line-height:50px;font-weight:700;background-color:white;border:1px solid gray;color:red;">{{item.name}}</div>
         <div>{{item.content}}</div>
    </div>
    
  </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
  name: 'help',
//   props:["help"],
  data () {
    return {
       help:[]
    }
  },
  methods:{
    fn1(){
      this.$router.push({name:"mine"});
      // window.location.href='/mine';
     //   this.aa=false
    },
  },
  created(){
    var params = new URLSearchParams();

      this.$axios({
      method: "post",
      url: "http://localhost:3000/help",
      data:params
    }).then(res => {
        console.log(res);
        this.help=res.data
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* div.fenlei{
  background: #f6f6f6!important;
} */
.help {
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
/* .help input {
  width: 316px;
  display: block;
  height: 40px;
  margin: 3px auto;
  padding-left: 50px;
}
.help .t1 {
  width: 20px;
  height: 20px;
  position: fixed;
  top: 67px;
  left: 15px;
}
.help .t2 {
  width: 20px;
  height: 20px;
  position: fixed;
  top: 115px;
  left: 15px;
}
.help p {
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
  /* margin-top: -10px;
}
.wang {
  float: right;
  margin-top: -21px;
  color: black;
} */ 
</style>