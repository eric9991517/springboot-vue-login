<template>
  <el-container>
    <el-aside width="200px">
      <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>系統管理 </span>
          </template>

          <el-menu-item index="1-1">
            <template #title>
              <el-icon><el-icon-search /></el-icon>
              <span> 用戶管理 </span>
            </template>
          </el-menu-item>

          <el-menu-item index="1-2">
            <template #title>
              <el-icon><Cloudy /></el-icon>
              <span> 角色管理 </span>
            </template>
          </el-menu-item>

          <el-menu-item index="1-3">
            <template #title>
              <span> 菜單管理 </span>
            </template>
          </el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <strong>VueAdmin管理系統</strong>
        <div class="header-avatar">
          <el-avatar
            :size="38"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          />
          <el-dropdown>
            <span class="el-dropdown-link">
              Admin<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>個人中心</el-dropdown-item>
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";
import { ElIcon, ElMenuItem } from "element-plus";
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

.el-menu-vertical-demo {
  height: 100%;
}
</style>
