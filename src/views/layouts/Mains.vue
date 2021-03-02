<!--
 * @Author: 饶凯平
 * @Date: 2021-03-02 22:23:55
 * @LastEditors: 饶凯平
 * @LastEditTime: 2021-03-02 23:11:17
 * @Description: 
-->
<template>
  <el-container class="mainWrap">
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <span>王小虎</span>
    </el-header>
    <el-main>
      <router-view class="router-view" v-slot="{ Component }">
        <component :is="Component" /></router-view
    ></el-main>
  </el-container>
</template>

<script>
export default {
  name: "mains",
};
</script>

<style>
.mainWrap {
  margin-left: 200px;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
</style>
