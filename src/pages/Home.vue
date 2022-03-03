<!--
 * @Descripttion: 
 * @version: 
 * @Author: daping
 * @Date: 2022-03-02 19:54:19
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-03 17:02:16
-->
<template>
  <div class="home">
    <el-carousel  class="carousel">
      <el-carousel-item v-for="(item, index) in bannerList" :key="index">
        <img class="indexBannerImg" :src="item.url">
      </el-carousel-item>
    </el-carousel>

    <div class="category">
      <div class='title_box'>
        <span class='big_title color1A1A1A'>线上订货量已超过1,000,000,000</span>
        <span class='small_title color999'>超市小店都在这进货，家庭囤货采买之首选</span>
      </div>
    </div>

    <div class="index_3">
      <div class='title_box'>
        <span class='big_title colorfff big_title_white'>品牌直供  整购平台</span>
        <span class='small_title colorfff'>集结大牌商品，满足您各项生活所需！</span>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from '@/assets/img/home/index_1_banner_01.png'
  export default {
    name: 'Home',
    data() {
      return {
        msg: '首页',
        bannerList: [
          {url: img1},
          {url: img1},
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.indexBannerImg{
  width: 100%;
  height: 100%;
}
.category{
  background: url('../assets/img/home/index_2_category.png')center no-repeat;
  background-size: 100%;
  height: 850px;
}
.index_3{
  background: url('../assets/img/home/index_3_bg.png')center no-repeat;
  background-size: 100%;
  height: 937px;
}
</style>