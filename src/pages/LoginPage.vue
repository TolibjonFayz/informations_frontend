<template>
  <div id="main" class="w-full h-[102%] flex flex-col items-center mt-36">
    <h1 class="font-['Montserrat'] text-[40px] font-medium mb-10">
      Ma'lumotlar
    </h1>
    <el-form
      label-position="top"
      label-width="100px"
      :model="formLabelAlign"
      class="w-80 font-['Montserrat']"
    >
      <el-form-item label="Emailingizni kiriting">
        <el-input
          v-model="formLabelAlign.email"
          placeholder="falonchi@gmial.com"
        />
        <el-alert
          v-if="isemailempty"
          title="Emailni kiritingiz zarur"
          type="warning"
        />
      </el-form-item>
      <el-form-item label="Maxfiy so'zni kiriting">
        <el-input v-model="formLabelAlign.password" placeholder="qwerty" />
        <el-alert
          v-if="isPasswordempty"
          title="Maxfiy so'zni kiritingiz zarur"
          type="warning"
        />
      </el-form-item>
      <el-alert
        v-if="isWrong"
        title="Email yoki maxfiy so'z xato"
        type="error"
      />
    </el-form>
    <a href="#" class="font-['Montserrat'] text-[12px] ml-12 mt-1"
      >Maxfiy so'zingizni unutdingizmi, qata tiklang</a
    >
    <el-checkbox
      label="Shartlar va Maxfiylik siyosatimizga rozilik bildirasizmi."
      size="small"
      class="mt-5"
      id="checkbox"
    />
    <el-button
      id="qidirish2"
      type="primary"
      class="text-black font-['Montserrat'] w-60"
      @click="login()"
      >Tizimga kirish</el-button
    >
    <a
      @click="goToSignUp()"
      class="text-[12px] font-['Montserrat'] mt-8 cursor-pointer"
    >
      Hisobingiz yo'qmi? Hoziroq roʻyxatdan oʻting!
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
  email: "",
  password: "",
});
const isemailempty = ref(false);
const isPasswordempty = ref(false);
const isWrong = ref(false);

const login = async () => {
  if (formLabelAlign.email == "") {
    isemailempty.value = true;
  } else if (formLabelAlign.password == "") {
    isemailempty.value = false;
    isPasswordempty.value = true;
  } else {
    isemailempty.value = false;
    isPasswordempty.value = false;
    const result = await store.logInUser(formLabelAlign);
    if (!result) {
      isWrong.value = true;
      ElNotification({
        title: "Email yoki maxfiy so'z xato",
        message: "Unda tizimdan ro'yxatdan o'ting",
        type: "error",
      });
      formLabelAlign.email = "";
      formLabelAlign.password = "";
    } else {
      isWrong.value = false;
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

const goToSignUp = () => {
  router.push({ name: "signup" });
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
@media screen and (max-width: 550px) {
  #checkbox {
    width: 10%;
    margin-left: 50px;
  }
}
</style>
