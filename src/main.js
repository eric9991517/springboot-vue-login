import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// import { Mock } from 'mockjs'; // 引入 mockjs
// require("./mock")

import ElementPlus from "element-plus";
import { ElIcon, ElMenuItem } from "element-plus";
import "element-plus/theme-chalk/index.css";

// import axios from "axios"
import axios from "./axios";

import "./mock"; // 引入 mock.js 文件

const app = createApp(App);

// 將 Axios 添加到全局屬性
app.config.globalProperties.$axios = axios;

// 注册全局的 router
app.config.globalProperties.$router = router;

app.use(store);
app.use(router);
app.use(ElementPlus);
app.use(ElIcon, ElMenuItem);

// 使用 mount() 來掛載應用程式
app.mount("#app");
