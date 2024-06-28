<template>
  <div id="main" class="flex flex-col mt-10 ml-10">
    <a
      href="/"
      class="text-[16px] cursor-pointer font-['Montserrat'] text-[#737373]"
    >
      <i class="fa-solid fa-chevron-left mr-1"></i>Bosh menu
    </a>
    <h2 class="text-[20px] mt-3 font-['Montserrat'] font-medium">
      Kategoriyalar
    </h2>
    <div id="div" class="flex w-full flex-wrap justify-between mt-3">
      <Button @click="allBlogs()" class="p-0.5"> Barchasi </Button>
      <Button
        @click="goOn(item.id)"
        v-for="(item, index) in store.categories"
        :key="index"
        class="p-0.5"
      >
        {{ item.name }}
      </Button>
    </div>
  </div>

  <!-- Results -->
  <div id="main" class="mt-10 ml-11 mb-10">
    <div class="flex mr-8 flex-wrap justify-center gap-5">
      <Blog
        v-if="all"
        v-for="(item, index) in blogStore.blogs"
        :key="index"
        :name="item?.title"
        :image="item?.picture[0]?.img_url"
        :id="item.id"
      >
      </Blog>
      <Blog
        v-else
        v-for="(item, index) in blogStore.cat"
        :name="item?.title"
        :image="item?.picture[0]?.img_url"
        :id="item.id"
      >
      </Blog>
    </div>
  </div>
</template>

<script setup>
import Button from "../ui/Button.vue";
import { useCategoryStore } from "../../stores/category";
import { useBlogStore } from "../../stores/blog";
import { onMounted, ref } from "vue";
import Blog from "../ui/Blog.vue";

const store = useCategoryStore();
const blogStore = useBlogStore();

const goOn = async (category_id) => {
  await blogStore.getBlogByCatId(category_id);
  all.value = false;
};

const all = ref(false);
const allBlogs = async () => {
  await blogStore.getBlogs();
  all.value = true;
};
onMounted(async () => {
  await store.getCategories();
});
</script>

<style lang="scss" scoped>
#div {
  margin-left: -18px;
}

@media screen and (max-width: 500px) {
  #main {
    margin-left: 20px;
  }
  #div {
    margin-left: -15px;
  }
}
</style>
