<!--
 * @Author: huihui pira502@163.com
 * @Date: 2022-12-20 20:44:38
 * @LastEditors: huihui pira502@163.com
 * @LastEditTime: 2022-12-24 23:46:49
 * @FilePath: \kob\web\src\App.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by huihui pira502@163.com, All Rights Reserved. 
-->
<template>
  <NavBar />  
  <router-view></router-view>
</template>

<script>
import NavBar from "./components/NavBar.vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
export default {
  components: {
    NavBar
  }
}
</script>

<style>
body{
  background-image: url("@/assets/images/background.JPG");
  background-size: cover;
}
</style>
