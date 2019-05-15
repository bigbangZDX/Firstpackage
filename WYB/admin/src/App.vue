<template>
  <div id="app">
    <login></login>
    <router-view></router-view>
  </div>
</template>

<script>
import login from '@/components/login/login'

export default {
  name: 'App',
  components:{
    login
  },
}
</script>

<style>
  #app{
    height:100%;
  }
</style>
