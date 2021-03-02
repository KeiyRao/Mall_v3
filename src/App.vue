<!--
 * @Author: 饶凯平
 * @Date: 2021-03-02 21:13:24
 * @LastEditors: 饶凯平
 * @LastEditTime: 2021-03-02 22:45:37
 * @Description: 
-->
<template>
  <div id="app">
    <router-view class="router-view" v-slot="{ Component }">
      <component :is="Component"
    /></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  setup() {
    return {};
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html,
body {
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
}
#app {
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
