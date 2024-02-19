<template>
  <div id="main" class="mt-10 ml-11 mb-10">
    <h1 class="text-[20px] font-medium font-['Montserrat'] mb-5">
      Siz uchun tavsiyalar
      <i class="fa-solid fa-fire" style="color: #ffbb00"></i>
    </h1>
    <div v-loading="loading" class="flex mr-8 flex-wrap justify-center gap-5">
      <Blog
        :name="blog2?.title"
        :image="blog2?.picture[0]?.img_url"
        :id="blog2?.id"
      >
      </Blog>
      <Blog
        :name="blog3?.title"
        :image="blog3?.picture[0]?.img_url"
        :id="blog3?.id"
      >
      </Blog>
      <Blog
        :name="blog4?.title"
        :image="blog4?.picture[0]?.img_url"
        :id="blog4?.id"
      >
      </Blog>
      <Blog
        :name="blog5?.title"
        :image="blog5?.picture[0]?.img_url"
        :id="blog5?.id"
      >
      </Blog>
      <Blog
        :name="blog1?.title"
        :image="blog1?.picture[0]?.img_url"
        :id="blog1?.id"
      >
      </Blog>
    </div>
  </div>
</template>

<script setup>
import Blog from "../ui/Blog.vue";
import { useBlogStore } from "../../stores/blog";
import { onMounted, ref } from "vue";

const loading = ref(false);
const store = useBlogStore();
const blog1 = ref();
const blog2 = ref();
const blog3 = ref();
const blog4 = ref();
const blog5 = ref();

onMounted(async () => {
  loading.value = true;
  blog1.value = await store.getBlogById(1);
  blog2.value = await store.getBlogById(2);
  blog3.value = await store.getBlogById(3);
  blog4.value = await store.getBlogById(4);
  blog5.value = await store.getBlogById(5);
  loading.value = false;
});
</script>

<style lang="scss" scoped></style>
