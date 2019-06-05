<template>
  <div id="app">
    <login></login>
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>

<script>
import login from '@/components/login/login'

export default {
  name: 'App',
  components:{
    login
  },
  provide(){
     return{
       reload:this.reload
     };
  },
  data(){
    return{
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
}
</script>

<style>
  #app{
    height:100%;
  }
</style>
