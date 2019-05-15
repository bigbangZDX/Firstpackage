<template>
  <div class="aixin" >
    <div class="d1">
      <span @click="fn1()">
        <!-- <router-link :to="'/mine?t='+(new Date().getTime())">取消</router-link><router-view></router-view> -->
        返回
      </span>我的收藏
    </div>
    <div style="height:800px">
    <div class="con" v-for="(item,index) in aixin" :key="index">
         <div>
            <img :src="item.pic" alt style="border-radius:10px">
          </div>
          <div style="margin-top:-85px;margin-left:120px;">{{item.name}}</div>
          <div style="margin-left:120px;color:red;margin-top:30px;">¥{{item.price}}</div>
    </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
  name: 'aixin',
//   props:["aixin"],
  data () {
    return {
       aixin:[]
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
      url: "http://localhost:3000/showshoucang",
      data:params
    }).then(res => {
        console.log(res.data);
        this.aixin=res.data
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* div.fenlei{
  background: #f6f6f6!important;
} */
.aixin {
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
.con{
    width: 100%;
    height: 100px;
    border: 1px solid rgb(121, 207, 241);
}
.con img{
    width: 100px;
    height: 100px;
    border: 1px solid red;
}
</style>