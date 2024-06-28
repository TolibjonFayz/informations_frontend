<template>
  <div v-loading="loading" id="main" class="mt-10 ml-11 mb-10">
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

const loading = ref(false);
const store = useBlogStore();
const blogs = ref([]);
const props = defineProps({
  id: {
    type: Number,
  },
});

onMounted(async () => {
  loading.value = true;
  blogs.value = await store.getBlogByCatId(props.id);
  loading.value = false;
});
</script>

<style lang="scss" scoped></style>
