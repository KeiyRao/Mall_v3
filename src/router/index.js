/*
 * @Author: 饶凯平
 * @Date: 2021-03-02 21:27:46
 * @LastEditors: 饶凯平
 * @LastEditTime: 2021-03-04 21:39:46
 * @Description:
 */
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { name: "/", redirect: "/home" },
    {
      path: "/",
      name: "layouts",
      component: () =>
        import(/* webpackChunkName: "home" */ "@/layouts/Index.vue"),
      children: [
        {
          path: "/home",
          name: "home",
          component: () =>
            import(/* webpackChunkName: "home" */ "@/views/home/Index.vue"),
        },
      ],
    },
  ],
});
export default router;
