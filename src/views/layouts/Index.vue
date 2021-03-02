<!--
 * @Author: 饶凯平
 * @Date: 2021-03-02 22:16:02
 * @LastEditors: 饶凯平
 * @LastEditTime: 2021-03-02 22:43:21
 * @Description: 
-->
<template>
  <el-container style="border: 1px solid #eee">
    <side-nav></side-nav>
    <mains></mains>
  </el-container>
</template>

<script>
import sideNav from "./SideNav";
import mains from "./Mains";
export default {
  name: "layouts",
  components: { sideNav, mains },
};
</script>

<style></style>
