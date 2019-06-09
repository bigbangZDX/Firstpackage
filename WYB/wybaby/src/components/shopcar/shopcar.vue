<template>
  <div class="shopcar">
    <div class="g1">购物车（{{shopcarList.length}}）</div>
    <div class="k">
      <img src="../../../img/gwc.png" alt>
      <p>您的购物车是空的</p>
      <div class="sui">随便逛逛去吧</div>
    </div>
    <div style=" margin-top: 53px;" class="kkx">
      <div class="kk" v-for="(item,index) in shopcarList" :key="index">
        <div style="margin-top:30px;margin-left:2px;">
          <input type="checkbox" class="check" @click="dell(item,index)">
        </div>
        <div>
          <div>
            <img :src="item.av" alt style="border-radius:10px">
          </div>
          <div style="margin-top:-85px;margin-left:100px;">{{item.description}}</div>
          <div style="margin-left:100px;color:red;margin-top:30px;">¥{{item.price}}</div>
          <!-- 数量 -->
          <div class="sl">
            <div class="sl1">数量</div>
            <div class="sl2">
              <div class="jian">
                <img src="../../../img/ind-sub.png" alt @click="sub(item,index)">
              </div>
              <input type="text" value="1" class="text" :id="'text'+index">
              <div class="jia">
                <img src="../../../img/ind-add.png" alt @click="add(item,index)">
              </div>
            </div>
          </div>
          <!-- 数量 -->
        </div>
      </div>
    </div>
    <div class="g2">
      <input type="checkbox" class="ggg" @click="checkAll()">全选
      <div class="p1">
        总价：¥
        <span style="font-weight:600;color:red">{{checktotle}}</span>
      </div>
      <div class="p3" @click="del()">删除</div>
      <div class="p2" @click="maidan()">结算</div>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
  name: "shopcar",
  props: ["shopcar"],
  data() {
    return {
      shopcarList: [],
      r: "",
      rr: 0,
      toto: 0
    };
  },
  inject: ["reload"], //注入reload方法
  created() {
    $("#shouye").css("display", "none");
    const url = "http://localhost:3000/getshopcarList";
    // var params = new URLSearchParams();
    this.$axios({
      method: "post",
      url: url,
      data: {
        // price:.this.xiangqing.price,
        // oldprice:.this.xiangqing.oldprice,
        // description:.this.xiangqing.description,
        // av:.this.xiangqing.av
      },
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
      }
    }).then(res => {
      if (res.data.length != 0) {
        console.log("getshopcarList:", res.data);
        this.shopcarList = res.data;
        $(".k").hide();
      } else if (res.data.length == 0) {
        $(".k").show();
      }
    });
  },
  computed: {
    checktotle: function() {
      this.toto = 0;
      for (var m = 0; m < this.shopcarList.length; m++) {
        this.toto =
          this.toto + this.shopcarList[m].price * this.shopcarList[m].number;
        console.log(this.toto);
      }
      return this.toto;
    }
  },
  methods: {
    sub(item, index) {
      let ele = document.getElementById("text" + index);
      // console.log("ele:",ele)
      // var a = $(".text").val();
      var a = ele.value;
      // console.log("a:",a)
      a--;
      if (a <= 0) {
        a = 1;
        Toast({
          message: "亲，再减就没了！",
          position: "middle",
          duration: 2000,
          className: "toasts"
        });
      } else {
        //  $(".text").val(a);
        ele.value = a; //传入index参数来判断是点击哪行的数量，改变commonList对应的数量减一，这里 //最小值为1所以当为1的时候就跳出判断语句
        if (this.shopcarList[index].number == 1) {
          return;
        } else {
          this.shopcarList[index].number = this.shopcarList[index].number - 1;
        }
      }
    },
    add(item, index) {
      // var a = $(".text").val();
      let ele = document.getElementById("text" + index);
      // console.log("ele:",ele)
      // var a = $(".text").val();
      var a = ele.value;
      a++;
      //  $(".text").val(a);
      ele.value = a; //传入index参数来判断是点击哪行的数量，改变commonList对应的数量加一

      this.shopcarList[index].number = this.shopcarList[index].number + 1; //
    },
    dell(item, index) {
      // console.log($(this))
      console.log(index);
      console.log(item._id);
      this.r = item._id;
      this.rr = index;
      // this.totle=item.price
      // var toto=this.totle.substring(1)
      // console.log(toto)
      // this.toto=toto;
      // var d=this.parentNode
      // console.log(d)
    },
    //删除
    del() {
      $(".k").hide();

      var count = 0;
      var checkarr = document.getElementsByClassName("check");
      console.log(checkarr);
      for (var i = 0; i < checkarr.length; i++) {
        if (checkarr[i].checked == true) {
          count++;
        }
      }
      const url = "http://localhost:3000/delshopcarList";
      // var params = new URLSearchParams();
      this.$axios({
        method: "post",
        url: url,
        data: {
          _id: this.r
        },
        headers: {
          "Content-Type": "application/json; charset=UTF-8"
        }
      }).then(res => {
        console.log("shopcarres:", res);
      });
      // window.reload()
      // this.reload()//直接调用
      if (count == 0) {
        Toast({
          message: "请选中要删除的商品！",
          position: "middle",
          duration: 2000,
          className: "toasts"
        });
      }
      this.reload(); //直接调用
    },
    checkAll() {
      var ggg = $(".ggg");
      var checkarr = document.getElementsByClassName("check");
      if (ggg[0].checked) {
        for (var j = 0; j < checkarr.length; j++) {
          checkarr[j].checked = true;
          console.log(111);
        }
      } else {
        for (var k = 0; k < checkarr.length; k++) {
          checkarr[k].checked = false;
        }
      }
    },
    maidan() {
      this.$router.push({ name: "gobuy" });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to .this component only -->
<style scoped>
.tab .shopcar {
  width: 100%;
  /* height: 573px; */
  /* background: #f6f6f6; */
  position: absolute;
  top: -622px;
  /* border: 1px solid green; */
  overflow-y: hidden;
}
.shopcar .g1 {
  width: 100%;
  height: 50px;
  border: 1px solid gray;
  position: fixed;
  top: 1px;
  left: -1px;
  background: rgb(247, 119, 60);
  text-align: center;
  line-height: 50px;
  border-top: none;
  font-weight: 700;
  font-size: 18px;
}
.shopcar .g2 {
  width: 100%;
  height: 50px;
  border: 1px solid gray;
  position: fixed;
  /* top: 570px;
  */
  bottom: 45px;
  background: white;
  text-align: left;
  line-height: 50px;
  padding-left: 10px;
  display: flex;
  justify-content: space-between;
}
.shopcar .p1 {
  display: inline;
  margin-left: 20px;
  /* border: 1px solid red; */
  width: 36%;
}
.shopcar .p2 {
  width: 26%;
  height: 100%;
  float: right;
  margin-right: 12px;
  margin-top: 0.5px;
  background: red;
  text-align: center;
  line-height: 50px;
  color: white;
}
.shopcar .p3 {
  background: red;
  width: 15%;
  height: 49px;
  color: white;
  text-align: center;
  line-height: 50px;
  margin-top: 1px;
}
.k {
  width: 150px;
  height: 150px;
  /* border: 1px solid red; */
  /* position: absolute;
  top: 100px; */
  margin: 100px auto;
}
.k img {
  width: 60px;
  height: 60px;
  text-align: center;
  margin-left: 45px;
}
.k p {
  width: 100%;
  text-align: center;
  color: gray;
  font-size: 14px;
}
.k .sui {
  background: #404245;
  width: 100%;
  height: 40px;
  color: white;
  text-align: center;
  line-height: 40px;
  font-size: 14px;
}
.kk {
  width: 100%;
  height: 90px;
  border-bottom: 1px solid gray;
  display: flex;
  justify-content: flex-start;
}
.kk img {
  width: 83px;
  height: 83px;
}
.kkx {
  height: 522px;
  overflow: scroll;
}

.sl input {
  width: 20px;
  height: 20px;
  margin-left: 15px;
  margin-top: -1px;
  border: none;
  this-align: center;
  font-size: 18px;
}
.sl div {
  margin-left: 15px;
}
.sl2 img {
  width: 15px;
  height: 15px;
}
.sl2 {
  display: flex;
  margin-top: 15px;
}
.sl1 {
  margin-top: 15px;
}
.shopcar .sl {
  width: 160px;
  height: 45px;
  /* border: 1px solid rgb(184, 181, 181); */
  margin-top: -35px;
  /* background: #fff; */
  display: flex;
  margin-left: 185px;
}
</style>
