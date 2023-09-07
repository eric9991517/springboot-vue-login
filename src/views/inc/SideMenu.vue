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

    <el-sub-menu :index="menu.index" v-for="menu in menuList">
      <template #title>
        <el-icon>
          <component :is="menu.icon"></component>
        </el-icon>
        <span>{{ menu.title }}</span>
      </template>

      <RouterLink :to="item.path" v-for="item in menu.children">
        <el-menu-item :index="item.index">
          <template #title>
            <el-icon>
              <component :is="item.icon"></component>
            </el-icon>
            <span>{{ item.title }}</span>
          </template>
        </el-menu-item>
      </RouterLink>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";

let menuList = ref();

const store = useStore(); // 使用 useStore 來獲取 Vuex store 實例

menuList = computed(() => store.menu.getters.menuList);
</script>

<style scoped>
.el-menu-vertical-demo {
  height: 100%;
  padding-left: 20px;
}
</style>
