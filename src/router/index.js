import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Index from "../views/Index";
import Menu from "../views/sys/Menu.vue";
import Role from "../views/sys/Role.vue";
import User from "../views/sys/User.vue";
import Dict from "../views/sys/Dict.vue";
import axios from "axios";
import store from "../store/modules/menu";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    children: [
      {
        path: "/index",
        name: "Index",
        component: Index,
      },
      {
        path: "/userCenter",
        name: "userCenter",
        component: () => import("@/views/sys/UserCenter.vue"),
      },
      {
        path: "/sys/users",
        name: "SysUser",
        component: User,
      },
      {
        path: "/sys/roles",
        name: "SysRole",
        component: Role,
      },
      {
        path: "/sys/menus",
        name: "SysMenu",
        component: Menu,
      },
      {
        path: "/sys/dict",
        name: "SysDict",
        component: Dict,
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  axios
    .get("/sys/menu/nav", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      console.log(res.data.data.nav);

      // 取得MenuList
      store.commit("setMenuList", res.data.data.nav);
      // 取得用戶權限
      store.commit("setPermList", res.data.authoritys);

      // 異步操作完成後再調用next()，進行路由跳轉
      next();
    })
    .catch((error) => {
      console.error(error);
      // 如果發生錯誤，您可以根據情況進行處理，例如重定向到錯誤頁面或者執行其他操作
    });
});

export default router;
