<!--
 * @Author: lee
 * @Date: 2022-03-02 16:21:15
 * @LastEditTime: 2022-03-03 16:17:43
-->
<template>
  <div class="head">
    <div class="content t_a_left">
      <div class="logo inline-block"></div>
      <el-menu
        :default-active="$route.path"
        router
        class="el-menu-demo inline-block"
        mode="horizontal"
        @select="handleSelect"
      >
        <template v-for="item in menu">
          <el-menu-item
            v-if="!item.children"
            :index="item.path"
            :key="item.index"
            >{{ item.name }}</el-menu-item
          >
          <el-submenu v-else :index="item.index" :key="item.index">
            <template slot="title">{{ item.name }}</template>
            <el-menu-item
              v-for="(subItem, subIndex) in item.children"
              :key="subIndex"
              :index="item.path + '/' + subItem.path"
              >{{ subItem.name }}</el-menu-item
            >
          </el-submenu>
        </template>
      </el-menu>
      <div class="btn-group inline-block">
        <span class='btn_head'>怡通天下App</span>
        <span class='btn_head zg'>下载整购网App</span>
      </div>
    </div>
  </div>
</template>

<script>
import menuList from "@/router/menu";

export default {
  name: "HeadCommon",
  data() {
    return {
      menu: [...menuList],
      activeIndex: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
      // this.$router.push(key)
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn-group{
  vertical-align: top;
}
.btn_head{
  font-size: 14px;
  font-family: PingFang SC-Medium, PingFang SC;
  font-weight: 500;
  color: #E8343C;
  padding: 4px 12px;
  border-radius: 28px;
  border: 1px solid #E8343C;
}
.zg{
  color: #fff;
  background: linear-gradient(180deg, #F9666C 0%, #E8343C 100%);
  margin-left: 10px;
}
.head {
  width: 1920px;
  height: 64px;
  line-height: 64px;
  background: #ffffff;
  box-shadow: 0px 4px 4px 1px rgba(0, 0, 0, 0.02);
  border-radius: 0px 0px 0px 0px;
  opacity: 1;
}
.logo{
  background: url('../assets/img/home/index_logo.png')center no-repeat;
  background-size: 100%;
  height: 43px;
  vertical-align: top;
  margin-top: 10px;
  width: 110px;
}
.el-menu-demo{
  margin-left: 122px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  /* display: inline-block; */
  margin: 0 10px;
}
a {
  /* color: #42b983; */
  display: inline-block;
}
.el-menu.el-menu--horizontal{
  border-bottom: none;
}
.el-menu--horizontal>.el-menu-item.is-active {
  border-bottom: 4px solid #e8343c !important;
}
.el-submenu.is-active{
  border-bottom: 4px solid #e8343c !important;
}
</style>
