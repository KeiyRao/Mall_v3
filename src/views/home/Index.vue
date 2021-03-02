<!--
 * @Author: 饶凯平
 * @Date: 2021-03-02 23:04:04
 * @LastEditors: 饶凯平
 * @LastEditTime: 2021-03-02 23:04:54
 * @Description: 
-->
<template>
  <el-table :data="tableData">
    <el-table-column prop="date" label="日期" width="140"> </el-table-column>
    <el-table-column prop="name" label="姓名" width="120"> </el-table-column>
    <el-table-column prop="address" label="地址"> </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "home",
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄",
    };
    return {
      tableData: Array(20).fill(item),
    };
  },
};
</script>

<style></style>
