<!--
 * @Author: huihui pira502@163.com
 * @Date: 2022-12-20 20:44:38
 * @LastEditors: huihui pira502@163.com
 * @LastEditTime: 2022-12-20 21:48:43
 * @FilePath: \kob\web\src\App.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by huihui pira502@163.com, All Rights Reserved. 
-->
<template>
  <div>
    <div>Bot昵称：{{ bot_name }}</div>
    <div>Bot战力：{{ bot_rating }}</div>
  </div>
</template>

<script>
import { ref } from 'vue';
import $ from 'jquery';

export default {
  name: "App",
  setup: () => {
      let bot_name = ref("");
      let bot_rating = ref("");

      $.ajax({
        url: "http://127.0.0.1:3000/pk/getbotinfo/",
        type: "get",
        success: resp => {
          bot_name.value = resp.name;
          bot_rating.value = resp.rating;
        }
      })
      return{
        bot_name,
        bot_rating
      }
  }
}
</script>

<style>
body{
  background-image: url("@/assets/background.JPG");
  background-size: cover;
}
</style>
