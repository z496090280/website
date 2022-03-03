<!--
 * @Descripttion: 
 * @version: 
 * @Author: daping
 * @Date: 2022-03-02 19:54:19
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-03 11:15:44
-->
<template>
  <div id="app">
    <HeadCommon />
    <router-view />
    <Foot/>
  </div>
</template>

<script>
import HeadCommon from './components/HeadCommon.vue'
import Foot from './components/Foot.vue'

  export default {
    name: 'App',
    components: {
      HeadCommon,
      Foot
    }
  }
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
}
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /* margin-top: 60px; */
  }
</style>