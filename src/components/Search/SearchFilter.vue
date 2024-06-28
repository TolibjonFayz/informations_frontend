<template>
  <div v-loading="loading" id="main" class="flex mr-8">
    <div
      id="first"
      class="w-[30%] h-[88vh] ml-10 pt-8 mt-0.5 flex flex-col gap-2"
    >
      <a
        href="/"
        class="text-[15px] cursor-pointer text-[#737373] font-['Montserrat']"
      >
        <i class="fa-solid fa-chevron-left mr-1"></i>Bosh menu
      </a>
      <h1 class="font-['Montserrat'] font-medium text-[20px] mt-2">
        Qidiruv filteri
      </h1>
      <h1 class="font-['Montserrat'] text-[14px] mt-5">Sarlavha</h1>
      <el-input
        v-model="search"
        placeholder="Nima izlayapsiz?"
        style="width: 80%"
      />
      <h1 class="font-['Montserrat'] text-[14px] mt-2">Kategoriya</h1>
      <el-select v-model="value" class="w-[80%]" placeholder="Select">
        <el-option
          v-for="item in categoryStore.categories"
          :key="item.name"
          :label="item.name"
          :value="item.id"
        />
      </el-select>
      <el-button
        id="qidirish"
        type="primary"
        class="font-['Montserrat'] w-[80%] mt-3"
        @click="goSearch()"
        >Qidirish</el-button
      >
    </div>
    <div id="second" class="flex w-[70%] ml-10 mt-7">
      <div id="s-div" v-if="isRight" class="flex flex-col gap-3">
        <h1 class="text-[24px] font-['Montserrat'] font-medium">
          Qidiruv natijalari
        </h1>

        <!-- Blogs -->
        <SearchBlog :data="result" />
      </div>

      <h1 v-else class="font-['Montserrat'] text-[30px]">
        Hozircha hech qanday ma'lumotlar yo'q
      </h1>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { useCategoryStore } from "../../stores/category";
import { useBlogStore } from "../../stores/blog";
import SearchBlog from "../../components/ui/SearchBlog.vue";

const categoryStore = useCategoryStore();
const blogStore = useBlogStore();
const value = ref(""); //Sarlavha
const search = ref(""); //Kategoriya
const isRight = ref(false);
const result = ref(""); //Qidirishni boshganda qaytadiganlar
const loading = ref(false);

const goSearch = async () => {
  loading.value = true;
  const payload = {
    title: search.value,
    category_id: value.value,
  };
  result.value = await blogStore.searchBlogsQuery(payload);
  loading.value = false;
};
watch(result, (value) => {
  if (value == "") isRight.value = false;
  else isRight.value = true;
});
onMounted(async () => {
  loading.value = true;
  result.value = await blogStore.getBlogs();
  await categoryStore.getCategories();
  loading.value = false;
});
</script>

<style lang="scss" scoped>
#second {
  padding-left: 50px;
  margin-left: -30px;
  border-left: 1px solid #999;
}
#blog {
  box-shadow: 2px 2px 2px 2px rgb(212, 212, 212);
}

@media screen and (max-width: 800px) {
  #main {
    flex-direction: column;
  }
  #first {
    width: 95%;
    height: auto;
    align-items: start;
    margin-left: 40px;
    border: none;
  }
  #second {
    width: 95%;
  }
}
</style>
