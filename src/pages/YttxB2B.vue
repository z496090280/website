<!--
 * @Descripttion: 
 * @version: 
 * @Author: daping
 * @Date: 2022-03-02 19:54:19
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-03 14:22:43
-->
<template>
  <div class="yttx-b2b">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'YttxB2B',
    data() {
      return {
        msg: 'YttxB2B'
      }
    },
    created(){
      console.log(this.$router)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>