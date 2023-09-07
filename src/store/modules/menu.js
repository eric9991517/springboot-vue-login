// import { Vue } from "vue";
import { createStore } from "vuex";

export default createStore({
  state: {
    menuList: [],
    permList: [],
  },
  mutations: {
    setMenuList(state, menu) {
      state.menuList = menu;
    },
    setPermList(state, perm) {
      state.permList = perm;
    },
  },
  actions: {},
  getters: {
    menuList: (state) => state.menuList,
    permList: (state) => state.permList,
  },
});
