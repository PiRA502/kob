/*
 * @Author: huihui pira502@163.com
 * @Date: 2022-12-25 22:50:55
 * @LastEditors: huihui pira502@163.com
 * @LastEditTime: 2023-07-23 09:00:58
 * @FilePath: \kob\web\src\assets\scipts\Wall.js
 * @Description: 
 * 
 * Copyright (c) 2022 by huihui pira502@163.com, All Rights Reserved. 
 */

import { AcGameObject } from "./AcGameObject";

export class Wall extends AcGameObject {
    constructor(r, c, gamemap){
        super();

        this.r = r; //障碍物的横坐标
        this.c = c; //障碍物的纵坐标
        this.gamemap = gamemap;
        this.color = "#B47226";
    }

    update(){
        this.render();
    }

    render(){
        const L = this.gamemap.L; //gamemap会变化，所以L也需要动态地取
        const ctx = this.gamemap.ctx;

        ctx.fillStyle = this.color;
        ctx.fillRect(this.c * L, this.r * L, L, L);
    }
}