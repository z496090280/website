/*
 * @Descripttion:
 * @version:
 * @Author: daping
 * @Date: 2022-03-02 19:54:19
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-03 11:12:42
 */
import Vue from 'vue'
import Router from 'vue-router'
import menuList from '@/router/menu'


Vue.use(Router)

export default new Router({
  routes: [
    ...menuList
  ]
})
