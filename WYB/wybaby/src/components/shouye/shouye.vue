<template>
  <div id="shouye">
    <!-- <div class="s1"><img src="../../../img/ss.png" alt="" />
   <input type="text" placeholder="请输入您要搜索的商品" />
    </div>-->
    <mt-search v-model="searchValue" cancel-text="搜索" placeholder="请输入搜索的名称..." ></mt-search>
    <div class="products" >
        <div class="pro" >
          <div class="tu23" v-for="(item,index) in products" :key="index" @click="tt(index,item)"> 
            <img :src="item.av">
            <div>{{item.description}}</div>
            <div>¥{{item.price}}</div>
          </div>
      </div>
    </div>
    <div class="fanhui" @click="fan()">
       返回
    </div>
  </div>
</template>

<script>
import { Search } from "mint-ui";
// Vue.component(Search.name, Search);
import { Toast } from "mint-ui";

export default {
  name: "shouye",
  data() {
    return {
      searchValue: "",
      products: []
    };
  },
  created() {
    // $(".mint-search").show()
    $("#shouye").css("display", "block");
    // window.location.reload();
    //     $(document).ready(function () {

    //      if(location.href.indexOf("#reloaded")==-1){
    //         location.href=location.href+"#reloaded";
    //         location.reload();
    //     }
    //  })
  },
  methods: {
  fan(){
   $(".pro").css("display","none");
   $(".home").show()
  },
  tt(index,item){
      console.log(index)
      console.log(item);
      this.$router.push(
        { name:'deep',
          query:{
             id:index,
             name:item
          }
        })
  }
  },
  watch: {
    searchValue: function(newvs, oldvs) {
      console.log("newvs", newvs);
      console.log("oldvs", oldvs);
      if (oldvs) {
        console.log(12345);
        const url = "http://localhost:3000/searchshopcarList";
        // var params = new URLSearchParams();
        this.$axios({
          method: "post",
          url: url,
          data: {
            oldvs: oldvs
          },
          headers: {
            "Content-Type": "application/json; charset=UTF-8"
          }
        }).then(res => {
          console.log("shopcarres:", res.data);
          if (res.data.length != 0) {
            $(".home").css("display", "none");
            $(".fenlei").css("display", "none");

            $(".mint-search")
              .css("height", "53px")
              .css("position", "fixed")
              .css("top", "8px")
              .css("width", "100%");
              $(".tab").css("position","fixed").css("background-color","white")
            this.products = res.data;
          }else{
            Toast({
            message: "抱歉！没有相关内容...",
            position: "middle",
            duration: 3000,
            className: "toasts"
          });
          }
        });
      }
    }
  }
};
</script>
<!-- Add "scoped" attribqute to limit CSS to this component only -->
<style scoped>
div#shouye {
  width: 100%;
  height: 233px;
  margin: 0px;
  padding: 0px;
}
#shouye .mint-search {
  padding: 0px !important;
  margin-top: -8px;
  width: 105%;
  margin-left: -8px;
}
.pro {
  width: 100%;
  /* height:500px; */
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top:50px;
  margin-bottom: 50px;
}
.pro .tu23 {
  width: 49.3%;
  height: 230px;
  border: 1px solid rgb(214, 214, 214);
}
.pro .tu23 img {
  width: 97%;
  height: 180px;
  padding: 3px;
}
.pro .tu23 div {
  font-size: 12px;
  text-align: center;
}
.fanhui{
  width: 40px;
  height: 40px;
  border-radius: 40px;
  border: 1px solid gray;
  text-align: center;
  line-height: 40px;
  font-weight: 700;
  position: fixed;
  top: 200px;
  z-index: 99;
  background: rgb(248, 246, 246);
  right: 0px;
}
</style>
