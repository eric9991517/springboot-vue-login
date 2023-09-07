<template>
  <div style="...">
    <h2>Hello!! {{ userInfo.username }} 同學</h2>

    <el-form
      :model="passForm"
      status-icon
      :rules="rules"
      ref="passForm"
      label-width="100px"
    >
      <el-form-item label="舊密碼" prop="currentPass">
        <el-input
          type="password"
          v-model="passForm.currentPass"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="新密碼" prop="password">
        <el-input
          type="password"
          v-model="passForm.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="確認密碼" prop="checkPass">
        <el-input
          type="password"
          v-model="passForm.checkPass"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('passForm')"
          >提交</el-button
        >
        <el-button @click="resetForm('passForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const validatePass = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("請再次輸入密碼"));
  } else if (value !== passForm.password) {
    callback(new Error("兩次密碼輸入不一致"));
  } else {
    callback();
  }
};

const userInfo = ref({
  id: null,
  username: "",
  avatar: "",
});

const passForm = ref({
  password: "",
  checkPass: "",
  currentPass: "",
});

const rules = ref({
  password: [
    { required: true, message: "請輸入新密碼", trigger: "blur" },
    { min: 6, mix: 12, message: "長度在6到12個字之間", trigger: "blur" },
  ],
  checkPass: [{ required: true, validator: validatePass, trigger: "blur" }],
  currentPass: [{ require: true, message: "請輸入當前密碼", trigger: "blur" }],
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

const submitForm = (formName) => {
  $refs[formName].validate((valid) => {
    if (valid) {
      axios.post("/sys/user/updataPass", passForm).then((res) => {
        $alert(res.data.msg, "提示", {
          comfirmButtonText: "確定",
          callback: (action) => {
            $refs[formName].resetFields();
          },
        });
      });
    } else {
      console.log("error submit");
      return false;
    }
  });
};

// created(() => {
//   getUserInfo();
// });
</script>
