<template>
  <div id="main" class="mt-10 ml-11">
    <h1 class="text-[20px] font-medium font-['Montserrat'] mb-5">
      Top 5 Bloglar
    </h1>
    <div v-loading="loading" class="flex mr-8 flex-wrap justify-center gap-5">
      <Blog
        v-for="(item, index) in resultBlogs"
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

const loading = ref(false);
const store = useBlogStore();
const resultBlogs = ref(Array());
const result = (blogs, topblogs) => {
  blogs.forEach((e) => {
    if (topblogs.includes(e.views)) {
      resultBlogs.value.push(e);
    }
  });
};

const topViews = ref(Array());
const sort = (blogs) => {
  let count = ref(0);
  while (count.value < 5) {
    let top = ref(0);
    blogs.forEach((e) => {
      if (top.value < e.views && !topViews.value.includes(e.views)) {
        topViews.value.push(e.views);
      }
    });
    count.value += 1;
  }
  topViews.value = topViews.value.sort((a, b) => b - a).slice(0, 5);
  result(blogs, topViews.value);
};

const blogs5 = ref([]);
onMounted(async () => {
  loading.value = true;
  blogs5.value = await store.getBlogs();
  blogs5.value = sort(blogs5.value);
  loading.value = false;
});
</script>

<style lang="scss" scoped></style>
