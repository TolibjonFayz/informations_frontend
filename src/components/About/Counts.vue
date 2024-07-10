<template>
  <div id="main" class="flex flex-col mb-14">
    <div class="flex flex-col ml-20 gap-5">
      <h1 class="font-['Montserrat'] text-[#8a8a8a] text-[20px] mt-10">
        <i class="fa-solid fa-globe mr-2"></i>Toshkent, Uzbekistan
      </h1>
      <h2 class="font-['Montserrat'] text-[18px]">
        Bizning saytimizda siz tabiat, fan, tarix va filmlar kabi turli
        mavzulardagi maqolalarimiz haqida ko'proq ma'lumot olishingiz mumkin.
        O'rganing va zavqlaning!
      </h2>
    </div>
    <div class="flex justify-center">
      <img src="../../assets/mainlogo.png" alt="Main logo" />
    </div>
    <el-row v-loading="loading" class="font-['Montserrat']">
      <el-col :span="6">
        <el-statistic
          title="Chop etilgan bloglar
"
          :value="blogcounter"
        />
      </el-col>
      <el-col :span="6">
        <el-statistic
          title="Oylik tajriba
"
          :value="3"
        />
      </el-col>
      <el-col :span="6">
        <el-statistic
          title="Barcha vaqt o'qishlar soni
"
          :value="viewscounter"
        />
      </el-col>
      <el-col :span="6">
        <el-statistic
          title="Mamnun o'quvchilar
"
          :value="userCounter"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useBlogStore } from "../../stores/blog";
import { useUserStore } from "../../stores/user";

const loading = ref(false);
const store = useBlogStore();
const userStore = useUserStore();
const viewscounter = ref(0);
const blogcounter = ref(0);
const userCounter = ref(0);

onMounted(async () => {
  loading.value = true;
  const blogs = await store.getBlogs();
  const users = await userStore.getAllUsers();

  blogs.forEach((e) => {
    viewscounter.value += e.views;
    blogcounter.value += 1;
  });

  users.forEach((e) => {
    userCounter.value += 1;
  });
  loading.value = false;
});
</script>

<style lang="scss" scoped>
.el-col {
  text-align: center;
}
#main {
  h1 {
    font-size: 48px;
    font-family: "Montserrat";
    h2 {
      font-size: 20px;
      color: #393939;
    }
  }
}

@media screen and (max-width: 550px) {
  #main {
    h1 {
      font-size: 35px;
      font-family: "Montserrat";
      h2 {
        font-size: 18px;
        color: #393939;
      }
    }
  }
}
</style>
