<template>
  <el-row class="row-bg" justify="center">
    <el-col :xs="6" :sm="6">
      <h2>歡迎使用管理系統</h2>
      <el-image
        :src="require('@/assets/login.png')"
        style="height: 180px; width: 180px"
      ></el-image>
      <div class="grid-content ep-bg-purple" />
    </el-col>
    <el-col :span="1">
      <el-divider direction="vertical" />
      <div class="grid-content ep-bg-purple-light"
    /></el-col>
    <el-col :xs="6" :sm="6"
      ><div class="grid-content ep-bg-purple" />
      <el-form
        :model="loginForm"
        :rules="rules"
        ref="loginForm"
        label-width="100px"
        class="demo-loginForm"
      >
        <el-form-item label="用戶名" prop="username" style="width: 380px">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密碼" prop="password" style="width: 380px">
          <el-input v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item label="驗證碼" prop="code" style="width: 380px">
          <el-input
            v-model="loginForm.code"
            style="width: 150px; float: left"
          ></el-input>
          <el-image :src="captchaImg" class="captchaImg"></el-image>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('loginForm')"
            >登入</el-button
          >
          <el-button @click="resetForm('loginForm')">清除</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
// import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
        code: "",
        token: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用戶名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密碼", trigger: "blur" }],
        code: [
          { required: true, message: "请输入驗證碼", trigger: "blur" },
          { min: 5, max: 5, message: "長度為 5 個英數字", trigger: "blur" },
        ],
      },
      captchaImg: null,
    };
  },
  methods: {
    submitForm: function (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios
            .post("/login", this.loginForm)
            .then((res) => {
              const jwt = res.headers["authorization"];
              this.$store.commit("SET_TOKEN", jwt);
              this.$router.push("/index");
            })
            .catch((error) => {
              // 处理错误逻辑
              console.error("submit error:", "安安你好");
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    getCaptcha() {
      this.$axios.get("/captcha").then((res) => {
        // console.log('/captcha')
        // console.log(res.data.data.captchaImg)
        this.loginForm.token = res.data.data.token;
        this.captchaImg = res.data.data.captchaImg;
      });
    },
  },
  created() {
    this.getCaptcha();
  },
};
</script>

<style scoped>
.el-row {
  background-color: #fafafa;
  height: 200%;
  display: flex;
  align-items: center;
  text-align: center;
}

.captchaImg {
  float: left;
  margin-left: 10px;
  border-radius: 4px;
}

.el-divider {
  height: 200px;
}
</style>
