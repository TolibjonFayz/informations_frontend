<template>
  <div id="main" class="mt-10 ml-11 mb-10">
    <h1 class="text-[20px] font-medium font-['Montserrat'] mb-5">
      Siz uchun tavsiyalar
      <i class="fa-solid fa-fire" style="color: #ffbb00"></i>
    </h1>
    <div class="flex mr-8 flex-wrap justify-center gap-5">
      <Blog
        v-for="(item, index) in store.blogs"
        :key="index"
        :name="item?.title"
        :image="item?.picture[0]?.img_url"
        :id="item.id"
      >
      </Blog>
    </div>
  </div>
</template>

<script setup>
import Blog from "../ui/Blog.vue";
import { useBlogStore } from "../../stores/blog";
import { onMounted, ref } from "vue";

const store = useBlogStore();

const sort = (blogs) => {
  const a = blogs.splice(1, 2);
  return a;
};
const blogs5 = ref([]);
onMounted(async () => {
  blogs5.value = await store.getBlogs();
  blogs5.value = sort(blogs5.value);
});
</script>

<style lang="scss" scoped></style>
