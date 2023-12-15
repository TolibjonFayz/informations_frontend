<template>
  <div class="exe pb-5">
    <div class="flex gap-5 items-center justify-between mt-3">
      <a
        id="main"
        href="/"
        class="text-[32px] font-['Montserrat'] font-medium ml-40"
        >Ma'lumotlar</a
      >
      <div id="div" class="mr-40 flex">
        <el-input
          v-model="search"
          placeholder="Nima haqida malumot izlayapsiz?"
          class="olmaxon"
        />
        <el-button id="qidirish" type="primary" class="font-['Montserrat']"
          >Qidirish</el-button
        >
        <el-button
          id="kategory"
          type="primary"
          class="text-white border-none font-['Montserrat']"
          >Kategoriyalar</el-button
        >
      </div>
    </div>
    <div class="hidden justify-between items-center ml-5 mr-5 mt-2">
      <el-input
        v-model="search"
        placeholder="Nima haqida malumot izlayapsiz?"
        class="w-60"
      />
      <el-button
        id="qidirish2"
        type="primary"
        class="text-black font-['Montserrat']"
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
.olmaxon {
  width: 250px;
}
#qidirish2 {
  padding: 8px 12px;
  font-size: 12px;
}
#qidirish {
  border: none;
}
#kategory {
  border: none;
}
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
