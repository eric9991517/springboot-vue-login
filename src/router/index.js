import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Index from "../views/Index";
import Menu from "../views/sys/Menu.vue";
import Role from "../views/sys/Role.vue";
import User from "../views/sys/User.vue";

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
    ],
  },
  {
    path: "/login",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
