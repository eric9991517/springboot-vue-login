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
                <el-dropdown-item>
                  <router-link :to="{ name: 'userCenter' }"
                    >個人中心</router-link
                  >
                </el-dropdown-item>
                <el-dropdown-item @click.native="logout">退出</el-dropdown-item>
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
import { ref, onMounted } from "vue";
import axios from "axios";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const userInfo = ref({
  id: "",
  username: "",
  avatar: "",
});

async function getUserInfo() {
  try {
    const response = await axios.get("/sys/userInfo");
    if (response.status === 200) {
      userInfo.value.id = response.data.id;
      userInfo.value.username = response.data.username;
      userInfo.value.avatar = response.data.avatar;
    }
    console.log(userInfo.value.avatar);
  } catch (error) {
    console.error("Error fetching user info:", error);
  }
}

const { commit } = useStore(); // 使用 useStore 获取 store 并解构出 commit 方法
const router = useRouter();

const logout = () => {
  axios.post("/logout").then((res) => {
    localStorage.clear();
    sessionStorage.clear();
    commit("resetState"); // 使用 commit 方法来提交 mutation
    router.push("/login");
  });
};

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
a {
  text-decoration: none;
}
</style>
