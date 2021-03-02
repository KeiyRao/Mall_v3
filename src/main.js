/*
 * @Author: 饶凯平
 * @Date: 2021-03-02 21:13:24
 * @LastEditors: 饶凯平
 * @LastEditTime: 2021-03-02 21:38:35
 * @Description:
 */
import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.mount("#app");
