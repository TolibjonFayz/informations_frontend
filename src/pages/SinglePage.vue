<template>
  <div v-if="store.blog">
    <a href="/" class="font-['Montserrat'] text-[30px] m-10 font-medium"
      >Ma'lumotlar</a
    >
    <div id="main" class="flex flex-col gap-10 items-center">
      <h1 class="text-[50px] font-['Montserrat'] font-medium mt-10">
        {{ store.blog.title }}
      </h1>
      <img
        :src="store.blog?.picture[0].img_url"
        alt="Blog image"
        class="w-[500px] rounded"
      />
      <h1 class="w-[90%] text-[26px]">
        {{ store.blog.body }}
      </h1>
    </div>
  </div>
  <div class="flex justify-between ml-20 mr-20 mt-10 mb-10">
    <h4 class="font-['Montserrat'] text-[20px]">
      Manba: {{ store.blog.source }}
    </h4>
    <i class="fa-regular fa-bookmark cursor-pointer"></i>
  </div>
  <Footer />
</template>

<script setup>
import { onMounted } from "vue";
import { useBlogStore } from "../stores/blog";
import Footer from "../components/Landing/Footer.vue";
import { useRoute } from "vue-router";
const route = useRoute();

const store = useBlogStore();
onMounted(async () => {
  await store.getBlogById(route.params.id);
});
</script>

<style lang="scss" scoped></style>
