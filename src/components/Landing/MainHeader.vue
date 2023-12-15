<template>
  <div class="exe pb-5">
    <div class="flex gap-5 items-center justify-between mt-3">
      <a
        id="main"
        href="/"
        class="text-[32px] font-['Montserrat'] font-medium ml-40"
        >Malumotlar</a
      >
      <div id="div" class="mr-40">
        <el-input v-model="search" placeholder="Olmaxon" class="olmaxon w-60" />
        <el-button id="qidirish" type="warning" class="text-black"
          >Qidirish</el-button
        >
        <el-button
          id="kategory"
          type="warning"
          class="bg-[#BA8D56] text-white border-none"
          >Kategoriyalar</el-button
        >
      </div>
    </div>
    <div class="hidden justify-between items-center ml-5 mr-5 mt-2">
      <el-input v-model="search" placeholder="Olmaxon" class="w-60" />
      <el-button id="qidirish2" type="warning" class="text-black"
        >Qidirish</el-button
      >
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const search = ref("");
</script>

<style lang="scss" scoped>
.exe {
  box-shadow: 1px 2px 3px 0.5px rgb(212, 212, 212);
}
@media screen and (max-width: 1000px) {
  #main {
    font-size: 24px;
    margin-left: 20px;
  }
  #div {
    margin-right: 20px;
  }
  #kategory {
    padding: 8px 12px;
    font-size: 12px;
  }
  #qidirish {
    padding: 8px 12px;
    font-size: 12px;
  }
}

@media screen and (max-width: 600px) {
  #qidirish {
    display: none;
  }
  .olmaxon {
    display: none;
  }
  .hidden {
    display: flex;
  }
}
</style>
