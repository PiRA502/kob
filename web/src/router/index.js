/*
 * @Author: huihui pira502@163.com
 * @Date: 2022-12-20 20:46:15
 * @LastEditors: huihui pira502@163.com
 * @LastEditTime: 2022-12-24 21:00:53
 * @FilePath: \kob\web\src\router\index.js
 * @Description: 
 * 
 * Copyright (c) 2022 by huihui pira502@163.com, All Rights Reserved. 
 */
import { createRouter, createWebHistory } from 'vue-router'
import NotFound from "../views/error/NotFound"
import PkIndexView from "../views/pk/PkIndexView"
import RanklistIndexView from "../views/ranklist/RanklistIndexView"
import RecordIndexView from "../views/record/RecordIndexView"
import UserBotIndexView from "../views/user/bot/UserBotIndexView"

const routes = [
  {
    path:"/",
    name:"home",
    redirect:"/pk/"
  },
  {
    path:"/pk/",
    name:"pk_index",
    component: PkIndexView,
  },
  {
    path:"/record/",
    name:"record_index",
    component: RecordIndexView,
  },
  {
    path:"/ranklist/",
    name:"ranklist_index",
    component: RanklistIndexView,
  },
  {
    path:"/user/bot/",
    name:"user_bot_index",
    component: UserBotIndexView,
  },
  {
    path:"/404/",
    name:"404",
    component: NotFound,
  },
  {
    path:"/:catchAll(.*)",
    redirect:"/404/"
  }


]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
