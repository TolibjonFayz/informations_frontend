<template>
  <div id="main" v-if="store.blog">
    <a href="/" class="font-['Montserrat'] text-[30px] m-10 font-medium"
      >Ma'lumotlar</a
    >
    <div
      v-loading="loading"
      id="main-in"
      class="flex flex-col gap-10 items-center"
    >
      <h1 class="text-[50px] font-['Montserrat'] font-medium mt-10">
        {{ store.blog.title }}
      </h1>
      <img
        :src="store.blog?.picture[0].img_url"
        alt="Blog image"
        class="w-[500px] rounded"
      />
      <h2 class="w-[90%] text-[26px]">
        {{ store.blog.body }}
      </h2>
    </div>
  </div>
  <div id="second" class="flex justify-between ml-20 mr-20 mt-10 mb-10">
    <h4 class="font-['Montserrat'] text-[20px]">
      Manba: {{ store.blog.source }}
    </h4>
    <div class="flex gap-10">
      <h5 class="flex gap-2">
        <i class="fa-solid fa-eye mt-1"></i>{{ store.blog.views }}
      </h5>

      <i
        v-if="getCookie(store.blog.title)"
        class="fa-solid fa-bookmark cursor-pointer mt-1"
        @click="deleteCookie(store.blog.title)"
      ></i>
      <i
        v-else
        class="fa-regular fa-bookmark cursor-pointer mt-1"
        @click="setCookie(store.blog.title, store.blog.id)"
      ></i>
    </div>
  </div>
  <a
    href="/"
    class="flex justify-center items-center text-[16px] cursor-pointer font-['Montserrat'] text-[#737373] mb-10"
  >
    <i class="fa-solid fa-chevron-left mr-1"></i>Bosh menu
  </a>
  <Footer />
  <el-dialog
    v-model="dialogVisible"
    title="Ro'yxatdan o'tilmagan"
    width="30%"
    :before-close="handleClose"
  >
    <span
      >Blogni saqlab qo'yishingiz uchun saytdan ro'yxatdan o'tishingiz
      kerak</span
    >
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Bekor qilish</el-button>
        <el-button type="primary" @click="goToSignUp()">
          Ro'yxatdan o'tish
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useBlogStore } from "../stores/blog";
import Footer from "../components/Landing/Footer.vue";
import { useRoute } from "vue-router";
import { useSavedStore } from "../stores/saved";
import { ElMessageBox } from "element-plus";
import router from "../router";

const store = useBlogStore();
const savedStore = useSavedStore();
const route = useRoute();
const dialogVisible = ref(false);

const handleClose = (done) => {
  ElMessageBox.confirm("Bu muloqot oynasini yopmoqchimisiz?")
    .then(() => {
      done();
    })
    .catch((error) => {
      console.log(error);
    });
};

function getCookie(name) {
  const cookieString = document.cookie;
  const cookies = cookieString.split("; ");
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split("=");
    if (cookieName === name || cookieValue == name) {
      return true;
    }
  }
  return false;
}

function deleteCookie(cookieName) {
  document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  location.reload();
}

async function setCookie(name, blog_id) {
  const user_id = localStorage.getItem("userid");
  if (!user_id) {
    dialogVisible.value = true;
  } else {
    const expires = new Date();
    expires.setDate(expires.getDate() + 365);
    document.cookie = `${name}=${name}; expires=${expires.toUTCString()}; path=/`;
    const payload = {
      user_id: Number(user_id),
      blog_id: blog_id,
    };
    await savedStore.createSaved(payload);
    location.reload();
  }
}

const goToSignUp = () => {
  router.push({ name: "signup" });
};

const loading = ref(false);
onMounted(async () => {
  loading.value = true;
  await store.getBlogById(route.params.id);
  loading.value = false;
});
</script>

<style lang="scss" scoped>
@media screen and (max-width: 550px) {
  #main {
    text-align: center;
  }
  #main-in {
    h1 {
      font-size: 36px;
    }
    h2 {
      font-size: 16px;
    }
  }
  #second {
    margin-left: 30px;
    margin-right: 30px;
    h4 {
      font-size: 16px;
    }
  }
}
</style>
