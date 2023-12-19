<template>
  <div
    id="main"
    class="flex justify-around items-center text-center flex-wrap mb-14"
  >
    <h1 class="p-5">
      {{ blogcounter }}+
      <h2>Chop etilgan bloglar</h2>
    </h1>

    <h1 class="p-5">
      1
      <h2>Oylik tajriba</h2>
    </h1>

    <h1 class="p-5">
      {{ viewscounter }}+
      <h2>Barcha vaqt o'qishlar soni</h2>
    </h1>

    <h1 class="p-5">
      {{ userCounter }}+
      <h2>Mamnun o'quvchilar</h2>
    </h1>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useBlogStore } from "../../stores/blog";
import { useUserStore } from "../../stores/user";

const store = useBlogStore();
const userStore = useUserStore();
const viewscounter = ref(0);
const blogcounter = ref(0);
const userCounter = ref(0);

onMounted(async () => {
  const blogs = await store.getBlogs();
  const users = await userStore.getAllUsers();

  blogs.forEach((e) => {
    viewscounter.value += e.views;
    blogcounter.value += 1;
  });

  users.forEach((e) => {
    userCounter.value += 1;
  });
});
</script>

<style lang="scss" scoped>
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
