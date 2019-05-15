<template>
  <div class="fenlei">
   
     <div class="f1">
       <div class="f12" :class="idx==index?'hover':''" v-for="(item,idx) in fenlei.na" :key="idx" @click="fn(idx)" ref="bs"> {{item.name}}</div>
      
     </div>
     <div class="f2">
       <div class="f21" v-for="(item1,index) in nana2" :key='index' @click="fn1(index)">{{item1}}</div>
      

     
     </div>
   

  </div>
</template>

<script>


export default {
  name: 'fenlei',
  props:["fenlei"],
  data () {
    
    return {
      index:0,
      idx:0,
      nana2:[]

    }
  },
  methods:{
    fn(idx){
     this.index=idx
      console.log(idx);
     var nana=this.fenlei.na;
     for(var j=0;j<nana.length;j++){
      // console.log(nana[j].f)
     }
     this.nana2=nana[idx].f
     console.log("nana2:",this.nana2)
    }
  },
   fn1(ind){
          console.log("index:",ind)
   },
  created(){
     
    $("#shouye").css('display','block');
    const url ='http://localhost:3000/getdata';
    var params = new URLSearchParams();
     this.$axios({
        method: 'post',
        url:url,
        data:params
     }).then((res)=>{
             this.home = res.data.home;
             this.nana2 = res.data.fenlei.na[0].f;
    });
  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* div.fenlei{
  background: #f6f6f6!important;
} */
.tab .fenlei{
   width: 100%;
  height: 573px;
  background:#f6f6f6 ;
  position: absolute;
  top:-574px;
  border: 1px solid rgb(248, 248, 248);
  display: flex;
  justify-content: flex-start;

}
.fenlei .f1{
  width: 30%;
  height: 449px;
  border: 1px solid rgb(212, 210, 210);
  border-left: none;
  /* position: absolute;
  top: 0px; */
  /* background: red;
  text-align: center;
  line-height: 50px; */


}
.fenlei .f1 .f12{
  width: 100%;
  height: 55px;
  border-bottom: 1px solid rgb(212, 210, 210);
  background: rgb(210, 234, 245);
  text-align: center;
  line-height: 55px;
}
.f12.hover{
  border-bottom: 3px solid gray!important;
  background: #fff;
  font-weight: 700;
}
.f2{
  width: 69%;
  /* height: 500px; */
  /* border: 1px solid red; */
  overflow: scroll;
}
.f2 .f21{
  width: 100%;
  height: 50px;
  border-bottom: 1px solid rgb(212, 210, 210);
  text-align: center;
  line-height: 50px;
  margin-top: 5.5px;
  
  background: rgb(240, 248, 213);
 
}

</style>
