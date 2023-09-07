import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store";

import ElementPlus from "element-plus";

import "element-plus/theme-chalk/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue"; // 引入ElementPlus Icon

import axios from "./axios";

import "./mock"; // 引入 mock.js 文件

const app = createApp(App);

//  註冊全部ElementPlus Icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

// 將 Axios 添加到全局屬性
app.config.globalProperties.$axios = axios;

// 注册全局的 router
// app.config.globalProperties.$router = router;

app.use(store);
app.use(router);
app.use(ElementPlus);

// 使用 mount() 來掛載應用程式
app.mount("#app");
