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
  const data = {
    id: "1",
    username: "test",
    avatar:
      "https://img.lovepik.com/free-png/20211105/lovepik-figure-portrait-png-image_400325161_wh1200.png",
  };
  return {
    data,
  };
});
