<template>
  <div id="main" class="flex flex-col mt-10 ml-10">
    <h1 class="text-[16px]">
      <i class="fa-solid fa-chevron-left mr-1"></i>Bosh menu
    </h1>
    <h2 class="text-[20px] mt-3 font-['Montserrat'] font-medium">
      Kategoriyalar
    </h2>
    <div id="div" class="flex w-full flex-wrap justify-between mt-3">
      <Button v-for="(item, index) in store.categories" :key="index">
        {{ item.name }}
      </Button>
    </div>
  </div>
</template>

<script setup>
import Button from "../ui/Button.vue";
import { useCategoryStore } from "../../stores/category";
import { onMounted } from "vue";

const store = useCategoryStore();

onMounted(async () => {
  await store.getCategories();
});
</script>

<style lang="scss" scoped>
#div {
  margin-left: -18px;
}
#main {
  h1 {
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
