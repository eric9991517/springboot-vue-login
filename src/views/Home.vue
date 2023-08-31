<template>
  <el-container>
    <el-aside width="200px">
      <SideMenuVue />
    </el-aside>
    <el-container>
      <el-header>
        <strong>VueAdmin管理系統</strong>
        <div class="header-avatar">
          <el-avatar :size="38" :src="userInfo.avatar" />
          <el-dropdown>
            <span class="el-dropdown-link">
              {{ userInfo.username
              }}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <template #dropdown>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>個人中心</el-dropdown-item>
                <el-dropdown-item>退出</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-header>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import SideMenuVue from "./inc/SideMenu.vue";
import { ref, reactive, onMounted } from "vue";
import axios from "axios";
const userInfo = reactive({
  id: "",
  username: "",
  avatar: "",
});

function getUserInfo() {
  axios.get("/sys/userInfo").then((res) => {
    userInfo = res.data.data;
  });
}

onMounted(() => {
  getUserInfo();
});
</script>

<style scoped>
.el-container {
  padding: 0;
  margin: 0;
  height: 100vh;
  /* flex-grow: 1; */
}
.header-avatar {
  float: right;
  width: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-right: 35px;
  padding-top: 10px;
}

.el-dropdown-link {
  cursor: pointer;
}
.el-header {
  background-color: #17b3a3;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  line-height: 200px;
}

.el-main {
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>
