<template>
  <div id="main" class="flex flex-col mt-10 ml-10">
    <a href="/" class="text-[16px] cursor-pointer">
      <i class="fa-solid fa-chevron-left mr-1"></i>Bosh menu
    </a>
    <h2 class="text-[20px] mt-3 font-['Montserrat'] font-medium">
      Kategoriyalar
    </h2>
    <div id="div" class="flex w-full flex-wrap justify-between mt-3">
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
        v-for="(item, index) in blogStore.cat"
        :key="index"
        :name="item?.title"
        :image="item?.picture[0]?.img_url"
      >
      </Blog>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Button from "../ui/Button.vue";
import { useCategoryStore } from "../../stores/category";
import { useBlogStore } from "../../stores/blog";
import { onMounted } from "vue";
import Blog from "../ui/Blog.vue";

const store = useCategoryStore();
const blogStore = useBlogStore();

const goOn = async (category_id) => {
  await blogStore.getBlogByCatId(category_id);
};
onMounted(async () => {
  await store.getCategories();
});
</script>

<style lang="scss" scoped>
#div {
  margin-left: -18px;
}
#main {
  a {
    color: #737373;
  }
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
