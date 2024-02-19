<template>
  <div id="main" class="flex f justify-around mb-14">
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
