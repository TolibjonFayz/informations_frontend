<template>
  <div id="main" class="w-full h-[102%] flex flex-col items-center mt-20">
    <h1 class="font-['Montserrat'] text-[40px] font-medium mb-10">
      Xush kelibsiz
    </h1>
    <el-form
      label-position="top"
      label-width="100px"
      :model="formLabelAlign"
      class="w-80 font-['Montserrat']"
    >
      <!-- First name -->
      <el-form-item label="Ismingizni kiriting">
        <el-input v-model="formLabelAlign.first_name" placeholder="Eshmat" />
        <el-alert
          v-if="isfirstnameempty"
          title="Ismingizni kiritishingiz zarur"
          type="warning"
        />
      </el-form-item>

      <!-- Last name -->
      <el-form-item label="Familiyangizni kiriting">
        <el-input v-model="formLabelAlign.last_name" placeholder="Toshmatov" />
        <el-alert
          v-if="islastnameempty"
          title="Familiyangizni kiritishingiz zarur"
          type="warning"
        />
      </el-form-item>

      <!-- Email -->
      <el-form-item label="Emailingizni kiriting">
        <el-input
          v-model="formLabelAlign.email"
          placeholder="eshmattoshmatov@gmail.com"
        />
        <el-alert
          v-if="isEmailempty"
          title="Emailingizni kiritishingiz zarur"
          type="warning"
        />
      </el-form-item>

      <!-- Password -->
      <el-form-item label="Maxfiy so'zni kiriting">
        <el-input v-model="formLabelAlign.password" placeholder="qwerty" />
        <el-alert
          v-if="isPasswordempty"
          title="Maxfiy so'zni kiritingiz zarur"
          type="warning"
        />
      </el-form-item>

      <!-- Confirm password -->
      <el-form-item label="Maxfiy so'zni tasdiqlang">
        <el-input
          v-model="formLabelAlign.confirm_password"
          placeholder="qwerty"
        />
        <el-alert
          v-if="isConfirmPasswordempty"
          title="Maxfiy so'zni tasdiqlashingiz zarur"
          type="warning"
        />
        <el-alert
          v-if="isPasswordsEqual"
          title="Maxfiy so'zlar bir xil emas"
          type="warning"
        />
      </el-form-item>
    </el-form>
    <el-button
      id="qidirish2"
      type="primary"
      class="text-black font-['Montserrat'] w-60"
      @click="login()"
      >Ro'yxatdan o'tish</el-button
    >
    <a
      @click="goToLogin()"
      class="text-[12px] font-['Montserrat'] mt-8 cursor-pointer"
    >
      Allaqachon ro'yxatdan o'tganmisiz. Unda hisobingizga kiring.
    </a>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useUserStore } from "../stores/user";
import { ElNotification } from "element-plus";
import router from "../router";

const store = useUserStore();
const formLabelAlign = reactive({
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  confirm_password: "",
  username: "user123",
});
const isfirstnameempty = ref(false);
const islastnameempty = ref(false);
const isPasswordempty = ref(false);
const isConfirmPasswordempty = ref(false);
const isEmailempty = ref(false);
const isPasswordsEqual = ref(false);

const login = async () => {
  if (formLabelAlign.first_name == "") {
    isfirstnameempty.value = true;
  } else if (formLabelAlign.last_name == "") {
    islastnameempty.value = true;
    isfirstnameempty.value = false;
  } else if (formLabelAlign.email == "") {
    isEmailempty.value = true;
    islastnameempty.value = false;
    isfirstnameempty.value = false;
  } else if (formLabelAlign.password == "") {
    isPasswordempty.value = true;
    isEmailempty.value = false;
    islastnameempty.value = false;
    isfirstnameempty.value = false;
  } else if (formLabelAlign.confirm_password == "") {
    isConfirmPasswordempty.value = true;
    isPasswordempty.value = false;
    isEmailempty.value = false;
    islastnameempty.value = false;
    isfirstnameempty.value = false;
  } else if (formLabelAlign.confirm_password != formLabelAlign.password) {
    isPasswordsEqual.value = true;
    isConfirmPasswordempty.value = false;
    isPasswordempty.value = false;
    isEmailempty.value = false;
    islastnameempty.value = false;
    isfirstnameempty.value = false;
  } else {
    isPasswordsEqual.value = false;
    const result = await store.signUpUser(formLabelAlign);
    if (!result) {
      ElNotification({
        title:
          "Ushbu foydalanuvchi allaqachon mavjud yoki boshqa nimadir xato)",
        message: `${result}`,
        type: "error",
      });
    } else {
      ElNotification({
        title: "Muvaffaqiyatli",
        message: "Tizimga muvaffaqiyatli kirdingiz",
        type: "success",
      });
      localStorage.setItem("userid", result.user.id);
      localStorage.setItem("refreshtoken", result.tokens.refreshToken);
      setTimeout(() => {
        router.push("/");
      }, 2000);
    }
  }
};

const goToLogin = () => {
  router.push({ name: "login" });
};
</script>

<style lang="scss" scoped>
.el-alert {
  margin: 5px 0 0;
  padding: 1px;
}
.el-alert:first-child {
  margin: 0;
}
</style>
