<template>
  <div>
    <MainHeader />
    <div v-loading="loading" id="second" class="`ml-10 w-[95%] mt-7">
      <div id="s-div" v-if="isRight" class="flex flex-col gap-3">
        <SavedBlog :data="store.saves" />
      </div>
      <div v-else class="flex justify-center items-center">
        <el-empty description="Saqlangan bloglaringiz yo'q" />
      </div>
    </div>
    <a
      href="/"
      class="flex justify-center items-center text-[16px] cursor-pointer font-['Montserrat'] text-[#737373] mt-10 mb-10"
    >
      <i class="fa-solid fa-chevron-left mr-1"></i>Bosh menu
    </a>
    <Footer />
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import MainHeader from "../components/Landing/MainHeader.vue";
import Footer from "../components/Landing/Footer.vue";
import SavedBlog from "../components/ui/SavedBlog.vue";
import { useSavedStore } from "../stores/saved";

const loading = ref(false);
const store = useSavedStore();
const isRight = ref(false);
const result = ref("");

watch(result, (value) => {
  if (value == "") isRight.value = false;
  else isRight.value = true;
});

onMounted(async () => {
  loading.value = true;
  const userId = localStorage.getItem("userid");
  result.value = await store.getSavedByUserId(userId);
  loading.value = false;
});
</script>

<style lang="scss" scoped></style>
