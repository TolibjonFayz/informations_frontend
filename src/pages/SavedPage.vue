<template>
  <div>
    <SavedHeader />
    <div id="second" class="flex ml-10 w-[95%] mt-7">
      <div id="s-div" v-if="isRight" class="flex flex-col gap-3">
        <SavedBlog :data="store.saves" />
      </div>
      <h1 v-else class="font-['Montserrat'] text-[30px]">
        Saqlangan bloglaringiz mavjud emas
      </h1>
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
import SavedHeader from "../components/Saved/SavedHeader.vue";
import Footer from "../components/Landing/Footer.vue";
import SavedBlog from "../components/ui/SavedBlog.vue";
import { useSavedStore } from "../stores/saved";

const store = useSavedStore();
const isRight = ref(false);
const result = ref("");

watch(result, (value) => {
  if (value == "") isRight.value = false;
  else isRight.value = true;
});

onMounted(async () => {
  const userId = localStorage.getItem("userid");
  result.value = await store.getSavedByUserId(userId);
});
</script>

<style lang="scss" scoped></style>
