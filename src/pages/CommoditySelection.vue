<!--
 * @Descripttion: 
 * @version: 
 * @Author: daping
 * @Date: 2022-03-02 19:54:19
 * @LastEditors: daping
 * @LastEditTime: 2022-03-02 20:13:45
-->
<template>
  <div class="commoditySelection">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'commoditySelection',
    data() {
      return {
        msg: 'CommoditySelection'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>