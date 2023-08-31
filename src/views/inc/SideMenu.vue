<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    class="el-menu-vertical-demo"
    default-active="0"
    text-color="#fff"
  >
    <RouterLink to="/index">
      <el-menu-item index="0">
        <template #title>
          <el-icon><House /></el-icon>
          <span> 首頁 </span>
        </template>
      </el-menu-item>
    </RouterLink>

    <el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>系統管理</span>
      </template>

      <RouterLink to="/users">
        <el-menu-item index="1-1">
          <template #title>
            <el-icon><search /></el-icon>
            <span> 用戶管理 </span>
          </template>
        </el-menu-item>
      </RouterLink>

      <RouterLink to="/roles">
        <el-menu-item index="1-2">
          <template #title>
            <el-icon><User /></el-icon>
            <span> 角色管理 </span>
          </template>
        </el-menu-item>
      </RouterLink>

      <RouterLink to="/menus">
        <el-menu-item index="1-3">
          <template #title>
            <el-icon><Cloudy /></el-icon>
            <span> 菜單管理 </span>
          </template>
        </el-menu-item>
      </RouterLink>
    </el-sub-menu>

    <el-sub-menu index="2">
      <template #title>
        <el-icon><location /></el-icon>
        <span>系統工具</span>
      </template>
    </el-sub-menu>
  </el-menu>
</template>

<script>
export default {};
</script>

<style scoped>
.el-menu-vertical-demo {
  height: 100%;
  padding-left: 20px;
}
</style>
