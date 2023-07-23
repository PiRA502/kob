<!--
 * @Author: huihui pira502@163.com
 * @Date: 2022-12-25 15:04:11
 * @LastEditors: huihui pira502@163.com
 * @LastEditTime: 2022-12-25 16:45:38
 * @FilePath: \kob\web\src\components\GameMap.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by huihui pira502@163.com, All Rights Reserved. 
-->
<template>
    <div ref="parent" class="gamemap">
        <canvas ref="canvas" tabindex="0"></canvas>
    </div>
<!--
    tabindex属性表示读入键盘操作
-->
</template>

<script>
import { GameMap } from '@/assets/scipts/GameMap';
import { ref, onMounted } from 'vue'

export default {
    setup() {
        let parent = ref(null);
        let canvas = ref(null);
        onMounted(() => {
            new GameMap(canvas.value.getContext('2d'), parent.value)
        });
        
        return {
            parent,
            canvas
        }
    }
}
</script>

<style scoped>
div.gamemap {
    width: 100%;
    height: 100%;
    display: flex; 
    justify-content: center;
    align-items: center;
}

</style>