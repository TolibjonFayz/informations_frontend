<template>
  <div class="main mt-40 mb-5 flex flex-col items-center text-center gap-10">
    <div class="texts">
      <h1 class="font-['Montserrat'] text-[42px] font-medium">
        O'zingizga kerakli bloglarni saqlab qo'ying
      </h1>
      <h2 class="font-['Montserrat'] text-[20px]">
        Saqlab olgan bloglaringizni ko'ring 👇
      </h2>
      <el-button
        @click="pusher()"
        type="primary"
        class="text-black font-['Montserrat'] mt-2"
        >Saqlanganlar</el-button
      >
    </div>
    <img src="../../assets/yangibook.jpg" alt="Books" class="w-80 rounded" />
  </div>
</template>

<script setup>
import router from "../../router/index.js";

const pusher = () => {
  router.push({ name: "saved" });
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 500px) {
  .texts {
    h1 {
      font-size: 30px;
    }
    h2 {
      font-size: 15px;
    }
  }
}
</style>
