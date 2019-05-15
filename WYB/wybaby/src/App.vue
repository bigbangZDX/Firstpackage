<template>
  <div id="app">
    <shouye :home="home"></shouye>
    <div class="tab">
             <router-link to="/home"><img src="../img/sy.png" alt=""></router-link>
             <router-link to="/fenlei"><img src="../img/zh.png" alt=""></router-link>
             <router-link to="/shopcar"><img src="../img/gwc.png" alt=""></router-link>
             <router-link to="/mine"><img src="../img/gr.png" alt=""></router-link>
             <!-- <router-link to="/mine/deng"></router-link> -->

             

             <router-view  :home="home" :fenlei="fenlei" v-if="isRouterAlive"></router-view>

    </div>
  </div>
</template>

<script>
import shouye from '@/components/shouye/shouye'
// import swiper from 'swiper'
import axios from 'axios'

export default {
  name: 'App',
  components:{
    shouye
  },
  provide(){
     return{
       reload:this.reload
     };
  },
  data(){
    return{
       msg:"这是文本",
       home: {},
       fenlei:{},
       isRouterAlive:true
     
    }
  },
  methods:{
     reload(){
       this.isRouterAlive=false;
       this.$nextTick(function(){
         this.isRouterAlive=true
       })
     }
  },
  created(){
    // axios.post("http://localhost:3000/getdata",{msg:this.msg}).then(res=>{
    //   console.log("r:",res)
    //   this.home = res.data.home;
    //   this.fenlei = res.data.fenlei;

    //   // this.goods=res.data.goods;
    //   // this.ratings=res.data.ratings;
    //   console.log("home:",res.data)
    // },err=>{

    // });
    const url ='http://localhost:3000/getdata';
    var params = new URLSearchParams();
       params.append('msg','123');       //你要传给后台的参数值 key/value
      console.log("params:",params);
      for(var value of params.values()) {
       console.log(value);   //遍历所有的值
      }
     this.$axios({
        method: 'post',
        url:url,
        data:params
     }).then((res)=>{
             console.log("r:",res)
             this.home = res.data.home;
             this.fenlei = res.data.fenlei;

      // this.goods=res.data.goods;
      // this.ratings=res.data.ratings;
      console.log("home:",res.data)
    });
   }
}
</script>

<style scoped>
 #app {
 /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;*/
} 
#app div.tab{
  border: 1px solid rgb(204, 201, 201);
  position: fixed;
  z-index: 9999999;
  bottom: 0px;
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: space-around;
  left: 0px;
  
}
.tab a{
  text-decoration: none;
 line-height: 45px;
}
.tab .home{
  width: 100%;
  height: 573px;
  background: white;
  position: absolute;
  top:-574px;
  border: 1px solid rgb(226, 233, 226);

}
.tab a img{
  border: 1px solid white;
  width: 35px;
  height: 35px;
  margin: 5px;
}
body{
  padding: 0px;
  margin: 0px!important;
  background: #f6f6f6;
}

</style>
