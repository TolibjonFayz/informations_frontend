<template>
  <div id="main" class="flex justify-between p-5">
    <div id="first" class="ml-16">
      <a href="/" class="text-[20px] font-['Montserrat'] font-medium"
        >Malumotlarr.uz</a
      >
      <h5 class="text-[14px] font-['Montserrat']">Ma'lumotlar ombori!</h5>
      <h3 class="text-[14px] font-['Montserrat'] mt-8">
        Tolibjon Fayzullayev - © 2024 - Barcha huquqlar himoyalangan
      </h3>
    </div>

    <div id="second" class="mr-16 flex flex-col items-end">
      <h1
        @click="pusher()"
        class="text-[14px] font-['Montserrat'] font-medium cursor-pointer"
      >
        Biz haqimizda
      </h1>
      <h3 class="text-[14px] font-['Montserrat'] mt-10">
        Biz bilan bog'lanish
      </h3>
      <h3 class="text-[14px] font-['Montserrat']">+998 90 111 ** **</h3>
    </div>
  </div>
</template>

<script setup>
import router from "../../router/index.js";
const pusher = () => {
  router.push({ name: "about" });
};
</script>

<style lang="scss" scoped>
#main {
  background-color: #f9fafb;
}
@media screen and (max-width: 500px) {
  #first {
    margin-left: 5px;
    h3 {
      font-size: 10px;
    }
  }
  #second {
    margin-right: 5px;
    h3 {
      font-size: 10px;
    }
  }
}
</style>
