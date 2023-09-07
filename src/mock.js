import Mock from "mockjs";
const { Random } = Mock;

Mock.mock("/captcha", "get", () => {
  const data = {
    token: Random.string(32),
    captchaImg: Random.dataImage("120x40", "p7n5w"),
  };
  return {
    code: 200,
    mes: "操作成功",
    data,
  };
});

Mock.mock("/login", "post", () => {
  return {
    code: 400,
    mes: "驗證碼錯誤",
  };
});

Mock.mock("/sys/userInfo", "get", () => {
  return {
    id: "1",
    username: "test",
    avatar:
      "https://img.lovepik.com/free-png/20211105/lovepik-figure-portrait-png-image_400325161_wh1200.png",
  };
});

Mock.mock("/logout", "post", () => {
  return {
    code: 200,
  };
});

Mock.mock("/sys/menu/nav", "get", () => {
  let nav = [
    {
      index: "1",
      title: "系統管理",
      name: "SysManga",
      icon: "House",
      path: "",
      component: "",
      children: [
        {
          index: "1-1",
          name: "SysUser",
          title: "用戶管理",
          icon: "search",
          path: "/sys/users",
          component: "sys/User",
          children: [],
        },
        {
          index: "1-2",
          name: "SysRole",
          title: "角色管理",
          icon: "search",
          path: "/sys/Roles",
          children: [],
        },
      ],
    },
    {
      index: "2",
      title: "工具管理",
      name: "SysTools",
      icon: "House",
      path: "",
      component: "",
      children: [
        {
          index: "2-1",
          name: "SysDict",
          title: "數字字典",
          icon: "search",
          path: "/sys/Dict",
          children: [],
        },
      ],
    },
  ];
  let authoritys = [];
  return {
    data: {
      nav: nav,
      authoritys: authoritys,
    },
  };
});
