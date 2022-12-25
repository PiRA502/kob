<!--
 * @Author: huihui pira502@163.com
 * @Date: 2022-12-25 14:44:56
 * @LastEditors: huihui pira502@163.com
 * @LastEditTime: 2022-12-26 00:05:02
 * @FilePath: \kob\web\src\components\PlayGround.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by huihui pira502@163.com, All Rights Reserved. 
-->
<template>
    <div class = "playgound">
        <GameMap />
    </div>
</template>

<script>
import GameMap from './GameMap.vue';
export default {
    components: {
        GameMap,
    }
}
</script>

<style scoped>
div.playgound {
    width: 60vw; 
    height: 70vh;
    margin: 40px auto;

}
</style>

